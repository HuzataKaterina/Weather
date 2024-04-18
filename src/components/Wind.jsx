import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { FiWind } from "react-icons/fi";
import { GiCompass } from "react-icons/gi";

const Wind = ({ wind, guest }) => {
  return (
    <div className={styles.wind}>
      <div className={styles.title}>
        <FiWind />
        <div>
          <span>WIND</span>
        </div>
      </div>
      <div className={styles.wind_details}>
        <div>
          <div className={styles.wind_details_div}>
            <div>
              <span className={styles.text_value}>{Math.round(wind)}</span>
            </div>
            <div>
              <div>
                <span>MPH</span>
              </div>
              <div>
                <span>Wind</span>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.wind_details_div}>
            <div>
              <span className={styles.text_value}>{Math.round(guest)}</span>
            </div>
            <div>
              <div>
                <span>MPH</span>
              </div>
              <div>
                <span>Gusts</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <GiCompass size={60} />
        </div>
      </div>
    </div>
  );
};

export default Wind;
