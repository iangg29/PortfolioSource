import React from "react";
import ReactDOM from "react-dom";
import './assets/main.css';
import App from "./App/App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import "aos/dist/aos.css"
import AOS from 'aos';

AOS.init();

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
