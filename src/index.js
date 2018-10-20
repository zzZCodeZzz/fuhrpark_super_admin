import React from "react";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import ReactDOM from "react-dom";
import rootReducer from "./reducers/rootReducer"

import {Router} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import history from "./history";

function render(store) {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>,
        document.getElementById('root'))
}

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

function init() {
    render(store);
    registerServiceWorker();
}

init();

// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
