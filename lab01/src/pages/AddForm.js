import React, { useState, useContext } from 'react';
import AppContext from '../data/AppContext';

const AddForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (name.length === 0) newErrors.push("Name is required.");
    if (description.length === 0) newErrors.push("Description is required.");
    if (rating === '' || rating < 0 || rating > 10) newErrors.push("Rating must be between 0 and 10.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch({
      type: 'add',
      item: { id: Date.now(), name, description, rating: parseInt(rating) }
    });

    setName('');
    setDescription('');
    setRating('');
    setErrors([]);
  };

  return (
    <div>
      <h2>Add New Object</h2>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <div className="text-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="10" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
