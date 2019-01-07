<template>
  <div class="launch-exe">
    <div class="nav-exe">
      <span class="exe-item" v-for="(item, index) in exe.exes" :key="index" v-if="!item.disabled">
        <a :id='item.id' :href='item.href'
           :target="item.href.indexOf('http') === 0 ? '_blank': ''"> {{item.txt}} </a>
      </span>
    </div>
    <div style="height: 10px;"></div>
    <div class="exe-abort">
      <el-btn :type="this.exe.launched ? 'success' : 'danger'" size="mini"
              :icon="this.exe.launched ? 'el-icon-success' : 'el-icon-delete'" @click="forceAbort()">
        {{this.exe.launched ? '' : 'ForceAbort'}}</el-btn>
    </div>
  </div>
</template>

<script>
import FzsStorage from '../libs/FzsStorage'
import FzsDate from '../libs/FzsDate'
import { Button } from 'element-ui'

const EXES = [
  { id: 'protocoltim', href: 'ajiprotocoltim://', txt: 'TIM' },
  { id: 'protocolwechat', href: 'ajiprotocalwechat://', txt: 'Wechat' },
  { id: 'protocolfoxmail', href: 'ajiprotocalFoxmail://', txt: 'Foxmail' },
  { id: 'protocolshadowsocks', href: 'ajiprotocalshadowsocks://', txt: 'ShadowSocks' },
  { id: 'protocoleverything', href: 'ajiprotocaleverything://', txt: 'Everything' },
  { id: 'protocolwox', href: 'ajiprotocalwox://', txt: 'Wox' },
  { id: 'protocolonedrive', href: 'ajiprotocalonedirve://', txt: 'OneDrive' },
  { id: 'protocolxxnet', href: 'ajiprotocalxxnet://', txt: 'XXnet', disabled: true },
  {
    id: 'protocolteambition',
    href: 'https://www.teambition.com/project/5ac2551cbe97d01847b1834f/tasks/scrum/5ac2551cbe97d01847b18351',
    txt: 'Teambition'
  },
  {
    id: 'protocoltapd',
    href: 'https://www.tapd.cn/22298271/board/index?board_id=1122298271001000025&board_type=resource&view_type=board',
    txt: 'Tapd'
  },
]

export default {
  name: 'LaunchExe',
  components: {
    'el-btn': Button
  },
  data () {
    return {
      exe: {
        exes: EXES,
        delay: 30,          // 20秒后逐个启动
        interval: 5,       // 间隔多少秒
        launched: false,    // 已经执行过了
        timeout_timer: '',
        interval_timer: ''
      }
    }
  },
  methods: {
    forceAbort () {
      this.exe_launchedExe()
      window.clearTimeout(this.exe.timeout_timer)
      window.clearInterval(this.exe.interval_timer)
    },
    /**
     * 运行 exe
     * 每隔 window.interval 运行一个，直到为空
     */
    exe_launchExe (readyToLaunch = false) {
      if (!readyToLaunch) {
        this.exe.timeout_timer = window.setTimeout(() => {
          this.exe_launchExe(true)
        }, this.exe.delay * 1000)
        return
      }

      const tempAry = this.exe.exes.slice(0)
      this.exe.interval_timer = window.setInterval(() => {
        let item = tempAry.shift()
        document.getElementById(item.id).click()

        if (tempAry.length <= 0) {
          window.clearInterval(this.exe.interval_timer)
          this.exe_launchedExe()
        }
      }, this.exe.interval * 1000)
    },

    /**
     * 设置 exe 已经执行过了，这通常为倒数完后的自然行为，或用户点击 close 按钮来触发
     */
    exe_launchedExe () {
      const key = 'keyMain' + FzsDate.get('yyyy-MM-dd')
      FzsStorage.set(key, true)
      this.exe.launched = true
    }
  },
  mounted () {
    const key = 'keyMain' + FzsDate.get('yyyy-MM-dd')
    this.exe.launched = Boolean(FzsStorage.get(key))
    if (!this.exe.launched) {
      this.exe_launchExe()
    }
  }
}
</script>

<style lang="scss">
  .launch-exe {
    position: relative;
    .nav-exe {
      .exe-item {
        a {
          text-decoration: none;
          color: #146bb0;
          padding: 6px 8px;
          display: inline-block;
        }
      }
    }
    .exe-abort {
      position: absolute;
      bottom: 1px;
      right: 1px;
    }
  }
</style>
