import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsCloudDrizzleFill } from "react-icons/bs";
const PeriodWeather = () => {
  return (
    <div className={styles.container_hourly}>
      <div className={styles.title}>
        <IoCalendarClearOutline />
        <div>
          <span>10-DAY FORECAST</span>
        </div>
      </div>

      <hr />
      <div className={styles.period}>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
          <BsCloudDrizzleFill size={25} />
        </div>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
          <BsCloudDrizzleFill />
        </div>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
          <img src="" alt="" />
        </div>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
        </div>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
        </div>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
        </div>
        <div className={styles.div_day}>
          <div>DAY</div>
          <div>16/09</div>
          <div>29°</div>
        </div>
      </div>
    </div>
  );
};

export default PeriodWeather;
