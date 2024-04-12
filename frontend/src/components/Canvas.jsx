import React, { useEffect, useRef } from 'react';

const Canvas = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const image = new Image();
        image.src = props.imageURL;

        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            switch (props.imageType) {
                case 'Negative':
                    for (let i = 0; i < data.length; i += 4) {
                        data[i] = props.val - data[i]; // Red
                        data[i + 1] = props.val - data[i + 1]; // Green
                        data[i + 2] = props.val - data[i + 2]; // Blue
                    }
                    break;
                case 'Gray':
                    for (let i = 0; i < data.length; i += 4) {
                        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                        data[i] = avg; // Red
                        data[i + 1] = avg; // Green
                        data[i + 2] = avg; // Blue
                    }
                    break;
                case 'HSV':
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i] / 255;
                        const g = data[i + 1] / 255;
                        const b = data[i + 2] / 255;

                        const max = Math.max(r, g, b);
                        const min = Math.min(r, g, b);

                        let h, s, v = max;

                        const d = max - min;
                        s = max === 0 ? 0 : d / max;

                        if (max === min) {
                            h = 0; // achromatic
                        } else {
                            switch (max) {
                                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                                case g: h = (b - r) / d + 2; break;
                                case b: h = (r - g) / d + 4; break;
                            }

                            h /= 6;
                        }

                        data[i] = h * 255;
                        data[i + 1] = s * 255;
                        data[i + 2] = v * 255;
                    }
                    break;
                default:
                    break;
            }

            context.putImageData(imageData, 0, 0);
        };
    }, [props.imageURL, props.imageType, props.val]); // Include props.imageType and props.val in the dependencies array

    return <canvas ref={canvasRef} width={256} height={256} className='leaf-image' />;
};

export default Canvas;
