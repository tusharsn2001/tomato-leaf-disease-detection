import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import LoginContext from '../Context/LoginContext';
import { postData } from '../util/api'
import Loading from './Loading';

import Result from '../Screens/Result';
const PredictionApp = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);
    const [status, setStatus] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { isLoggedIn, userDetail } = React.useContext(LoginContext);
    console.log(isLoggedIn)
    const [imageURL, setImageURL] = useState(null);


    const handleImageUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file)
        const imageUrl = URL.createObjectURL(file);  // Create URL for the image
        setSelectedImage(file);
        setImageURL(imageUrl);  // Set the image URL 
        // history.push('/result', { predictionResult: predictionResult, imageURL: imageURL });

    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        console.log(file);
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(file);
        setImageURL(imageUrl);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData();
        formData.append('file', selectedImage);

        console.log('Selected file:', selectedImage);
        console.log('FormData:', formData);
        try {
            const response = await axios.post('http://localhost:8070/predict', formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            if (response.status >= 200 && response.status < 300) {
                console.log('Response', response);
                const result = response.data;
                setPredictionResult(response.data);
                console.log('Prediction:', result.class, 'Confidence:', result.confidence);
                if (isLoggedIn) {
                    await postData(userDetail._id, result.class, result.confidence.toString())
                }
                setStatus(true)
                setIsLoading(false);

            } else {
                // Handle error based on the status code
                console.error(`Error during prediction: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }



    };

    return (
        <Container className='home-container' >
            <Container>
                <Container className="m-3 p-3 d-flex justify-content-center">

                    <div className='d-flex flex-column row-gap-3'>

                        <label htmlFor="images" class="drop-container" id="dropcontainer" onDragOver={handleDragOver} onDrop={handleDrop}>
                            <span class="drop-title">Drop files here</span>
                            or

                            <input type="file" id="images" accept="image/*" required onChange={handleImageUpload} />
                        </label>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Upload</Button>

                    </div>
                </Container>
                {/* {isLoading && <Loading />} */}
                {status && predictionResult && <Result predictionResult={predictionResult} imageURL={imageURL} />}


            </Container>
        </Container>
    );
};

export default PredictionApp;


//  <Container>
//                     <Row>
//                         <div className="text-light suggestion">
//                             <h3 style={{ color: 'green' }}>Prediction Result:</h3>
//                             <table className='table'>
//                                 <tr>
//                                     <th >
//                                         Disease Name

//                                     </th>
//                                     <th>Confidence</th>
//                                 </tr>

//                                 <tr >
//                                     <td >{predictionResult.class}</td>
//                                     <td >{(predictionResult.confidence * 100).toFixed(3)}%</td>
//                                 </tr>
//                             </table>

//                         </div>
//                     </Row>
//                     <Row className="p-3">
//                         {/* image result */}
// <Col sm={12} md={4} lg={4} xl={4} className='p-3'>
//     <div className='suggestion'>
//         <h3>Original Image</h3>
//         <ImageResult imageURL={imageURL} predictionResult={predictionResult} />
//     </div>


// </Col>
// {/* suggestion box */ }
//                         <Col sm={12} md={4} lg={4} xl={4} className='p-3 '>
//                             <div className='suggestion '>
//                                 <h3>Gray-Scale Image</h3>
//                                 <Canvas imageURL={imageURL} imageType='Gray' />
//                             </div>

//                         </Col>
//                         <Col sm={12} md={4} lg={4} xl={4} className='p-3 '>
//                             <div className='suggestion '>
//                                 <h3>Neagtive Image</h3>
//                                 <Canvas imageURL={imageURL} val={256} imageType='Negative' />
//                             </div>

//                         </Col>
//                         <Col sm={12} md={4} lg={4} xl={4} className='p-3 '>
//                             <div className='suggestion '>
//                                 <h3>HSV</h3>
//                                 <Canvas imageURL={imageURL} val={256} imageType='HSV' />
//                             </div>

//                         </Col>
//                     </Row >
//     <div className='p-3'>
//         <Suggestion disease_name={predictionResult.class} />
//     </div>

//                 </Container > 