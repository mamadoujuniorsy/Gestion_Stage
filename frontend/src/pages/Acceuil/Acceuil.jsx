import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Col, Container, Row, Form, Button } from "react-bootstrap";
import '../../assets/acceuil.css';
import logo from "../../assets/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageacceuil from "../../assets/imageacceuil.jpg";
import imgg1 from "../../assets/imgg1.jpeg";
import imgg2 from "../../assets/imgg2.jpeg";
import imgg3 from "../../assets/imgg3.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backendAPI from '../../api';
import CandidateFormModal from './CandidateFormModal';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
};

function AnimatedSection({ children, variants }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

function PageAcceuil() {
  const [stages, setStages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    fetchStages();
  }, []);

  const fetchStages = async () => {
    try {
      const response = await backendAPI.getStages();
      setStages(response.data);
    } catch (error) {
      console.error('Error fetching stages:', error);
    }
  };

  const handleShowModal = (stage) => {
    setSelectedStage(stage);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStage(null);
  };

  const handleCandidateSubmit = async (candidate, stage) => {
    try {
      const formData = new FormData();
      formData.append('firstName', candidate.firstName);
      formData.append('lastName', candidate.lastName);
      formData.append('email', candidate.email);
      formData.append('stage', stage._id);
      formData.append('cv', candidate.cv);
      formData.append('coverLetter', candidate.coverLetter);

      await backendAPI.createCandidate(formData);
      handleCloseModal();
      fetchStages(); // Rafraîchit la liste des stages après soumission
    } catch (error) {
      console.error('Error creating candidate:', error);
      // Afficher ou gérer l'erreur de manière appropriée (ex: montrer un message à l'utilisateur)
    }
  };

  return (
    <div>
      <Navbar bg="" expand="lg" className="navbar-custom">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#link1">Stage</Nav.Link>
            <Nav.Link href="#link2">Inscription</Nav.Link>
            <Nav.Link href="#link3">Connexion</Nav.Link>
            <NavDropdown bg="blue" title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Something else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="body-section">
        <AnimatedSection variants={fadeInUp}>
          <div className="text-section">
            <p>Découvrez une nouvelle façon de simplifier la gestion des stages. Notre plateforme innovante offre une solution complète pour les étudiants, les enseignants et les entreprises. Simplifiez vos processus, optimisez votre temps et offrez une expérience de stage exceptionnelle à tous les intervenants. Bienvenue dans l'avenir de la gestion des stages.</p>
            <button>Trouvez un Stage !</button>
          </div>
        </AnimatedSection>
        <AnimatedSection variants={fadeIn}>
          <div className="image-section">
            <img src={imageacceuil} alt="Description de l'image"
            className="hover:scale-110" />
          </div>
        </AnimatedSection>
      </div>
      <div className="second-section">
        <AnimatedSection variants={fadeInUp}>
          <div className="element">
            <img src={imgg1} alt="Description de l'image"
            className="hover:scale-110" />
            <h2>Efficacité accrue</h2>
            <p>Simplifiez et optimisez la gestion des stages avec notre plateforme intuitive. Éliminez les tâches fastidieuses pour vous concentrer sur l'essentiel : offrir une expérience de stage exceptionnelle. Essayez dès maintenant et découvrez une nouvelle dimension d'efficacité !</p>
          </div>
        </AnimatedSection>
        <AnimatedSection variants={fadeInUp}>
          <div className="element">
            <img src={imgg2} alt="Description de l'image" 
            className="hover:scale-110"/>
            <h2>Transparence & communication </h2>
            <p>Facilitez la communication entre étudiants, enseignants et entreprises avec notre plateforme pour une transparence totale et une coordination simplifiée à chaque étape du processus de stage. Essayez dès maintenant et découvrez une nouvelle façon de collaborer !</p>
          </div>
        </AnimatedSection>
        <AnimatedSection variants={fadeInUp}>
          <div className="element">
            <img src={imgg3} alt="Description de l'image" 
            className="hover:scale-110"/>
            <h2>Personnalisation & flexibilité</h2>
            <p>Adaptez votre gestion des stages à vos besoins avec notre plateforme personnalisable et flexible. Libérez-vous des contraintes et gérez vos stages à votre manière dès maintenant !</p>
          </div>
        </AnimatedSection>
      </div>
      <div className="third-section">
        {stages.map(stage => (
          <AnimatedSection key={stage._id} variants={fadeInUp}>
            <div className="element">
              <img src={stage.image} alt={stage.title} 
              className="hover:scale-110"/>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <AnimatedSection variants={fadeInUp}>
                <button onClick={() => handleShowModal(stage)}>Postuler</button>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <CandidateFormModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleCandidateSubmit}
        stage={selectedStage}
      />
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={6}>
              <AnimatedSection variants={fadeInUp}>
                <h4>Newsletter</h4>
                <Form>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Form>
              </AnimatedSection>
            </Col>
            <Col md={3}>
              <AnimatedSection variants={fadeInUp}>
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com" className="text-white me-4">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="text-white me-4">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </AnimatedSection>
            </Col>
            <Col md={3}>
              <AnimatedSection variants={fadeInUp}>
                <h4>Contact Us</h4>
                <p>123, Main Street, Your City</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
              </AnimatedSection>
            </Col>
          </Row>
          <Row className="border-top pt-3">
            <Col>
              <p className="text-center">©2023 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default PageAcceuil;
