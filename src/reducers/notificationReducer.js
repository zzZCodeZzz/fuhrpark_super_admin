import {handleActions} from "redux-actions";
import Immutable from 'seamless-immutable';
import {receiveNotification} from "../actions/notificationActions";

export default handleActions({
    [receiveNotification](state, action) {
        let currentAmount=state.amount;
        return Immutable({amount:currentAmount+1,lastNotification:action.payload});
    },

}, {amount:0,lastNotification:null});

export const getNotificationState=(state)=>{return state.notificationReducer};