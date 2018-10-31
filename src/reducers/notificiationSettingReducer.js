import {handleActions} from "redux-actions";
import Immutable from 'seamless-immutable'
import {setNotificationSettingsAction} from "../actions/notificatonSettingActions";


const defaultState = Immutable({notificationSettings:{}});

export default handleActions({
    [setNotificationSettingsAction](state, action) {
        let mappedState={};
        console.log(action);
        action.payload.forEach(elem=>mappedState[elem.notificationName]=elem);

        return Immutable.merge(defaultState,{notificationSettings:mappedState},{deep:true});
    },

}, defaultState);

export const getNotificationSettings = state => (state.notificationSettingReducer.notificationSettings);
export const getNotificationSetting = (state,id) => Object.prototype.hasOwnProperty.call(state, id) ? state[id] : {};