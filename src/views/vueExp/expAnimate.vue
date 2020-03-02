<template>
  <div class="exp-animate">
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
      过渡更简单</div>
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
        <transition name="private-ani" enter-active-class="animated bounceInDown" leave-active-class="animated fadeOutLeft">
          <div class="private-div" v-if="show3">
            <img src="./a.png" alt="">
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      show: true,
      show2: true,
      show3: true
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
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
  .exp-animate {
    margin: 100px 0 0 100px;
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
    .fade-div, .ani-div {
      display: inline-block;
      padding: 30px ;
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
        transform: scale(0);
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
