import React from 'react';

const Card = ({ title, value, onDelete }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Card;

