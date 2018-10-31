import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {Route} from "react-router-dom";
import CarBrands from './CarBrands';
import {overviewStyles} from './helpers/styleHelper';
import AlertDialog from './AlertDialog';
import InsertDialog from './InputDialog';

const defaultState = {
    dialogTitle: "",
    dialogContent: "",
    dialogActions: "",
    isOpen: false,
    insertDialogTitle: "",
    insertDialogContent: "",
    insertDialogActions: "",
    isInsertOpen: false
};

class CarBrandComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }

    openDialog = (dialogTitle, dialogContent, dialogActions) => {
        this.setState({dialogTitle, dialogContent, dialogActions, isOpen: true})
    };

    openInsertDialog = (insertDialogTitle, insertDialogContent, insertDialogActions) => {
        this.setState({insertDialogTitle: insertDialogTitle, insertDialogContent: insertDialogContent, insertDialogActions: insertDialogActions, isInsertOpen: true})
    };

    closeDialog = () => {
        this.setState(defaultState);
    };

    render() {
        const {state} = this;
        const {match, classes} = this.props;
        return (<div>
                <Route exact path={match.path}
                       render={routeProps => (
                           <CarBrands {...routeProps} classes={classes} openDialog={this.openDialog} openInsertDialog={this.openInsertDialog}
                                             closeDialog={this.closeDialog} />
                       )}
                />
                <AlertDialog dialogTitle={state.dialogTitle} dialogContent={state.dialogContent}
                             dialogActions={state.dialogActions} isOpen={state.isOpen} handleClose={this.closeDialog} />
                <InsertDialog inputDialogTitle={state.insertDialogTitle} inputDialogContent={state.insertDialogContent}
                             inputDialogActions={state.insertDialogActions} isInputOpen={state.isInsertOpen} handleClose={this.closeDialog} />
            </div>
        );
    }
}

CarBrandComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default withStyles(overviewStyles)(CarBrandComponent);
