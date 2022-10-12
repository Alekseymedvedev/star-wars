import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import App from "./App";


const store = setupStore()
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,

    document.getElementById('root')
);
