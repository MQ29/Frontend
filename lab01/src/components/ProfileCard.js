import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar';

function ProfileCard({ name, id, rating }) {
  const { dispatch } = useContext(AppContext);

  const handleEdit = () => {
    dispatch({ type: "edit", id });
  };

  const handleDelete = () => {
    dispatch({ type: "delete", id });
  };

  const handleRate = () => {
    const newRating = rating < 10 ? rating + 1 : 0;
    dispatch({ type: "rate", id, rating: newRating });
  };

  return (
    <Card style={{ width: "18rem" }} className="m-1">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
        <RatingBar rate={rating} />
        <Button variant="primary" onClick={handleEdit}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
        <Button variant="warning" onClick={handleRate}>Rate</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
