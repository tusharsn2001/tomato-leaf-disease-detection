import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import LoginContext from '../Context/LoginContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'


const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setLoggedIn, setUserDetail } = useContext(LoginContext)

    const handleLogout = () => {
        setLoggedIn(false)
        setUserDetail(null)
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <header >
            <Navbar expand="lg" collapseOnSelect className='head'>
                <Container>

                    <Navbar.Brand href="/" className='d-flex align-items-center'>
                        <img src={logo} style={{ height: '50px', width: 'auto' }}></img>
                        <LinkContainer to='/'>
                            <Nav.Link className='text-light'><span style={{ fontWeight: '600', fontSize: '30px' }}>Tomato Guard</span></Nav.Link>
                        </LinkContainer>

                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='ms-auto'>
                            {isLoggedIn ? (
                                <NavDropdown title="You" id="basic-nav-dropdown"
                                    className='bg-info rounded float-end'>
                                    <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login' className='float-end bg-success rounded'>
                                    <Nav.Link className='text-light' href="/login"><span style={{ fontWeight: '600', fontSize: '20px' }}>Sign In</span></Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
