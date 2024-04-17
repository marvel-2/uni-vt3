<template>
  <view class="circle"></view>
</template>


<style scoped>

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.circle {
    width: 400rpx;
    height: 400rpx;
    border-radius: 50%;
    border: 30rpx solid rgba(255, 255, 255, .1);
    border-top: 30rpx solid #ffffff;
    animation: animate 1.5s infinite linear;
}
</style>