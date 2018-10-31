import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

const AlertDialog = props => {
	const {dialogTitle, dialogContent, dialogActions, isOpen, handleClose} = props;
	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{dialogContent}</DialogContentText>
			</DialogContent>
			{dialogActions}
		</Dialog>
	);
};

AlertDialog.propTypes = {
	dialogTitle: PropTypes.string.isRequired,
	dialogContent: PropTypes.string.isRequired,
	dialogActions: PropTypes.any.isRequired,
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default AlertDialog;