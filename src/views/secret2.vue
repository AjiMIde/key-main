<template>
  <div class="secret2">
    <img src="./a.jpg" alt="">
    <div class="google-pad">
      <svg class="gp-icon" aria-hidden="true">
        <use xlink:href="#icon-gmail"></use>
      </svg>
      <svg class="gp-icon gp-icon-drive" aria-hidden="true">
        <use xlink:href="#icon-drive"></use>
      </svg>
      <div class="gp-container">
        <div class="gp-left">
          <div class="gp-week-weather">
            <div class="gp-week">Friday, Dec 21 |</div>
            <div class="gp-weather">
              <svg class="gp-icon gp-icon-weather" aria-hidden="true">
                <use xlink:href="#icon-cloudlogo"></use>
              </svg> 18C
            </div>
          </div>
          <div class="gp-todo">
            <div class="gp-todo-toolbar">
              <div class="gp-todo-tb-add"></div>
              <div class="gp-todo-tb-over"></div>
              <div class="gp-todo-tb-mic"></div>
              <div class="gp-todo-tb-pen"></div>
              <div class="gp-todo-tb-pic"></div>
            </div>
            <div class="gp-todo-list">
              <div class="gp-todo-list-item">
                <div class="gp-todo-lt-title">Todo</div>
                <div class="gp-todo-lt-content">Create a new word</div>
              </div>
              <div class="gp-todo-list-item">
                <div class="gp-todo-lt-title">Todo</div>
                <div class="gp-todo-lt-content">Create a new word</div>
              </div>
            </div>
          </div>
        </div>
        <div class="gp-right">
          <div class="gp-exercise">
            <div class="gp-level"></div>
            <div class="gp-steps">
              <div class="gp-steps-a">157</div>
              <div class="gp-steps-b">steps</div>
            </div>
            <div class="gp-cal">
              <div class="gp-cal-a">1567</div>
              <div class="gp-cal-b">Cal</div>
            </div>
            <div class="gp-km">
              <div class="gp-km-a">0.8</div>
              <div class="gp-km-b">Cal</div>
            </div>
          </div>
          <div class="gp-drive">
            <div class="gp-drive-icon"></div>
            <div class="gp-drive-title">Drive</div>
            <div class="gp-drive-upload">upload</div>
            <div class="gp-drive-pic">pic</div>
            <div class="gp-drive-add">add</div>
          </div>
          <div class="gp-actions">
            <div class="gp-actions-photos"></div>
            <div class="gp-actions-allo"></div>
            <div class="gp-actions-gmail"></div>
            <div class="gp-actions-play"></div>
          </div>
        </div>
        <div class="gp-float">
          <div class="gp-float-camera"></div>
          <div class="gp-float-sms"></div>
          <div class="gp-float-browser"></div>
          <div class="gp-float-chat"></div>
          <div class="gp-float-call"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './iconfont.js'

export default {
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss">
  .secret2 {
    .google-pad {
      .gp-icon {
        font-size: 24px;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      .gp-icon-drive {
        color: red;
      }
      .gp-container {
        width: 840px;
        margin: 0 auto;
        display: flex;
        background-color: #023c52;
        color: #fff;
        padding: 40px 30px;
        text-align: left;
        font-family: Microsoft YaHei Mono, Arial, serif;
        .gp-icon {

        }
        .gp-left {
          background-color: red;
          flex: 1;
          .gp-week-weather {
            font-size: 22px;
            display: flex;
            .gp-weather {
              padding: 0 0 0 6px;
            }
          }
        }
        .gp-right {
          background-color: blue;
          flex: 1;
        }
        .gp-float {

        }
      }
    }
  }
</style>
