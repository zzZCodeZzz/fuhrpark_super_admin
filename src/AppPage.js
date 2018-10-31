import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";
import TopBar from "./TopBar";
import CarBrandEditor from './CarBrandEditor';
import MenuContent from './MenuContent';
import {createMuiTheme} from "@material-ui/core";
import CarBrands from './CarBrands';
import CarBrandComponent from "./CarBrandComponent";
import {logoutACTION} from "./actions/authActions";
import NotificationSettings from "./NotificationSettings";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: '100vh'
    },
    appBar: {zIndex: theme.zIndex.drawer + 1},
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        height: "100%",
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    fullHeight: {height: "100%"},
    drawerTop: {marginTop: 64},
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        paddingBottom: '49px'
    },
});

class AppPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        const {classes, theme, match} = this.props;
        const {state} = this;
        const logoutAction=()=>console.log("logout");
        return (
            <div className={classes.root}>
                <TopBar logoutAction={logoutAction} appBar={classes.appBar} />
                <Hidden smDown implementation="css" className={classes.drawerTop}>
                    <Drawer
                        variant="permanent"
                        open
                        style={{height: '100%'}}
                        classes={{paper: classes.drawerPaper}}
                    ><MenuContent toolbar={classes.toolbar} /></Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Route path={`/app/carBrands`} component={CarBrandComponent} />
                    <Route path={`/app/notificationSettings`} component={NotificationSettings} />
                </main>

            </div>
        );
    }
}

AppPage.propTypes = {
    match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
};
export default withStyles(styles, {withTheme: true})(connect(null, {logoutAction: logoutACTION})(AppPage));