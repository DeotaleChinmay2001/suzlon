import React, { useState } from 'react';
import './Card.css';

const Card = ({ iconClass, data, editable }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleDataClick = () => {
    if (editable) {
      setIsEditing(true);
    }
  };

  const handleInputChange = (event) => {
    setEditedData(event.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Call a function here to save the edited data to the server if needed
    // For simplicity, we'll just update the state for now
    setEditedData(editedData);
  };

  return (
    <div className="card-container">
      <div className="card-icon">
        <i className={`fa ${iconClass}`}></i>
      </div>
      {isEditing ? (
        <input
          type="text"
          value={editedData}
          onChange={handleInputChange}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <div className="card-data" onClick={handleDataClick}>
          {editedData}
        </div>
      )}
    </div>
  );
};

export default Card;
