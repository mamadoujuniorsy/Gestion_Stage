import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CandidateFormModal = ({ show, handleClose, handleSubmit, stage }) => {
  const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', cv: null, coverLetter: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate({ ...candidate, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCandidate({ ...candidate, [name]: files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(candidate, stage);
    setCandidate({ firstName: '', lastName: '', email: '', cv: null, coverLetter: null });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Postuler pour {stage?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit} encType='multipart/form-data'>
          <Form.Group controlId="formFirstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={candidate.firstName}
              onChange={handleChange}
              placeholder="Entrer votre prénom"
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={candidate.lastName}
              onChange={handleChange}
              placeholder="Entrer votre nom"
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={candidate.email}
              onChange={handleChange}
              placeholder="Entrer votre email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formCV">
            <Form.Label>CV</Form.Label>
            <Form.Control
              type="file"
              name="cv"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCoverLetter">
            <Form.Label>Lettre de motivation</Form.Label>
            <Form.Control
              type="file"
              name="coverLetter"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Postuler
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CandidateFormModal;
