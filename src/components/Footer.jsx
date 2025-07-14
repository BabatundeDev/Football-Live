import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-3 mt-5 bottom-0">
    <Container>
      <Row className="mb-4">
        <Col md={4}>
          <h5 className="text-uppercase mb-3">About Football Live</h5>
          <p>
            Football Live is your go-to platform for streaming live football matches, highlights, and exclusive behind-the-scenes content from leagues around the world.
          </p>
        </Col>

        <Col md={4}>
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li><a href="/featuredvideo" className="text-white text-decoration-none">Live Matches</a></li>
            <li><a href="/schedule" className="text-white text-decoration-none">Schedule</a></li>
            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
          </ul>
        </Col>

        <Col md={4}>
          <h5 className="text-uppercase mb-3">Follow Us</h5>
          <div className="d-flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaYoutube />
            </a>
          </div>
        </Col>
      </Row>

      <div className="text-center border-top pt-3">
        <p className="mb-1">&copy; {new Date().getFullYear()} Football Live. All rights reserved.</p>
        <small>Built with ❤️ by <strong>Smartwebsitelab</strong></small>
      </div>
    </Container>
  </footer>
);

export default Footer;
