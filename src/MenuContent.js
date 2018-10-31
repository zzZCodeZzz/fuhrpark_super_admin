import React from 'react';
import PropTypes from 'prop-types';
import List from "@material-ui/core/List/List";
import SelectedListItem from "./SelectedListItem";

const MenuContent = props => {
	const {toolbar} = props;
	return (<div className={toolbar}><List><SelectedListItem /></List></div>)
};

MenuContent.propTypes = {
	toolbar: PropTypes.string.isRequired
};

export default MenuContent;