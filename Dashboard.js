import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import NotePad from '../components/NotePad';
import Chart from '../components/Chart';
import dummyData from '../data/dummydata';

const Dashboard = () => {
  const [locations, setLocations] = useState(['Location A', 'Location B', 'Location C', 'Location D']);
  const [newLocation, setNewLocation] = useState('');

  const handleAddLocation = () => {
    if (newLocation && !locations.includes(newLocation)) {
      setLocations([...locations, newLocation]);
      setNewLocation('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={newLocation} 
          onChange={(e) => setNewLocation(e.target.value)} 
          placeholder="Enter location" 
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
        />
        <button 
          onClick={handleAddLocation} 
          style={{ padding: '10px 20px', marginLeft: '10px', background: '#2980b9', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>
      {locations.map((location, index) => (
        <WeatherCard key={index} location={location} />
      ))}
      <div style={{ marginTop: '20px' }}>
        <Chart data={dummyData.temperatureData} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <NotePad />
      </div>
    </div>
  );
};

export default Dashboard;
