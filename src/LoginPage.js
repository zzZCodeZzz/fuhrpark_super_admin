import React from "react";
// import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/LockOutlined";
import withStyles from '@material-ui/core/styles/withStyles';
import LoginForm from "./forms/LoginForm";

const styles = theme => ({
	layout: {
		paddingTop: theme.spacing.unit * 8,
		paddingBottom: theme.spacing.unit * 2,
		width: 'auto',
		display: 'block',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	signUpLink: {
		marginTop: theme.spacing.unit * 3,
	}
});

const LoginPage = (props) => {
	const {classes} = props;
	return (
		<main className={classes.layout}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}><LockIcon /></Avatar>
				<Typography variant="headline">Sign inNNNNNN</Typography>
				<LoginForm />
				{/* <Link to="/signUp" className={classes.signUpLink}>Sign up</Link> */}
			</Paper>
		</main>
	);
};

LoginPage.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);