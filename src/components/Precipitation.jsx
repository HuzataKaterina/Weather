import React from "react";
import propTypes from "prop-types";
import styles from "../styles/WeatherApp.module.css";
import { IoWaterOutline } from "react-icons/io5";

const Precipitation = ({ precipitation, precipitationExp }) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <IoWaterOutline />
        <div>
          <span>PRECIPITATION</span>
        </div>
      </div>
      <span className={styles.text_value}>{precipitation}"</span>
      <span className={styles.text_value_2}>in last 3h</span>
      <span className={styles.text_discription}>
        {precipitationExp}" expected in last 24h
      </span>
    </div>
  );
};

Precipitation.propTypes = {
  precipitation: propTypes.number.isRequired,
  precipitationExp: propTypes.number.isRequired,
};
export default Precipitation;
