import React from "react";
<<<<<<< HEAD
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import '../../assets/acceuil.css';
import logo from "../../assets/logo.jpg";
=======
import "../../assets/acceuil.css";
import logo from "../../assets/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> d4260b57ef9cd86ef3d14471f8eab73fd03826de
import imageacceuil from "../../assets/imageacceuil.jpg";
import imgg1 from "../../assets/imgg1.jpeg";
import imgg2 from "../../assets/imgg2.jpeg";
import imgg3 from "../../assets/imgg3.jpeg";
<<<<<<< HEAD
=======
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { Navbar, Nav, NavDropdown, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
>>>>>>> d4260b57ef9cd86ef3d14471f8eab73fd03826de

function PageAcceuil() {
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
                <div className="text-section">
                    <p>Découvrez une nouvelle façon de simplifier la gestion des stages. Notre plateforme innovante offre une solution complète pour les étudiants, les enseignants et les entreprises. Simplifiez vos processus, optimisez votre temps et offrez une expérience de stage exceptionnelle à tous les intervenants. Bienvenue dans l'avenir de la gestion des stages.</p>
                    <button>Trouvez un Stage !</button>
                </div>
                <div className="image-section">
                    <img src={imageacceuil} alt="Description de l'image"/>
                </div>
            </div>
            <div className="second-section">
                <div className="element">
                    <img src={imgg1} alt="Description de l'image"/>
                    <h2>Efficacité accrue</h2>
                    <p>Simplifiez et optimisez la gestion des stages avec notre plateforme intuitive. Éliminez les tâches fastidieuses pour vous concentrer sur l'essentiel : offrir une expérience de stage exceptionnelle. Essayez dès maintenant et découvrez une nouvelle dimension d'efficacité !</p>
                </div>
                <div className="element">
                    <img src={imgg2} alt="Description de l'image"/>
                    <h2>Transparence &
                        communication </h2>
                    <p>Facilitez la communication entre étudiants, enseignants et entreprises avec notre plateforme pour une transparence totale et une coordination simplifiée à chaque étape du processus de stage. Essayez dès maintenant et découvrez une nouvelle façon de collaborer !</p>
                </div>
                <div className="element">
                    <img src={imgg3} alt="Description de l'image"/>
                    <h2>Personnalisation &
                        flexibilité</h2>
                    <p>
                        Adaptez votre gestion des stages à vos besoins avec notre plateforme personnalisable et flexible. Libérez-vous des contraintes et gérez vos stages à votre manière dès maintenant !</p>
                </div>
            </div>
            <div className="third-section">
                <div className="element">
                    <img src={image4} alt="Description de l'image"/>
                    <button>Postuler</button>
                </div>
                <div className="element">
                    <img src={image5} alt="Description de l'image"/>
                    <button>Postuler</button>
                </div>
                <div className="element">
                    <img src={image6} alt="Description de l'image"/>
                    <button>Postuler</button>
                </div>
            </div>
            <footer className="bg-dark text-white py-5" >
                <Container>
                    <Row>
                        <Col md={6}>
                            <h4>Newsletter</h4>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <h4>Follow Us</h4>
                            <a href="https://www.facebook.com" className="text-white me-4">
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </a>
                            <a href="https://www.twitter.com" className="text-white me-4">
                                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </a>
                            <a href="https://www.instagram.com" className="text-white">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                            </a>
                        </Col>
                        <Col md={3}>
                            <h4>Contact Us</h4>
                            <p>123, Main Street, Your City</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: +1234567890</p>
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
