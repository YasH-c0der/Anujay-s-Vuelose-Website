import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import destinationIcon from '../assets/images/destination.png';
import satisfactionIcon from '../assets/images/satisfaction.png';
import boardingPassIcon from '../assets/images/boarding-pass.png';
import Footer from '../components/Footer';

const AboutSection = () => {
  return (
    <>
    <section className="travel-sec py-5">
      <Container>
        <Row className="g-4 align-items-xl-center">
          <Col lg={6}>
            <h2 className="my-4">About - <span className="text-danger">vuelose.com</span></h2>
            <p className="mb-4">
              Welcome to vuelose.com your premier destination for seamless travel booking experiences.
              At vuelose.com, we are passionate about connecting travelers with their dream destinations,
              ensuring every journey is not just a trip, but a memorable adventure.
            </p>
            <p className="mt-2">
              Our platform offers an extensive range of flight options, tailored to meet your specific
              needs and preferences. With exclusive deals and discounts, you can enjoy premium travel
              experiences without breaking the bank. Our user-friendly interface makes booking a breeze,
              and our dedicated customer support team is always ready to assist you. Trust vuelose.com
              to make your travel dreams a reality, one flight at a time.
            </p>
            <br />

            <Row>
              <Col lg={4} xs={4} className="text-center">
                <img
                  src={destinationIcon}
                  alt="Destination"
                  className="img-fluid"
                  width="80"
                  height="80"
                />
                <p>
                  <strong>5,000+</strong> <br />
                  Top Destination
                </p>
              </Col>

              <Col lg={4} xs={4} className="text-center">
                <img
                  src={satisfactionIcon}
                  alt="Satisfied Clients"
                  className="img-fluid"
                  width="80"
                  height="80"
                />
                <p>
                  <strong>11,000+</strong> <br />
                  Satisfied Clients
                </p>
              </Col>

              <Col lg={4} xs={4} className="text-center">
                <img
                  src={boardingPassIcon}
                  alt="Booking Completed"
                  className="img-fluid"
                  width="80"
                  height="80"
                />
                <p>
                  <strong>3,000+</strong> <br />
                  Booking Completed
                </p>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="d-none d-lg-block">
            <img
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop"
              alt="Traveler"
              className="img-fluid rounded"
              style={{ height: '500px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
      
    </section>
    </>
  );
};

export default AboutSection;
