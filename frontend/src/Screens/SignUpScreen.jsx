import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'
import LoginContext from '../Context/LoginContext'
import { signup } from '../util/api'
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../util/api'
const SignupScreen = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { setLoggedIn, setUserDetail } = React.useContext(LoginContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const { success, token, error, user } = await signup(name, email, password, confirmPassword);
        if (success) {



            // Save the token to localStorage or state
            localStorage.setItem('token', token);
            setLoggedIn(true);
            // Fetch and set User data


            setUserDetail(user)
            navigate('/');
        } else {
            alert('Signup Failed \n Incorrect email or password');
        }
        console.log('submit')
    }
    return (
        <FormContainer>
            <h1 className='text-center fw-bold text-light'>Sign Up</h1>
            <Form onSubmit={submitHandler} className='text-light d-flex flex-column row-gap-4'>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign Up</Button>
            </Form>
        </FormContainer>
    )
}

export default SignupScreen