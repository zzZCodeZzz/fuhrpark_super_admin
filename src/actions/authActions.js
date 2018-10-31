/* eslint-disable import/named */
import * as types from "./actionTypes";
import apiCalls from "../rest/ApiCalls";
import history from "../history";
import {OAuth2Data} from "../rest/RestClient";
import RestSession from "../rest/RestSession";


export const token2Store = (data) => ({
	type: types.TOKEN_TO_STORE,
	data
});

export const logout = () => ({
	type: types.USER_LOG_OUT
});

export const loginACTION = credentials => dispatch =>
	apiCalls.auth.login(credentials).then(data => {

		//setAuthHeader(data.access_token);
		RestSession.instance.accessToken(data.access_token);
		RestSession.instance.refreshToken(data.refresh_token);
		localStorage.fuhrparkToken = JSON.stringify(data);

		dispatch(token2Store(data));
		//dispatch(userInitACTION(data));
	});

export const refreshTokenACTION = () => (dispatch, store) =>
	apiCalls.auth.refresh(store.getState().authReducer.refresh_token).then(token => {

		OAuth2Data.setToken(token.access_token);
		dispatch(token2Store(token));
		localStorage.fuhrparkToken = JSON.stringify(token);

		return token;
	});


export const logoutACTION = () => dispatch => {

	localStorage.removeItem("fuhrparkToken");
	OAuth2Data.setToken(null);
	history.push("/login");

	// Todo empty all reducers
	dispatch(logout());
};

