import React from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import Canvas from '../components/Canvas';
import ImageResult from '../components/ImageResult';
import Suggestion from '../components/Suggestion';

const Result = ({ predictionResult, imageURL }) => {


    return (
        <Container>
            <Row>
                <Col lg={6} className='p-3 gridBox'>
                    <Row >
                        {/* image result */}
                        <Col sm={12} md={6} lg={6} xl={6} className='p-3'>
                            <div className='suggestion'>
                                <h3>Original Image</h3>
                                <ImageResult imageURL={imageURL} predictionResult={predictionResult} />
                            </div>


                        </Col>
                        {/* suggestion box */}
                        <Col sm={12} md={6} lg={6} xl={6} className='p-3 '>
                            <div className='suggestion'>
                                <h3>Gray-Scale Image</h3>
                                <Canvas imageURL={imageURL} imageType='Gray' />
                            </div>

                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} className='p-3 '>
                            <div className='suggestion '>
                                <h3>Neagtive Image</h3>
                                <Canvas imageURL={imageURL} val={256} imageType='Negative' />
                            </div>

                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} className='p-3 '>
                            <div className='suggestion '>
                                <h3>HSV</h3>
                                <Canvas imageURL={imageURL} val={256} imageType='HSV' />
                            </div>

                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='p-3 gridBox'>
                    <div className="text-light confidence">
                        <h3>Model Result</h3>
                        <table style={{ width: '90%' }} className='table'>
                            <tr>
                                <th >
                                    Disease Name

                                </th>
                                <th>Confidence</th>
                            </tr>

                            <tr className='text-wrap'>
                                <td >{predictionResult.class}</td>
                                <td className='text-wrap'>{(predictionResult.confidence * 100).toFixed(3)}%</td>
                            </tr>
                        </table>

                    </div>
                    <div >
                        <Suggestion disease_name={predictionResult.class} />
                    </div>
                </Col>


            </Row>



        </Container>
    )
}

export default Result
