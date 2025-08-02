import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

// Import destination images
import parisImg from '../assets/images/paris.jpg';
import triompheImg from '../assets/images/triomphe.jpg';
import rialtoImg from '../assets/images/rialto.jpg';
import hiroshimaImg from '../assets/images/hiroshima.jpg';
import dubaiImg from '../assets/images/dubai.jpg';
import veniceImg from '../assets/images/venice.jpg';

const destinations = [
  { name: 'Paris', image: parisImg },
  { name: 'Triomphe', image: triompheImg },
  { name: 'Ponte di Rialto', image: rialtoImg },
  { name: 'Hiroshima Castle', image: hiroshimaImg },
  { name: 'Dubai', image: dubaiImg },
  { name: 'Venice', image: veniceImg },
];

const DestinationsSection = () => {
  return (
    <section className="py-5 tours_section">
      <Container>
        <Row>
          <div>
            <p className="text-left">Best Places near at you</p>
            <h2 className="mb-4 text-left">Explore Top Destinations</h2>
          </div>

          {destinations.map((destination, index) => (
            <Col key={index} xs={6} md={3} sm={6} className="pb-4">
              <div className="img-box position-relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="img-fluid w-100 rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div
                  className="card2 position-absolute"
                  style={{
                    bottom: '20px',
                    left: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '5px 15px',
                    borderRadius: '5px'
                  }}
                >
                  <div className="card-title h5 text-white">
                    {destination.name} <FaSquareArrowUpRight />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsSection;
