import React from 'react';
import { connect } from 'react-redux';

import {
    Link
  } from "react-router-dom";

import './footer.scss';

const Footer = (props) => {
    console.log('Footer props', props)
    return (
        <div className='footer'>
            Footer
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)