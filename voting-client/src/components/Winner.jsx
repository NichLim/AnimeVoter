import React from "react";

export default class Winner extends React.Component {
    render() {
        return <div className="winner">
            The Winner is {this.props.winner}!
        </div>;
    }
};