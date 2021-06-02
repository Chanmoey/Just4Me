// components/music/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        playUrl: String,
        img: String,
        songName: String,
        singer: String,
        album: String,
        description: String,
        h: 0,
        w: 0
    },

    observers: {
        data: function (data) {

            if (!data) {
                console.log("fuck,接受不到数据啊")
            }
            this.setData({
                playUrl: data.song_url,
                img: data.img,
                songName: data.song_name,
                singer: data.singer,
                album: data.album,
                description: data.description
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onImgLoad(event) {
            const {width, height} = event.detail
            this.setData({
                w: 340,
                h: 340 * height / width
            })
        }
    }
})
