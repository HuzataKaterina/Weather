import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/WeatherApp.module.css";
import { WiHumidity } from "react-icons/wi";

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
      <span className={styles.text_discription}>The dew point is {Math.round(humidityDewPoint)}° right now</span>
    </div>
  );
};
Humidity.PropTypes = {
  humidity: PropTypes.number.isRequired,
  humidityDewPoint: PropTypes.number.isRequired,
}
export default Humidity;
