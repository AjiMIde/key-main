<template>
  <div class="nav-block">
    <header>
      <slot name="title">
        <h3>{{this.title}}</h3> <!--如果有额外定义 title div，则会自动替换此处-->
      </slot>
      <div class="close-action">
        <el-button icon="el-icon-close" size="mini" plain circle @click="onCloseClick"></el-button>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
      <div class="time-count" v-if="this.c_countDown > 0">
        <span> {{this.c_countDown}} s</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { Button } from 'element-ui'

const EVT_CLOSE_CLICK = 'on-close-click'
const EVT_TIMER_OUT = 'on-time-out'

export default {
  name: 'NavBlock',
  components: {
    'el-button': Button
  },
  props: {
    showClose: {
      type: Boolean,
      'default': false
    },
    title: {
      type: String,
      'default': 'Title'
    },
    countDown: {
      type: Number,
      'default': 0
    }
  },
  data () {
    return {
      c_countDown: this.countDown
    }
  },
  methods: {
    onCloseClick () {
      this.c_countDown = -1         // 立马执行倒数销毁
      this.$emit(EVT_CLOSE_CLICK)
    },
    doCountDown () {
      let timer = window.setInterval(() => {
        this.c_countDown--
        if (this.c_countDown <= 0) {
          window.clearInterval(timer)
          this.$emit(EVT_TIMER_OUT)
        }
      }, 1000)
    }
  },
  mounted () {
    if (this.c_countDown > 0) {
      this.doCountDown()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .nav-block {
    h3 {
      margin: 0;
      padding: 0
    }
    padding: 20px 24px;
    border-radius: 2px;
    header {
      position: relative;
      padding: 0 0 20px 0;
      .close-action {
        position: absolute;
        top: -6px;
        right: -10px;
      }
    }
    main {
      padding: 0 0 0 10px;
    }
    footer {
      .time-count {
        text-align: right;
        span {
          padding: 1px 10px;
          box-shadow: 2px 1px 4px #acacac;
          border-radius: 2px;
        }
      }
    }
  }
</style>
