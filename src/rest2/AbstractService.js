import {HTTPRequestMethod, RestClient} from "./RestClient";
import RestSession from "./RestSession";

export default class AbstractService {

    get(url) {
        //return new RestClient(HTTPRequestMethod.GET,url);
        return RestSession.instance.createClient(HTTPRequestMethod.GET,url);
    }

    post(url) {
        //return new RestClient(HTTPRequestMethod.POST,url);
        return RestSession.instance.createClient(HTTPRequestMethod.POST,url);
    }

    put(url) {
        //return new RestClient(HTTPRequestMethod.PUT,url);
        return RestSession.instance.createClient(HTTPRequestMethod.PUT,url);
    }

    delete(url) {
        //return new RestClient(HTTPRequestMethod.DELETE,url);
        return RestSession.instance.createClient(HTTPRequestMethod.DELETE,url);
    }
}