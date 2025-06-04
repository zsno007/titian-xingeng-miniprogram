<template>
  <view class="container">
    <!-- 标题 -->
    <view class="title-bar">
      <text class="title-text">正在耕种</text>
    </view>
    <!-- 轮播背景图 -->
    <image class="background" :src="backgroundImages[currentBgIndex]" mode="aspectFill" />

    <!-- 页面内容 -->
    <view class="content">
      <text class="countdown">{{ countdown }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      countdown: '60:00',
      backgroundImages: [
        '../../assests/1.jpg',
        '../../assests/2.jpg',
        '../../assests/3.jpg',
        '../../assests/4.jpg',
        '../../assests/5.jpg',
        '../../assests/6.jpg',
      ],
      currentBgIndex: 0,
      countdownInterval: null,
      bgInterval: null,
      isFinished: false
    }
  },

  mounted() {
    this.startCountdown();
    this.startBackgroundRotation();
  },

  beforeDestroy() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.bgInterval) clearInterval(this.bgInterval);
  },

  methods: {
    startCountdown() {
      let totalSeconds = 60 * 60; // 1小时 = 3600秒

      this.countdownInterval = setInterval(() => {
        totalSeconds--;

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        if (totalSeconds >= 0) {
          this.countdown = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
          clearInterval(this.countdownInterval);
          this.isFinished = true;
          this.countdown = '00:00';
        }
      }, 1000);
    },

    startBackgroundRotation() {
      this.bgInterval = setInterval(() => {
        this.currentBgIndex = (this.currentBgIndex + 1) % this.backgroundImages.length;
      }, 4000); // 每4秒切换一次背景图
    }
  }
}
</script>

<style>
.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding-top: 40rpx; /* 根据需要调整 */
  z-index: 2;
}

.title-text {
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
  text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.5);
}
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: opacity 1s ease-in-out;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.countdown {
  font-size: 80rpx;
  font-weight: bold;
  color: white;
  text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.5);
}
</style> 