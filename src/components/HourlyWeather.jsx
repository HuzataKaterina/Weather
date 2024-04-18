import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/WeatherApp.module.css";
import { WiTime4 } from "react-icons/wi";
import { BsCloudDrizzleFill } from "react-icons/bs";

const HourlyWeather = ({ hourly }) => {
  const newHourly = hourly.slice(0, 10);
  console.log(newHourly);

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
        {newHourly.map((hour) => {
          <div className={styles.div_hourly}>
            <div>{hour.dt_txt.slice(11, 16)}</div>
            <div>{Math.round(hour.main.temp)}°</div>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt={hour.weather.main}
            />
          </div>;
        })}

        {/* <div className={styles.div_hourly}>
          <div>Now</div>
          <div>28°</div>
          <BsCloudDrizzleFill size={25} />
        </div>
        <div className={styles.div_hourly}>
          <div>Now</div>
          <div>28°</div>
          <img src="" alt="" />
        </div>
        <div className={styles.div_hourly}>
          <div>Now</div>
          <div>28°</div>
          <img src="" alt="" />
        </div>
        <div className={styles.div_hourly}>
          <div>Now</div>
          <div>28°</div>
          <img src="" alt="" />
        </div>
        <div className={styles.div_hourly}>
          <div>Now</div>
          <div>28°</div>
          <img src="" alt="" />
        </div>
         */}
      </div>
    </div>
  );
};
HourlyWeather.propTypes = {
  hourly: PropTypes.array.isRequired,
};
export default HourlyWeather;
