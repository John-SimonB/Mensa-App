import React from "react";
import "./Kopf.css";

export const Kopf = ({ children }) => {
  return (
    <div className="Kopf">
      <div className="Bild"/>
      <div className="Grau"/>
        <div className="Überschrift">
          <h1>{children}</h1>
        </div>
    </div>
  );
};

export default Kopf;
