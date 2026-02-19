import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../assets/context/AuthContext';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError('');
        setFormData({ fullname: '', email: '', username: '', password: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'text' && e.target.id === 'formBasicName' ? 'fullname' : e.target.type === 'email' ? 'email' : e.target.id === 'formBasicUsername' ? 'username' : 'password']: e.target.value });
    };

    // Better handler for specific fields
    const handleInputChange = (field) => (e) => {
        setFormData({...formData, [field]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const url = isLogin 
            ? '/api/v1/users/login'
            : '/api/v1/users/register';

        try {
            const payload = isLogin 
                ? { email: formData.email, password: formData.password } // Login needs email/username & password. Using email for simplicity or both if UI allows. Backend accepts both.
                : formData; // Register needs all

            // For login, backend checks username OR email. Let's send email as email.
            // If user enters username in email field, we might need to handle that, but for now let's assume email.
            
            const response = await axios.post(url, payload, {
                withCredentials: true // Important for cookies
            });

            if (response.data.success) {
                // If login, context update. If register, maybe auto-login or ask to login?
                // Backend register returns created user.
                if (isLogin) {
                    login(response.data.data);
                    navigate('/dashboard');
                } else {
                    // Auto login after register? Or just switch to login?
                    // Let's switch to login view and pre-fill or just message
                    setIsLogin(true);
                    setError('Registration successful! Please login.'); // Using error for success msg temporarily or add success state
                    setFormData({ ...formData, password: '' });
                }
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '400px', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Card.Body>
                    <h2 className="text-center mb-4" style={{ color: '#1d1d21' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    {error && <Alert variant={error.includes('successful') ? 'success' : 'danger'}>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    value={formData.fullname}
                                    onChange={handleInputChange('fullname')}
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Choose a username" 
                                    value={formData.username}
                                    onChange={handleInputChange('username')}
                                    required 
                                />
                            </Form.Group>
                            </>
                        )}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={formData.password}
                                onChange={handleInputChange('password')}
                                required 
                            />
                        </Form.Group>
                        {isLogin && (
                            <div className="d-flex justify-content-end mb-3">
                                <Link to="#" style={{ fontSize: '0.9rem', color: '#1d1d21' }}>Forgot password?</Link>
                            </div>
                        )}
                        <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#1d1d21', border: 'none' }}>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </Button>
                    </Form>
                    <div className="text-center">
                        <span style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                        </span>
                        <Button variant="link" onClick={toggleForm} style={{ padding: 0, color: '#1d1d21', fontWeight: 'bold', textDecoration: 'none' }}>
                            {isLogin ? 'Sign Up' : 'Login'}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;
