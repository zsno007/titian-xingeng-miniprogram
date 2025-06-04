Page({
  data: {
    videoList: [
      {
        id: 1,
        index: '1',
        title: '"氏羌系统"南迁说',
        description: '课程 视频 | 视频时长5分',
      },
      {
        id: 2,
        index: '2',
        title: '两向族源融合说',
        description: '课程 视频 | 视频时长3分',
      },
      {
        id: 3,
        index: '3',
        title: '红河土著说',
        description: '课程 视频 | 视频时长4分',
      },
      {
        id: 4,
        index: '4',
        title: '东来说',
        description: '课程 视频 | 视频时长3分',
      },
    ],
  },

  watchVideo(e) {
    const videoId = e.currentTarget.dataset.id;
    // 跳转到视频播放页面或执行其他操作
    wx.navigateTo({
      url: `/pages/videoPlayer/index?id=${videoId}`,
    });
  },
});