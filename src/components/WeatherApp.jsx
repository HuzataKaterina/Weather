import React, { useEffect, useState } from "react";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import PeriodWeather from "./PeriodWeather";
import UvIndex from "./UvIndex";
import Wind from "./Wind";

import styles from "../styles/WeatherApp.module.css";
const WeatherApp = () => {
  const [weather, setWeather] = useState("");

  const apiKey = "5e4cdc2a829230c047fd0253007d7411";
  const lon = "34.9833";
  const lat = "48.45";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      if (response.ok) {
        const json = await response.json();
        setWeather(json);
        console.log(json);
      } else throw new Error("network is not ok");
    } catch (error) {
      console.error(`error fetching ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <Location fetchData={fetchData} />
        <CurrentWeather
        temp={weather.main.temp}
        mainDescription={weather.weather[0].main}
        description={weather.weather[0].description}
        feelsLike={weather.main.feels_like}
        visibility={weather.visibility}
        humidity={weather.main.humidity}
        />
      </div>
      <div className={styles.container_right}>
        <HourlyWeather hourly={weather} />
        <PeriodWeather period={weather} />
        <div className={styles.container_3}>
          <UvIndex uvIndex={weather} />
          <Wind wind={weather} />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
