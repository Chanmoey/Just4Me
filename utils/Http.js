import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

class Http{

    static async request({url, header, method='GET'}){

        const res =  await promisic(wx.request)({
            url: url,
            method,
            header:header,
        })

        return res.data

    }
}

export {
    Http
}
