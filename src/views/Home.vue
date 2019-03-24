<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>

    <el-row class="nav-row">
      <!--<el-col :span="12" class="nav-col">-->
        <!--<TimeToRest></TimeToRest>-->
      <!--</el-col>-->
      <!--<el-col :span="12" class="nav-col">-->
        <!--<LaunchExe></LaunchExe>-->
      <!--</el-col>-->
    </el-row>

    <el-row class="nav-row">
      <el-col :span="24" class="nav-col">
        <dashboard-google></dashboard-google>
      </el-col>
    </el-row>

    <el-row class="nav-row">
      <el-col :span="24" class="nav-col">
        <div class="nav-list" v-for="(item, i) in this.nav.list" :key="i">
          <!--<img :src="`${ baseUrl }chick(1).png`" alt="" style="display: none">-->
          <h4 class="nav-l-title">{{item.title}}</h4>
          <div class="nav-l-item">
            <span v-for="(subItem, index) in item.list" :key="index" :class="{'nav-l-item-blk': subItem.type === 'br'}">
              <span class="nav-l-br" v-if="subItem.type === 'br'"></span>
              <span class="nav-l-logo-txt" v-else-if="!subItem.link">{{subItem.text.substr(0,1)}}</span>
              <span class="nav-l-logo-txt"
                    v-else-if="subItem.link.indexOf('http') === -1">{{subItem.text.substr(0, 1)}}</span>
              <span class="nav-l-logo" v-else>
                <img :src="getNavSpanImg(subItem)" :onerror="getNavSpanRandomImg()"/>
              </span>
              <a :href="subItem.link" target="_blank"> {{subItem.text}} </a>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
// @ is an alias to /src
import { Row, Col } from 'element-ui'
import HelloWorld from '@/components/HelloWorld.vue'
// import TimeToRest from '@/components/TimeToRest.vue'
// import LaunchExe from '@/components/LaunchExe.vue'

import Nav from '@/datas/nav.json'
// import FzsStorage from '../libs/FzsStorage'
// import FzsDate from '../libs/FzsDate'
import DashboardGoogle from '@/components/DashboardGoogle'

const MOTTO = [
  '天天念叨人生、社会、道德的人慧根往往不高。真正有悟性的人，已经把这些思想都视为理所当然的，内化到自己的行动中去了，在物质世界中获得成功。',
  '有时我们觉得别人误会了自己，其实是我们误会了自己。',
  '如果你知道一些事情有意思，但不能去做而失落，那还好。要是觉得什么都没意思，应该就是抑郁症。',
  '人向来善变，而情亦总会变。',
  '一个人会孤单 但会心安。'
]

export default {
  name: 'home',
  components: {
    'el-row': Row,
    'el-col': Col,
    HelloWorld,
    // TimeToRest,
    // LaunchExe,
    DashboardGoogle
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      showMotto: true,
      mottoAry: MOTTO,
      nav: Nav
    }
  },
  methods: {
    getNavSpanImg (item) {
      if (!item.link) {
        return
      }
      let link = item.link
      if (link.substr(link.length - 1, 1) === '/') {
        link = link.substr(0, link.length - 1)
      }
      return link + '/favicon.ico'
    },
    getNavSpanRandomImg () {
      const n = Math.floor(Math.random() * 10) + 1
      return `this.src='img/chick (${n}).png'`
    },
    mottoCloseClick () {
      this.showMotto = false
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .home {
    text-align: left;
    /*background-color: #eeeeee;*/
    /*css reset -s*/
    h4 {
      margin: 0;
    }
    ul, li {
      margin: 0;
      padding: 0
    }
    /*css reset -e*/
    .nav-row {
      .nav-col {
        padding: 0 12px 0px 12px;
        margin-bottom: 12px;
        > div {
          /*background-color: rgba(255, 255, 255, .8);*/
          padding: 20px;
          border-radius: 4px;
          //box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
    .nav-list {
      margin-bottom: 12px;
      .nav-l-title {
        font-size: 22px;
        margin: 0 0 12px 0;
      }
      .nav-l-item {
        > span.nav-l-item-blk {
          display: block;
        }
        > span {
          display: inline-block;
          padding: 0 0 0 6px;
        }
        span.nav-l-logo-txt {
          font-weight: 700;
          font-size: 13px;
          border-radius: 2px;
          border: 1px solid #333;
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          vertical-align: text-top;
        }
        span.nav-l-logo {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: text-top;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        a {
          color: #75b2ff;
          text-decoration: none;
          padding: 4px 6px 4px 0;
          &:hover {
            text-shadow: 0px 0px 6px #e8e8e8;
            transition: all .3s;
          }
        }
      }
    }
  }
</style>
