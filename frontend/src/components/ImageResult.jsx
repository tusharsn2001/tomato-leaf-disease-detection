import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
// import Jimp from 'jimp';
// import { Jimage } from "react-jimp";

const ImageResult = ({ imageURL }) => {


    return (
        <div>
            <img src={imageURL} alt="Uploaded" className='leaf-image' />


        </div>
    );
};

export default ImageResult;
