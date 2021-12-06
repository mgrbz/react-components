import React from 'react';
import { connect } from 'react-redux';

import './home.scss';

const Home = (props) => {
    console.log('home props', props)
    return (
        <div>
            Home
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)