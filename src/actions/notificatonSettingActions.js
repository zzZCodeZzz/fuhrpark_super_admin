import * as types from "./actionTypes";
import {createAction} from "redux-actions";
import {NOTIFICATIONSETTING_SET_NOTIFICATIONSETTINGS} from "./actionTypes";
import NoticationSettingService from "../rest/NotificationSettingService";

export const setNotificationSettingsAction=createAction(NOTIFICATIONSETTING_SET_NOTIFICATIONSETTINGS);

export const requestNotificationSettings = () => dispatch => {
    new NoticationSettingService().list().then(data => {
        console.log(data);
        dispatch(setNotificationSettingsAction(data))
    });
};

export const saveNotificationSettings=(name,settings)=>dispatch => {
    new NoticationSettingService().save(name,settings).then(data=>dispatch(requestNotificationSettings()));
};

