import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-bg pt-4 pb-4">
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={8} xl={8}>
              <Row>
                <Col xs={12} sm={6} lg={12} xl={12} className="top-margin">
                  <h6>Quick Links</h6>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-start">
                    <li className="me-3"><Link to="/about-us">About Us</Link></li>
                    <li className="me-3"><Link to="/terms-conditions">Terms & Conditions</Link></li>
                    <li className="me-3"><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li className="me-3"><Link to="/contact-us">Contact Us</Link></li>
                    <li className="me-3"><Link to="/refund-policy">Refund Policy</Link></li>
                    <li className="me-3"><Link to="/site-map">Site Map</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col xs={12} sm={6} lg={12} xl={12} className="top-margin">
              <h6>Contact Info</h6>
              <ul className="list-unstyled d-flex flex-wrap justify-content-start">
                <li className="me-3">
                  <a href="mailto:info@vuelose.com">
                    <FaEnvelope className="me-2" /> info@vuelose.com
                  </a>
                </li>
                <li className="me-3">
                  <a href="tel:+1 (800) 231-6694">
                    <FaPhone className="me-2" /> +1 (800) 394-9616
                  </a>
                </li>
                <li className="me-3">
                  <FaMapMarkerAlt className="me-2" /> 3 PINE TREE DR WESTAMPTON, NJ 08060
                </li>
              </ul>
            </Col>

            <Col xs={12} sm={5} lg={5} className="mb-5 mt-5">
              <h6>Secure Payment System</h6>
              <div className="payment_icon align-items-center m-auto">
                <ul className="d-flex list-unstyled">
                  <li className="me-2">
                    <img src="https://via.placeholder.com/40x25/cccccc/666666?text=VISA" alt="Visa" />
                  </li>
                  <li className="me-2">
                    <img src="https://via.placeholder.com/40x25/cccccc/666666?text=MC" alt="MasterCard" />
                  </li>
                  <li className="me-2">
                    <img src="https://via.placeholder.com/40x25/cccccc/666666?text=AMEX" alt="Amex" />
                  </li>
                  <li className="me-2">
                    <img src="https://via.placeholder.com/40x25/cccccc/666666?text=DISC" alt="Discover" />
                  </li>
                  <li className="me-2">
                    <img src="https://via.placeholder.com/40x25/cccccc/666666?text=PAY" alt="PayPal" />
                  </li>
                </ul>
              </div>
            </Col>

            <Col xl={6} sm={12} lg={6}>
              <Form className="needs-validation">
                <div>
                  <h4 className="mb-1">Join our newsletter</h4>
                  <p>We'll send you a nice letter once per week. No spam.</p>
                  <Row className="g-2">
                    <Col md={9} xs={8}>
                      <Form.Control
                        type="email"
                        placeholder="Your email address"
                        aria-label="Email"
                      />
                      <div className="invalid-feedback">Please enter email.</div>
                    </Col>
                    <Col md={3} xs={4}>
                      <div>
                        <Button variant="dark" className="mb-0">Subscribe</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Col>

            <Col xs={12} sm={12} lg={12} xl={12} className="top-margin">
              <p>
                <strong>Disclaimer : </strong> Air carriers and other carrier specialist cooperatives offering travel or other administrations in our entry are free sellers and not vuelose.com specialists or workers. vuelose.com shall not be bound by any representation, abandonment, neglect, claim, confirmation, invasion or neglect with respect to any other travel specialist cooperative or any private mischief, death toll, damage to property or any other damage or cost that occurs in this way. vuelose.com will not be responsible and will not recover any additional expenses, exclusion, delay, diversion or activity of any administration or authority in case of any error, suspension, overbooking, attack or other reason beyond rapid control.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container-fluid footer-bottom">
        <Container className="footer-border">
          <Row>
            <Col xs={12} lg={12}>
              <p>Copyright © 2025 vuelose.com All Rights Reserved. (Parent Company : AEROSKYFLIGHT LLC)</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="fixed-bottom d-block d-md-block d-lg-none">
        <div className="pull-right phone-number d-lg-block">
          <ul className="list-unstyled">
            <li className="d-flex align-items-center justify-content-around">
              <div>
                <h5 className="m-1 p-0 text-start">
                  <p className="mb-0">Toll-free number</p>
                  <a href="tel:+1 (800) 231-6694">+1 (800) 231-6694</a>
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
