import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ScrollReveal from 'scrollreveal';
import { Link } from "react-router-dom";

import './header.scss';

const Header = (props) => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        });

        sr.reveal(`#header`);
    }, []);

    return (
        <div className='header' id='header'>
            
            <Link className='button' to="/scrollreveal">ScrollReveal</Link>
            <Link className='button' to="/about">About</Link>
            <Link className='button' to="/feature">Feature</Link>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return(
        state
    )
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)