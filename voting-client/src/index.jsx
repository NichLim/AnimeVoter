import React from "react";
import ReactDOM from "react-dom";
import Voting from "./components/Voting";

const pair = ["Death Note", "Steins;Gate"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Voting pair={pair}/>,
    document.getElementById('app')
);