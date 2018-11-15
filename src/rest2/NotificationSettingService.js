import AbstractService from './AbstractService';
import {HTTPContentTypes} from "./RestClient";

export default class NotificationSettingService extends AbstractService {
    list() {
        return this.get("/admin/notificationSetting").send().then(res=>res.data);
    }

    previewTemplate(type,template) {
        return this.post("/admin/notificationSetting/sample/"+type).contentType(HTTPContentTypes.plain).data(template).send().then(res=>res.data);
    }

    save(name,setting) {
        return this.post("/admin/notificationSetting/"+name).contentType(HTTPContentTypes.json).data(JSON.stringify(setting)).send().then(res=>res.data);
    }
}