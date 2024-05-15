import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { WiTime4 } from "react-icons/wi";
import styles from "../styles/WeatherApp.module.css";

const HourlyWeather = ({ hourly }) => {
  const newHourly = hourly.slice(0, 10);

  return (
    <div className={styles.container_hourly}>
      <div className={styles.title}>
        <WiTime4 />
        <div>
          <span>HOURLY FORECAST</span>
        </div>
      </div>
      <hr />
      <div className={styles.hourly}>
        {newHourly.map((hour) => (
          <div className={styles.div_hourly} key={hour.dt}>
            <div>
              {new Date(hour.dt * 1000).toLocaleTimeString().slice(0, 5)}
            </div>
            <div>{Math.round(hour.temp)}°</div>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt={hour.weather[0].main}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
HourlyWeather.propTypes = {
  hourly: PropTypes.array.isRequired,
};
export default HourlyWeather;
