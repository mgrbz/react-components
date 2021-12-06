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
            Header

            <Link to="/about">About</Link> |{" "}
            <Link to="/feature">Feature</Link>
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