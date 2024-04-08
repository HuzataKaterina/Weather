import React from "react";
import Feeling from "./Feeling";
import Precipitation from "./Precipitation";
import Visibility from "./Visibility";
import Humidity from "./Humidity";

import styles from "../styles/WeatherApp.module.css";

const CurrentWeather = () => {
  return (
    <div className={styles.container_curWeather}>
      <div className={styles.container_temp}>
        <div className={styles.textTemp}>28°</div>
        <span className={styles.temp_discription}>Rainy</span>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      <div className={styles.container_details}>
        <Feeling />
        <Precipitation />
        <Visibility />
        <Humidity />
      </div>
    </div>
  );
};

export default CurrentWeather;
