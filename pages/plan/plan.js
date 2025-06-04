Page({
  data: {
    countdown: 60,
    backgroundImages: [
      '../../assests/1.jpg',
      '../../assests/2.jpg',
      '../../assests/3.jpg',
      '../../assests/4.jpg',
      '../../assests/5.jpg',
      '../../assests/6.jpg',
    ],
    currentBgIndex: 0
  },

  onLoad() {
    this.startCountdown();
    this.startBackgroundRotation();
  },

  onUnload() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.bgInterval) clearInterval(this.bgInterval);
  },

  startCountdown() {
    let totalSeconds = 60 * 60; // 1小时 = 3600秒

    this.countdownInterval = setInterval(() => {
      totalSeconds--;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      if (totalSeconds >= 0) {
        this.setData({
          countdown: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        });
      } else {
        clearInterval(this.countdownInterval);
        this.setData({
          isFinished: true,
          countdown: '00:00'
        });
      }
    }, 1000);
  },

  startBackgroundRotation() {
    this.bgInterval = setInterval(() => {
      const { backgroundImages, currentBgIndex } = this.data;
      const nextIndex = (currentBgIndex + 1) % backgroundImages.length;
      this.setData({ currentBgIndex: nextIndex });
    }, 4000); // 每5秒切换一次背景图
  }
});