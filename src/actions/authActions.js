/* eslint-disable import/named */
import * as types from "./actionTypes";
import apiCalls from "../rest2/ApiCalls";
import history from "../history";
import {OAuth2Data} from "../rest2/RestClient";
import RestSession from "../rest2/RestSession";
import {Session} from "fuhrparkjsrest/rest/RestSession";


export const token2Store = (data) => ({
	type: types.TOKEN_TO_STORE,
	data
});

export const logout = () => ({
	type: types.USER_LOG_OUT
});

export const loginACTION = credentials => dispatch =>
	Session.login(credentials.username,credentials.password).then(data=>{dispatch(token2Store(data))});
	/*apiCalls.auth.login(credentials).then(data => {

		//setAuthHeader(data.access_token);
		RestSession.instance.accessToken(data.access_token);
		RestSession.instance.refreshToken(data.refresh_token);
		localStorage.fuhrparkToken = JSON.stringify(data);

		dispatch(token2Store(data));
		//dispatch(userInitACTION(data));
	});*/



export const logoutACTION = () => dispatch => {
	Session.logout();
/*
	localStorage.removeItem("fuhrparkToken");
	OAuth2Data.setToken(null);
	history.push("/login");
*/

	// Todo empty all reducers
	dispatch(logout());
};

