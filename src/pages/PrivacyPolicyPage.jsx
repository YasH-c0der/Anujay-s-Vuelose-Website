import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="container-fluid title-bg py-5" style={{ backgroundColor: '#4a5277' }}>
        <Container>
          <Row>
            <Col xs={12} className="text-center text-white">
              <h2><em>Privacy Policy</em></h2>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="list-inline-item text-white">/</li>
                <li className="list-inline-item active text-white">Privacy Policy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="pt-5 pb-5 inner-page">
        <Col sm={12}>
          <h2>Privacy Policy</h2>

          <section className="mb-4">
            <h5>1. Introduction</h5>
            <p>
              vuelose.com is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.vuelose.com">https://www.vuelose.com</a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy Policy carefully. If you do not agree with the terms of this privacy Policy, please do not access the site.
            </p>
          </section>

          <section className="mb-4">
            <h5>2. Information We collect</h5>
            <p>
              We may collect personal information from you when you visit our site, make a booking, subscribe to our newsletter, respond to a survey, fill out a form, or otherwise interact with us. This information may include:
            </p>
            <ul>
              <li>Contact information (e.g., name, email address, phone number)</li>
              <li>Payment information (e.g., credit card details)</li>
              <li>Booking details (e.g., flight information, hotel preferences)</li>
              <li>Demographic information (e.g., age, gender, location)</li>
              <li>Device information (e.g., IP address, browser type)</li>
              <li>Cookies and tracking technologies (e.g., web beacons, pixels)</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5>3. How We Use Your Information</h5>
            <p>
              We may use the information we collect from you in the following ways:
            </p>
            <ul>
              <li>To process and fulfill your bookings and transactions</li>
              <li>To communicate with you and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To personalize your experience and tailor content and offers</li>
              <li>To send you promotional emails, newsletters, and marketing communications</li>
              <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5>4. Information Sharing</h5>
            <p>
              We may share your information with third parties under certain circumstances, including:
            </p>
            <ul>
              <li>Service providers and partners who assist with our operations</li>
              <li>Legal authorities, if required by law or to protect our rights</li>
              <li>Business transfers, in connection with a merger, sale, or acquisition</li>
              <li>With your consent or as otherwise disclosed at the time of data collection</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5>5. Security of Your Information</h5>
            <p>
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-4">
            <h5>6. Your Choices and Rights</h5>
            <p>
              You may update your account information, unsubscribe from marketing communications, and request to access, correct, or delete your personal information by contacting us.
            </p>
          </section>

          <section className="mb-4">
            <h5>7. Children's Privacy</h5>
            <p>
              Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-4">
            <h5>8. Changes to This Privacy Policy</h5>
            <p>
              We may update this privacy Policy from time to time. We will notify you of any changes by posting the new Policy on this page with a revised date.
            </p>
          </section>

          <section className="mb-4">
            <h5>9. Contact Us</h5>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@vuelose.com">privacy@vuelose.com</a>.
            </p>
          </section>

          <section>
            <p>
              <em>Disclaimer: This is a sample privacy Policy. Please consult legal counsel to ensure compliance with applicable laws and regulations.</em>
            </p>
          </section>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
