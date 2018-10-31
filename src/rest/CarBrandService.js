import AbstractService from './AbstractService';

export default class CarBrandService extends AbstractService {
    list() {
        return this.get("/admin/carbrand/").send().then(res=>res.data);
    }
    deleteBrand(brandCode) {
        return this.delete("/admin/carbrand/"+brandCode).send().then(res=>res.data);
    }

    updateBrand(brandCode,brandName) {
        return this.put("/admin/carbrand/"+brandCode).data({fullBrandName:brandName}).send().then(res=>res.data);
    }

    insertBrand(brandCode,brandName) {
        return this.post("/admin/carbrand/").data({brandCode:brandCode,fullBrandName:brandName}).send().then(res=>res.data);
    }
}