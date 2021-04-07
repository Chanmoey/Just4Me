import {Http} from "../utils/Http";

class Banner{

    static async getBanner() {
        const data = await Http.request({
            url: "http://localhost:8080/v1/banner/name/b-1"
        })

        return data
    }
}

export {
    Banner
}