import React, { useEffect, useState } from "react";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import PeriodWeather from "./PeriodWeather";
import UvIndex from "./UvIndex";
import Wind from "./Wind";

import styles from "../styles/WeatherApp.module.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiKey = "5e4cdc2a829230c047fd0253007d7411";

  const getCity = (updatedCity) => {
    setCity(updatedCity);
  };
  const fetchData = async (lat, lon) => {
    try {
      const responseWeather = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&tz=+03:00`
      );
      if (responseWeather.ok) {
        const jsonWeather = await responseWeather.json();
        console.log(jsonWeather);
        setWeather(jsonWeather);
        setLoading(false);
      } else throw new Error();
    } catch (error) {
      setIsError(true);
      console.error(`error fetching ${error}`);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_location}>
        <Location fetchData={fetchData} getCity={getCity} />
      </div>
      {isError ? (
        <div>Data cannot be loaded.</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.container_left}>
            <CurrentWeather
              city={city}
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
                guest={weather.hourly[0].wind_gust}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
