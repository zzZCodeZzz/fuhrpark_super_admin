import React from "react";
import {connect} from "react-redux";
import _ from "lodash";
import PropTypes from "prop-types";
import {Message} from "semantic-ui-react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import withStyles from '@material-ui/core/styles/withStyles';
import InlineError from "../messages/InlineError";
import {loginACTION} from "../actions/authActions";
import history from "../history";

const styles = theme => ({
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

class LoginForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data: {
				username: "",
				password: ""
			},
			loading: false,
			errors: {}
		};
	}

	onChange = e => {
		const {data} = this.state;
		this.setState({
			data: {...data, [e.target.name]: e.target.value}
		});
	};

	onSubmit = () => {
		const {loginAction} = this.props;
		const {state} = this;
		const errors = this.validate(state.data);
		this.setState({errors});

		if (_.isEmpty(errors)) {
			this.setState({loading: true});
			loginAction(state.data)
				.then((b)=>{
					console.log(b);
                	console.log("lll");
                	history.push("/app");
				})
				.catch(err => { console.log(err);
				this.setState({errors: err.response, loading: false});
			});
		}
	};

	validate = data => {
		const errors = {};
		if (!data.password) errors.password = "Password can't be blank";
		if (!data.username) errors.username = "Username can't be blank";
		return errors;
	};

	checkEnterKey = e => {
		if (e.keyCode === 13) this.onSubmit()
	};

	render() {

		const {data, errors} = this.state;

		const {classes} = this.props;
		return (
			<form className={classes.form}>
				{errors.status === 400 &&
				<Message negative>
					<Message.Header> Something went wrong</Message.Header>
					<p>{errors.data.error_description}</p>
				</Message>}

				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="username">Username</InputLabel>
					<Input
						type="text"
						id="username"
						name="username"
						value={data.username}
						onChange={this.onChange}
					/>
					{errors.username && <InlineError text={errors.username} />}
				</FormControl>

				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="password">Password</InputLabel>
					<Input
						type="password"
						id="password"
						name="password"
						value={data.password}
						onChange={this.onChange}
						onKeyUp={this.checkEnterKey}
					/>
					{errors.password && <InlineError text={errors.password} />}
				</FormControl>

				<Button
					onClick={this.onSubmit}
					fullWidth
					variant="raised"
					color="primary"
					className={classes.submit}
				>Sign in</Button>
			</form>
		);
	}
}

LoginForm.propTypes = {
	classes: PropTypes.object.isRequired,
	loginAction: PropTypes.func.isRequired
};

export default withStyles(styles, {name: 'LoginForm'})(connect(null, {loginAction: loginACTION})(LoginForm));