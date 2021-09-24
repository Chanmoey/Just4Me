import {Http} from "../utils/http";
import {Token} from "../config/enum";

/**
 * 获取《今日诗词》方的Token
 */
class Get_token {
    token
    static KEY = "jinrishici-token"

    constructor() {
        if (typeof Get_token.instance === 'object') {
            return Get_token.instance
        }
        Get_token.instance = this
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
        wx.setStorageSync(Get_token.KEY, this.token)
    }

    async _getLocalToken() {
        const token = wx.getStorageSync(Get_token.KEY)
        if (!token) {
            await this.saveToken()
        }

        return wx.getStorageSync(Get_token.KEY)
    }

}

export {
    Get_token
}