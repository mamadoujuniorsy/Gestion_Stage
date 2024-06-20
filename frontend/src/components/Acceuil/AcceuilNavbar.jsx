import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5" >
            <Container>
                <Row>
                    <Col md={6}>
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
    );
}

export default Footer;