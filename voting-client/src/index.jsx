import React from "react";
import ReactDOM from "react-dom/client";
import Voting from "./components/Voting";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Results from "./components/Results";
import App from "./components/App";

require('./style.css')

const routes = <Routes>
        <Route element={<App/>}>
            <Route exact path="/" element={<Voting/>}/>
            <Route exact path="results" element={<Results/>}/>
            <Route path="*" element={<div>Path Not Found!</div>}/>
        </Route>
    </Routes>;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Router>{routes}</Router>
);