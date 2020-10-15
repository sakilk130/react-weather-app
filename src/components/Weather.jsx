import React from 'react';
import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

function Weather() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const toDate = () => {
    let date = new Date();
    const today = date.toDateString();
    return today;
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
      <h1>
        Weather App<span>🌤</span>
      </h1>
      <form>
        <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
        />
      </form>
      {weather.main && (
        <div>
          <h2>
            <span>{weather.name}, </span>
            <span>{weather.sys.country}</span>
            <br />
            <span>Icon</span>
            <span>{toDate()}</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Weather;
