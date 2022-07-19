import React, { useRef } from "react";
import "../style/einstellungen.css";
import Kopf from "../components/Header/Kopf";
import WhiteBubble from "../components/whitebubble/whitebubble";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStore";
import { ReactNotifications, Store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";


function Einstellungen() {
  const [comments, setComments] = useLocalStorage("rolle", ["Studierende"]);
  const inputRef = useRef(); //input auslesen

  const addComent = () => {
    // button zum speichern (funktion)
    let comment = inputRef.current.value;
    setComments([comment]);


      Store.addNotification({
        title: "Neue Rolle!",
        message: "Du hast nun die Rolle: " + inputRef.current.value,
        type: "info",
        container: "top-center",
        insert: "bottom",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
    
        dismiss: {
          duration: 2000,
          showIcon: true,
        },
        width: 600,
      });

  };

  /* Video Explanatio - https://youtu.be/-0VuZEYIYuI */
  document.querySelectorAll(".custom-select").forEach(setupSelector);

  function setupSelector(selector) {
    selector.addEventListener("change", (e) => {
      console.log("changed", e.target.value);
    });

    selector.addEventListener("mousedown", (e) => {
      if (window.innerWidth >= 420) {
        // override look for non mobile
        e.preventDefault();

        const select = selector.children[0];
        const dropDown = document.createElement("ul");
        dropDown.className = "selector-options";

        [...select.children].forEach((option) => {
          const dropDownOption = document.createElement("li");
          dropDownOption.textContent = option.textContent;

          dropDownOption.addEventListener("mousedown", (e) => {
            e.stopPropagation();
            select.value = option.value;
            selector.value = option.value;
            select.dispatchEvent(new Event("change"));
            selector.dispatchEvent(new Event("change"));
            dropDown.remove();
          });

          dropDown.appendChild(dropDownOption);
        });

        selector.appendChild(dropDown);

        // handle click out
        document.addEventListener("click", (e) => {
          if (!selector.contains(e.target)) {
            dropDown.remove();
          }
        });
      }
    });
  }

  return (
    <div className="Bodyeinstellungen">
      <ReactNotifications />
      <Kopf>Einstellungen</Kopf>
      <div className="Bubbleeinstellungen">
        {comments.map((c) => (
          <div className="Info">Du hast {c} ausgewählt</div>
        ))}
        <Link
          to="/berlin"
          style={{ color: "Black", textDecorationLine: "none" }}
        >
          <WhiteBubble>
            <i className="fas fa-home" /> Startseite
          </WhiteBubble>
        </Link>
        <Link
          to="/mensaliste"
          style={{ color: "Black", textDecorationLine: "none" }}
        >
          <WhiteBubble>
            <i className="fas fa-list" /> Mensaliste
          </WhiteBubble>
        </Link>
        <Link
          to="/karte"
          style={{ color: "Black", textDecorationLine: "none" }}
        >
          <WhiteBubble>
            <i className="fas fa-map-marked-alt" /> Karte
          </WhiteBubble>
        </Link>
        <Link
          to="/berlin"
          style={{ color: "Black", textDecorationLine: "none" }}
        ></Link>
        <label class="custom-select">
          <select name="sample" ref={inputRef}>
            <option value="Studierende">Studierende</option>
            <option value="Angestellte">Angestellte</option>
            <option value="Gäste">Gäste</option>
          </select>
        </label>
        <button className="Btnspeichern" onClick={addComent}>
          SPEICHERN
        </button>
      </div>
    </div>
  );
}

export default Einstellungen;
