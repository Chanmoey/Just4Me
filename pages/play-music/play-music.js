// pages/play-music/play-music.js
let music_list = []
Page({

    /**
     * 页面的初始数据
     */
    data: {
        backgroundImg: String
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        music_list = wx.getStorageSync("music_list")
        console.log(options.musicId)
        this._setMusicDetail(options.musicId-'0')
    },

    _setMusicDetail(id) {
        let music = music_list.find(e => e.id === id)
        console.log(music)
        wx.setNavigationBarTitle({
            title: music.song_name
        })
        this.setData({
            backgroundImg: music.img
        })
        console.log(this.data.backgroundImg)
    }
})