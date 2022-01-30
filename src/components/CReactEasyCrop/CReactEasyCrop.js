import React, { useCallback, useState }  from 'react';
import Cropper from 'react-easy-crop';

import './reacteasycrop.scss'




const CReactEasyCrop = () => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }, []);

    const crop1 = () => {
        return(

        <div className='section'>
            <div className="crop-container">
                <Cropper
                video="https://vid.ly/5u4h3e?content=video"
                crop={crop}
                zoom={zoom}
                aspect={5 / 3}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onImageLoaded={res => {
                    console.log(res)
                }}
                />
            </div>
            <div className="controls" />
            
        </div>
        )
    };

    const crop2 = () => {
        return(

        <div className='section'>
                <div className="crop-container">
                    <Cropper
                    image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    />
                </div>
                <div className="controls">
                    <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e) => {
                        setZoom(e.target.value)
                    }}
                    className="zoom-range"
                    />
                </div>
        </div>
        )
    };

    return (
        <div className='reacteasycrop_wrapper'>

            <div className='section'>
                 {
                     crop1()
                 }
            </div>


            <div className='section'>
                    
                 {
                    //  crop2()
                 }
                
            </div>
            
            
        </div>
    );
}     



export default CReactEasyCrop;
