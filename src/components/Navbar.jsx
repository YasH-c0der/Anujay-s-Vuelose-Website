import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import logo from '../assets/images/logo.webp';
import home from '../assets/images/home.svg';
import about from '../assets/images/about.svg';
import privacy from '../assets/images/privacy.svg';
import contact from '../assets/images/contact.svg';

const Navbar = () => {
  return (
    <header>
      <BootstrapNavbar bg="white" expand="lg" className="navbar navbar-expand-lg navbar-light" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#1d1d21', fontWeight: 500, lineHeight: 2 }}>
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Vuelose" height="60" />
          </Link>
          <div className="display3 d-lg-none">
            <a href="tel:+1 (888) 394-9616" style={{ color: '#1d1d21', textDecoration: 'none' }}>+1 (888) 394-9616</a>
          </div>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="flex-grow-1 text-right">
            <Nav className="m-auto flex-nowrap" style={{ gap: '2rem' }}>
              <Nav.Link as={Link} to="/home" className="nav-link" active style={{ color: '#1d1d21' }}>
                <img src={home} alt="Home" height="20" style={{ marginRight: '5px' }} />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="nav-link" style={{ color: '#1d1d21' }}>
              <img src={about} alt="Home" height="20" style={{ marginRight: '5px' }} />
              About Us</Nav.Link>
              <Nav.Link as={Link} to="/privacy-policy" className="nav-link" style={{ color: '#1d1d21' }}>
              <img src={privacy} alt="Home" height="20" style={{ marginRight: '5px' }} />
              Privacy Policy</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="nav-link" style={{ color: '#1d1d21' }}>
              <img src={contact} alt="Home" height="20" style={{ marginRight: '5px' }} />
              Contact Us</Nav.Link>
            </Nav>
            <div className="pull-right phone-number d-none d-lg-block">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-around">
                  <div>
                    <h5 className="m-0 p-0 text-start" style={{ color: '#1d1d21' }}>
                      <p className="m-0">Toll-free number</p>
                      <a href="tel:+1 (888) 394-9616" className="text-decoration-none" style={{ color: '#1d1d21' }}>
                      +1 (888) 394-9616
                      </a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      <style>
        {`
          .nav-link:hover {
            color: white !important;
            background-color: #1F1D61 !important;
            border-radius: 5px !important;
          }
          .nav-link:hover img {
            filter: brightness(0) invert(1);
            transition: 0s !important;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
