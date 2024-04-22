import React, { useState } from "react";
import propTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import styles from "../styles/Location.module.css";

const Location = ({ fetchData }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const newCity = e.target.value.trim();
      setCity(newCity);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit} className={styles.form}>
        <IoLocationOutline size={20} />
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          placeholder="Enter your сity"
          value={city}
        />
      </form>
    </>
  );
};

export default Location;

Location.propTypes = {
  fetchData: propTypes.func.isRequired,
};
