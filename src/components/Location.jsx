import React, { useState } from "react";
import propTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import styles from "../styles/Location.module.css";

const Location = ({ fetchData }) => {
  const [sity, setSity] = useState("");

  const handleChange = (e) => {
    if (e.target.value !== "") {
    const newSity = e.target.value
      setSity(newSity.trim());
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(sity);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <form action="GET" onSubmit={handleSubmit} className={styles.form}>
        <IoLocationOutline size={20} />
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          placeholder="London"
          value={sity}
        />
      </form>
    </>
  );
};

export default Location;

Location.propTypes ={
  fetchData: propTypes.func.isRequired,
}