import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import axios from "axios";

export default class CarBrands extends React.Component {

    handleSubmit = () => {
        axios.post('https://fuhrparkapi.zz-dev.de/bla/blub',
            {
                shortHand: this.state.shortHand,
                fullName: this.state.fullName
            },
            {
                //authConfig
            }
        ).then(
            resp => {
                console.log(resp);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    constructor() {
        super();
        this.state = {
            shorthand: "",
            fullName: ""
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <p>New CarBrand</p>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Shorthand</p> <TextField onChange={this.handleChange('shorthand')}/>

                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Full Name</p>

                    <TextField onChange={this.handleChange('fullName')}/>

                </div>

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Submit
                </Button>

            </div>
        );
    }
}