import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { IoWaterOutline } from "react-icons/io5";

const Precipitation = ({ precipitation }) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <IoWaterOutline />
        <div>
          <span>PRECIPITATION</span>
        </div>
      </div>
      <span className={styles.text_value}>{precipitation}</span>
      <span className={styles.text_value_2}>in last 3h</span>
      <span className={styles.text_discription}>Lorem ipsum </span>
    </div>
  );
};

export default Precipitation;
