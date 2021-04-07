import {GetToken} from "./GetToken";

const {Http} = require("../utils/Http");

class GetPoem {
    poem
    title
    author
    getToken
    data

    constructor() {
        this.getToken = new GetToken()
    }

    async getPoem() {
        const token = await this.getToken.get()

        const ret = await Http.request({
            url: "https://v2.jinrishici.com/sentence",
            header: {
                'X-User-Token': token
            }
        })
        this.data = ret.data
        this.precessPoem(this.data)
    }

    precessPoem(poem) {
        const sentence = poem.content
        const reg = /[\u4e00-\u9fa5]+/g
        this.poem = sentence.match(reg).map(s => [s])
        this.title = poem.origin.title
        this.author = poem.origin.author
    }

    get() {
        return {
            poem: this.poem,
            title: this.title,
            author: this.author
        }
    }

}

export {
    GetPoem
}