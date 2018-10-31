import {Component} from "react";
import {overviewStyles} from './helpers/styleHelper';
import {getNotificationSettings} from "./reducers/notificiationSettingReducer";
import {requestNotificationSettings} from "./actions/notificatonSettingActions";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import CustomTableCell from "./tables/CustomTableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import CarBrandEntry from "./CarBrandEntry";
import Button from "@material-ui/core/Button/Button";
import CarBrandEditor from "./CarBrandEditor";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import DataTable from "./tables/DataTable";
import React from "react";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import NotificationSettingEntry from "./NotificationSettingEntry";

class NotificationSettingList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes,notificationSettings,editSettings}=this.props;

        const tableHeader = (<TableHead>
            <TableRow>
                <CustomTableCell style={{width:"30%"}}>Name</CustomTableCell>
                <CustomTableCell style={{width:"10%"}}>Send InApp</CustomTableCell>
                <CustomTableCell style={{width:"10%"}}>Send Mail</CustomTableCell>
                <CustomTableCell/>
            </TableRow>
        </TableHead>);

        const tableContent = (<TableBody>{Object.values(notificationSettings).map(row => {
                const {notificationName,notificationSetting} = row;
                return (<NotificationSettingEntry key={notificationName} editSettings={editSettings} notificationName={notificationName} notificationSetting={notificationSetting}/>);
            }
        )}</TableBody>);

        return (<div>
                <Typography variant="headline" className={classes.headline}>Notification Settings</Typography>
                <DataTable content={tableContent} header={tableHeader} />
            </div>
        );
    }
}

export default withStyles(overviewStyles)(NotificationSettingList);