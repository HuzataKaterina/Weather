import React from "react";
import propTypes from 'prop-types'
import Feeling from "./Feeling";
import Precipitation from "./Precipitation";
import Visibility from "./Visibility";
import Humidity from "./Humidity";

import styles from "../styles/WeatherApp.module.css";

const CurrentWeather = ({ feelsLike, temp, humidity, visibility, mainDescription, description }) => {
  return (
    <div className={styles.container_curWeather}>
      <div className={styles.container_temp}>
        <div className={styles.textTemp}>{`${temp}°`}</div>
        <span className={styles.temp_discription}>{`${mainDescription}`}</span>
        <div>
          <p>{`${description}`}</p>
        </div>
      </div>
      <div className={styles.container_details}>
        <Feeling feelsLike={feelsLike}/>
        <Precipitation />
        <Visibility visibility={visibility}/>
        <Humidity humidity={humidity}/>
      </div>
    </div>
  );
};

export default CurrentWeather;

CurrentWeather.propTypes ={
  feelsLike: propTypes.number.isRequired,
  temp: propTypes.number.isRequired,
  humidity: propTypes.number.isRequired,
  visibility: propTypes.number.isRequired,
  mainDescription: propTypes.string.isRequired,
  description: propTypes.string.isRequired, 
}