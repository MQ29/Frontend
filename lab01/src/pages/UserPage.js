// pages/UserPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../data/useFetch';

const UserPage = () => {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user) return <p>Loading...</p>; // Wyświetlamy komunikat podczas ładowania

  return (
    <div>
      <h2>User Details</h2>
      {user ? ( // Sprawdzenie, czy user istnieje, zanim spróbujemy wyświetlić dane
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </>
      ) : (
        <p>User not found</p> // Obsługa przypadku, gdy użytkownik nie istnieje
      )}
    </div>
  );
};

export default UserPage;
