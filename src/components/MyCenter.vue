<template>
  <section class="main-box">
    <div class="column">
      <div class="panel bar">
        <h2>柱形图-就业行业</h2>
        <div class="chart">
          <chart-bar-left ref="chartBarLeft"></chart-bar-left>
        </div>
        <div class="panel-bottom"></div>
      </div>
      <div class="panel line">
        <h2>柱形图-就业行业</h2>
        <div class="chart"></div>
        <div class="panel-bottom"></div>
      </div>
      <div class="panel pie">
        <h2>柱形图-就业行业</h2>
        <div class="chart"></div>
        <div class="panel-bottom"></div>
      </div>
    </div>
    <div class="column">
      <div class="no">
        <div class="no-hd">
          <div>12581</div>
          <div>104563</div>
        </div>
        <div class="no-bd">
          <div>前端需求人数</div>
          <div>市场供应人数</div>
        </div>
      </div>
      <div class="map">
        <div class="map-earth"></div>
        <div class="map-rotate1"></div>
        <div class="map-rotate2"></div>
      </div>
    </div>
    <div class="column">
      <div class="panel bar">
        <h2>柱形图-就业行业</h2>
        <div class="chart"></div>
        <div class="panel-bottom"></div>
      </div>
      <div class="panel line">
        <h2>柱形图-就业行业</h2>
        <div class="chart"></div>
        <div class="panel-bottom"></div>
      </div>
      <div class="panel pie">
        <h2>柱形图-就业行业</h2>
        <div class="chart"></div>
        <div class="panel-bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ChartBarLeft from '@/components/ChartBarLeft'
export default {
  name: 'MyCenter',
  components: {
    ChartBarLeft
  },
  mounted() {
    const _this = this // 缓存vue实例
    // 节流函数
    function throttle(fn, wait) {
      let timer = null
      // debugger
      return function () {
        if (!timer) {
          timer = setTimeout(() => {
            fn()
            timer = null
          }, wait)
        }
      }
    }
    window.addEventListener(
      'resize',
      throttle(function () {
        _this.$bus.$emit('chartResize')
      }, 100)
    )
  }
}
</script>
<style lang="less" scoped>
.main-box {
  display: flex;
  max-width: 1920px;
  min-width: 1024px;
  margin: 0 auto;
  padding: 10px 10px 0;
  .column {
    flex: 3;
    // background: red;
    &:nth-child(2) {
      flex: 5;
      margin: 0 10px 15px;
    }

    .panel {
      height: 310px;
      border: 1px solid rgba(25, 186, 139, 0.17);
      background: url(../assets/images/line\(1\).png) rgba(255, 255, 255, 0.04);
      padding: 0 15px;
      margin-bottom: 15px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
        top: -1px;
        left: -1px;
      }

      &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        right: -1px;
        top: -1px;
      }

      h2 {
        color: #fff;
        height: 48px;
        line-height: 48px;
        font-weight: 400;
        font-size: 20px;
        text-align: center;
      }

      .chart {
        height: 240px;
        // background: skyblue;
      }

      .panel-bottom {
        width: 100%;
        // background: red;
        position: absolute;
        bottom: 0;
        left: 0;

        &::before {
          width: 10px;
          height: 10px;
          position: absolute;
          border-bottom: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
          bottom: -1px;
          right: -1px;
          content: '';
        }

        &::after {
          width: 10px;
          height: 10px;
          position: absolute;
          border-bottom: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
          bottom: -1px;
          left: -1px;
          content: '';
        }
      }
    }

    .no {
      padding: 15px;
      background: rgba(101, 132, 226, 0.1);

      .no-hd {
        border: 1px solid rgba(25, 186, 139, 0.17);
        font-family: lcdd;
        color: #ffeb7b;
        font-size: 70px;
        font-weight: bold;
        display: flex;
        position: relative;
        div {
          flex: 1;
          text-align: center;
          position: relative;

          &:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: center;
            &::before {
              position: absolute;
              height: 40px;
              border-right: 1px solid rgba(255, 255, 255, 0.3);
              right: 0;
              content: '';
            }
          }
        }

        &::before {
          position: absolute;
          width: 30px;
          height: 10px;
          border-top: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
          top: -1px;
          left: -1px;
          content: '';
        }

        &::after {
          position: absolute;
          width: 30px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-bottom: 2px solid #02a6b5;
          bottom: -1px;
          right: -1px;
          content: '';
        }
      }

      .no-bd {
        font-size: 16px;
        font-weight: 100;
        color: #fff;
        display: flex;
        margin-top: 15px;
        div {
          flex: 1;
          text-align: center;
        }
      }
    }

    .map {
      height: 810px;
      position: relative;
      overflow: hidden;
      /*   display: flex;
      align-items: center;
      justify-content: center; */

      .map-earth {
        width: 518px;
        height: 518px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(../assets/images/map.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.3;
      }

      .map-rotate1 {
        width: 566px;
        height: 566px;
        position: absolute;
        top: 50%;
        left: 50%;
        background: url(../assets/images/jt.png) no-repeat;
        background-size: 100% 100%;
        animation: rotate1 15s linear infinite;
        transform-origin: center;
        z-index: 10;
      }
      @keyframes rotate1 {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      .map-rotate2 {
        width: 643px;
        height: 643px;
        position: absolute;
        top: 50%;
        left: 50%;
        background: url(../assets/images/lbx.png) no-repeat;
        background-size: 100% 100%;
        animation: rotate2 15s linear infinite;
        transform-origin: center;
        opacity: 0.6;
      }
      @keyframes rotate2 {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    }
  }
}
</style>
