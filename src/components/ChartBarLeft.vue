<template>
  <div class="chart-bar-left" id="bar-left"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ChartBarLeft',
  mounted() {
    this.chartInit()
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
    chartInit() {
      const bar = echarts.init(document.querySelector('#bar-left'))
      const option = {
        color: ['#2f89cf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '旅游行业',
              '教育培训',
              '游戏行业',
              '医疗行业',
              '电商行业',
              '社交行业',
              '金融行业'
            ],
            axisTick: {
              alignWithLabel: true
            },
            // 修改刻度标签样式
            axisLabel: {
              color: function (value, index) {
                return value >= 0 ? 'red' : 'rgba(255,255,255,.6)'
              },
              fontSize: 12
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: function (value, index) {
                return value >= 0
                  ? 'rgba(255,255,255,.6)'
                  : 'rgba(255,255,255,.6)'
              },
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)',
                width: 2,
                type: 'solid'
              }
            },
            splitArea: {
              areaStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              borderRadius: 5
            }
          }
        ]
      }
      bar.setOption(option)
      this.chart = bar
      this.$bus.$on('chartResize', (el) => {
        this.chart.resize()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.chart-bar-left {
  height: 240px;
  width: 100%;
}
</style>
