import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import axios from "axios";

export default class CarBrands extends React.Component {

    handleSubmit = () => {

        console.log(this.state.shorthand);

        const data = {
            brandCode: this.state.shorthand,
            fullBrandName: this.state.fullName
        };

        axios({
            method: 'post',
            url: 'https://fuhrparkapi.zz-dev.de/admin/carbrand/',
            headers: {'Authorization': 'Bearer ' + this.state.token},
            data: data,

        });
    };



    constructor() {
        super();
        this.state = {
            shorthand: "",
            fullName: "",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDAwOTM3ODMsInVzZXJfbmFtZSI6InNlZGlyIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQU5ZX0FETUlOIiwiUk9MRV9BRE1JTiJdLCJqdGkiOiJjZDg1OGFiMS1jNmNiLTRhYTQtOGRmNC04MTkyZDM1MTRlYWYiLCJjbGllbnRfaWQiOiJmdWhycGFyay5pbyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSIsInRydXN0Il19.SMmPw2jlvfoVG_Vhb9CPyJi_IerfKOKD6XmeA92-KW8"
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

                oken
                <TextField onChange={this.handleChange('token')}/>
            </div>
        );
    }
}