import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import FormContainer from '../components/FormContainer'
import LoginContext from '../Context/LoginContext'
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../util/api'




const LoginScreen = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setLoggedIn, setUserDetail } = React.useContext(LoginContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {
                email,
                password,
            });


            const token = response.data.token;

            // Save the token to localStorage or state
            localStorage.setItem('token', token);
            setLoggedIn(true);
            // Fetch and set User data

            const userData = response.data.user
            console.log(userData)
            setUserDetail(userData)
            navigate('/');

        } catch (error) {
            // Handle login failure, show an alert, or update state accordingly
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }

    }




    return (
        <FormContainer >
            <h1 className='text-center fw-bold text-light'>Sign In</h1>
            <Form onSubmit={submitHandler} className='text-light d-flex flex-column row-gap-4'>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>
            <Row className='py-3'>
                <Col className='text-light'>New Customer? <Link to='/signup'>Sign Up</Link></Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen