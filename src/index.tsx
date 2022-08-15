import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";

import './index.css';

import root_routes, {root_pages} from "./vector";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route index element={root_pages[0].second} />
                {root_routes()}
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
