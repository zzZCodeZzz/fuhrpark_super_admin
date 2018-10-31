import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	}
});

const DataTable = props => {
	const {classes, content, header} = props;
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				{header}
				{content}
			</Table>
		</Paper>
	);
};

DataTable.propTypes = {
	classes: PropTypes.object.isRequired,
	content: PropTypes.object.isRequired,
	header: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);