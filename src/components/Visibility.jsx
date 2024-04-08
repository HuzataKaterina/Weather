import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { MdOutlineVisibility } from "react-icons/md";

const Visibility = () => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <MdOutlineVisibility />
        <div>
          <span>VISIBILITY</span>
        </div>
      </div>
      <span className={styles.text_value}>6 mi</span>
    </div>
  );
};

export default Visibility;
