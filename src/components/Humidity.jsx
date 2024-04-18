import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { WiHumidity } from "react-icons/wi";

const Humidity = ({ humidity }) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <WiHumidity />
        <div>
          <span>HUMIDITY</span>
        </div>
      </div>
      <span className={styles.text_value}>{humidity}%</span>
      <span className={styles.text_discription}>Discription</span>
    </div>
  );
};

export default Humidity;
