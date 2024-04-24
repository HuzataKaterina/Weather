import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import styles from "../styles/Location.module.css";

const Location = ({ fetchData, getCity }) => {
  const apiKey = "5e4cdc2a829230c047fd0253007d7411";
  const [newCity, setNewCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const updatedCity = e.target.value;
      setNewCity(updatedCity.trim());
    }
  };
  const fetchGeocoord = async () => {
    try {
      const responseGeocoord = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${newCity}&units=metric&tz=+03:00&appid=${apiKey}`
      );
      if (responseGeocoord.ok) {
        const jsonGeocoord = await responseGeocoord.json();
        console.log(jsonGeocoord);
        setLat(jsonGeocoord.city.coord.lat);
        setLon(jsonGeocoord.city.coord.lon);

        fetchData(jsonGeocoord.city.coord.lat, jsonGeocoord.city.coord.lon);
        getCity(`${jsonGeocoord.city.name}, ${jsonGeocoord.city.country}`);
      } else throw new Error("City is not found");
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGeocoord();
    setNewCity("");
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
          value={newCity}
        />
      </form>
    </>
  );
};

export default Location;

Location.propTypes = {
  getCity: propTypes.func.isRequired,
  fetchData: propTypes.func.isRequired,
};
