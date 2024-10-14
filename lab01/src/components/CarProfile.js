import React from 'react';
import './CarProfile.css';

const CarProfile = ({ car }) => {
    return (
        <div className="car-profile">
            <h3>Marka samochodu: {car.carBrand}</h3>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Numer rejestracyjny:</strong> {car.licensePlate}</p>
        </div>
    );
};

export default CarProfile;
