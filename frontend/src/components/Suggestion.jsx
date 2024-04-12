import React from 'react'
import diseases from '../assets/lookupTable'
// import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import Cards from './Cards';
import Accordian from './Accordian';

const Suggestion = ({ disease_name }) => {

    console.log(disease_name)
    console.log(diseases[disease_name])
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}><Cards title='Description' content={diseases[disease_name].description} /></Col>
                    <Col lg={6} md={6} sm={12}><Cards title='Suggestions' content={diseases[disease_name].suggestions} /></Col>
                    <Col lg={6} md={6} sm={12}><Cards title='Solutions' content={diseases[disease_name].solutions} /></Col>
                    <Col lg={6} md={6} sm={12}><Cards title='Chemicals' content={diseases[disease_name].chemicals} /></Col>
                    <Col lg={6} md={6} sm={12}><Cards title='Pesticides' content={diseases[disease_name].pesticides} /></Col>

                </Row>
            </Container>
            {/* <Container>
                <Accordian title='Description' content={diseases[disease_name].description} />
                <Accordian title='Suggestions' content={diseases[disease_name].suggestions} />
                <Accordian title='Solutions' content={diseases[disease_name].solutions} />
                <Accordian title='Chemicals' content={diseases[disease_name].chemicals} />
                <Accordian title='Pesticides' content={diseases[disease_name].pesticides} />
            </Container> */}
        </>
    )
}

export default Suggestion
