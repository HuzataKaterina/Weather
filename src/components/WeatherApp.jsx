import React from "react";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import PeriodWeather from "./PeriodWeather";
import UvIndex from "./UvIndex";
import Wind from "./Wind";

import styles from "../styles/WeatherApp.module.css";

const WeatherApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <Location />
        <CurrentWeather />
      </div>
      <div className={styles.container_right}>
        <HourlyWeather />
        <PeriodWeather />
        <div className={styles.container_3}>
          <UvIndex />
          <Wind />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
