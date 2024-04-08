import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { IoWaterOutline } from "react-icons/io5";

const Precipitation = () => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <IoWaterOutline />
        <div>
          <span>PRECIPITATION</span>
        </div>
      </div>
      <span className={styles.text_value}>2.3''</span>
      <span className={styles.text_value_2}>in last 24h</span>
      <span className={styles.text_discription}>Lorem ipsum dolor sit </span>
    </div>
  );
};

export default Precipitation;
