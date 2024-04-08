import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { TbUvIndex } from "react-icons/tb";
const UvIndex = () => {
  return (
    <div>
      <div className={styles.uv_index}>
        <div className={styles.title}>
          <TbUvIndex />
          <div>
            <span>UV INDEX</span>
          </div>
        </div>
        <div className={styles.text_value}>3</div>
        <div className={styles.text_discription}>Moderate</div>

        <input type="range" className={styles.range} />
        <span className={styles.text_discription}>Use sun...</span>
      </div>
    </div>
  );
};

export default UvIndex;
