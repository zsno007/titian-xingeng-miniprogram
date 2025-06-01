<template>
  <view class="gov-bg">
    <!-- 并排按钮 -->
    <view class="top-btns">
      <button class="btn-online active">线上投诉</button>
      <button class="btn-phone">电话投诉</button>
    </view>
    <!-- 卡片区 -->
    <view class="card">
      <!-- 流程图示 -->
      <view class="process">
        <view class="line"></view>
        <view class="steps">
          <view class="step" v-for="(item, idx) in steps" :key="idx" :style="{left: item.left+'rpx'}">
            <view class="circle">{{idx+1}}</view>
            <text class="step-label">{{item.label}}</text>
          </view>
        </view>
      </view>
      <!-- 文案说明 -->
      <view class="desc-block">
        <view class="desc-title-row">
          <view class="dot"></view>
          <text class="desc-title">投诉说明</text>
        </view>
        <view class="desc-text">
          您在使用实名投诉时，可通过在线发起投诉和电话投诉 2 种方式发起投诉。您应当提供投诉对象、事发地、投诉原因、投诉人姓名、投诉人手机号，如果您的出访方式为团队时，还需提供证件类型及证件号码，以便投诉受理人员能够精准联系到投诉人。投诉信息仅用于信息采集，您提交的投诉内容仅提交至风采网后台客服系统暂存，暂不对外公开，资料上传成功后，需进行匿名脱敏处理，待市、县两级相关部门核实后对您的投诉内容进行反馈并反馈您投诉结果。我们将对您的投诉信息予以妥善保管并采取技术加密等方式保护您的个人信息及隐私安全。
        </view>
        <view class="desc-title-row" style="margin-top:12rpx;">
          <view class="dot"></view>
          <text class="desc-title">重要提示</text>
        </view>
        <view class="desc-text">
          您使用投诉服务时，不得发布危害国家安全、泄露国家秘密、侵犯国家、社会集体和公民的合法权益的信息，不得利用投诉服务侮辱、诽谤他人……如果您利用投诉服务举报攻击同行、进行不正当竞争，将承担法律责任。
        </view>
      </view>
    </view>
    <!-- 底部按钮 -->
    <view class="footer-btn-area">
      <button class="complain-btn">我要投诉</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { label: '发起投诉', left: 0 },
        { label: '核实处理', left: 105 },
        { label: '结果反馈', left: 210 },
        { label: '办结评价', left: 315 }
      ]
    }
  }
}
</script>

<style scoped>
.gov-bg {
  min-height: 100vh;
  background: linear-gradient(180deg, #e6f7b6 0%, #fffde7 100%);
  padding-bottom: 80rpx;
}
.gov-header {
  width: 100vw;
  background: linear-gradient(180deg, #e6f7b6 0%, #fffde7 100%);
  padding-bottom: 18rpx;
}
.gov-title-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 18rpx;
  height: 60rpx;
}
.gov-back {
  font-size: 22rpx;
  color: #222;
}
.gov-title {
  font-size: 20rpx;
  font-weight: bold;
  color: #222;
}
.gov-header-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
.gov-header-dot {
  font-size: 20rpx;
  color: #888;
}
.gov-header-setting {
  font-size: 18rpx;
  color: #888;
}
.top-btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20rpx 16rpx 0 16rpx;
}
.btn-online, .btn-phone {
  width: 165.5rpx;
  height: 48rpx;
  border-radius: 8rpx;
  font-size: 18rpx;
  font-weight: bold;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.12);
  border: none;
  margin-bottom: 8rpx;
}
.btn-online {
  background: #FFD54F;
  color: #333;
  margin-right: 12rpx;
}
.btn-phone {
  background: #8C9E00;
  color: #fff;
}
.btn-online.active {
  box-shadow: 0 8rpx 24rpx rgba(255,213,79,0.25);
  border: 2rpx solid #FFD54F;
}
.card {
  background: #fff;
  border-radius: 16rpx;
  margin: 16rpx 16rpx 0 16rpx;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.08);
  padding: 18rpx 16rpx 16rpx 16rpx;
}
.process {
  position: relative;
  height: 80rpx;
  margin-bottom: 24rpx;
  margin-top: 8rpx;
}
.line {
  position: absolute;
  top: 32rpx;
  left: 28rpx;
  width: 315rpx;
  height: 4rpx;
  background: #1B5E20;
  border-radius: 2rpx;
}
.steps {
  position: absolute;
  top: 0;
  left: 0;
  width: 343rpx;
  height: 80rpx;
}
.step {
  position: absolute;
  width: 56rpx;
  left: 0;
  text-align: center;
}
.step:nth-child(1) { left: 0rpx; }
.step:nth-child(2) { left: 105rpx; }
.step:nth-child(3) { left: 210rpx; }
.step:nth-child(4) { left: 315rpx; }
.circle {
  width: 36rpx;
  height: 36rpx;
  border-radius: 18rpx;
  border: 2rpx solid #1B5E20;
  background: #1B5E20;
  color: #fff;
  font-size: 20rpx;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 2rpx 8rpx rgba(27,94,32,0.08);
}
.step-label {
  margin-top: 6rpx;
  font-size: 14rpx;
  color: #1B5E20;
  display: block;
  font-weight: bold;
}
.desc-block {
  margin-top: 24rpx;
}
.desc-title-row {
  display: flex;
  align-items: center;
  margin-bottom: 4rpx;
}
.dot {
  width: 12rpx;
  height: 12rpx;
  border-radius: 6rpx;
  background: #1B5E20;
  margin-right: 8rpx;
}
.desc-title {
  font-size: 18rpx;
  font-weight: bold;
  color: #1B5E20;
}
.desc-text {
  font-size: 15rpx;
  color: #333;
  line-height: 22rpx;
  margin-left: 20rpx;
  margin-bottom: 12rpx;
  text-align: justify;
}
.footer-btn-area {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 20;
  background: linear-gradient(180deg, #e6f7b6 0%, #fffde7 100%);
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -2rpx 8rpx rgba(0,0,0,0.06);
}
.complain-btn {
  width: 90vw;
  max-width: 343rpx;
  height: 48rpx;
  border-radius: 8rpx;
  background: linear-gradient(180deg, #8BC34A 0%, #689F38 100%);
  color: #fff;
  font-size: 20rpx;
  font-weight: bold;
  box-shadow: 0 4rpx 16rpx rgba(76,175,80,0.18);
  text-align: center;
  margin: 12rpx 0 18rpx 0;
}
</style> 