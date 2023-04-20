import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/App";
import { VotingContainer } from "./components/Voting";
import { ResultsContainer } from "./components/Results";
import io from 'socket.io-client'
import './style.css';

const store = configureStore({reducer: reducer});

// eslint-disable-next-line no-restricted-globals
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => store.dispatch({type: 'SET_STATE', state}));

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>   
        <Router>
            <Routes>
                <Route element={<App/>}>
                    <Route path="/" element={<VotingContainer/>}/>
                    <Route path="/results" element={<ResultsContainer/>} />
                </Route>
            </Routes>
        </Router>
    </Provider> 
);