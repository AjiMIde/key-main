<!--https://www.baidu.com/s?ie=UTF-8&wd=Thin%20Admin%20Template-->
<!--http://www.jqueryfuns.com/resource/586-->
<!--http://www.jqueryfuns.com/resource/view/586-->

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
        <weather></weather>
      </el-col>
    </el-row>

    <el-row class="nav-row" style="width: 80%; margin: 0 auto;">
      <el-col :span="12" class="nav-col" v-for="(item, i) in nav.list" :key="i">
        <div class="nav-list">
          <h4 class="title">{{item.title}}</h4>
          <div class="item">
            <span v-for="(subItem, index) in item.list" :key="index">
              <span class="logo-txt" v-if="!subItem.link">
                {{subItem.text ? subItem.text.substr(0,1) : '?'}}
              </span>
              <span class="logo-icon" v-else>
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
import weather from '@/views/experiment/weather/weather.vue'

// import TimeToRest from '@/components/TimeToRest.vue'
// import LaunchExe from '@/components/LaunchExe.vue'

import Nav from '@/datas/nav.json'
import Nav2 from '../../datas/nav.yml'
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
    weather,
    DashboardGoogle
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      showMotto: true,
      mottoAry: MOTTO,
      nav: Nav2
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
  created () {
    console.log(Nav2)
    // console.log(',,', YAML, Nav2, YAML.parse(Nav2))
    // console.log(',,', YAML, Nav2)
    // console.log(this.nav)
  },
  mounted () {
    // console.log(',,', YAML, Nav2, YAML.parse(Nav2))
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
        /*padding: 0 12px 0px 12px;*/
        /*margin-bottom: 12px;*/
        display: inline-block;
        float: none;
        > div {
          /*background-color: rgba(255, 255, 255, .8);*/
          /*padding: 20px;*/
          /*border-radius: 4px;*/
          //box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
    .nav-list {
      /*margin-bottom: 12px;*/
      display: flex;
      border-bottom: 1px dashed #bbb;
      margin: 0 8px;
      padding: 10px 0;
      .title {
        font-size: 22px;
        width: 150px;
        height: 80px;
        text-align: left;
        padding: 10px 20px;
        /*margin: 0 0 12px 0;*/
      }
      .item {
        flex: 1;
        > span {
          display: inline-block;
          padding: 8px 0px;
          margin: 0 6px;
          border-bottom: 2px solid transparent;
          &:nth-child(n):hover {
            border-bottom: 2px solid #00c8ff;
          }
          &:nth-child(2n):hover {
            border-bottom: 2px solid #f37b00;
          }
          &:nth-child(3n):hover {
            border-bottom: 2px solid #d291ff;
          }
        }
        span.logo-txt {
          font-weight: 700;
          font-size: 13px;
          border-radius: 2px;
          border: 1px solid #333;
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          vertical-align: bottom;
        }
        span.logo-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          vertical-align: bottom;
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
