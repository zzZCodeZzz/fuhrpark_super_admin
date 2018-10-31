import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import axios from "axios";
import {getCarBrands} from "./reducers/rootReducer";
import {withStyles} from "@material-ui/core";
import {overviewStyles} from "./helpers/styleHelper";
import {getEditorInput} from "./reducers/carBrandReducer";
import {setCarBrandEditorInput} from "./actions/carBrandsActions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    input: getEditorInput(state)
});
class CarBrandEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            shorthand: "",
            fullName: "",
         }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        console.log(this.props);
        const {input,setCarBrandEditorInput}=this.props;
        return (
            <div>
                <p>New CarBrand</p>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Shorthand</p> <TextField value={input.brandCode} onChange={(e) => { setCarBrandEditorInput({brandCode:e.target.value});}}/>

                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Full Name</p>

                    <TextField value={input.fullBrandName} onChange={(e) => { setCarBrandEditorInput({fullBrandName:e.target.value});}}/>

                </div>

            </div>
        );
    }
}

export default withStyles(overviewStyles)(connect(mapStateToProps,{setCarBrandEditorInput})(CarBrandEditor));