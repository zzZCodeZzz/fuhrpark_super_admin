import * as types from "./actionTypes";
import {createAction} from "redux-actions";
import {NOTIFICATIONSETTING_SET_NOTIFICATIONSETTINGS} from "./actionTypes";
import {NotificationSettingService} from "@zz-dev/fuhrparkjsrest";

export const setNotificationSettingsAction=createAction(NOTIFICATIONSETTING_SET_NOTIFICATIONSETTINGS);

export const requestNotificationSettings = () => dispatch => {
    NotificationSettingService.list().then(data => {
        console.log(data);
        dispatch(setNotificationSettingsAction(data))
    });
};

export const saveNotificationSettings=(name,settings)=>dispatch => {
    NotificationSettingService.save(name,settings).then(data=>dispatch(requestNotificationSettings()));
};

