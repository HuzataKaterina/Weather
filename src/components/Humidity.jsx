import React from "react";
import propTypes from "prop-types";
import { WiHumidity } from "react-icons/wi";
import styles from "../styles/WeatherApp.module.css";

const Humidity = ({ humidity, humidityDewPoint }) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <WiHumidity />
        <div>
          <span>HUMIDITY</span>
        </div>
      </div>
      <span className={styles.text_value}>{humidity}%</span>
      <span className={styles.text_discription}>
        The dew point is {Math.round(humidityDewPoint)}° right now
      </span>
    </div>
  );
};
Humidity.propTypes = {
  humidity: propTypes.number.isRequired,
  humidityDewPoint: propTypes.number.isRequired,
};
export default Humidity;
