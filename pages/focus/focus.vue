<template>
  <view class="focus-bg">
    <!-- 背景图片（模糊处理，图片名如 focus-bg.jpg）-->
    <image class="bg-img" src="/static/focus-bg.jpg" mode="aspectFill"></image>
    <view class="bg-gradient"></view>
    <view class="focus-content">
      <!-- 顶部导航栏 -->
      <view class="focus-navbar">
        <text class="nav-back" @click="goBack">＜</text>
        <text class="nav-title">专注计划</text>
        <view class="nav-right">
          <text class="nav-more">⋯</text>
          <text class="nav-setting">⚙️</text>
        </view>
      </view>
      <!-- 大标题 -->
      <view class="focus-title-area">
        <text class="focus-title-main">制定专注计划</text>
        <text class="focus-title-sub">开启耕种之旅</text>
      </view>
      <!-- 内容块一：计划名称与分类 -->
      <view class="focus-card card1">
        <image class="card-bg" src="/static/focus-card1.jpg" mode="aspectFill"></image>
        <view class="card1-content">
          <view class="input-row">
            <text class="input-label">计划名称</text>
            <input class="plan-input" v-model="planName" placeholder="请输入计划名称" />
          </view>
          <view class="category-row">
            <text class="input-label">分类</text>
            <view class="category-btns">
              <view v-for="item in categories" :key="item.value" :class="['cat-btn', {active: planCategory===item.value}]" @click="planCategory=item.value" :style="{marginRight: (item.value==='other'?'0':'8px')}">
                <text class="cat-icon">{{item.icon}}</text>
                <text class="cat-label">{{item.label}}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 内容块二：计时方式与滑动条 -->
      <view class="focus-card card2">
        <image class="card-bg" src="/static/focus-card2.jpg" mode="aspectFill"></image>
        <view class="card2-content">
          <view class="timer-row">
            <text class="input-label">计时方式</text>
            <view class="timer-btns">
              <view v-for="item in timerTypes" :key="item.value" :class="['timer-btn', {active: timerType===item.value}]" @click="timerType=item.value">
                {{item.label}}
              </view>
            </view>
          </view>
          <view class="slider-row">
            <text class="input-label">耕种时间</text>
            <slider class="plan-slider" :min="5" :max="120" :step="5" v-model="planMinutes" activeColor="linear-gradient(90deg,#ffe066,#4ec08b)" backgroundColor="#fff" blockColor="#4ec08b" @changing="sliderChanging" />
            <text class="slider-value">{{planMinutes}}分钟 <text class="slider-tip">({{sliderTip}})</text></text>
          </view>
        </view>
      </view>
      <!-- 底部按钮 -->
      <button class="start-btn" @click="onStart">开始专注</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      planName: '',
      planCategory: 'study',
      categories: [
        {label: '学习', value: 'study', icon: '📘'},
        {label: '工作', value: 'work', icon: '💡'},
        {label: '其他', value: 'other', icon: '📁'}
      ],
      timerType: 'normal',
      timerTypes: [
        {label: '正计时', value: 'normal'},
        {label: '倒计时', value: 'countdown'},
        {label: '不计时', value: 'none'}
      ],
      planMinutes: 25,
      sliderTip: '25分钟'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    onStart() {
      uni.showModal({
        title: '计划设置',
        content: `名称：${this.planName}\n分类：${this.categories.find(c=>c.value===this.planCategory).label}\n计时方式：${this.timerTypes.find(t=>t.value===this.timerType).label}\n时长：${this.planMinutes}分钟`
      })
    },
    sliderChanging(e) {
      this.sliderTip = e.detail.value + '分钟';
    }
  }
}
</script>

<style scoped>
.focus-bg {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  filter: blur(14px) brightness(1.05);
}
.bg-gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: linear-gradient(180deg,rgba(255,255,200,0.5) 0%,rgba(180,220,100,0.5) 100%);
  pointer-events: none;
}
.focus-content {
  position: relative;
  z-index: 3;
  padding: 0 0 18px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.focus-navbar {
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  position: relative;
}
.nav-back {
  position: absolute;
  left: 12px;
  font-size: 32px;
  top: 14px;
  font-weight: bold;
  color: #222;
  background: rgba(255,255,255,0.7);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.nav-title {
  text-align: center;
  flex: 1;
  font-size: 22px;
  color: #fff;
}
.nav-right {
  position: absolute;
  right: 18px;
  top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
}
.nav-more {
  font-size: 22px;
  margin-right: 10px;
  color: #fff;
}
.nav-setting {
  font-size: 20px;
  color: #fff;
}
.focus-title-area {
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
}
.focus-title-main {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 2px 8px #333;
  display: block;
}
.focus-title-sub {
  font-size: 20px;
  color: #fff;
  text-shadow: 0 2px 8px #333;
  display: block;
  margin-top: 4px;
}
.focus-card {
  width: 320px;
  min-height: 100px;
  border-radius: 18px;
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.13);
}
.card-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0.95;
}
.card1-content, .card2-content {
  position: relative;
  z-index: 2;
  padding: 12px 14px 8px 14px;
  display: flex;
  flex-direction: column;
}
.input-row {
  margin-bottom: 10px;
}
.input-label {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 4px;
}
.plan-input {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: rgba(255,255,255,0.85);
  padding: 0 10px;
  font-size: 15px;
  color: #333;
  text-align: center;
}
.category-row {
  display: flex;
  align-items: center;
}
.category-btns {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.cat-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fffde7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 18px;
  color: #4ec08b;
  border: 2px solid transparent;
  transition: border 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(76,192,139,0.08);
}
.cat-btn.active {
  border: 2px solid #ffe066;
  background: #ffe066;
  color: #222;
}
.cat-label {
  font-size: 11px;
  margin-top: 1px;
}
.timer-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.timer-btns {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.timer-btn {
  padding: 2px 10px;
  border-radius: 14px;
  background: #fffde7;
  color: #4ec08b;
  font-size: 13px;
  margin-right: 8px;
  font-weight: bold;
  border: 2px solid transparent;
  transition: border 0.2s, background 0.2s;
}
.timer-btn.active {
  background: #ffe066;
  border: 2px solid #ffe066;
  color: #222;
}
.slider-row {
  display: flex;
  align-items: center;
  margin-top: 6px;
}
.plan-slider {
  flex: 1;
  margin: 0 8px;
}
.slider-value {
  color: #fff;
  font-size: 14px;
  min-width: 60px;
  text-align: right;
}
.slider-tip {
  color: #ffe066;
  font-size: 12px;
  margin-left: 4px;
}
.start-btn {
  width: 320px;
  margin: 10px auto 0 auto;
  background: #4ec08b;
  color: #fff;
  font-size: 20px;
  border-radius: 32px;
  padding: 14px 0;
  font-weight: bold;
  box-shadow: 0 8px 24px rgba(76,192,139,0.18);
  border: none;
  letter-spacing: 2px;
}
</style> 