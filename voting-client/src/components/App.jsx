import React from "react";
import { List, Map } from "immutable";
import Voting from "./Voting";

const pair = List.of('Death Note', 'Steins;Gate');
const tally = Map({"Death Note": 5, "Steins;Gate": 4});

export default class App extends React.Component {
    render(){
        return <Voting pair={pair} tally={tally}/>;
    }
}