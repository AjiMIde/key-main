<template>
  <div class="books" :style="{height: height + 'px'}">
    <div class="container">
      <el-row class="nav-row">
        <el-col :span="6" class="nav-col summary">
          <form action="">
            <select name="" id="" @change="booksSelectChange($event)">
              <option v-for="(o, i) in books" :value="o" :key="i">{{o}}</option>
            </select>
          </form>
          <div class="summary-list" v-html="summary" @click="getContent($event)"></div>
        </el-col>
        <el-col :span="18" class="nav-col content">
          <div class="content-title"><span v-for="(item, index) in contentTitle" :key="index">{{item}}</span></div>
          <div class="main-content markdown-body" v-html="content" @dblclick="copyCode($event)">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui'
import Marked from 'marked'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
const BOOKS = [
  'Vue2.x',
  'StylesBooks',
  'node-js'
]
export default {
  name: 'books',
  components: {
    'el-row': Row,
    'el-col': Col
  },
  data () {
    return {
      height: 0,
      contentTitle: [],
      activeSummaryItem: null,
      books: BOOKS,
      currentBook: 'StylesBooks',
      summary: '',
      content: ''
    }
  },
  methods: {
    _handHttp (url) {
      return new Promise((resolve, reject) => {
        url = `./Books/${this.currentBook}/` + url
        this.axios.get(url).then(res => {
          const { data } = res
          if (data && data.length > 0) {
            resolve(data)
          } else {
            reject(new Error('Http Success, content is empty'), res)
          }
        }).catch((e) => {
          let text = ''
          if (e.status === 0) {
            text = '网络连接已断开...'
          } else if (e.status === 403) {
            text = '访问权限受限'
          } else if (e.status === 404) {
            text = '访问地址无效...'
          } else if (e.status === 500) {
            text = '服务器异常...'
          } else {
            text = '请求出现未知异常...'
          }
          reject(text, e)
        })
      })
    },
    doCopyAction (ele) {
      if (ele && ele.select && document.execCommand) {
        ele.select()
        if (ele.createTextRange && ele.execCommand) {
          ele.createTextRange()
          ele.execCommand('Copy')
        } else {
          document.execCommand('Copy')
        }
        console.info('copied')
      } else if (window.clipboardData && window.clipboardData.setData) {
        window.clipboardData.setData('Text', this.tradeResult.tradeOrderId || '')
        console.info('copied')
      } else if (document.execCommand) {
        const range = document.createRange()
        range.selectNodeContents(ele)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand('copy')
        console.info('copied')
      } else {
        console.error('No copy function in your devices')
      }
    },
    copyCode ($e) {
      console.log($e.target)
      let el = $e.target
      while (el && el.classList.contains('main-content') === false) {
        if (el.nodeName === 'PRE') {
          this.doCopyAction(el)
        }
        el = el.parentElement
      }
    },
    setWindowHeight () {
      this.height = window.innerHeight
      window.addEventListener('resize', evt => {
        this.height = window.innerHeight
      })
    },
    highLightCode () {
      this.$nextTick(() => {
        window.setTimeout(() => {
          document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
          })
        }, 0)
      })
    },
    booksSelectChange ($e) {
      this.currentBook = $e.target.value
      this.getSummary()
    },
    getSummary () {
      if (this.currentBook) {
        this._handHttp('SUMMARY.md').then(data => {
          this.summary = Marked(data)
        }, err => {
          console.error(err)
        })
      } else {
        console.error('No any book be choosen')
      }
    },
    setContentTitle (el) {
      let ary = []
      while (el && el.classList.contains('summary-list') === false) {
        if (el.nodeName === 'LI') {
          const aEle = el.querySelector('a')
          if (aEle) {
            ary.push(aEle.innerText + ' / ')
          }
        }
        el = el.parentElement
      }
      if (ary.length > 0) {
        let firstOne = ary.shift()
        firstOne = firstOne.slice(0, firstOne.length - 3)
        ary = [firstOne].concat(ary)
        this.contentTitle = ary.reverse()
      }
    },
    getContent ($e) {
      console.log($e.target)
      if (this.activeSummaryItem) {
        this.activeSummaryItem.classList.remove('active')
      }
      $e.target.classList.add('active')
      this.activeSummaryItem = $e.target

      let href = $e.target.getAttribute('href')
      if (href) {
        href.replace(/^\.\//, '')
        this._handHttp(href).then(data => {
          this.content = Marked(data)
          this.highLightCode()
        }, err => {
          console.error(err)
        })
      } else {
        console.error('Summary href not found')
      }
      this.setContentTitle($e.target)
      $e.preventDefault()
      return false
    },
    dodo ($e) {
      console.log($e)
      // temp2.target.getAttribute('href')
      $e.preventDefault()
      return false
    }
  },
  mounted () {
    window.bk = this
    this.setWindowHeight()
    this.getSummary()
  }
}
</script>

<style lang="scss">
  @import "~bee-mui/src/styles/bee.m.markdown";

  .books {
    $bg-c-1: whitesmoke;
    $bg-c-white: #fff;
    $ft-c-black: #364149;
    $ft-c-2: #ff4340;
    $ft-c-green: #00bb00;
    $ft-c-grey: #bbbbbb;
    text-align: left;
    background-color: $bg-c-1;
    overflow: hidden;
    .container {
      width: 1080px;
      position: absolute;
      top: 30px;
      bottom: 30px;
      left: 50%;
      margin-left: -540px;
    }
    .nav-row, .summary, .content {
      height: 100%;
    }
    .summary, .content {
      border-radius: 2px;
      position: relative;
    }
    .summary {
      background-color: $bg-c-white;
      padding: 20px 20px;
      overflow: auto;
      .summary-list {
        overflow: auto;
        position: absolute;
        left: 0;
        right: 0;
        padding: 0 20px;
        top: 70px;
        bottom: 0;
      }
      form {
        select {
          width: 100%;
          height: 30px;
        }
      }
      ul, li {
        list-style: none;
      }
      ul {
        margin: 20px 0 0 0;
        padding: 0 0 0 20px;
      }
      li {
        padding: 8px 0;
      }
      a {
        font-size: 14px;
        color: $ft-c-black;
        text-decoration: none;
        &:hover {
          color: $ft-c-green;
        }
        &.active {
          color: $ft-c-green;
        }
      }
      & > ul > li > a {
        font-weight: bold;
      }
      ul {
        li {

        }
      }
    }
    .content {
      padding: 0 0 0 20px;
      .content-title {
        background: $bg-c-white;
        padding: 0 20px;
        line-height: 40px;
        box-shadow: inset 0px -1px 1px -1px #333;
        > span {
          color: $ft-c-grey;
          &:last-child {
            color: $ft-c-black;
          }
        }
      }
      .main-content {
        position: absolute;
        top: 40px;
        bottom: 0;
        right: 0;
        left: 20px;
        padding: 10px 20px;
        background: $bg-c-white;
        overflow: auto;
      }
    }
    .summary, .summary-list, .main-content {
      &::-webkit-scrollbar { // 整个滚动条.
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-button { // 滚动条上的按钮 (上下箭头).
        background-color: $ft-c-green;
        display: block;
        height: 4px;
      }
      &::-webkit-scrollbar-thumb { // 滚动条上的滚动滑块.
        background-color: #dddddd;
        background-clip: padding-box;
        min-height: 28px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: #bbb;
      }

      &::-webkit-scrollbar-track { // 滚动条轨道.
      }
      &::-webkit-scrollbar-track-piece { // 滚动条没有滑块的轨道部分.
        background-color: #f8f8f8;
      }
      &::-webkit-scrollbar-corner { //当同时有垂直滚动条和水平滚动条时交汇的部分.
      }
      &::-webkit-resizer { // 某些元素的corner部分的部分样式(例:textarea的可拖动按钮) . &::-webkit-scrollbar-button {
      }
    }
  }
</style>
