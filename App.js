import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';

import NotePad from './components/NotePad';



function App() {
  const [weatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data from API
    const fetchData = async () => {
      
      
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <WeatherCard weatherData={weatherData} />
     
      <NotePad />
    </div>
  );
}

export default App;
