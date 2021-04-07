// pages/home/home.js
const {Banner} = require("../../model/Banner");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        data: Object,
        items: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {

        const data = await Banner.getBanner()

        this.setData({
            data: data,
            items: data.items
        })
    },
})