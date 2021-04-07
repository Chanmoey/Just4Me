import {GetRandomColor} from "../../model/GetRandomColor";

const {GetPoem} = require("../../model/GetPoem");

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
            const getPoem = new GetPoem()
            await getPoem.getPoem()
            const data = getPoem.get()

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

        const color = GetRandomColor.getColor()
        this.setData({
            bg: color
        })

        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: color,
        })

    },

    onTap(event){
        wx.navigateTo({
            url: "../home/home"
        })
    }

})