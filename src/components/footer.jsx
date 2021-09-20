import '../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "wouter";
import { useTranslation } from 'react-i18next'
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaLinkedin } from "react-icons/fa";


function Footer() {
  const [t, i18n] = useTranslation('global');

  return (
    <>
      <Container className="footer">
        <div className="footer-img">
          <img width="130px" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631641073/aesir/AESIR_logo_kyrywj.png" alt="" />
        </div>
        
        <div>
          <Row>
            <Col>
              <h6>{t('footer.about-us')}</h6>
              <ul>
                <li>Philosophy</li>
                <li>Contact us</li>
                <li>Join the team!</li>
                <li>Blog</li>
              </ul>
            </Col>
            
            <Col>
              <h6>Politics</h6>
              <div>
                <ul>
                  <li>Anti-corruption Policy</li>
                  <li>Code Of Ethics</li>
                  <li>Cookies Policy</li>
                  <li>Environmental Policy</li>
                  <li>Information Security Policies</li>
                </ul>
              </div>
            </Col>
            
            <Col>
              <h6>Where we are?</h6>
              <ul>
                <li>México</li>
                <li>Spain</li>
                <li>Chile</li>
                <li>Colombia</li>
                <li>Canada</li>
              </ul>
            </Col>
            
            <Col>
              <h6>Contact Us</h6>
              <ul className="List-no-style">
                <li>info@aesir.net</li>
                <li>+52-55-0000-0000</li>
              </ul>
              <div className="List-no-style.d-flex">
                <span><FaFacebookSquare /></span>
                <span><FaTwitterSquare /></span>
                <span><FaInstagramSquare /></span>
                <span><FaLinkedin /></span>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <p>Copyright © 2021 Aesir. All Right Reserved</p>
        </div>
      </Container>
    </>
  );
}

export default Footer;