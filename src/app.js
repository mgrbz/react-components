


import React from 'react'
import { Provider } from 'react-redux';


import Home from './containers/Home'

import store from './utils/store';

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}


export default App;
