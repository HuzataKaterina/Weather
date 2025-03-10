import React from "react";
import propTyres from "prop-types";
import { MdOutlineVisibility } from "react-icons/md";
import styles from "../styles/WeatherApp.module.css";

const Visibility = ({ visibility }) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <MdOutlineVisibility />
        <div>
          <span>VISIBILITY</span>
        </div>
      </div>
      <span className={styles.text_value}>{visibility}m</span>
    </div>
  );
};

Visibility.propTyres = {
  visibility: propTyres.number.isRequired,
};
export default Visibility;
