import React from 'react';
import { useParams } from 'react-router-dom';
import { peopleData } from '../data/peopleData'; 

const Lab2 = () => {
    const { id } = useParams();

    if (!id) {
        return <p>Brak identyfikatora osoby.</p>;
    }

    const person = peopleData.find(person => person.id === id);

    if (!person) {
        return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
    }

    return (
        <div>
            <h1>Profil osoby</h1>
            <p><strong>Imię i nazwisko:</strong> {person.name}</p>
            <p><strong>Wiek:</strong> {person.age}</p>
            <p><strong>Zawód:</strong> {person.job}</p>
        </div>
    );
};

export default Lab2;
