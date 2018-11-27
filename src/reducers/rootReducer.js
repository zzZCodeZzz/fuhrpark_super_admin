import {combineReducers} from "redux";
import carBrandReducer,* as fromCarBrandReducer from './carBrandReducer'
import notificationSettingReducer from './notificiationSettingReducer'
import notificationReducer from './notificationReducer';

export default combineReducers({
    carBrandReducer,
    notificationSettingReducer,
    notificationReducer
});

export const getCarBrands= state=> fromCarBrandReducer.getCarBrands(state.carBrandReducer);