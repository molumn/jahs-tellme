import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Routes} from "react-router-dom";

import './index.css';

import root_routes from "./vector";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {root_routes()}
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
