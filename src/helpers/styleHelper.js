export const formStyles = theme => ({
	root: {
		padding: theme.spacing.unit * 2
	},
	dense: {
		marginTop: 16,
	},
	menu: {
		width: 200,
	},
	headline: {
		lineHeight: "3rem",
		fontSize: "2rem"
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	}
});

export const overviewStyles = theme => ({
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
	gridContainer: {
		padding: theme.spacing.unit * 2
	},
	icon: {
		margin: theme.spacing.unit,
		cursor: 'pointer'
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	button: {
		margin: theme.spacing.unit,
	},
	buttonPullRight: {
		marginRight: theme.spacing.unit,
		marginLeft: theme.spacing.unit,
		marginBottom: theme.spacing.unit,
		float: "right"
	},
	headline: {
		lineHeight: "3rem",
		fontSize: "2rem"
	}
});