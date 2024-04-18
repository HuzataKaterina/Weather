import React, { useEffect, useState } from "react";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import PeriodWeather from "./PeriodWeather";
import UvIndex from "./UvIndex";
import Wind from "./Wind";

import styles from "../styles/WeatherApp.module.css";

const WeatherApp = () => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiKey = "5e4cdc2a829230c047fd0253007d7411";
  const lon = "34.9833";
  const lat = "48.45";
  const sity = "Dnipro";

  const fetchData = async () => {
    try {
      const response3 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&tz=+03:00`)
      const responseWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${sity}&units=metric&tz=+02:00&appid=${apiKey}`
      );
      const responseForecast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${sity}&units=metric&tz=+03:00&appid=${apiKey}`
      );
      if (responseWeather.ok && responseForecast.ok && response3.ok) {
        const jsonWeather = await responseWeather.json();
        const jsonForecast = await responseForecast.json();
        const json3 = await response3.json();
        console.log(json3)
        const day = new Date(1713447917*1000).toLocaleDateString();
        const time = new Date(1713447917*1000).toLocaleTimeString();
        console.log(time)
        console.log(day)
        setWeather(jsonWeather);
        setForecast(jsonForecast);
        setLoading(false);
      } else throw new Error("network is not ok");
    } catch (error) {
      setIsError(true);
      console.error(`error fetching ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container_location}>
        <Location fetchData={fetchData} />
      </div>
      {isError ? (
        <div>Data cannot be loaded.</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.container_left}>
            <CurrentWeather
              temp={weather.main.temp}
              mainDescription={weather.weather[0].main}
              description={weather.weather[0].description}
              feelsLike={weather.main.feels_like}
              visibility={weather.visibility}
              precipitation={forecast.list[0].pop}
              humidity={weather.main.humidity}
            />
          </div>
          <div className={styles.container_right}>
            <HourlyWeather hourly={forecast.list} />
            <PeriodWeather period={forecast.list} />
            <div className={styles.container_3}>
              <UvIndex uvIndex={weather} />
              <Wind wind={weather.wind.speed} guest={weather.wind.gust} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
