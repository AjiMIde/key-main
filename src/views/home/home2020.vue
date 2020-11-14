<!--https://www.baidu.com/s?ie=UTF-8&wd=Thin%20Admin%20Template-->
<!--http://www.jqueryfuns.com/resource/586-->
<!--http://www.jqueryfuns.com/resource/view/586-->

<template>
  <div class="home2020">

    <div class="nav-list" id="navList">
      <el-row class="nav-row" :data-row-index="i" v-for="(item, i) in navList" :key="i">
        <el-col :span="3" class="nav-col header" v-if="item.title">
          {{item.title}}
        </el-col>
        <el-col :span="3" class="nav-col item" :data-col-index="ii"
                v-for="(oo, ii) in item.list" :key="ii" @mousedown="test1" @mouseup="test2">
          <div class="item-1" @mousedown="test1" @mouseup="test2">
            <span>{{oo.text}}</span>
            <span class="edit" @click="itemClick(i, ii, oo, $event)"></span>
          </div>
        </el-col>
        <el-col :span="1" class="nav-col add" @click="itemClick(i, -1, {}, $event)">
          +
        </el-col>
      </el-row>

      <div class="edit-box" :style="editBoxPosition" v-show="editBoxContent.show">
        <div class="eb-row">
          <input type="text" v-model="editBoxContent.text">
        </div>
        <div class="eb-row">
          <input type="text" v-model="editBoxContent.link">
        </div>
        <div class="eb-row">
          <button @click="cancelSubmit">取消</button>
          <button @click="editSubmit">确定</button>
        </div>
      </div>
    </div>


    <el-row class="nav-row" style="width: 80%; margin: 0 auto;" v-if="false">
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
import dragula from 'dragula'

// import TimeToRest from '@/components/TimeToRest.vue'
// import LaunchExe from '@/components/LaunchExe.vue'

import Nav from '@/datas/nav.json'
import Nav2 from '../../datas/nav.yml'
// import FzsStorage from '../libs/FzsStorage'
// import FzsDate from '../libs/FzsDate'
import DashboardGoogle from '@/components/DashboardGoogle'
import httpR from '../../libs/httpR'

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
      nav: Nav2,


      editBoxPosition: {
        left: 0,
        top: 0
      },
      editBoxContent: {
        show: false,
        fatherIndex: -1, childIndex: -1, text: '', link: ''
      },
      navList: [],
    }
  },
  methods: {
    itemClick (i, ii, item = {}, $event) {
      this.editBoxContent = {
        show: true,
        fatherIndex: i,
        childIndex: ii,
        text: item.text || '',
        link: item.link || ''
      }
      this.editBoxPosition = {
        left: ($event.x + 20) + 'px',
        top: ($event.y + 20) + 'px'
      }
    },
    editSubmit () {
      const tempAry = this.navList.concat([])
      const {fatherIndex, childIndex, text, link} = this.editBoxContent
      if (childIndex === -1) {
        const l = tempAry[fatherIndex].list.length
        tempAry[fatherIndex].list[l] = {
          text, link
        }
      } else {
        tempAry[fatherIndex].list[childIndex] = {
          text, link
        }
      }
      const content = JSON.stringify(tempAry)
      this.updateHomeNavList(content)
    },
    cancelSubmit () {
      this.editBoxContent.show = false
    },

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
    },

    test1 () {
      console.log('dddd')
    },
    test2 () {
      console.log('uuuu')
    },

    updateHomeNavList (content = '') {
      content = typeof content === "string" ? content : JSON.stringify(content)
      httpR.homeNavList.update(content).then(data => {
        this.navList = data || []
      }).catch(err => {
        console.log(err)
      })
    },
    getHomeNavList () {
      httpR.homeNavList.get().then(data => {
        this.navList = data || []
        this.$nextTick(() => {
          const tempList = this.navList.concat([])

          const elList = document.getElementById('navList')
          const getIndex = (el) => {
            if (!el.getAttribute) return -1
            return parseInt(el.getAttribute('data-col-index') || el.getAttribute('data-row-index') || -1)
          }

          elList.onmousedown = () => {
            // console.log('dddd')
          }
          elList.onmouseup = () => {
            // console.log('uuuu')
          }

          const rows = document.getElementsByClassName('nav-row')
          let handlerRows = []
          for(let i = 0; i < rows.length; i++) {
            handlerRows.push(rows[i])
          }


          let timeout = null
          const that = this

          let drake = dragula(handlerRows, {
            moves: function (el, source, handle, sibling) {
              // console.log(el, source, handle, sibling)
              return true; // elements are always draggable by default
            },
            accepts: function (el, target, source, sibling) {
              // console.log(el, target, source, sibling)
              window.clearTimeout(timeout)

              const elI = getIndex(el)
              const tgI = getIndex(target)
              const sI = getIndex(source)
              const siI = getIndex(sibling)

              timeout = window.setTimeout(() => {
                console.log(elI, tgI, sI, siI)
                // const item = tempList[sI].list.splice(elI, 1)[0]
                // tempList[tgI].list.splice(siI - 1, 0, item)
                // console.log(tempList)
                // that.updateHomeNavList(tempList)
              }, 500)

              return true; // elements can be dropped in any of the `containers` by default
            },
          })
        })
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    window.h2 = this
    this.getHomeNavList()
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
  .home2020 {
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
      font-size: 14px;
      position: relative;
      width: 80%; margin: 0 auto;
      .nav-row {
        margin-bottom: 16px;
        .nav-col {
          border: 1px dotted #ccc3;
          padding: 8px 14px;
          /*display: inline-block;*/
          border-radius: 2px;
          margin-right: 8px;
        }
        .nav-col.header {
          font-weight: bold;
        }
        .nav-col.item {
          .item-1 {
            cursor: pointer;
            display: flex;
            align-items: center;
            .edit {
              margin-left: 4px;
              width: 14px;
              height: 14px;
              display: none;
              background-image: url(../../assets/edit.png);
              background-size: 100% 100%;
            }
          }
          &:hover {
            border-bottom-color: #49a5f7;
            box-shadow: 4px 4px 7px 2px #cccccc29;
            color: #49a5f7;
            .edit {
              display: block;
            }
          }
        }
        .nav-col.add {
          text-align: center;
        }

      }
      .edit-box {
        position: absolute;
        background-color: #fff;
        box-shadow: 4px 4px 7px 2px #cccccccc;
        padding: 10px;
        .eb-row {
          input {
            border: none;
            border-bottom: 1px dotted #ccc;
            padding: 4px 8px;
            outline: none;
            min-width: 200px;
          }
          button {
            margin-top: 8px;
            margin-right: 8px;
          }
        }
      }
    }
  }
</style>
<style>
  @import "~dragula/dist/dragula.min.css";
</style>
