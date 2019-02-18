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
              </svg>
              18C
            </div>
          </div>
          <div class="gp-todo">
            <div class="gp-todo-toolbar">
              <div class="gp-todo-tb-add">
                <svg class="gp-icon gp-icon-add" aria-hidden="true">
                  <use xlink:href="#icon-add"></use>
                </svg>
              </div>
              <div class="gp-todo-tb-over">
                <svg class="gp-icon gp-icon-success" aria-hidden="true">
                  <use xlink:href="#icon-success"></use>
                </svg>
              </div>
              <div class="gp-todo-tb-mic">
                <svg class="gp-icon gp-icon-mic" aria-hidden="true">
                  <use xlink:href="#icon-MIC"></use>
                </svg>
              </div>
              <div class="gp-todo-tb-pen">
                <svg class="gp-icon gp-icon-pen" aria-hidden="true">
                  <use xlink:href="#icon-pen"></use>
                </svg>
              </div>
              <div class="gp-todo-tb-pic">
                <svg class="gp-icon gp-icon-pic" aria-hidden="true">
                  <use xlink:href="#icon-pic"></use>
                </svg>
              </div>
            </div>
            <div class="gp-todo-list">
              <div class="gp-todo-lt-item">
                <div class="gp-todo-lt-title">Todo</div>
                <div class="gp-todo-lt-content">Create a new word</div>
              </div>
              <div class="gp-todo-lt-item">
                <div class="gp-todo-lt-title">Todo</div>
                <div class="gp-todo-lt-content">Create a new word</div>
              </div>
            </div>
          </div>
        </div>
        <div class="gp-right">
          <div class="gp-exercise">
            <div class="gp-level">
              <svg class="gp-icon gp-icon-heart" aria-hidden="true">
                <use xlink:href="#icon-heart"></use>
              </svg>
            </div>
            <div class="gp-exercise-item">
              <div>157</div>
              <div>steps</div>
            </div>
            <div class="gp-exercise-item">
              <div>1567</div>
              <div>Cal</div>
            </div>
            <div class="gp-exercise-item">
              <div>0.8</div>
              <div>Cal</div>
            </div>
          </div>
          <div class="gp-drive">
            <div class="gp-drive-icon">
              <svg class="gp-icon gp-icon-drive" aria-hidden="true">
                <use xlink:href="#icon-drive"></use>
              </svg>
            </div>
            <div class="gp-drive-title">Drive</div>
            <div class="gp-drive-upload">
              <svg class="gp-icon gp-icon-upload" aria-hidden="true">
                <use xlink:href="#icon-up-load"></use>
              </svg>
            </div>
            <div class="gp-drive-pic">
              <svg class="gp-icon gp-icon-camera" aria-hidden="true">
                <use xlink:href="#icon-camera"></use>
              </svg>
            </div>
            <div class="gp-drive-add">
              <svg class="gp-icon gp-icon-tianjia" aria-hidden="true">
                <use xlink:href="#icon-tianjia"></use>
              </svg>
            </div>
          </div>
          <div class="gp-actions">
            <div class="gp-actions-photos">
              <svg class="gp-icon gp-icon-windmill" aria-hidden="true">
                <use xlink:href="#icon-windmill"></use>
              </svg>
            </div>
            <div class="gp-actions-allo">
              <svg class="gp-icon gp-icon-chat" aria-hidden="true">
                <use xlink:href="#icon-chat"></use>
              </svg>
            </div>
            <div class="gp-actions-gmail">
              <svg class="gp-icon gp-icon-gmail" aria-hidden="true">
                <use xlink:href="#icon-gmail"></use>
              </svg>
            </div>
            <div class="gp-actions-play">
              <svg class="gp-icon gp-icon-GooglePlaylogo" aria-hidden="true">
                <use xlink:href="#icon-GooglePlaylogo"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="gp-float">
          <div class="gp-float-camera">
            <svg class="gp-icon gp-camera" aria-hidden="true">
              <use xlink:href="#icon-camera1"></use>
            </svg>
          </div>
          <div class="gp-float-sms">
            <svg class="gp-icon gp-sms" aria-hidden="true">
              <use xlink:href="#icon-SMS"></use>
            </svg>
          </div>
          <div class="gp-float-browser">
            <svg class="gp-icon gp-google" aria-hidden="true">
              <use xlink:href="#icon-google"></use>
            </svg>
          </div>
          <div class="gp-float-chat">
            <svg class="gp-icon gp-chat" aria-hidden="true">
              <use xlink:href="#icon-chat"></use>
            </svg>
          </div>
          <div class="gp-float-call">
            <svg class="gp-icon gp-call" aria-hidden="true">
              <use xlink:href="#icon-call"></use>
            </svg>
          </div>
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
      $cl-bg: #035972;
      $cl-ft-white: #fff;
      $cl-ft-dark: #3b4747;
      $cl-fl-grey: #929a9c;
      $cl-fl-light: #e8e8e8;
      .gp-icon {
        font-size: 24px;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      .gp-container {
        font-family: Microsoft YaHei Mono, Arial, serif;
        text-align: left;
        color: $cl-ft-white;
        background-color: $cl-bg;
        display: flex;
        padding: 40px 30px;
        margin: 0 auto;
        width: 840px;
        position: relative;
        .gp-left {
          flex: 1;
          > div {
            margin: 0 40px;
          }
        }
        .gp-week-weather {
          height: 50px;
          font-size: 24px;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          .gp-weather {
            padding: 0 0 0 6px;
          }
        }
        .gp-todo {
          margin-top: 60px !important;
        }
        .gp-todo-toolbar {
          padding: 8px 0px;
          display: flex;
          text-align: center;
          background-color: #fff;
          > div {
            flex: 1;
            color: $cl-ft-dark;
          }
          .gp-icon {
            font-size: 18px;
          }
          .gp-icon-success, .gp-icon-pen {
            font-size: 20px;
          }
        }
        .gp-todo-list {
          margin: 5px 0 0 0;
          .gp-todo-lt-item {
            margin-top: 3px;
            padding: 12px 18px;
            background-color: #fff;
            .gp-todo-lt-title {
              color: #333;
              font-size: 18px;
              padding: 0 0 10px 0;
            }
            .gp-todo-lt-content {
              color: #666;
              font-size: 14px;
            }
          }
        }
        .gp-right {
          flex: 1;
          > div {
            width: 300px;
            box-sizing: border-box;
          }
        }
        .gp-exercise {
          background-color: #fff;
          border-radius: 48px;
          color: #333;
          padding: 12px 0;
          display: flex;
          align-items: center;
          height: 50px;
          .gp-icon-heart {
            font-size: 34px;
          }
          .gp-level {
            flex: 1;
            text-align: center;
          }
          .gp-exercise-item {
            width: 70px;
            text-align: center;
            position: relative;
            > div:nth-child(2) {
              font-size: 12px;
            }
            &:after {
              content: '';
              display: block;
              background-color: $cl-fl-light;
              width: 2px;
              height: 80%;
              position: absolute;
              top: 10%;
              right: 0;
            }
            &:last-child:after {
              display: none;
            }
          }
        }
        .gp-drive {
          display: flex;
          border-radius: 3px;
          background-color: rgb(2, 35, 42);
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
          padding: 14px 16px;
          font-size: 24px;
          margin-top: 60px;
          .gp-icon {
            font-size: 28px;
          }
          .gp-drive-icon {
          }
          .gp-drive-title {
            flex: 1;
            padding: 0 0 0 8px;
          }
          .gp-drive-upload, .gp-drive-pic, gp-drive-add {
            width: 50px;
          }
        }
        .gp-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 70px;
          > div {
            background-color: #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            > svg {
              margin: 0 auto;
            }
          }
        }
        .gp-float {
          width: 50px;
          position: absolute;
          top: 20px;
          right: 50px;
          > div {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: #fff;
            text-align: center;
            line-height: 58px;
            margin-top: 16px;
            .gp-icon {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
</style>
