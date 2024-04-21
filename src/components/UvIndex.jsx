import React from "react";
import propTypes from "prop-types";
import styles from "../styles/WeatherApp.module.css";
import { TbUvIndex } from "react-icons/tb";
const UvIndex = ({ uvIndex }) => {
  let level = null;
  let text = null;
  switch (Math.round(uvIndex)) {
    case 0:
      (level = "Low"),
        (text = "Apply skin protection factor (SPF) 15 sun screen.");
      break;
    case 1:
      (level = "Low"),
        (text = "Apply skin protection factor (SPF) 15 sun screen.");
      break;
    case 2:
      (level = "Low"),
        (text = "Apply skin protection factor (SPF) 15 sun screen.");
      break;
    case 3:
      (level = "Moderate"), (text = "SPF 15 & protective clothing (hat)");
      break;
    case 4:
      (level = "Low"), (text = "SPF 15 & protective clothing (hat)");
      break;
    case 5:
      (level = "Low"),
        (text = "SPF 15, protective clothing, and UV-A&B sun glasses.");
      break;
    case 6:
      (level = "Low"),
        (text = "SPF 15, protective clothing, and UV-A&B sun glasses.");
      break;
    case 7:
      (level = "Low"),
        (text =
          "SPF 15, protective clothing, sun glasses and make attempts to avoid the sun between 10am to 4pm.");
      break;
    case 8:
      (level = "Low"),
        (text =
          "SPF 15, protective clothing, sun glasses and make attempts to avoid the sun between 10am to 4pm.");
      break;
    case 9:
      (level = "Low"),
        (text =
          "SPF 15, protective clothing, sun glasses and make attempts to avoid the sun between 10am to 4pm.");
      break;
    case 10:
      (level = "Low"),
        (text =
          "SPF 15, protective clothing, sun glasses and avoid being in the sun between 10am to 4pm.");
      break;
    case 11:
      (level = "Low"),
        (text =
          "SPF 15, protective clothing, sun glasses and avoid being in the sun between 10am to 4pm.");
      break;
  }
  return (
    <div>
      <div className={styles.uv_index}>
        <div className={styles.title}>
          <TbUvIndex />
          <div>
            <span>UV INDEX</span>
          </div>
        </div>
        <div className={styles.text_value}>{Math.round(uvIndex)}</div>
        <div className={styles.text_discription}>{level}</div>

        <input
          type="range"
          className={styles.range}
          min={0}
          max={11}
          value={uvIndex}
          list="values"
        />
        <span className={styles.text_discription}>{text}</span>
      </div>
    </div>
  );
};

UvIndex.propTypes = {
  uvIndex: propTypes.number.isRequired,
};
export default UvIndex;
