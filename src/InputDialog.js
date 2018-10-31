import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

const InputDialog = props => {
    const {inputDialogTitle, inputDialogContent, inputDialogActions, isInputOpen, handleClose} = props;
    return (
        <Dialog
            open={isInputOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{inputDialogTitle}</DialogTitle>
            <DialogContent>
                {inputDialogContent}
            </DialogContent>
            {inputDialogActions}
        </Dialog>
    );
};

InputDialog.propTypes = {
    inputDialogTitle: PropTypes.string.isRequired,
    inputDialogContent: PropTypes.string.isRequired,
    inputDialogActions: PropTypes.any.isRequired,
    isInputOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default InputDialog;