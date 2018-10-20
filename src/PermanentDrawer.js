import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Route} from "react-router-dom";
import { mailFolderListItems } from './tileData';

import MailTemplatesPage from "./MailTemplatesPage";
import CarBrands from "./CarBrands"

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class PermanentDrawer extends React.Component {
    state = {
        anchor: 'left',
    };


    render() {
        const { classes, match } = this.props;
        const { anchor } = this.state;

        return (
            <div className={classes.root}>


                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
                    >
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                Permanent drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>


                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        <List>{mailFolderListItems}</List>
                    </Drawer>

                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Route path={`${match.path}/mailTemplates`} component={MailTemplatesPage} />
                        <Route path={`${match.path}/carBrands`} component={CarBrands} />

                    </main>

                </div>
            </div>
        );
    }
}

PermanentDrawer.propTypes = {
    match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PermanentDrawer);