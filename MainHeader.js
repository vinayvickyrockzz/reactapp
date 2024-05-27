import React from 'react';

const MainHeader = ({ name, maidId, phoneNumber }) => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <h1>Weather Dashboard</h1>
      <p>Name: {name} | Maid ID: {maidId} | Phone Number: {phoneNumber}</p>
    </header>
  );
};

export default MainHeader;


