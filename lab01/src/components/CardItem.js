import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDispatch from '../data/useDispatch';
import RatingBar from './RatingBar';

const CardItem = ({ id, name, description, rating }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };

  const handleDelete = () => {
    dispatch({ type: "delete", id });
  };

  const handleRate = () => {
    const newRating = rating < 10 ? rating + 1 : 0;
    dispatch({ type: "rate", id, rating: newRating });
  };

  return (
    <div className="card p-3">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <RatingBar rate={rating} />
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <button className="btn btn-warning" onClick={handleRate}>Rate</button>
      </div>
    </div>
  );
};

export default CardItem;
