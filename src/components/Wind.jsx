import React from "react";
import propTypes from "prop-types";
import { FiWind } from "react-icons/fi";
import { GiCompass } from "react-icons/gi";
import styles from "../styles/WeatherApp.module.css";

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
              <span className={styles.text_value}>
                {Math.round(wind * 3.6)}
              </span>
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
              <span className={styles.text_value}>
                {Math.round(guest * 3.6)}
              </span>
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
Wind.propTypes = {
  wind: propTypes.number.isRequired,
  guest: propTypes.number.isRequired,
};
export default Wind;
