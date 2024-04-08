import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { WiTime4 } from "react-icons/wi";
import { BsCloudDrizzleFill } from "react-icons/bs";
const HourlyWeather = () => {
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
        <div className={styles.div_hourly}>
          <div>Now</div>
          <div>28°</div>
          <BsCloudDrizzleFill size={25} />
        </div>
        <div className={styles.div_hourly}>
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
      </div>
    </div>
  );
};

export default HourlyWeather;
