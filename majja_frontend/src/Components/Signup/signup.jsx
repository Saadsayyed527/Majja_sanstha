import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom"  // Import Link from react-router-dom

import axios from "axios";
import usericon from "../Assests/usericon.png";
import passwordicon from "../Assests/passwordicon.png";
import emailicon from "../Assests/mailicon.png";
import phonenumicon from "../Assests/phone-call.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
  const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const signupData = { name, email, phone, password };
    console.log(signupData);



    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', signupData);
      //const data = await response.json();

      if (response.status === 200) {
        console.log("Signup successful!");
        // Clear form on success
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setErrors({});

        navigate('/login');
      }
    } catch (error) {
      console.error("Signup error:", error);
      //console.error("Signup error:", error.message);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="w-100 shadow p-3 bg-white rounded" style={{ maxWidth: '600px' }}>
        <Col md={12} className="p-4">
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <img src={usericon} alt="User Icon" style={{ width: '20px' }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={!!errors.name}
                  required
                />
              </InputGroup>
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <img src={emailicon} alt="Email Icon" style={{ width: '20px' }} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                  required
                />
              </InputGroup>
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <img src={phonenumicon} alt="Phone Icon" style={{ width: '20px' }} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  isInvalid={!!errors.phone}
                  required
                />
              </InputGroup>
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </Form.Group>

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
                  isInvalid={!!errors.password}
                  required
                />
              </InputGroup>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="px-5">
                Sign Up
              </Button>
            </div>

            {/* Span for "Already have an account?" */}
            <div className="text-center mt-3">
              <span>Already have an account? </span>
              <Link to="/login" className="text-primary" style={{ textDecoration: 'underline' }}>
                Login here
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;