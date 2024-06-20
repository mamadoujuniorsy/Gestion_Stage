import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "C:/devweb/Gestion_Stage/frontend/src/assets/acceuil.css";
import logo from "C:/devweb/Gestion_Stage/frontend/src/assets/logo.jpg";
import imageacceuil from "C:/devweb/Gestion_Stage/frontend/src/assets/imageacceuil.jpg";
import imgg1 from "C:/devweb/Gestion_Stage/frontend/src/assets/imgg1.jpeg";
import imgg2 from "C:/devweb/Gestion_Stage/frontend/src/assets/imgg2.jpeg";
import imgg3 from "C:/devweb/Gestion_Stage/frontend/src/assets/imgg3.jpeg";


function PageAcceuil() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="navbar-custom">
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
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
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
                    <h2>Titre 1</h2>
                    <p>Texte 1</p>
                </div>
                <div className="element">
                    <img src={imgg2} alt="Description de l'image"/>
                    <h2>Titre 2</h2>
                    <p>Texte 2</p>
                </div>
                <div className="element">
                    <img src={imgg3} alt="Description de l'image"/>
                    <h2>Titre 3</h2>
                    <p>Texte 3</p>
                </div>
            </div>
        </div>
    );
}

export default PageAcceuil;
