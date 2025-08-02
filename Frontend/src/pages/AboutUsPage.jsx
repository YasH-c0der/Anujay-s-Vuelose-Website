import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';

const AboutUsPage = () => {
  return (
    <>
      <div className="container-fluid title-bg py-5" style={{ backgroundColor: '#4a5277' }}>
        <Container>
          <Row>
            <Col xs={12} className="text-center text-white">
              <h2><em>About Us</em></h2>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="list-inline-item text-white">/</li>
                <li className="list-inline-item active text-white">About Us</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <AboutSection />
    </>
  );
};

export default AboutUsPage;
