// src/App.js
import React, { useEffect, useState } from 'react';
import CarProfile from './components/CarProfile'; 
import { data } from './module-data.js';

const App = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(data); 
    }, []);

    return (
        <div className="app">
            <h1>Profile Samochodów</h1>
            {cars.map(car => (
                <CarProfile key={car.id} car={car} />
            ))}
        </div>
    );
};

export default App;
