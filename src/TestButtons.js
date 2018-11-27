import React,{Component} from "react";
import {RequestService,DayTime} from "@zz-dev/fuhrparkjsrest"
import moment from "moment";
import Button from "@material-ui/core/Button/Button";

export class TestButtons extends Component {

    constructor(props, context) {
        super(props, context);
    }

    shiftRequestTest() {

        RequestService.requestShift(moment("2019-04-19"),DayTime.EVENING,"test")
            .then((data)=>console.log(data))
            .catch(err=>{
                console.log(err);
                console.log(err.response);
            });
    }

    render() {
        return (<ul>
           <li><Button onClick={this.shiftRequestTest}>test create shift request</Button></li>
        </ul>);
    }
}