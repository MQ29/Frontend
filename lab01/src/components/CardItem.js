import React from 'react';

const CardItem = ({ name, description, rating }) => {
  return (
    <div className="card p-3">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><strong>Rating:</strong> {rating}</p>
    </div>
  );
};

export default CardItem;
