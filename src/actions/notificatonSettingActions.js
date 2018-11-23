import * as types from "./actionTypes";
import {createAction} from "redux-actions";
import {NOTIFICATIONSETTING_SET_NOTIFICATIONSETTINGS} from "./actionTypes";
import {NoticationSettingService} from "@zz-dev/fuhrparkjsrest";

export const setNotificationSettingsAction=createAction(NOTIFICATIONSETTING_SET_NOTIFICATIONSETTINGS);

export const requestNotificationSettings = () => dispatch => {
    NoticationSettingService.list().then(data => {
        console.log(data);
        dispatch(setNotificationSettingsAction(data))
    });
};

export const saveNotificationSettings=(name,settings)=>dispatch => {
    NoticationSettingService.save(name,settings).then(data=>dispatch(requestNotificationSettings()));
};

