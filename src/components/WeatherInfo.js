// import React, { useState, useEffect } from 'react';

import React, { useState } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiThunderstorm } from "react-icons/wi";

const getWeatherIcon = (condition) => {
  if (!condition) return <WiDaySunny className="weather-icon" />;
  const text = condition.toLowerCase();
  if (text.includes('rain')) return <WiRain className="weather-icon" />;
  if (text.includes('cloud')) return <WiCloud className="weather-icon" />;
  if (text.includes('thunder')) return <WiThunderstorm className="weather-icon" />;
  return <WiDaySunny className="weather-icon" />;
};

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Delhi');
  const [input, setInput] = useState('Delhi');
  const [error, setError] = useState(null);
  const apiKey = '619becae3514488686d184615251405';

  const fetchWeather = async () => {
    if (!input.trim()) {
      setError('Please enter a valid city.');
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.trim()}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setCity(input);
        setWeather(data);
        setError(null);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch weather data');
      setWeather(null);
    }
  };

  return (
    <div className="card weather-card" id="weather">
      <h2>🌤️ Weather Info</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>
  <input
    type="text"
    value={input}
    placeholder="Enter city name"
    onChange={(e) => setInput(e.target.value)}
    style={{ padding: '8px', width: '70%', borderRadius: '4px' }}
  />
  <button
    onClick={fetchWeather}
    style={{ padding: '8px 24px', borderRadius: '4px', minWidth: '100px' }}
  >
    Search
  </button>
</div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          {getWeatherIcon(weather.current.condition.text)}
          <p><strong>City:</strong> {city}</p>
          <p><strong>Location:</strong> {weather.location.name}</p>
          <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;