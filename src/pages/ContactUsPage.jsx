import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div className="container-fluid title-bg py-5" style={{ backgroundColor: '#4a5277' }}>
        <Container>
          <Row>
            <Col xs={12} className="text-center text-white">
              <h2><em>Contact Us</em></h2>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="list-inline-item text-white">/</li>
                <li className="list-inline-item active text-white">Contact Us</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6}>
            <Row className="contct-pg">
              <Col md={4}>
                <div className="features-item p-3 mb-3 bg-light rounded">
                  <div className="features-content">
                    <h6 className="title">Contact Number</h6>
                    <p className="mb-0">
                      <a href="tel:+1 (888) 394-9616" className="text-decoration-none">
                        <FaPhone className="me-2" /> +1 (888) 394-9616
                      </a>
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="features-item p-3 mb-3 bg-light rounded">
                  <div className="features-content">
                    <h6 className="title">Email Id</h6>
                    <p className="mb-0">
                      <a href="mailto:info@vuelose.com" className="text-decoration-none">
                        <FaEnvelope className="me-2" /> info@vuelose.com
                      </a>
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="features-item p-3 mb-3 bg-light rounded">
                  <div className="features-content">
                    <h6 className="title">Address</h6>
                    <p className="mb-0">
                      <FaMapMarkerAlt className="me-2" /> 3 PINE TREE DR WESTAMPTON, NJ 08060
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={12} className="mt-5">
                <h6>Contact Us</h6>
                <Form className="row g-3" onSubmit={handleSubmit}>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="tel"
                      placeholder="Your Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col xs={12}>
                    <Button type="submit" variant="primary">Send message</Button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Col>

          <Col md={6} className="mt-3 mt-md-0">
            <div style={{ width: '100%', height: '500px', backgroundColor: '#eee', borderRadius: '4px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.6592582177666!2d-74.80720168429846!3d39.934654279423095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1343b84464631%3A0x9e6b5778b87d2f6a!2s3%20Pine%20Tree%20Dr%2C%20Westampton%2C%20NJ%2008060%2C%20USA!5e0!3m2!1sen!2sin!4v1618229988095!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;
