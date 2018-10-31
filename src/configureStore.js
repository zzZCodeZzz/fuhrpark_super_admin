import {createStore, applyMiddleware} from 'redux'
import throttle from 'lodash/throttle'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState, saveState} from './localStorage'
import rootReducer from "./reducers/rootReducer";
import {logoutACTION} from "./actions/authActions";

const persistentState = loadState();

const configureStore = () => {
    const store = createStore(
        rootReducer,
        persistentState,
        composeWithDevTools(applyMiddleware(thunk))
    );

    if (localStorage.fuhrparkToken) {
        const oAuthToken = JSON.parse(localStorage.fuhrparkToken);
       // store.dispatch(userInitACTION(oAuthToken));
    } else {
        store.dispatch(logoutACTION());
    }

    store.subscribe(throttle(() => {
        const state = store.getState();
        saveState({
            carBrandReducer: state.carBrandReducer
        })
    }, 1000));
    return store
};

export default configureStore