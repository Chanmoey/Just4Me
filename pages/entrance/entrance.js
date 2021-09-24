import {Get_random_color} from "../../models/get_random_color";

const {Get_poem} = require("../../models/get_poem");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        poem: [],
        title: String,
        author: String,
        bg: String

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        try {
            const getPoem = new Get_poem()
            const data = await getPoem.get()

            this.setData({
                poem: data.poem,
                title: data.title,
                author: data.author
            })
        }catch (err){
            this.setData({
                poem: [["难将心事和人说"], ["说与青天明月知"]],
                title: "美人对月",
                author: "唐寅"
            })
        }

        const color = Get_random_color.getColor()
        this.setData({
            bg: color
        })

        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: color,
        })

    },

    onTap(event){
        wx.redirectTo({
            url: "../music-list/music-list"
        })
    }

})