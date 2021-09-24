import {config} from "../config/config";
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

class Token {

    tokenUrl = config.apiBaseUrl + 'token'
    verifyUrl = config.apiBaseUrl + 'token/verify'

    async verify() {
        const token = wx.getStorageSync('token')
        if (!token) {
            await this.getTokenFromServer()
        } else {
            await this._verifyFromServer(token)
        }
    }

    async getTokenFromServer() {
        const user = await wx.login()
        const code = user.code

        const res = await promisic(wx.request)({
            url: this.tokenUrl,
            method: 'POST',
            data: {
                account: code,
                type: 0
            }
        })
        wx.setStorageSync('token', res.data.token)
        return res.data.token
    }

    async _verifyFromServer(token) {
        const res = await promisic(wx.request)({
            url: this.verifyUrl,
            method: "POST",
            data: {
                token
            }
        })

        const valid = res.data.verify
        if (valid === false) {
            return this.getTokenFromServer();
        }
    }
}

export {
    Token
}