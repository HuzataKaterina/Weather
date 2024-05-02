import React from "react";
import propTypes from "prop-types";
import styles from "../styles/WeatherApp.module.css";
import { TbUvIndex } from "react-icons/tb";
const UvIndex = ({ uvIndex }) => {
  let level;
  let text;
  switch (Math.round(uvIndex)) {
    case 0:
      (level = "Low"),
        (text = "Wear sunglasses on bright days");
      break;
    case 1:
      (level = "Low"),
        (text = "Wear sunglasses on bright days");
      break;
    case 2:
      (level = "Low"),
        (text = "Wear sunglasses on bright days");
      break;
    case 3:
      (level = "Moderate"), (text = "Stay in shade near midday when the sun is strongest");
      break;
    case 4:
      (level = "Moderate"), (text = "Stay in shade near midday when the sun is strongest");
      break;
    case 5:
      (level = "Moderate"),
        (text = "Stay in shade near midday when the sun is strongest");
      break;
    case 6:
      (level = "Hight"),
        (text = "Reduce time in the sun between 10 a.m. and 4 p.m.");
      break;
    case 7:
      (level = "Hight"),
        (text =
          "Reduce time in the sun between 10 a.m. and 4 p.m.");
      break;
    case 8:
      (level = "Very hight"),
        (text =
          "Minimize sun exposure between 10 a.m. and 4 p.m.");
      break;
    case 9:
      (level = "Very hight"),
        (text =
          "Minimize sun exposure between 10 a.m. and 4 p.m.");
      break;
    case 10:
      (level = "Very hight"),
        (text =
          "Minimize sun exposure between 10 a.m. and 4 p.m.");
      break;
    case 11:
      (level = "EXtrem"),
        (text =
          "Take all precautions because unprotected skin and eyes can burn in minutes");
      break;
  }
  return (
    
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
  );
};

UvIndex.propTypes = {
  uvIndex: propTypes.number.isRequired,
};
export default UvIndex;
