import React from 'react';
import { connect } from 'react-redux';

import {
    Link
  } from "react-router-dom";

import './header.scss';

const Header = (props) => {
    console.log('Header props', props)
    return (
        <div className='header'>
            
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