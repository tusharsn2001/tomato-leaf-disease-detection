import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: 'snow' }}>
            <Container >
                <Row>
                    <Col className='text center py-3'>
                        Copyright &copy;   Tushar 2024
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer