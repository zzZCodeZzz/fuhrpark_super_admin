import {combineReducers} from "redux";
import carBrandReducer,* as fromCarBrandReducer from './carBrandReducer'
import notificationSettingReducer from './notificiationSettingReducer'

export default combineReducers({
    carBrandReducer,
    notificationSettingReducer
});

export const getCarBrands= state=> fromCarBrandReducer.getCarBrands(state.carBrandReducer);