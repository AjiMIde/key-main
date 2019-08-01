<template>
  <div class="wechat">
    <div class="wechat-container">
      <div class="wechat-header">
        <div>
          <span> &lt; 蜂助手侃聊</span>
        </div>
        <div><span>{{username.substr(0, 1) || ''}}</span><span>{{username}}</span></div>
      </div>

      <div class="wechat-body">
        <ul>
          <li v-for="(item, index) in msgList" :key="index">
            <div v-if="item.type === 'info'" class="wechat-body-info">
              <span> {{item.content}} </span>
            </div>
            <div v-if="item.type === 'chat' && item.username !== username" class="wechat-body-his-chat">
              <div class="user-avatar">
                <span></span>
                <span>{{item.username.slice(0, 1)}}</span>
              </div>
              <div class="wechat-body-content">
                <span>{{item.username}}</span>
                {{item.content}}
              </div>
            </div>
            <div v-if="item.type === 'chat' && item.username === username" class="wechat-body-my-chat">
              <div class="user-avatar">
                <span></span>
                <span>{{item.username.slice(0, 1)}}</span>
              </div>
              <div class="wechat-body-content">
                {{item.content}}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="wechat-footer">
        <div><input type="text" v-model="content"></div>
        <div>
          <button @click="socketIOSendMsg">发送</button>
        </div>
      </div>
    </div>
    <div class="wechat-login" v-if="loginVisible">
      <div class="wl-mask"></div>
      <div class="wl-body">
        <div class="wl-body-main">
          <div><input type="text" v-model="username"></div>
          <div>
            <button @click="socketIOLogin">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
// console.log(window.x = si)
export default {
  data () {
    return {
      loginVisible: false,
      username: '',
      msgList: [],
      content: ''
    }
  },
  methods: {
    connectSocketIO () {
      const ip = '10.20.10.57'
      const port = '3300'
      this.socket = io(`ws://${ip}:${port}`)

      // this.socket.onconnect = () => {
      //   console.log('ccccccccc')
      // }

      this.socket.on('response-msg', (data) => {
        console.log('Get some information from somebody: ', data)
        this.msgList.push({
          type: 'chat',
          username: data.username,
          content: data.msg
        })
      })
      this.socket.on('response-user-add', (data) => {
        console.log('Somebody join in the chat', data)
        if (data && data.username) {
          this.msgList.push({
            type: 'info',
            content: data.username + ' 加入了群聊'
          })
          if (data.username === this.username) {
            this.loginVisible = false
          }
        }
      })
      this.socket.on('response-leave', (data) => {
        console.log('Somebody join in the chat', data)
        if (data && data.username) {
          this.msgList.push({
            type: 'info',
            content: data.username + ' 离开了群聊'
          })
        }
      })
    },
    socketIOLogin () {
      this.connectSocketIO()
      this.socket.emit('login', this.username || 'fzs')
    },
    socketIOSendMsg () {
      this.socket.emit('send-msg', this.content)
      this.content = ''
    },
    connectWs () {
      this.ws = new WebSocket('ws://10.20.10.57:3300/test')
      this.ws.onmessage = msg => {
        console.log(msg)
      }
      window.setTimeout(() => {
        this.ws.send('Hello !')
      })
    }
  },
  name: 'wechat',
  mounted () {
    this.io = null
    this.ws = null

    window.me = this
    // this.connectWs()
    // this.connectSocketIO()
    // -----
    this.socket = null
    if (this.username === '') {
      this.loginVisible = true
    }
  }
}
</script>

<style lang="scss">
  .wechat {
    font-size: 14px;
    * {
      box-sizing: border-box;
      outline: none;
    }
    button {
      background: #28beff;
      border: none;
      border-radius: 3px;
      padding: 6px 20px;
      color: #fff;
    }
    input {
      outline: none;
      border: none;
      padding: 6px 12px;
      font-size: 14px;
    }
    .wechat-header {
      display: flex;
      box-shadow: 0px 3px 2px 0px rgba(145, 145, 145, .25);
      padding: 10px 16px;
      background: #fff;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      > div {
        flex: 1;
        &:nth-child(1) {
          line-height: 28px;
        }
        &:nth-child(2) {
          text-align: right;
          > span {
            &:nth-child(1) {
              width: 26px;
              height: 26px;
              display: inline-block;
              border-radius: 50%;
              background: #f2f2f2;
              text-align: center;
              line-height: 24px;
              font-size: 16px;
              margin-right: 6px;
              color: #585858;
            }
            &:nth-child(2) {
              font-size: 16px;
            }
          }
        }
      }
    }
    .wechat-body {
      padding: 6px 10px;
      margin: 55px 0 40px 0;
      ul {
        li {
          margin-bottom: 18px;
          .wechat-body-info {
            text-align: center;
            span {
              background: aliceblue;
              text-align: center;
              display: inline-block;
              padding: 4px 10px;
              border-radius: 18px;
              font-size: 12px;
            }
          }
          .user-avatar {
            span {
              &:nth-child(2) {
                width: 26px;
                height: 26px;
                border-radius: 50px;
                line-height: 25px;
                font-size: 16px;
                background: #f2f2f2;
                display: inline-block;
                text-align: center;
              }
            }
          }
          .wechat-body-his-chat, .wechat-body-my-chat {
            display: flex;
            .wechat-body-content {
              padding: 8px 12px;
              border-radius: 6px;
              margin: 0 6px;
              margin-top: 8px;
              max-width: 200px;
              background-color: #f2f2f2;
            }
          }
          .wechat-body-his-chat {
            .wechat-body-content {
              margin-top: 12px;
              position: relative;
              > span {
                transform: scale(.8);
                top: -14px;
                left: 2px;
                position: absolute;
                font-size: 12px;
              }
            }
          }
          .wechat-body-my-chat {
            flex-flow: row-reverse;
          }
        }
      }
    }
    .wechat-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: 2px 0px 10px 0px rgba(51, 51, 51, .35);
      background-color: #fff;
      display: flex;
      > div:nth-child(1) {
        flex: 1;
        padding: 10px 0 10px 14px;
        input {
          width: 100%;
          border-bottom: 1px solid #d9d5d5;
        }
      }
      > div:nth-child(2) {
        width: 120px;
        padding: 10px 14px 10px 6px;
        button {
          width: 100%;
        }
      }
    }
    .wechat-login {
      .wl-mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .4);
      }
      .wl-body {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .wl-body-main {
          width: 200px;
          > div {
            width: 100%;
            margin-bottom: 10px;
            input, button {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
