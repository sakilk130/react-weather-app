import React from 'react';
import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

function Weather() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const search = async (event) => {
    if (event.key === 'Enter') {
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
      <div className="input">
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
          <span>{weather.name}</span>
          <sub>{weather.sys.country}</sub>
        </div>
      )}
    </div>
  );
}

export default Weather;
