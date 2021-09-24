let musicData = require("../../test-data/music-data.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        musicList: Array
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.setData({
            musicList: musicData.musicData
          })
        wx.lin.renderWaterFlow(musicData.musicData)
        this._set_music_list(this.data.musicList)

    },

    _set_music_list(data) {
        wx.setStorageSync('music_list', data)
    }
})