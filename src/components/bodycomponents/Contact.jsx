import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../../assets/css/Contact.css'; // Assuming you are using a separate CSS file for custom styles.

export default function Contact() {
  return (
    <Container id="contact" className="my-5">
      <Row>
        <Col xs={12} md={6}>
          <h1 className="display-4 text-center mb-4">Contact Me</h1>
          <div className="social-link text-center mb-4">
            <a href="https://www.linkedin.com/in/rakibullhaque/" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/hydrationnirob" className="social-icon" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://github.com/hydrationnirob" className="social-icon" aria-label="Code">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="contact-info py-2 fs-5">
            <i className="fas fa-at mx-3"></i>
            <a href="mailto:rakibulhaques@gmail.com" className="contact-link">rakibulhaques@gmail.com</a>
          </div>
          <div className="contact-info py-2 fs-5">
            <i className="fas fa-phone mx-3"></i>
            <a href="tel:8801766209481" className="contact-link">+8801766209481</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
