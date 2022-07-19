import React from "react";
import { useParams } from "react-router-dom";
import Kopf from "../components/Header/Kopf";
import "../style/speiseplan.css";
import useLocalStorage from "../hooks/useLocalStore";

function Speiseplan() {
  const [comments] = useLocalStorage("rolle", ["Studierende"]);

  var Auswahl = comments[0];

  // ID aus dem Link abfragen
  let { uniId } = useParams();


  var d = new Date();
  var tage = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  var divArray = [
    "Vorspeisen",
    "Salate",
    "Suppen",
    "Essen",
    "Beilagen",
    "Desserts"
  ];

  //FETCH mit Datumswahl
  function datechange(change) {
    document.getElementById("info").style.display = "none";
    d.setDate(d.getDate() + change);
    if (change === 0) {
      d = new Date();
    }
    var displaytodaysdate =
      d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    document.getElementById("date").innerHTML =
      tage[d.getDay()] + ", " + displaytodaysdate;

    fetch(
      "https://openmensa.org/api/v2/canteens/" + uniId + "/days/" +
        d.getDate() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getFullYear() +
        "/meals"
    )
      .then((response) => {
        if (!response.ok) {
          document.getElementById("date").style.display = "none";
          document.getElementById("speiseplan").style.display = "none";
          document.getElementById("Error").style.display = "unset";
          document.getElementById("Error").innerHTML =
            "Die Mensa bzw der Speiseplan wurde nicht für den: " +
            tage[d.getDay()] +
            ", " +
            displaytodaysdate +
            "  gefunden";
          // return;
          throw Error(
            "Fehler, es konnte keine Verbindung zur API hergestellt werden."
          );
        } else {
          document.getElementById("Error").style.display = "none";
          document.getElementById("date").style.display = "unset";
          document.getElementById("speiseplan").style.display = "unset";
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          document.getElementById("date").style.display = "none";
          document.getElementById("speiseplan").style.display = "none";
          document.getElementById("Error").style.display = "unset";
        }else{

          const potsdam=data.map((meals)=>{
            if(!divArray.includes(meals.category)){
              var Preis = 0;
                if (Auswahl === "Studierende") {
                  Preis = meals.prices.students;
                  if (meals.prices.students === null) {
                    Preis = 0;
                  }
                } else if (Auswahl === "Angestellte") {
                  Preis = meals.prices.employees;
                  if (meals.prices.employees === null) {
                    Preis = 0;
                  }
                } else {
                  Preis = meals.prices.others;
                  if (meals.prices.others === null) {
                    Preis = 0;
                  }
                }
                return `
            <div class="meals">
            <div class=gericht>
            <p>${meals.name}</p>
            </div>
            <div class="preis">
            <p>${Preis}€</p>
            </div>
            <div class="notes">
            <p>${meals.notes[1]}</p>
            </div>
            </div>`;
             
           
              
            } else return "";
            
          })
          .join("");
          
          divArray.forEach((element) => {
            const html = data
              .map((meals) => {
                
                var Preis = 0;
                if (meals.category === element) {
                  if (Auswahl === "Studierende") {
                    Preis = meals.prices.students;
                    if (meals.prices.students === null) {
                      Preis = 0;
                    }
                  } else if (Auswahl === "Angestellte") {
                    Preis = meals.prices.employees;
                    if (meals.prices.employees === null) {
                      Preis = 0;
                    }
                  } else {
                    Preis = meals.prices.others;
                    if (meals.prices.others === null) {
                      Preis = 0;
                    }
                  }
                  return `
              <div class="meals">
              <div class=gericht>
              <p>${meals.name}</p>
              </div>
              <div class="preis">
              <p>${Preis}€</p>
              </div>
              <div class="notes">
              <p>${meals.notes[1]}</p>
              </div>
              </div>`;
                } else return "";
              })
              .join("");
            //   console.log(html)
  
            if(html.length>potsdam.length){
              document.getElementById(element).innerHTML=html
            }else{
              document.getElementById("Essen").innerHTML=potsdam}
            /*document
              .querySelector("#" + element)
              .insertAdjacentHTML("afterend", html);*/
          });
        }})
        .catch((error) => {
          console.log(error);
        });
    }
  
  return (
    <div className="BodySpeiseplan">
      <Kopf>Speiseplan</Kopf>
      <br />
      <div className="Block">
      <div className="holz"/>
      <div className="buttonsdate">
        <button className="change" onClick={() => datechange(-1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="heute" onClick={() => datechange(0)}>
          Heute
        </button>
        <button className="change" onClick={() => datechange(1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
      <div className="GanzerPlan">
      <div id="date" className="datum" style={{padding: "20px"}}/>
      <div id="date" className="datum" />
      </div>
      <div id="Error" className="Fehler"/>
      </div>
      <div className="TestDiv">
      <div id="speiseplan" style={{top:"0vh", paddingBottom: "4vh"}}>
        <div className="hintergrundgrau" style={{ backgroundColor: "#C8C8C8",  width: "90%", marginLeft: "5%", borderRadius: "20px", textAlign: "left", fontSize:"2.5vh"}}>
          Vorspeisen
          <div id="Vorspeisen" style={{fontSize: "2.5vh", textAlign:"start", marginLeft: "20px"}}/>
        </div>
        <div className="hintergrundgrau" style={{ backgroundColor: "#C8C8C8",  width: "90%", marginLeft: "5%", borderRadius: "20px", textAlign: "left", fontSize:"2.5vh"}}>
        Salate
        <div id="Salate" style={{fontSize: "2.5vh", textAlign:"start", marginLeft: "20px"}}/>
        </div>
        <div className="hintergrundgrau" style={{ backgroundColor: "#C8C8C8",  width: "90%", marginLeft: "5%", borderRadius: "20px", textAlign: "left", fontSize:"2.5vh"}}>
        Suppen
        <div id="Suppen" style={{fontSize: "2.5vh", textAlign:"start", marginLeft: "20px"}}/>
        </div>
        <div className="hintergrundgrau" style={{ backgroundColor: "#C8C8C8",  width: "90%", marginLeft: "5%", borderRadius: "20px", textAlign: "left", fontSize:"2.5vh"}}>
        Hauptspeise
        <div id="Essen"style={{fontSize: "2.5vh", textAlign:"start", marginLeft: "20px"}}/>
        </div>
        <div className="hintergrundgrau" style={{ backgroundColor: "#C8C8C8",  width: "90%", marginLeft: "5%", borderRadius: "20px", textAlign: "left", fontSize:"2.5vh"}}>
        Beilagen
        <div id="Beilagen" style={{fontSize: "2.5vh", textAlign:"start", marginLeft: "20px"}}/>
        </div>
        <div className="hintergrundgrau" style={{ backgroundColor: "#C8C8C8",  width: "90%", marginLeft: "5%", borderRadius: "20px", textAlign: "left", fontSize:"2.5vh"}}>
        Desserts
        <div id="Desserts" style={{fontSize: "2.5vh", textAlign:"start", marginLeft: "20px"}}/>
        </div>
      </div>
      <div id="info" style={{ width:"100%",fontSize: "2.8vh", marginTop: "-25vh", backgroundColor: "#e5e5e5", height:"350px", position: "absolute", zIndex: "99"}}>
        Klicke auf "Heute" um den aktuellen Speiseplan einzusehen
      </div>
      </div>
    </div>
  );
}

export default Speiseplan;
