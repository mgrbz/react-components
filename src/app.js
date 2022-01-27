


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
                    <div className='container'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="feature" element={<Feature />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    )
}

const About = () => {
    return(
        <div className='about_wrapper'>
            <h3>Buradaki tüm geliştirmeler yeni componentleri öğrenmek için yapılmaktadır.</h3>
        </div>
    )
}

export default App;
