import React from "react";
import { ReactNotifications, Store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

function MyNotify() {
  return (
    <div>
      <div className="text" style={{color: "red", fontSize: "5vh", backgroundColor:"#DCC3AA"}}>
      <h3>bala</h3>
      </div>
    </div>
  );
}

const handleOnClickDefault = () => {
  Store.addNotification({
    title: "Speiseplan",
    message: "Der neue Speiseplan ist online!",
    type: "success",
    container: "top-right",
    insert: "top",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],

    dismiss: {
      duration: 2000,
      showIcon: true,
    },
    width: 600,
  });
};

const noti = () => {
  Store.addNotification({
    content: MyNotify,
    type: "success",
    container: "top-right",
    insert: "top",
    animationIn: ["animated", "b"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      showIcon: true,
    },
  });
};

function Testjohn() {
  var d = new Date();

  function datechange(change) {
    d.setDate(d.getDate() + change);

    var displaytodaysdate =
      d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    document.getElementById("date").innerHTML = displaytodaysdate;
  }

  return (
    <div>
      <div id="date"></div>
      <button onClick={() => datechange(1)}>Tag +1</button>
      <button onClick={() => datechange(-1)}>Tag -1</button>
      <ReactNotifications />

      <button onClick={handleOnClickDefault}>HALLO</button>
      <button onClick={noti}>eigene</button>
    </div>
  );
}

export default Testjohn;
