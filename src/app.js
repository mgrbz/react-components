


import React from 'react';
import { Provider } from 'react-redux';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import './appstyle.scss';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './containers/Home'
import store from './utils/store';

const App = () => {
    return (
        <Provider store={store}>
            
            <BrowserRouter>
                <div className='app'>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="feature" element={<Feature />} />
                    </Routes>

                
                <Footer />

                </div>
            </BrowserRouter>
        </Provider>
    )
}

const About = () => {
    return(
        <div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
            <div>asdsadasd</div>
        </div>
    )
}

export default App;
