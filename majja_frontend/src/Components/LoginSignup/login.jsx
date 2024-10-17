import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import usericon from "../Assests/usericon.png";
import passwordicon from "../Assests/passwordicon.png";
import loginImage from "../Assests/loginbackImg.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./login";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const loginData = { email, password };
    console.log(loginData);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      if (response.status === 200) {
        console.log("Login successful!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="w-100 shadow p-3 bg-white rounded" style={{ maxWidth: '900px' }}>
        
        {/* Left side image */}
        <Col md={6} className="p-0 d-flex justify-content-center align-items-center">
          <img src={loginImage} alt="Login Graphic" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
        </Col>

        {/* Right side form */}
        <Col md={6} className="p-4">
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={handleSubmit}>
            
            {/* Email Field */}
            <Form.Group controlId="formEmail" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <img src={usericon} alt="User Icon" style={{ width: '20px' }} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputGroup>
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <img src={passwordicon} alt="Password Icon" style={{ width: '20px' }} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputGroup>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </Form.Group>

            <div className="text-center mb-3">
              <a href="#" className="text-decoration-none">
                Lost Password? <span className="text-primary">Click Here!</span>
              </a>
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center mb-3">
              <Button variant="primary" type="submit" className="px-5">
                Login
              </Button>
            </div>

            {/* Create an Account Link */}
            <div className="text-center">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-primary" style={{ textDecoration: 'underline' }}>
                Create an Account
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
