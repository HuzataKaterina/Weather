import React from "react";
import propTypes from "prop-types";
import { CiTempHigh } from "react-icons/ci";
import styles from "../styles/WeatherApp.module.css";

const Feeling = ({ feelsLike }) => {
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

      <span className={styles.text_value}>{Math.round(feelsLike)}°</span>
      <span className={styles.text_discription}>
        Humidity is making it feel warmer
      </span>
    </div>
  );
};

export default Feeling;

Feeling.propTypes = {
  feelsLike: propTypes.number.isRequired,
};
