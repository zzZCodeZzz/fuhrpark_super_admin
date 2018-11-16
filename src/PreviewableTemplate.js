import {Component} from "react";
import {overviewStyles} from "./helpers/styleHelper";
import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import {withStyles} from "@material-ui/core";
import UpdatePreviewIcon from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";

class PreviewableTemplate extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {name,multiline,currentText,setText,preview,id,previewAction}=this.props;

        return (
            <div style={{width:"100%",display:"block"}}>
                <div style={{width:"100%",display:"inline-block"}}>
                    <div style={{width:"70%",float:"left"}}>
                        <p>{name}</p>
                        <TextField value={currentText} multiline={multiline} style={{width:"100%"}}
                            onChange={e=>setText(e.target.value)}/>
                    </div>
                    <div style={{width:"30%",float:"left"}}>
                        <p>Preview <IconButton onClick={()=>previewAction(id,currentText)}><UpdatePreviewIcon/></IconButton></p>
                        <div dangerouslySetInnerHTML={{__html:preview}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(overviewStyles)(PreviewableTemplate);