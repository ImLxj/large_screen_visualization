<template>
  <header>
    <h1>数据可视化-ECharts</h1>
    <div class="show-time">当前时间：{{ time }}</div>
  </header>
</template>

<script>
import { formatTime } from '@/utils/formatTime'
export default {
  name: 'MyHeader',
  data() {
    return {
      time: ''
    }
  },
  mounted() {
    this.formatTime()
  },
  methods: {
    formatTime() {
      setInterval(() => {
        this.time = formatTime(new Date(), '{0}年{1}月{2}日 {3}:{4}:{5}')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
header {
  height: 100px;
  background: url(../assets/images/head_bg.png) no-repeat;
  background-size: 100% 100%;
  h1 {
    font-size: 38px;
    color: #fff;
    text-align: center;
    line-height: 80px;
  }
  .show-time {
    position: absolute;
    right: 30px;
    top: 0;
    line-height: 75px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
  }
}
</style>
