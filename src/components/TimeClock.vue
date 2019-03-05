<template>
  <div class="time-clock">
    <div class="t-c-container">
      <div class="t-c-pointer">
        <div class="t-c-point"></div>
        <div class="t-c-second" :style="sStyle"></div>
        <div class="t-c-minute" :style="mStyle"></div>
        <div class="t-c-hour" :style="hStyle"></div>
      </div>
      <div class="t-c-number">
        <div class="t-c-n-0"><span>12</span></div>
        <div class="t-c-n-3"><span>03</span></div>
        <div class="t-c-n-6"><span>06</span></div>
        <div class="t-c-n-9"><span>09</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: '',
  components: {},
  data () {
    return {
      mt: {
        s: '', m: '', h: ''
      }
    }
  },
  computed: {
    sStyle () {
      return {
        'transform': `rotate(${this.mt.s * (360 / 60)}deg)`
      }
    },
    mStyle () {
      let m = this.mt.m * (360 / 60) + (360 / 60) * (this.mt.s / 60)
      return {
        'transform': `rotate(${m}deg)`
      }
    },
    hStyle () {
      let h = this.mt.h * (360 / 12) + this.mt.m / 60 * (360 / 12)
      return {
        'transform': `rotate(${h}deg)`
      }
    }
  },
  methods: {},
  mounted () {
    window.setInterval(() => {
      let mt = moment()
      const array = mt.format('h:m:s').split(':')
      this.mt.s = array[2]
      this.mt.m = array[1]
      this.mt.h = array[0]
    }, 1000)
    console.log(window.mt = moment)
    console.log(window.m = this)
  }
}
</script>

<style lang="scss">
  .time-clock {
    $basic-w: 200px;
    $t-c-container-borderW: 8px;
    div {
      box-sizing: border-box;
    }
    .t-c-container {
      width: $basic-w;
      height: $basic-w;
      position: relative;
      background-color: transparent;
      border: $t-c-container-borderW solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 8px rgba(34, 34, 34, 0.3), inset 0 1px 8px rgba(34, 34, 34, 0.3);
    }
    .t-c-pointer {
      .t-c-point, .t-c-second, .t-c-minute, .t-c-hour {
        left: 50%;
        bottom: 50%;
        position: absolute;
        transform-origin: bottom;
        background-color: #fff;
      }
      .t-c-point {
        $w: 12px;
        width: $w;
        height: $w;
        border-radius: 50%;
        margin-left: -$w/2;
        margin-bottom: -$w/2;
        z-index: 9;
      }
      .t-c-second {
        $w: 2px;
        width: $w;
        height: 90px;
        margin-left: -$w/2;
      }
      .t-c-minute {
        $w: 6px;
        width: $w;
        height: 75px;
        margin-left: -$w/2;
        border-radius: 3px;
      }
      .t-c-hour {
        $w: 8px;
        width: $w;
        height: 65px;
        margin-left: -$w/2;
        border-radius: 4px;
      }
    }
    .t-c-number {
      width: $basic-w - $t-c-container-borderW*2;
      height: $basic-w - $t-c-container-borderW*2;
      top: 0;
      left: 0;
      position: absolute;
      > div {
        $w: 14px;
        $top: 10px;
        width: $w;
        height: 50%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        top: 0;
        left: 50%;
        position: absolute;
        margin-left: -$w/2;
        transform-origin: bottom;
        span {
          display: inline-block;
          width: $w;
          height: $w;
        }
      }
      @each $n in 0, 3, 6, 9 {
        .t-c-n-#{$n} {
          transform: rotate($n*30deg);
          span {
            transform: rotate(-$n*30deg);
          }
        }
      }
    }
  }
</style>
