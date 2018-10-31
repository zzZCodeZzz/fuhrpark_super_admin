import {Component} from "react";
import {withStyles} from "@material-ui/core";
import {overviewStyles} from "./helpers/styleHelper";
import TableRow from "@material-ui/core/TableRow/TableRow";
import CustomTableCell from "./tables/CustomTableCell";
import CheckIcon from '@material-ui/icons/RadioButtonChecked';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from "@material-ui/icons/Create";
import React from "react";
import IconButton from "@material-ui/core/IconButton/IconButton";

const nullableIf=(notificationSetting,propertyName1,propertyName2)=>{
    if (notificationSetting===null)
        return (<div/>);
    return notificationSetting[propertyName1][propertyName2]?(<CheckIcon/>):(<UncheckedIcon/>);
}

class NotificationSettingEntry extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const{notificationName,notificationSetting,notificationTypeSetting,editSettings}=this.props;
        const style=notificationSetting===null?{backgroundColor:'#FF0000'}:{};
        return (<TableRow key={notificationName} style={style}>
            <CustomTableCell>{notificationName}</CustomTableCell>
            <CustomTableCell>{nullableIf(notificationSetting,"appNotificationTemplate","sendAppNotification")}</CustomTableCell>
            <CustomTableCell>{nullableIf(notificationSetting,"mailTemplate","sendMail")}</CustomTableCell>
            <CustomTableCell>
                <IconButton onClick={()=>editSettings(notificationName)}><EditIcon/></IconButton>
            </CustomTableCell>
        </TableRow>)
            ;
    }
}

export default withStyles(overviewStyles)(NotificationSettingEntry);