import React from "react";
import propTypes from "prop-types";
import Feeling from "./Feeling";
import Precipitation from "./Precipitation";
import Visibility from "./Visibility";
import Humidity from "./Humidity";

import styles from "../styles/WeatherApp.module.css";

const CurrentWeather = ({
  feelsLike,
  temp,
  humidity,
  precipitation,
  visibility,
  mainDescription,
  description,
  precipitationExp,
  humidityDewPoint,
}) => {
  return (
    <div className={styles.container_curWeather}>
      <div className={styles.container_temp}>
        <div className={styles.textTemp}>{Math.round(temp)}°</div>
        <span className={styles.temp_discription}>{mainDescription}</span>
        <div>
          <p>{`${description}`}</p>
        </div>
      </div>
      <div className={styles.container_details}>
        <Feeling feelsLike={feelsLike} />
        <Precipitation
          precipitation={precipitation}
          precipitationExp={precipitationExp}
        />
        <Visibility visibility={visibility} />
        <Humidity humidity={humidity} humidityDewPoint={humidityDewPoint} />
      </div>
    </div>
  );
};

export default CurrentWeather;

CurrentWeather.propTypes = {
  feelsLike: propTypes.number.isRequired,
  temp: propTypes.number.isRequired,
  humidity: propTypes.number.isRequired,
  visibility: propTypes.number.isRequired,
  mainDescription: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  precipitationExp: propTypes.number.isRequired,
  humidityDewPoint: propTypes.number.isRequired,
};
