
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
import store from './utils/store';
import './appstyle.scss';

import Feature from './containers/Feature/Feature';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Home from './containers/Home'
import CScrollReveal from './containers/CScrollReveal';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='app'>
                    <Header />
                    <div className='container'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/scrollreveal" element={<CScrollReveal />} />
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
