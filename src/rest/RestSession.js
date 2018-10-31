import {HTTPContentTypes, HTTPRequestMethod, OAuth2Data, RestClient} from "./RestClient"
import axios from "axios";
import RestConfig from "./RestConfig";

export class SessionRestClient extends RestClient {
    constructor(restSession,requestMethod,url) {
        super(requestMethod,url);
        this.restSession=restSession;
        this.oauth(restSession.tokenStore.accessToken);
    }

    send() {
        return super.send().then((res=>res)).catch((error)=>{
            if (error.response.status===401) {
                console.log(error.response);

                let bodyFormData = new FormData();
                bodyFormData.append("grant_type", "refresh_token");
                bodyFormData.append("client_id", "fuhrpark.io");
                bodyFormData.append("refresh_token", this.restSession.tokenStore.refreshToken);
                return new RestClient(HTTPRequestMethod.POST,"/oauth/token")
                    .data(bodyFormData).contentType(HTTPContentTypes.form_urlencoded)
                    .basicAuth(RestConfig.authUsername,RestConfig.authPassword)
                    .send().then(res=>{
                        console.log(res);
                        if (res.status!==200) {
                            this.restSession.unauthorizedFailedCallback();
                            return Promise.reject("deine mudda");
                        } else {
                            this.restSession.accessToken(res.data.access_token);
                            this.restSession.refreshToken(res.data.refresh_token);
                            this.oauth(this.restSession.tokenStore.accessToken);
                            return super.send();
                        }
                    }).catch((res)=>{
                        this.restSession.unauthorizedFailedCallback();
                        return Promise.reject("deine mudda");
                    });



            }
            return error;
        });
    }
}


export default class RestSession {
    static instance=null;

    constructor() {
        this.tokenStore= {
            accessToken:null,
            refreshToken:null
        };
        this.unauthorizedFailedCallback=()=>{console.log("No Auth available. Override with better handler")};
        this.persistTokenCallback=(accessToken,refreshToken)=>{console.log("Persisting token default fallback. Override with storage handler")};
    }

    persistToken(callback) {
        if (typeof callback==="function") {
            this.persistTokenCallback=callback;
        } else {
            console.log("Tried to set non-function persist token callback");
        }
        return this;
    }
    accessToken(storageToken) {
        this.tokenStore.accessToken=storageToken?storageToken:null;
        this.persistTokenCallback(this.tokenStore.accessToken,this.tokenStore.refreshToken);
        return this;
    }

    refreshToken(storageToken) {
        this.tokenStore.refreshToken=storageToken?storageToken:null;
        this.persistTokenCallback(this.tokenStore.accessToken,this.tokenStore.refreshToken);
        return this;
    }

    noAuth(callback) {
        if (typeof callback==="function") {
            this.unauthorizedFailedCallback=callback;
        } else {
            console.log("Tried to set non-function unauthorized callback");
        }
        return this;
    }

    createClient(requestMethod,url) {
        return new SessionRestClient(this,requestMethod,url);
    }
}