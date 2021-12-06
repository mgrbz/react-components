import React from 'react';
import { connect } from 'react-redux';

import './feature.scss';

const Feature = (props) => {
    console.log('Feature props', props)
    return (
        <div className='feature'>
            Feature
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

export default connect(mapStateToProps, mapDispatchToProps)(Feature)