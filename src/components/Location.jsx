import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import styles from "../styles/Location.module.css";
const Location = () => {
  return (
    <>
      <form action="" className={styles.form}>
        <IoLocationOutline size={20} />
        <input type="text" className={styles.input} placeholder="London" />
      </form>
    </>
  );
};

export default Location;
