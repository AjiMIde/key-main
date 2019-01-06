<template>
  <div class="time-to-rest">
    <div class="time-clock">{{time}}</div>
    <el-btn type="primary" size="small" @click="setNotify('TEST', 'TEST', '')">测试Chrome Notification</el-btn>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import NTF from '../libs/ChromeNTF'

export default {
  name: 'TimeToRest',
  components: {
    'el-btn': Button
  },
  data () {
    return {
      time: '',
      clogStyle: 'font-size: 14px; color: blue;font-family: Microsoft YaHei;',
      matterTip: {
        notification: null,
        iKnown: false
      }
    }
  },
  methods: {
    addZero (str) {
      str = '' + str
      return (str.length >= 2 ? str : '0' + str)
    },
    startTimer () {
      window.setInterval(() => {
        const date = new Date()
        const h = this.addZero(date.getHours())
        const m = this.addZero(date.getMinutes())
        const s = this.addZero(date.getSeconds())
        this.time = h + ':' + m + ':' + s

        if (m === '30' && s === '00') {
          this.setNotify('TIME', 'WALK')
          this.matterTip.iKnown = true
        }
        if (m === '30' && s === '10' && !this.matterTip.iKnown) {
          this.matterTip.iKnown = true
        }
        if (m === '00' && s === '00') {
          this.matterTip.iKnown = true
          this.setNotify('TIME', 'WATER')
        }
        if (m === '00' && s === '10' && !this.matterTip.iKnown) {
          window.alert('TIME' + 'WATER')
        }
      }, 1000)
    },
    setNotify (title = '', body = '', icon = '') {
      if (title === '' || body === '') {
        title = 'HELLO'
        body = 'READY TO WORK?'
      }

      this.matterTip.notification = NTF.show(title, body, icon)
      this.matterTip.iKnown = false

      this.matterTip.notification.onclick = () => {
        this.matterTip.notification.close()
        this.matterTip.iKnown = true
      }
    }
  },
  mounted () {
    this.startTimer()
    this.setNotify()
  }
}
</script>

<style>
  .time-to-rest {

  }
</style>
