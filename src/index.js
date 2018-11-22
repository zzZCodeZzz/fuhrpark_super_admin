import React from "react";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import ReactDOM from "react-dom";
import rootReducer from "./reducers/rootReducer"
import configureStore from './configureStore';

import {Router} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import history from "./history";
import RestSession from "./rest2/RestSession";
import {RestSessionBuilder, Session} from "fuhrparkjsrest/rest/RestSession";
import {LocalStorageTokenStore} from "fuhrparkjsrest/rest/TokenStore";
import AuthAPI from "fuhrparkjsrest/rest/AuthAPI";
import RestConfig from "./rest2/RestConfig";


function render(store) {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>,
        document.getElementById('root'))
}

const store=configureStore();
//const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

// let accessTokenStorage = localStorage.getItem("accessToken");
// let refreshTokenStorage = localStorage.getItem("refreshToken");
// RestSession.instance=new RestSession().
//                     noAuth(()=>history.push("/login")).
//                     accessToken(accessTokenStorage?JSON.parse(accessTokenStorage):null).refreshToken(refreshTokenStorage?JSON.parse(refreshTokenStorage):null).
//                     persistToken((access,refresh)=>{localStorage.setItem("accessToken",JSON.stringify(access));localStorage.setItem("refreshToken",JSON.stringify(refresh));});

new RestSessionBuilder(RestConfig.baseUrl)
    .authApi(new AuthAPI(RestConfig.baseUrl,{username:RestConfig.authUsername,password:RestConfig.authPassword}))
    .tokenStore(new LocalStorageTokenStore("fuhrpark-tokens"))
    .onUnauthorized(()=>history.push("/login"))
    .onLogout(()=>history.push("/login"))
    .build();


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
