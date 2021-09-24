import {promisic} from "../miniprogram_npm/lin-ui/utils/util";
import {config} from "../config/config";
import {Token} from "../models/token";

class Http {

    static async request({url, header, method = 'GET'}) {


        const res = await promisic(wx.request)({
            url: url,
            method,
            header: header,
        })

        // res.data是去promise中收到后端返回的结果，res.data.data是具体的诗词。
        return res.data.data

    }

    static async request_server({url, data, method = 'GET'}) {

        let res;
        try {
            res = await promisic(wx.request)({
                url: `${config.apiBaseUrl}${url}`,
                data,
                method,
                header: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${wx.getStorageSync('token')}`
                }
            })
        } catch (e) {

        }
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
            return res.data
        } else {
            if (code === '401') {

            }
        }
        return res.data
    }

    static async _try_again() {
        const token = new Token()
        await token.getTokenFromServer();
    }
}

export {
    Http
}
