import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import history from "./history";
import {requestCarBrands} from "./actions/carBrandsActions";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class SelectedListItem extends React.Component {
    // TODO: should be in global store
    state = {selectedIndex: null};

    handleListItemClick = (event, index, path, action) => {
        this.setState({selectedIndex: index});
        if (action !== null && action!==undefined) action();
        history.push(path);
    };

    render() {
        // eslint-disable-next-line no-shadow
        const {classes,requestCarBrands} = this.props;
        const {state} = this;
        //const requestBrands=()=>console.log("car brands requested");
        const menuEntries = [
            {id: 'carBrands', label: 'Autohersteller', path: '/app/carBrands', icon: (<PermIdentityIcon />), action: requestCarBrands},
            {id:'notificationSettings',label:'Notifications',path:'/app/notificationSettings',icon:(<PermIdentityIcon/>),action:null},
            {id:'notificationstest',label:'Notifications Test',path:'/app/notificationtest',icon:(<PermIdentityIcon/>),action:null},
            {id:'testbuttons',label:'Tests',path:'/app/requesttest',icon:(<PermIdentityIcon/>),action:null}
        ];
        return (
            <div className={classes.root}>
                <List component="nav">
                    {menuEntries.map((entry, index) => (
                        <ListItem
                            key={entry.id}
                            button
                            selected={state.selectedIndex === index}
                            onClick={event => this.handleListItemClick(event, index, entry.path, entry.action)}
                        >
                            <ListItemIcon>{entry.icon}</ListItemIcon>
                            <ListItemText primary={entry.label} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

SelectedListItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(null, {requestCarBrands})(SelectedListItem));