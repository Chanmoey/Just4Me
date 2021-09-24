import {Get_token} from "./get_token";
const {Http} = require("../utils/http");

class Get_poem {
    poem
    title
    author
    getToken
    data

    constructor() {
        this.getToken = new Get_token()
    }

    async getPoem() {
        const token = await this.getToken.get()

        return await Http.request({
            url: "https://v2.jinrishici.com/sentence",
            header: {
                'X-User-Token': token
            }
        })
    }

    precessPoem(poem) {
        const sentence = poem.content
        const reg = /[\u4e00-\u9fa5]+/g
        this.poem = sentence.match(reg).map(s => [s])
        this.title = poem.origin.title
        this.author = poem.origin.author
    }

    async get() {
        this.data = await this.getPoem()
        this.precessPoem(this.data)

        return {
            poem: this.poem,
            title: this.title,
            author: this.author
        }
    }

}

export {
    Get_poem
}