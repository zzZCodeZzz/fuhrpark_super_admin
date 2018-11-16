import {Component} from "react";
import {Route} from "react-router-dom";
import CarBrands from "./CarBrands";
import AlertDialog from "./AlertDialog";
import InsertDialog from "./InputDialog";
import React from "react";
import NotificationSettingList from "./NotificationSettingList";
import {overviewStyles} from "./helpers/styleHelper";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {getNotificationSetting, getNotificationSettings} from "./reducers/notificiationSettingReducer";
import {requestNotificationSettings} from "./actions/notificatonSettingActions";
import NotificationSettingEditor from "./NotificationSettingEditor";

const defaultState={
    editing:null
};
const mapStateToProps = state => ({
    notificationSettings: getNotificationSettings(state)
});

class NotificationSettings extends Component {
    constructor(props){
        super(props);
        this.state = defaultState;
    }


    componentDidMount() {
        this.props.requestNotificationSettings();
    }

    render() {
        const {state} = this;
        const {match, classes,notificationSettings} = this.props;
        const editNotificationSetting= templateName=>this.setState({editing:templateName});
        const abortEditSetting=()=>this.setState(defaultState);
        const mainComponent=
                routeProps => (state.editing===null?
                                (<NotificationSettingList {...routeProps} notificationSettings={notificationSettings} editSettings={editNotificationSetting} classes={classes} />):
                                (<NotificationSettingEditor closeEditor={()=>this.setState({editing:null})} notificationTypeSetting={getNotificationSetting(notificationSettings,state.editing)}/>));
        return (<div>
                <Route exact path={match.path}
                       render={mainComponent}
                />
            </div>
        );
    }
}

export default withStyles(overviewStyles)(connect(mapStateToProps,{requestNotificationSettings})(NotificationSettings));