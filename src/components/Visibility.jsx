import React from "react";
import styles from "../styles/WeatherApp.module.css";
import { MdOutlineVisibility } from "react-icons/md";

const Visibility = ({ visibility }) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <MdOutlineVisibility />
        <div>
          <span>VISIBILITY</span>
        </div>
      </div>
      <span className={styles.text_value}>{visibility} mi</span>
    </div>
  );
};

export default Visibility;
