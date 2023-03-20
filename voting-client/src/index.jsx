import React from "react";
import ReactDOM from "react-dom";
import Voting from "./components/Voting";

const pair = ["Death Note", "Steins;Gate"];

ReactDOM.render(
    <Voting pair={pair}/>,
    document.getElementById('app')
);