import React from 'react';
import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

function Weather() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const toDate = () => {
    // let date = new Date();
    // const today = date.toDateString();
    // return today;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'Nocvember',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };
  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };
  return (
    <div>
      <h1 className="app-name">
        Weather App<span>🌤</span>
      </h1>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
        />
      </div>

      {weather.main && (
        <div>
          <div className="city-name">
            <h2>
              {weather.name}, <span>{weather.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{toDate()}</span>
          </div>
          <div className="icon-temp">
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            {Math.round(weather.main.temp)}
            <sup className="deg">&deg;C</sup>
          </div>
          <div className="des-wind">
            <p>{weather.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
