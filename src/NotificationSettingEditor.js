import {Component} from "react";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import {withStyles} from "@material-ui/core";
import {overviewStyles} from "./helpers/styleHelper";
import CollapsableTemplatePane from "./CollapsableTemplatePane";
import PreviewableTemplate from "./PreviewableTemplate";
import NotificationSettingService from "fuhrparkjsrest/service/admin/NotificationSettingService";
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import {connect} from "react-redux";
import {saveNotificationSettings} from "./actions/notificatonSettingActions";

const defaultState= {
    appNotificationTemplate:{sendAppNotification:false,notificationTemplate:""},
    mailTemplate:{sendMail:false,subjectTemplate:"",plainTemplate:"",htmlTemplate:""},
    previews:{}
};


const mapStateToProps = state => ({
});
class NotificationSettingEditor extends Component {

    constructor(props, context) {
        super(props, context);
        this.state=defaultState;
        let notificationSetting = props.notificationTypeSetting.notificationSetting;
        if (notificationSetting!==null) {
            this.state.appNotificationTemplate=Object.assign({},defaultState.appNotificationTemplate,notificationSetting.appNotificationTemplate);
            this.state.mailTemplate=Object.assign({},defaultState.mailTemplate,notificationSetting.mailTemplate);
        }
    }

    render() {
        const {appNotificationTemplate,mailTemplate,previews}=this.state;
        const {saveNotificationSettings,classes,notificationTypeSetting}=this.props;
        const setAppNotificationsActivation=activation=>this.setState({appNotificationTemplate:Object.assign({},appNotificationTemplate,{sendAppNotification: activation})});
        const setAppNotificationTemplate=text=>this.setState({appNotificationTemplate:Object.assign({},appNotificationTemplate,{notificationTemplate: text})});

        const setMailActivation=activation=>this.setState({mailTemplate:Object.assign({},mailTemplate,{sendMail: activation})});
        const setMailSubjectTemplate=text=>this.setState({mailTemplate:Object.assign({},mailTemplate,{subjectTemplate: text})});
        const setMailPlainTemplate=text=>this.setState({mailTemplate:Object.assign({},mailTemplate,{plainTemplate: text})});
        const setMailHtmlTemplate=text=>this.setState({mailTemplate:Object.assign({},mailTemplate,{htmlTemplate: text})});

        const fetchPreview=(id,previewText)=>(NotificationSettingService.previewTemplate(notificationTypeSetting.typeIdentifier,previewText)
            .then(preview=>{
                let mod={};
                mod[id]=preview;
                this.setState({previews:Object.assign({},this.state.previews,mod)})
            }));
        const save=()=>{
            saveNotificationSettings(notificationTypeSetting.notificationName,{
              templateName:notificationTypeSetting.notificationName,
              appNotificationTemplate:appNotificationTemplate,
              mailTemplate:mailTemplate
          })
        };
        return (
            <div>
                <Typography variant="headline" className={classes.headline}>Notification Setting for {notificationTypeSetting.notificationName}</Typography>
                <IconButton onClick={save}><SaveIcon/></IconButton>
                <CollapsableTemplatePane name="App Notifications" activated={appNotificationTemplate.sendAppNotification} setActivation={setAppNotificationsActivation}>
                    <PreviewableTemplate preview={previews.app} previewAction={fetchPreview} id="app" name="Notification Template" multiline={false} currentText={appNotificationTemplate.notificationTemplate} setText={setAppNotificationTemplate}/>
                </CollapsableTemplatePane>
                <br/>
                <br/>
                <CollapsableTemplatePane name="Mail Template" activated={mailTemplate.sendMail} setActivation={setMailActivation}>
                    <PreviewableTemplate preview={previews.mailSubject} previewAction={fetchPreview} id="mailSubject" name="Subject Template" multiline={false} currentText={mailTemplate.subjectTemplate} setText={setMailSubjectTemplate}/>
                    <PreviewableTemplate preview={previews.mailPlain} previewAction={fetchPreview} id="mailPlain" name="Plain Template" multiline={true} currentText={mailTemplate.plainTemplate} setText={setMailPlainTemplate}/>
                    <PreviewableTemplate preview={previews.mailHtml} previewAction={fetchPreview} id="mailHtml" name="HTML Template" multiline={true} currentText={mailTemplate.htmlTemplate} setText={setMailHtmlTemplate}/>
                </CollapsableTemplatePane>
                <br/>
                <b>Usable Properties</b>
                <table style={{width:"100%"}}>
                    <thead>
                        <th>Identifier</th>
                        <th>Description</th>
                        <th>Property Type</th>
                        <th>Usage</th>
                    </thead>
                    <tbody>
                    {notificationTypeSetting.notificationType.propertyProvider.properties.
                    map(property=>(<tr>
                                        <td>{property.propertyIdentifier}</td>
                                        <td>{property.propertyDescription}</td>
                                        <td>{property.propertyType}</td>
                                        <td>#{"{"+property.propertyIdentifier+"}"}</td>
                                    </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(overviewStyles)(connect(mapStateToProps,{saveNotificationSettings})(NotificationSettingEditor));