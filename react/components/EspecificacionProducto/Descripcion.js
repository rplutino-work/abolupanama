import React from "react";
import styles from "./main.css";

function Descripcion({ descripcion }) {
  return (
    <div className={`${styles["description-composition-content"]}`}>
      <p className={styles["description-composition-content-text"]}>{descripcion}</p>
    </div>
  );
}

export default Descripcion;
