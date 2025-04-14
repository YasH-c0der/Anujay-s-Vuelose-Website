import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import promoBanner1 from '../assets/images/promo-banner.jpg';
import promoBanner2 from '../assets/images/promo-banner2.jpg';

const PromotionSection = () => {
  return (
    <div className="trend-destin-bg py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row>
          <Col md={12} sm={12}>
            <Row>
              <Col md={6} className="mb-4">
                <div className="position-relative">
                  <img
                    src={promoBanner1}
                    alt="Special Offer"
                    className="img-fluid rounded"
                    style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      borderRadius: '0.25rem'
                    }}
                  ></div>
                  <div
                    className="position-absolute text-white"
                    style={{ top: '30px', left: '30px' }}
                  >
                    <h3 className="mb-2">CALL NOW & GET</h3>
                    <h2 className="mb-3">25% EXTRA DISCOUNT</h2>
                    <button
                      className="btn btn-warning"
                      onClick={() => window.location.href='tel:+1 (888) 394-9616'}
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="position-relative">
                  <img
                    src={promoBanner2}
                    alt="Travel Sale"
                    className="img-fluid rounded"
                    style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      borderRadius: '0.25rem'
                    }}
                  ></div>
                  <div
                    className="position-absolute text-white"
                    style={{ top: '30px', left: '30px' }}
                  >
                    <h3 className="mb-2">Time to travel</h3>
                    <h2 className="mb-3">SALE <span className="text-warning">UP TO 25% OFF</span></h2>
                    <h4 className="mb-3">SPECIAL OFFER</h4>
                    <button
                      className="btn btn-warning"
                      onClick={() => window.location.href='tel:+1 (888) 394-9616'}
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromotionSection;
