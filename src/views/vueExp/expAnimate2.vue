<template>
  <div class="exp-animate-2">
    <div class="toolbar">
      <button @click="toggle">切换</button>
    </div>

    <el-row class="exp-1">
      <el-col :span="12">
        <div class="list">
          &nbsp;
          <transition name="li1">
            <div class="list-item list-item-1" v-show="shows[0]"></div>
          </transition>
          <transition name="li2">
            <div class="list-item list-item-2" v-show="shows[1]"></div>
          </transition>
          <transition name="li3">
            <div class="list-item list-item-3" v-show="shows[2]"></div>
          </transition>
        </div>
      </el-col>
      <el-col :span="12">
        &nbsp;
        <div class="list-2">
          <div class="list-item" ></div>
        </div>
      </el-col>
    </el-row>

    <el-row class="exp-2">
      <el-col :span="12">&nbsp;
        <div class="list-1">
          <div class="list-item list-item-1">A</div>
          <div class="list-item list-item-2">B</div>
          <div class="list-item list-item-3">C</div>
        </div>
      </el-col>
      <el-col :span="12">&nbsp;
      </el-col>
    </el-row>

    <div class="exp-block">
      <div class="title">vue css 过渡动画，主要使用的 enter/leave 绑定 fade</div>
      <div class="content">
        <div>
          <button @click="toggle">切换</button>
        </div>
        <transition name="fade">
          <div class="fade-div" v-if="show">
            <img src="./a.png" alt="">
          </div>
        </transition>
      </div>
    </div>

    <div class="exp-block">
      <div class="title">vue css 动画，使用 animation 来展示动画，这种使用可能会比上面那种
        过渡更简单
      </div>
      <div class="content">
        <div>
          <button @click="toggle2">切换</button>
        </div>
        <transition name="ani">
          <div class="ani-div" v-if="show2">
            <img src="./a.png" alt="">
          </div>
        </transition>
      </div>
    </div>

    <br>
    <div class="exp-block">
      <div class="title">
        vue 自定义类名,上面的那些动画，都是指定在 transition=name <br>
        然后在 class 中，定义 name-enter/name-leave 等类 <br>
        这样子逻辑简单，但是不够灵活，如果要引入第三方库，不方便 <br>
        自定义类名就是解决这样的问题的，来看<br>
      </div>
      <div class="content">
        <div>
          <button @click="toggle3">切换</button>
        </div>
        <transition name="private-ani" enter-active-class="animated bounceInDown"
                    leave-active-class="animated fadeOutLeft">
          <div class="private-div" v-if="show3">
            <img src="./a.png" alt="">
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import { Row, Col } from 'element-ui'

export default {
  name: '',
  components: {
    'el-row': Row, 'el-col': Col
  },
  data () {
    return {
      shows: [0, 0, 0],
      show: true,
      show2: true,
      show3: true
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
      this.shows.forEach((o, i) => {
        window.setTimeout(() => {
          this.$set(this.shows, i, o === 0 ? 1 : 0)
        }, 200 * i)
      })
    },
    toggle2 () {
      this.show2 = !this.show2
    },
    toggle3 () {
      this.show3 = !this.show3
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @import "./animate";

  .exp-animate-2 {
    position: relative;
    width: 1400px;
    margin: 0 auto;

    $c-1: #FF9966;
    $c-2: #FF6666;
    $c-3: #FFCCCC;

    .exp-block {
      padding: 20px 40px;
      display: inline-block;
      border: 1px dotted #999;
      .title {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .content {
      }
    }
    // 全局 toolbar
    .toolbar {
      position: absolute;
      left: -180px;
    }

    // 第一个例子
    .exp-1 {
      margin-top: 100px;
      margin-bottom: 100px;
      .list {
        position: relative;
        .list-item {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          margin-right: 10px;
          position: absolute;
        }

        // 动画1
        @keyframes li1-in {
          0% {
            transform: scale(0);
          }
          1% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes li1-leave {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(.1);
            opacity: .1;
          }
        }
        .li1 {
          &-enter-active {
            animation: li1-in .7s;
          }
          &-leave-active {
            animation: li1-leave .7s;
          }
        }
        .li2 {
          &-enter-active {
            animation: li1-in .7s;
          }
          &-leave-active {
            animation: li1-leave .7s;
          }
        }
        .li3 {
          &-enter-active {
            animation: li1-in .7s;
          }
          &-leave-active {
            animation: li1-leave .7s;
          }
        }

        .list-item-1 {
          background: radial-gradient(#FF9966, #ecb193);
        }
        .list-item-2 {
          left: 60px;
          background: radial-gradient(#FF6666, #ff7d7e);
        }
        .list-item-3 {
          left: 120px;
          background: radial-gradient(#FFCCCC, #ffdcd9);
        }
      }

      .list-2 {
        @keyframes ani-1 {
          0% {
            transform: rotate3d(0, 1, 0, 0deg);
          }
          100% {
            transform: rotate3d(0, 1, 0, 88deg);
          }
        }
        .list-item {
          width: 50px;
          height: 50px;
          background-color: red;
          transform-origin: left;
        }
        .list-item-active {
          transform: rotate3d(0, 1, 0, 88deg);
          animation: ani-1 1s;
        }
        .list-item-out {
          transform: rotate3d(0, 1, 0, 0deg);
          animation: ani-1 .5s reverse;
        }
      }
    }

    // 第二个例子
    .exp-2 {
      .list-1 {
        position: relative;
        min-height: 200px;
        .list-item {
          width: 50px;
          height: 50px;
          text-align: center;
          position: absolute;
          line-height: 50px;
          border-radius: 50%;
        }
        @keyframes ani1 {
          0% {
            transform: translate3d(0px, -30px, 0);
          }
          15% { transform: translate3d(-5px, -25px, 0); }
          30% { transform: translate3d(-20px, -20px, 0); }
          45% { transform: translate3d(-30px, -15px, 0); }
          60% { transform: translate3d(-20px, -10px, 0); }
          75% { transform: translate3d(-5px, -5px, 0); }
          100% { transform: translate3d(0px, 0px, 0); }
        }
        .list-item-1 {
          background-color: $c-1;
          transform: translate3d(0px, -30px, 0);
        }
        .list-item-1-active {
          animation: ani1 .8s ease-in;
        }
        .list-item-2 {
          background-color: $c-2;
          transform: translate3d(-30px, 30px, 0);
        }
        .list-item-3 {
          transform: translate3d(30px, 30px, 0);
          background-color: $c-3; }
      }
    }

    .fade-div, .ani-div {
      display: inline-block;
      padding: 30px;
      border-radius: 4px;
      border: 1px solid #999;
      img {
        width: 100%;
        height: 100%;
      }

      opacity: 1;
      background-color: yellow;
    }

    // 开始时添加，一帧后移除
    .fade-enter {
      /*opacity: 0;*/
      background-color: red;
      height: 200px;
    }
    // 开始的过程中一直都在，完成时移除，常用来做过程时间、延迟、曲线函数
    .fade-enter-active {
      transition: all 1s;
    }
    // 开始的动画结束的最后一帧生效
    .fade-enter-to {
      background-color: blue;
      height: 400px;
    }
    // 解释与上面差不多，请自行想象
    .fade-leave {
      background-color: green;
      height: 300px;
    }
    .fade-leave-active {
      transition: all 3s;
    }
    .fade-leave-to {
      background-color: purple;
      height: 100px;
    }
    // 正常来讲，只需要设置
    // enter enter-active/leave-active leave-to
    // 即可
    // 如果还要更简单，可以只设置
    // enter/leave-to === a
    // enter-active/leave-active === b
    // 即可完成一个合理的效果

    // vue css 动画
    .ani-enter-active {
      animation: ani-in .5s;
    }
    .ani-leave-active {
      animation: ani-leave .5s;
    }
    @keyframes ani-in {
      0% {
        transform: scale(0.4);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes ani-leave {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
