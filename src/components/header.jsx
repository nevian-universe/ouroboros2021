import '../App.css';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from "wouter";
import { useTranslation } from 'react-i18next'

import { FaPhoneAlt } from 'react-icons/fa';
import { RiMailFill } from "react-icons/ri";


function Header() {
  const [t, i18n] = useTranslation('global');
  return (
    <>
    
      <Navbar fixed="top"  >
        
          <div className="justify-content-end Nav-top_bar-bg Nav-top_bar">
            <ul className="List-no-style d-flex">
              <li>            
                <a href="#login"><FaPhoneAlt /> +1-800-456-478-23</a>
              </li>
              <li>
                <a href="#login"><RiMailFill /> info@aesir.com</a>
              </li>
              <li>
                <NavDropdown className="Dropmenu-lng" title="Idioma" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => i18n.changeLanguage('es')}> Es</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}> En</NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>
     
        <Container className="Nav-bottom_bar">
          <Link to="/">
            <Navbar.Brand >
              <img width="130px"
                    className="d-inline-block align-top" 
                    src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631641073/aesir/AESIR_logo_kyrywj.png" alt="" />
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;
