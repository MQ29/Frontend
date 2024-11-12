import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import FlexContainer from '../components/FlexContainer';
import CardItem from '../components/CardItem';
import { peopleData } from "../data/peopleData";

const Lab3 = () => {
  const [data, setData] = useState(peopleData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState("");

  // Funkcje do otwierania modali
  const handleOpenEditModal = (item) => {
    setSelectedItem(item);
    setNewName(item.name);
    setShowEditModal(true);
  };

  const handleOpenDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleOpenRateModal = (item) => {
    setSelectedItem(item);
    setNewRating(item.rating);
    setShowRateModal(true);
  };

  // Funkcja zamykania wszystkich modali
  const handleCloseModals = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
    setShowRateModal(false);
  };

  // Funkcja do edycji
  const handleEdit = () => {
    setData(prevData =>
      prevData.map(item =>
        item.id === selectedItem.id ? { ...item, name: newName } : item
      )
    );
    handleCloseModals();
  };

  // Funkcja do usuwania
  const handleDelete = () => {
    setData(prevData => prevData.filter(item => item.id !== selectedItem.id));
    handleCloseModals();
  };

  // Funkcja do oceniania
  const handleRate = () => {
    const rating = parseInt(newRating, 10);
    if (rating >= 0 && rating <= 10) {
      setData(prevData =>
        prevData.map(item =>
          item.id === selectedItem.id ? { ...item, rating: rating } : item
        )
      );
      handleCloseModals();
    } else {
      alert("Wprowadź prawidłową wartość od 0 do 10.");
    }
  };

  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer
        element={(props) => (
          <CardItem
            {...props}
            onEdit={() => handleOpenEditModal(props)}
            onDelete={() => handleOpenDeleteModal(props)}
            onRate={() => handleOpenRateModal(props)}
          />
        )}
        data={data}
      />

      {/* Modal Edycji */}
      <Modal show={showEditModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Edytuj nazwę</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>
            Anuluj
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Zapisz
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Usunięcia */}
      <Modal show={showDeleteModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Usuń element</Modal.Title>
        </Modal.Header>
        <Modal.Body>Czy na pewno chcesz usunąć ten element?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>
            Anuluj
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Usuń
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Oceny */}
      <Modal show={showRateModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Oceń element</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="number"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
            min="0"
            max="10"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>
            Anuluj
          </Button>
          <Button variant="warning" onClick={handleRate}>
            Oceń
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Lab3;
