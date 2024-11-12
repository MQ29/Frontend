import React from 'react';

const RatingBar = ({ rate }) => {
  const stars = Array(10)
    .fill(0)
    .map((_, index) => (
      <span key={index} className={index < rate ? "text-warning" : "text-secondary"}>
        ★
      </span>
    ));

  return <div>{stars}</div>;
};

export default RatingBar;
