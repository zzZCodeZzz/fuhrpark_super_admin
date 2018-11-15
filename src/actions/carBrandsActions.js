import {createAction} from "redux-actions";
import * as types from './actionTypes';
import CarbrandService from "fuhrparkjsrest/service/admin/CarbrandService";

export const setCarBrandEditorInput=createAction(types.CARBRAND_SET_EDITORINPUT);
export const setCarBrands = createAction(types.CARBRAND_SET_CARBRANDS);
export const setCarBrand = createAction(types.CARBRAND_SET_CARBRAND);
export const removeCarBrand = createAction(types.CARBRAND_REMOVE_CARBRAND);

export const requestCarBrands = () => dispatch => {
    CarbrandService.list().then(d=>dispatch(setCarBrands(d)));
    //new CarBrandService().list().then(data => dispatch(setCarBrands(data)));
};

export const deleteCarBrand = (carBrandId, callback) => dispatch => {
    CarbrandService.delete(carBrandId)
        .then(() => {
            dispatch(removeCarBrand(carBrandId));
            if (callback !== undefined) {
                callback();
            }
        })
};

export const updateCarBrand = (carBrandId,newFullBrandName) => dispatch => {
    CarbrandService.update(carBrandId,{fullBrandName:newFullBrandName}).then((data) =>dispatch(setCarBrand(data)));
};

export const insertCarBrand = (carBrandId,newFullBrandName) => dispatch => {
    CarbrandService().create({brandCode:carBrandId,fullBrandName:newFullBrandName})
        .then((data) =>dispatch(setCarBrand(data)));
};