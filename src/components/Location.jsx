import React, { useState } from "react";
import propTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import styles from "../styles/Location.module.css";

const Location = ({ fetchData, getCity, setStatus }) => {
  // const apiKey = "5e4cdc2a829230c047fd0253007d7411";
  const [сityInputValue, setCityInputValue] = useState("");

  const handleChange = (e) => {
    const updatedCity = e.target.value;
    setCityInputValue(updatedCity);
  };
  const fetchGeocoord = async () => {
    try {
      const responseGeocoord = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${сityInputValue.trim()}&units=metric&tz=+03:00&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (responseGeocoord.ok) {
        const jsonGeocoord = await responseGeocoord.json();
        console.log(jsonGeocoord);
        fetchData(jsonGeocoord.city.coord.lat, jsonGeocoord.city.coord.lon);
        getCity(`${jsonGeocoord.city.name}, ${jsonGeocoord.city.country}`);
      } else throw new Error("City is not found");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  const handleSubmit = (e) => {
    setStatus("loading");
    e.preventDefault();
    fetchGeocoord();
    setCityInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form
        action="#"
        method="GET"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <IoLocationOutline size={20} />
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          placeholder="Enter your сity"
          value={сityInputValue}
          autoFocus
        />
      </form>
    </>
  );
};

export default Location;

Location.propTypes = {
  getCity: propTypes.func.isRequired,
  fetchData: propTypes.func.isRequired,
  setStatus: propTypes.func.isRequired,
};
