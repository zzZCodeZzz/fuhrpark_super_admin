import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import axios from "axios";

class MailTemplatesPage extends React.Component {

    checkBlank = (data) => {
        return (data.length === 0 || !data.trim());
    };

    handleSubmit = () => {
        axios.post('https://fuhrparkapi.zz-dev.de/admin/template/',
            {
                templateName: this.state.templateName,
                htmlTemplate: this.checkBlank(this.state.htmlTemplate) ? null : this.state.htmlTemplate,
                plainTemplate: this.state.plainTemplate,
                subjectTemplate: this.state.subjectTemplate,
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
                <p>Mail Templates!!!</p>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>Template Name</p>
                    <TextField
                        onChange={this.handleChange('templateName')}/>

                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>htmlTemplate</p>
                    <TextField
                        multiline={true}
                        onChange={this.handleChange('htmlTemplate')}/>

                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>plainTemplate</p>
                    <TextField
                        multiline={true}
                        onChange={this.handleChange('plainTemplate')}/>

                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <p>subjectTemplate</p>
                    <TextField
                        multiline={true}
                        onChange={this.handleChange('subjectTemplate')}/>

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