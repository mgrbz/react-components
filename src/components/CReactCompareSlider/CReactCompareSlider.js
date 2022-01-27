import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


import './reactcompareslider.scss'


const CReactCompareSlider = () => {

    return (
        <div className='reactcompareslider_wrapper'>
            <ReactCompareSlider 
                portrait={true} 
                position={80} 
                changePositionOnHover={true}
                handle={<div style={{display: 'grid', height: '100%', placeContent: 'center'}}><button style={{all: 'unset', borderRadius: '50%', fontSize: 56}}>😍</button></div>}
  
                itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1643236294618-d60e33412802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1643133277733-68f9bf8ddee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image two" />}
            />

            //TODO buraya map li versiyonuda eklenecek

            <ReactCompareSlider  //haritalı versiyon başlangıç
                boundsPadding={0}
                itemOne={map1}
                itemTwo={map2}
                onlyHandleDraggable
                position={50}
                style={{
                    height: '100vh',
                    width: '100%'
                }}
            />
        </div>

    );
}     

export function map1() {
    return(
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48125.961943658316!2d28.987312651137437!3d41.07177690676448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1643290265657!5m2!1str!2str" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}

export function map2() {
    return(
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55833.63553619735!2d28.987312651137437!3d41.07177690676448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2str!4v1643290326504!5m2!1str!2str" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}


export default CReactCompareSlider;
