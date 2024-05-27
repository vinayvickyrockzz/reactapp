import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { FaThermometerHalf, FaCloudRain, FaTint, FaTemperatureHigh } from 'react-icons/fa';

const WeatherCard = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    const apiKey = 'f2bc9a2602145e3665b938a34166bfe6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      setWeatherData({
        avgTemp: `${data.main.temp}°C`,
        avgRainfall: `${data.rain ? data.rain['1h'] : 0}mm`,
        avgHumidity: `${data.main.humidity}%`,
        currentTemp: `${data.main.temp}°C`,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  useState(() => {
    fetchWeatherData(location);
  }, [location]);

  return weatherData ? (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{location}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <Card title="Avg Temp of Week" value={weatherData.avgTemp} icon={<FaThermometerHalf />} />
        <Card title="Avg Rainfall of Week" value={weatherData.avgRainfall} icon={<FaCloudRain />} />
        <Card title="Avg Humidity of Week" value={weatherData.avgHumidity} icon={<FaTint />} />
        <Card title="Current Temp" value={weatherData.currentTemp} icon={<FaTemperatureHigh />} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WeatherCard;

