import React from "react";

import styles from "../styles/WeatherApp.module.css";
import { CiTempHigh } from "react-icons/ci";

const Feeling = () => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <div>
          <CiTempHigh />
        </div>
        <div>
          <span>FEELS LIKE</span>
        </div>
      </div>

      <span className={styles.text_value}>30</span>
      <span className={styles.text_discription}>Discription</span>
    </div>
  );
};

export default Feeling;
