import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../assets/context/AuthContext';
import { FaUser, FaPlane, FaSignOutAlt, FaHistory } from 'react-icons/fa';

const DashboardPage = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [depCity, setDepCity] = useState('');
    const [arrCity, setArrCity] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // For now, redirect to home or handle search logic
        // Ideally, this should update context and navigate to flight-info
        navigate('/'); // Redirecting to home for full search experience
    };

    if (!user) {
        return (
            <Container className="mt-5 text-center">
                <h2>Please log in to view your dashboard.</h2>
                <Button variant="primary" onClick={() => navigate('/login')}>Login</Button>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row className="mb-4 align-items-center">
                <Col>
                    <h1 className="display-5">Welcome back, {user?.user?.fullname || 'User'}!</h1>
                    <p className="text-muted">Manage your trips and account details here.</p>
                </Col>
                <Col xs="auto">
                    <Button variant="outline-danger" onClick={handleLogout} className="d-flex align-items-center gap-2">
                        <FaSignOutAlt /> Logout
                    </Button>
                </Col>
            </Row>

            <Row>
                {/* Account Info */}
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="d-flex align-items-center gap-2 mb-3 text-black">
                                <FaUser className="text-primary" /> Account Information
                            </Card.Title>
                            <Card.Text>
                                <strong>Username:</strong> {user?.user?.username}<br />
                                <strong>Email:</strong> {user?.user?.email}<br />
                            </Card.Text>
                            <Button variant="outline-primary" size="sm" className="w-100 mt-2">Edit Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Quick Actions / Recent */}
                <Col md={8} className="mb-4">
                     <Card className="shadow-sm border-0 mb-4">
                        <Card.Body>
                            <Card.Title className="d-flex align-items-center gap-2 mb-3 text-black">
                                <FaPlane className="text-primary" /> Quick Flight Search
                            </Card.Title>
                            <Form onSubmit={handleSearch}>
                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>From</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Airport Code (e.g. DEL)" 
                                                value={depCity}
                                                onChange={(e) => setDepCity(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>To</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Airport Code (e.g. BOM)" 
                                                value={arrCity}
                                                onChange={(e) => setArrCity(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={2} className="d-flex align-items-end mb-3">
                                        <Button variant="primary" type="submit" className="w-100">
                                            Search
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="d-flex align-items-center gap-2 mb-3">
                                <FaHistory className="text-secondary" /> Recent Activity
                            </Card.Title>
                            <p className="text-muted text-center py-4">
                                No recent bookings found. Start planning your next trip!
                            </p>
                            <div className="text-center">
                                <Button variant="link" onClick={() => navigate('/')}>Browse Destinations</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardPage;
