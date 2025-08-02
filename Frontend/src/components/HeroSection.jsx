import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaPlane } from 'react-icons/fa';
import bgImage from '../assets/images/slider-1.jpg';
import axios from "axios";

const HeroSection = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers] = useState('Economy - Adults: 1 - Children: 0');

  const handleSubmit = (e) => {
    console.log('Search submitted:', { tripType, fromAirport, toAirport, departureDate, returnDate, travelers });
    axios.get("/api/").then(res => console.log("Hello"))
  };

  return (
    <div
      className="container-fluid banner-bg p-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
        position: 'relative'
      }}
    >
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}></div>

      <Container className="searh-engain position-relative" style={{ paddingTop: '80px', zIndex: 2 }}>
        <Row>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <div className="marg-top text-white">
              <p className="fs-3">35k People booked dream place</p>
              <h1>Escape the ordinary and embrace the beauty of the world!</h1>
            </div>
          </Col>

          <Col xs={12} sm={12} lg={12} xl={12} className="p-0">
            <div className="tab-content d-block">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="form-check form-check-inline mb-3">
                  <Form.Check
                    type="radio"
                    id="roundTrip"
                    label="Round Trip"
                    name="tripType"
                    checked={tripType === 'roundTrip'}
                    onChange={() => setTripType('roundTrip')}
                    className="text-light"
                  />
                </div>
                <div className="form-check form-check-inline">
                  <Form.Check
                    type="radio"
                    id="oneWay"
                    label="One Way"
                    name="tripType"
                    checked={tripType === 'oneWay'}
                    onChange={() => setTripType('oneWay')}
                    className="text-light"
                  />
                </div>

                <Row className="parent_lable g-2 bg-white p-4 rounded">
                  <Col xs={12} sm={6} lg={2} xl={2}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: 'black' }}>From Airport</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaPlane />
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Flying From"
                          value={fromAirport}
                          onChange={(e) => setFromAirport(e.target.value)}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} lg={2} xl={2}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: 'black' }}>To Airport</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaPlane />
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Flying To"
                          value={toAirport}
                          onChange={(e) => setToAirport(e.target.value)}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} lg={2} xl={2}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: 'black' }}>Departure Date</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaCalendarAlt />
                        </span>
                        <Form.Control
                          type="date"
                          placeholder="MM/DD/YYYY"
                          value={departureDate}
                          onChange={(e) => setDepartureDate(e.target.value)}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} lg={2} xl={2}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: 'black' }}>Return Date</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaCalendarAlt />
                        </span>
                        <Form.Control
                          type="date"
                          placeholder="MM/DD/YYYY"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          disabled={tripType === 'oneWay'}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} lg={2} xl={2}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: 'black' }}>Add Travelers</Form.Label>
                      <div className="dropdown">
                        <div className="class-selection-container">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaUser />
                            </span>
                            <Form.Control
                              type="text"
                              readOnly
                              value={travelers}
                              onClick={() => console.log('Open travelers dropdown')}
                            />
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} lg={2} xl={2} className="d-grid gap-2">
                    <Button variant="primary" type="button" onClick={handleSubmit} className="h-75 mt-4">
                      Search Flights
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
