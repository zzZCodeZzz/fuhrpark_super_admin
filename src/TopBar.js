import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import history from "./history";
import connect from "react-redux/es/connect/connect";
import {requestNotificationSettings} from "./actions/notificatonSettingActions";
import {getEditorInput} from "./reducers/carBrandReducer";
import {getNotificationState} from "./reducers/notificationReducer";

const styles = theme => ({
    grow: {flexGrow: 1,},
    navIconHide: {
        marginLeft: -12,
        marginRight: 20,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    link: {
        color: '#fff !important'
    }
});

const mapStateToProps = state => ({
    notificationState: getNotificationState(state)
});

const TopBar = props => {
    const {classes, logoutAction, appBar,notificationState} = props;
    console.log(notificationState);
    return (
        <AppBar position="absolute" className={appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.grow} onClick={() => history.push('/app')}>
                    Fuhrpark.io SUPER ADMIN
                </Typography>
                <span>{notificationState.amount}</span>
                <span>{notificationState.lastNotification?notificationState.lastNotification.notificationText:""}</span>
                <Button color="inherit" onClick={logoutAction}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired,
    appBar: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps,{})(TopBar));