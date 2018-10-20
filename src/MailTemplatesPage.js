import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import axios from "axios";

class MailTemplatesPage extends React.Component {

    handleSubmit = () => {
        axios.post('https://fuhrparkapi.zz-dev.de/bla/blub',
            {
                templateName: this.state.templateName,
                templateContent: this.state.templateContent
            },
            {
                headers: {'Authorization': 'Bearer ' + this.state.token}
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
            templateName: "",
            templateContent: "",
            token: ""
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
                <p>Mail Templates!!!</p>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Template Name</p>
                    <TextField onChange={this.handleChange('templateName')}/>

                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Template Content</p>
                    <TextField onChange={this.handleChange('templateContent')}/>

                </div>

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Sumbit
                </Button>

                token
                <TextField onChange={this.handleChange('token')}/>

            </div>
        )
    }
}

export default MailTemplatesPage;