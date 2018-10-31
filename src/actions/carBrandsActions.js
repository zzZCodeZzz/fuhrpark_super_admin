import {createAction} from "redux-actions";
import * as types from './actionTypes';
import CarBrandService from '../rest/CarBrandService';

export const setCarBrandEditorInput=createAction(types.CARBRAND_SET_EDITORINPUT);
export const setCarBrands = createAction(types.CARBRAND_SET_CARBRANDS);
export const setCarBrand = createAction(types.CARBRAND_SET_CARBRAND);
export const removeCarBrand = createAction(types.CARBRAND_REMOVE_CARBRAND);

export const requestCarBrands = () => dispatch => {
    new CarBrandService().list().then(data => dispatch(setCarBrands(data)));
};

export const deleteCarBrand = (carBrandId, callback) => dispatch => {
    new CarBrandService().deleteBrand(carBrandId)
        .then(() => {
            dispatch(removeCarBrand(carBrandId));
            if (callback !== undefined) {
                callback();
            }
        })
};

export const updateCarBrand = (carBrandId,newFullBrandName) => dispatch => {
    new CarBrandService().updateBrand(carBrandId,newFullBrandName)
        .then((data) =>dispatch(setCarBrand(data)));
};

export const insertCarBrand = (carBrandId,newFullBrandName) => dispatch => {
    new CarBrandService().insertBrand(carBrandId,newFullBrandName)
        .then((data) =>dispatch(setCarBrand(data)));
};