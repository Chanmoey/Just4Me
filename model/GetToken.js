import {Http} from "../utils/Http";
import {Token} from "../config/enum";

class GetToken{
    token
    static KEY = "jinrishici-token"

    constructor() {
        if (typeof GetToken.instance === 'object') {
            return GetToken.instance
        }
        GetToken.instance = this
        return this
    }

    async saveToken() {
        const ret = await Http.request({
            url: "https://v2.jinrishici.com/token"
        })
        if(ret.status === "success"){
            this.token = ret.data
        }
        else{
            this.token = Token.NoTOKEN
        }
        this. _refreshLocal()
    }

    async get() {
        return await this._getLocalToken()
    }

    clear() {
        this.token = Token.NoTOKEN
        this._refreshLocal()
    }

    _refreshLocal() {
        wx.setStorageSync(GetToken.KEY, this.token)
    }

    async _getLocalToken() {
        const token = wx.getStorageSync(GetToken.KEY)
        if (!token) {
            await this.saveToken()
        }

        return wx.getStorageSync(GetToken.KEY)
    }

}

export {
    GetToken
}