import React, { useEffect, useState } from 'react';
import CarProfile from '../components/CarProfile';
import { data } from '../module-data';

const Lab1 = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(data);
  }, []);

  return (
    <div>
      <h1>Profile Samochodów</h1>
      {cars.map(car => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Lab1;
