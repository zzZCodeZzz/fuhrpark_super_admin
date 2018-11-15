import restConfig from './RestConfig';
import axios from "axios";

export class RestClient {
    constructor(requestMethod,url) {
        //TODO validation
        this.requestMethod = requestMethod;
        this.url=restConfig.baseUrl+url;
        this.headers = {};
        this.dataObj=null;
        this.authData=null;
    }

    header(headerName,headerValue) {
        this.headers[headerName]=headerValue;
        return this;
    }

    data(data) {
        console.log(typeof data);
        this.dataObj=data;
        return this;
    }

    contentType(contentType) {
        this.header("Content-Type",contentType);
        return this;
    }

    basicAuth(username,password) {
        this.authData={
            username:username,
            password:password
        };
        return this;
    }

    oauth(token) {
        this.header("authorization","Bearer "+token);
        return this;
    }

    send() {
        let axiosConfig={
            method:this.requestMethod,
            url:this.url,
            config:{headers:this.headers},
            headers:this.headers
        };
        if (this.dataObj!==null) {
            axiosConfig=Object.assign(axiosConfig,{
                data:this.dataObj
            });
        }
        if (this.auth!==null) {
            axiosConfig=Object.assign(axiosConfig,{
                auth:this.authData
            })
        }
        console.log(axiosConfig);
        return axios(axiosConfig);
    }
}
export const HTTPRequestMethod= {
    GET:"GET",
    POST:"POST",
    PUT:"PUT",
    DELETE:"DELETE"
};

export const HTTPContentTypes= {
    json:"application/json",
    form_urlencoded:"application/x-www-form-urlencoded",
    plain:"text/plain"
};

export let OAuth2Data= {
    header:null,
    setToken:function (token) {
        this.header=`Bearer ${token}`;
        console.log(this.header);
    }
};