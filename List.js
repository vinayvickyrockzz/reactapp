import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>List of Items</h2>
      <div style={{ textAlign: 'center' }}>
        <input 
          type="text" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder="Enter item" 
          style={{ padding: '5px', marginRight: '5px' }} 
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteItem(index)} style={{ marginLeft: '5px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

