import {createAction} from "redux-actions";
import {NOTIFICATION_RECEIVE_NOTIFICATION} from "./actionTypes";

export const receiveNotification=createAction(NOTIFICATION_RECEIVE_NOTIFICATION);

export const publishNotification= notification => dispatch => { dispatch(receiveNotification(notification));};