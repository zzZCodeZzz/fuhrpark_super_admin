import {handleActions} from "redux-actions";
import Immutable from 'seamless-immutable'
import {setCarBrands, setCarBrand, removeCarBrand,setCarBrandEditorInput} from "../actions/carBrandsActions";

const defaultState = Immutable({editor:{brandCode:"",fullBrandName:""},carBrands:{}});

export default handleActions({
    [setCarBrands](state, action) {
        let mappedState={};
        action.payload.forEach(elem=>mappedState[elem.brandCode]=elem);

        return Immutable.merge(defaultState,{carBrands:mappedState},{deep:true});
    },
    [setCarBrand](state = defaultState, action) {
        const brandCode=action.payload.brandCode;
        const payload=action.payload;
        return Immutable.merge(state, {carBrands:{brandCode: payload}},{deep:true});
    },
    [removeCarBrand](state = defaultState, action) {
        return Immutable.without(state, action.payload.toString());
    },
    [setCarBrandEditorInput](state=defaultState,action) {
        return Immutable.merge(state,{editor:action.payload},{deep:true});
    }
}, defaultState);

export const getCarBrands = state => (state.carBrands);
export const getCarBrand = (state, id) => (Object.prototype.hasOwnProperty.call(state, id) ? state[id] : {});
export const getEditorInput=(state)=>{console.log(state); return state.carBrandReducer.editor};