import React, { Component } from "react";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import Typography from "@mui/material";

export class StatusDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <Card>
                <CardHeader title={"Sensor " + this.props.sensorID}/>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Active : {this.props.active ? "true" : "false"}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Status : {this.props.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}