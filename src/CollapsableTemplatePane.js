import React,{Component} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import {overviewStyles} from "./helpers/styleHelper";
import {withStyles} from "@material-ui/core";
import ArrowDown from '@material-ui/icons/ArrowDropDown'
import ArrowUp from '@material-ui/icons/ArrowDropUp'
import IconButton from "@material-ui/core/IconButton/IconButton";

const defaultState={
    collapsed:false
};

class CollapsableTemplatePane extends Component {

    constructor(props, context) {
        super(props, context);
        this.state=defaultState;
    }

    render() {
        const {name,activated,setActivation,children}=this.props;
        let showContent = activated && !this.state.collapsed;
        return (
            <div style={{width:"95%",border:"1px solid black"}}>
                <div style={{backgroundColor:"#DDDDDD"}}>
                    <Checkbox onChange={e=>setActivation(e.target.checked)} checked={activated}/>
                    <b>{name}</b>
                    <IconButton onClick={()=>this.setState({collapsed:!this.state.collapsed})} style={{float:"right"}}>{this.state.collapsed?(<ArrowDown/>):(<ArrowUp/>)}</IconButton>
                </div>

                {showContent?children:(<div/>)}
            </div>
        );
    }

}

export default withStyles(overviewStyles)(CollapsableTemplatePane);