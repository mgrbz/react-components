import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './scrollreveal.scss'

const CScrollReveal = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            delay: 1000,
            reset: true,
            scale: 0.8
        });
        sr.reveal(`.left_component`);
    }, []);
    
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            delay: 1000,
            reset: true,
            scale: 0.8
        });
        sr.reveal(`.right_component`);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            delay: 1000,
            reset: true,
            scale: 0.8
        });
        sr.reveal(`.top_component`);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 2000,
            delay: 1000,
            reset: true,
            scale: 0.8
        });
        sr.reveal(`.bottom_component`);
    }, []);

    return (
        <div className='scrollreveal'>
            <div className='left_component sr_comp'></div>
            <div className='right_component sr_comp'></div>
            <div className='bottom_component sr_comp'></div>
            <div className='top_component sr_comp'></div>
        </div>
    );
}     

export default CScrollReveal;
