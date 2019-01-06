<template>
  <div class="launch-exe">
    <div class="nav-exe">
      <span class="exe-item" v-for="(item, index) in exe.exes" :key="index">
        <a :id='item.id' :href='item.href'
           :target="item.href.indexOf('http') === 0 ? '_blank': ''"> {{item.txt}} </a>
      </span>
    </div>
  </div>
</template>

<script>
import FzsStorage from '../libs/FzsStorage'
import FzsDate from '../libs/FzsDate'

const EXES = [
  { id: 'protocoltim', href: 'ajiprotocoltim://', txt: 'TIM' },
  { id: 'protocolwechat', href: 'ajiprotocalwechat://', txt: 'Wechat' },
  { id: 'protocolfoxmail', href: 'ajiprotocalFoxmail://', txt: 'Foxmail' },
  { id: 'protocolxxnet', href: 'ajiprotocalxxnet://', txt: 'XXnet' },
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
  { id: 'protocoleverything', href: 'ajiprotocaleverything://', txt: 'Everything' },
  { id: 'protocolwox', href: 'ajiprotocalwox://', txt: 'Wox' }
]

export default {
  name: 'LaunchExe',
  data () {
    return {
      exe: {
        exes: EXES,
        delay: 20,          // 20秒后逐个启动
        interval: 5,       // 间隔多少秒
        launched: false,    // 已经执行过了
        x: ''
      },
    }
  },
  methods: {
    /**
     * 运行 exe，运行前会检查是否需要运行 this.exe.launched
     * 每隔 window.interval 运行一个，直到为空
     */
    exe_launchExe (readyToLaunch = false) {
      const key = 'keyMain' + FzsDate.get('yyyy-MM-dd')
      const launched = Boolean(FzsStorage.get(key))
      if (launched === true || this.exe.launched === true) {
        return
      }

      if (!readyToLaunch) {
        window.setTimeout(() => {
          this.exe_launchExe(true)
        }, this.exe.delay * 1000)
        return
      }

      const tempAry = this.exe.exes.slice(0)
      const timer2 = window.setInterval(() => {
        let item = tempAry.shift()
        document.getElementById(item.id).click()

        if (tempAry.length <= 0) {
          this.exe_launchedExe()
          window.clearInterval(timer2)
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
    this.exe_launchExe()
  }
}
</script>

<style>
  .launch-exe {
    .nav-exe {
      .exe-item {
        a {
          text-decoration: none;
          color: #146bb0;
          padding: 0px 8px;
          display: inline-block;
        }
      }
    }
  }
</style>
