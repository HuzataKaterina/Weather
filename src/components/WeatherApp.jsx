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
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiKey = "5e4cdc2a829230c047fd0253007d7411";
  const lon = "34.9833";
  const lat = "48.45";
  const city = "Dnipro";

  const fetchData = async () => {
    try {
      const responseWeather = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&tz=+03:00`
      );

      const responseForecast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&tz=+03:00&appid=${apiKey}`
      );
      if (responseWeather.ok && responseForecast.ok) {
        const jsonWeather = await responseWeather.json();
        const jsonForecast = await responseForecast.json();
        console.log(jsonWeather);
        setWeather(jsonWeather);
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
              temp={weather.current.temp}
              mainDescription={weather.current.weather[0].description}
              description={weather.daily[0].summary}
              feelsLike={weather.current.feels_like}
              visibility={weather.current.visibility}
              precipitation={weather.hourly[0].pop}
              precipitationExp={weather.daily[0].pop}
              humidity={weather.current.humidity}
              humidityDewPoint={weather.daily[0].dew_point}
            />
          </div>
          <div className={styles.container_right}>
            <HourlyWeather hourly={weather.hourly} />
            <PeriodWeather period={weather.daily} />
            <div className={styles.container_3}>
              <UvIndex uvIndex={weather.current.uvi} />
              <Wind
                wind={weather.current.wind_speed}
                guest={weather.current.wind_gust}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
