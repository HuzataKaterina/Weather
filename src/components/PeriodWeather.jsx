import React from "react";
import propTypes from "prop-types";
import styles from "../styles/WeatherApp.module.css";
import { IoCalendarClearOutline } from "react-icons/io5";
const PeriodWeather = ({ period }) => {
  return (
    <div className={styles.container_hourly}>
      <div className={styles.title}>
        <IoCalendarClearOutline />
        <div>
          <span>7-DAY FORECAST</span>
        </div>
      </div>

      <hr />
      <div className={styles.period}>
        {period.map((day) => (
          <div className={styles.div_day} key={day.dt}>
            <div>{new Date(day.dt * 1000).toString().slice(0, 3)}</div>
            <div>
              {new Date(day.dt * 1000).toLocaleDateString().slice(0, 5)}
            </div>
            <div>{Math.round(day.temp.day)}°</div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].main}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
PeriodWeather.propTypes = {
  period: propTypes.array.isRequired,
};
export default PeriodWeather;
