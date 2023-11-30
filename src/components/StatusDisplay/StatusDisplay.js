import React, { Component } from "react";

export class StatusDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div>
                <p>Active : {this.props.active ? "true" : "false"}</p>
                <p>Status : {this.props.status}</p>
            </div>
        );
    }
}