


import React from 'react';
import { Provider } from 'react-redux';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


import Footer from './containers/Footer';
import Home from './containers/Home'
import store from './utils/store';

const App = () => {
    return (
        <Provider store={store}>
            <Footer />
            <BrowserRouter>

                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="expenses" element={<About />} />
                    <Route path="invoices" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

const About = () => {
    return(
        <div>
            About
        </div>
    )
}

export default App;
