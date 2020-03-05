<template>
  <div class="books" :style="{height: height + 'px'}">
    <div class="container">
      <el-row class="nav-row">
        <el-col :span="6" class="nav-col summary">
          <form action="">
            <select name="" id="" @change="booksSelectChange($event)" v-model="currentBook">
              <option v-for="(o, i) in books" :value="o" :key="i">{{o}}</option>
            </select>
          </form>
          <div class="summary-list" v-html="summary" @click="getContent($event)"></div>
        </el-col>
        <el-col :span="18" class="nav-col content">
          <div class="content-title">
            <span v-for="(item, index) in articleTitle" :key="index">{{item}}
              <span v-if="index < articleTitle.length - 1"> / </span>
            </span>
            <div class="edit-btn">
              <el-btn type="primary" icon="el-icon-edit" size="mini" circle @click="goToEdit"></el-btn>
            </div>
          </div>

          <div class="main-content">
            <div class="markdown-body">
              <div v-html="content" @dblclick="copyCode($event)"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Row, Col, Button } from 'element-ui'
import Marked from 'marked'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import { HttpApi } from '../../libs/httpR'

const BOOKS = [
  'styles-book',
  'Vue2.x',
  'mini-program-books',
  'node-js',
  'vue-books'
]

export default {
  name: 'books',
  components: {
    'el-row': Row,
    'el-col': Col,
    'el-btn': Button
  },
  data () {
    return {
      height: 0,            // 制作自适应高度

      books: BOOKS,
      branch: 'master',
      currentBook: '',
      currentHref: '',

      articleTitle: [],
      currentArticleEle: null,

      summary: '',
      content: ''
    }
  },
  methods: {
    // 暂时弃用
    // 处理 iframe 地址，由于得到的内容的路径是本地路径，因此开发中，或打包后，都需要处理一些 url成线上地址
    ___handlerIframe () {
      if (['10.20.11.17', '127.0.0.1', 'localhost'].indexOf(window.location.hostname) >= 0) {
        window.setTimeout(() => {
          const iframes = document.getElementsByTagName('iframe')
          for (let i = 0; i < iframes.length; i++) {
            let iframe = iframes[i]
            let src = iframe.src
            src = src.replace('https://ajimide.github.io/key-main', 'http://127.0.0.1:' + window.location.port)
            iframe.src = src
          }
        }, 2000)
      }
    },

    // 处理图片地址，理由同上
    handlerImg () {
      window.setTimeout(() => {
        const imgs = document.getElementsByTagName('img')
        const path = HttpApi.rawGitHub + this.currentBook + '/' + this.branch + '/'

        for (let i = 0; i < imgs.length; i++) {
          let img = imgs[i]
          let src = img.getAttribute('src')
          src = src.replace(/\.\.\//g, '')
          img.src = path + src
        }
      }, 0)
    },

    // 处理window 的高，使用中间的高自适应
    setWindowHeight () {
      this.height = window.innerHeight
      window.addEventListener('resize', evt => {
        this.height = window.innerHeight
      })
    },

    /**
     * 复制 element 中的 contentText 内容
     * @param ele ｛HTMLElement} 要进行复制的 element
     */
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

    /**
     * 复制代码，双击即可复制代码
     */
    copyCode ($e) {
      let el = $e.target
      while (el && el.classList.contains('main-content') === false) {
        if (el.nodeName === 'PRE') {
          this.doCopyAction(el)
        }
        el = el.parentElement
      }
    },

    // 代码高亮
    highLightCode () {
      this.$nextTick(() => {
        window.setTimeout(() => {
          document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
          })
        }, 0)
      })
    },

    // html select change 响应
    booksSelectChange ($e) {
      this.currentBook = $e.target.value
      this.getSummary()
      this.$router.replace({
        path: '/books/' + this.currentBook
      })
    },

    /**
     * 获取左边目录树结构
     */
    getSummary () {
      if (this.currentBook) {
        this.httpR.getBookSummary(`${this.currentBook}/${this.branch}/SUMMARY.md`).then(data => {
          this.summary = Marked(data)

          this.$nextTick(() => {
            // 处理summary，使其可被点击，并初使化一个点击
            const summaryList = document.getElementsByClassName('summary-list')[0]
            const aAry = summaryList.getElementsByTagName('a')
            let params = this.$route.params
            let tempArticleName = (params && params.articlename) || ''
            if (aAry.length > 0) { // element 只能用 for
              for (let i = 0; i < aAry.length; i++) {
                let a = aAry[i]
                if (a && a.getAttribute('href') && a.innerText) {
                  a.setAttribute('title', a.innerText)
                  // 当链接上已经有此文章的 title，则手动点击
                  if (tempArticleName === a.innerText) {
                    a.click()
                  }
                }
              }
            }
            if (tempArticleName === '') {
              aAry[0].click()
            }
          })
        })
      } else {
        console.error('No any book be choosen')
      }
    },

    // 设置文章标题
    setArticleTitle (el) {
      let ary = []
      let i = 0
      while (el && el.classList.contains('summary-list') === false && i < 10) {
        el = el.parentElement
        let cEl = el.children[0]
        if (cEl.nodeName === 'A' || cEl.nodeName === 'P') {
          let cEl = el.children[0]
          let txt = cEl.innerText

          if (ary.indexOf(txt)) {
            ary.push(txt)
          }
        }

        i++
      }
      console.log(ary)
      this.articleTitle = ary.reverse()
    },

    /**
     * 左边树目录响应点击，获取内容并展示
     * @param $e
     * @returns {boolean}
     */
    getContent ($e) {
      $e.preventDefault()
      if ($e.target.nodeName !== 'A') return

      if (this.currentArticleEle) {
        this.currentArticleEle.classList.remove('active')
      }

      $e.target.classList.add('active')
      this.currentArticleEle = $e.target

      let href = $e.target.getAttribute('href')
      let title = $e.target.getAttribute('title')
      this.$router.replace({
        path: '/books/' + this.currentBook + '/' + encodeURIComponent(title)
      })

      if (href) {
        href = href.replace(/^\.\//, '')
        this.httpR.getBookContent(`${this.currentBook}/${this.branch}/${href}`).then(data => {
          this.currentHref = href
          this.rawContent = data
          this.content = Marked(data)

          this.$nextTick(() => {
            this.highLightCode()
            this.handlerImg()
          })
        })
      } else {
        console.error('Summary href not found')
      }
      this.setArticleTitle($e.target)
      return false
    },
    goToEdit () {
      window.open(`${HttpApi.gitHub}${this.currentBook}/edit/${this.branch}/${this.currentHref}`)
    }
  },
  mounted () {
    window.bk = this
    this.setWindowHeight()

    let params = this.$route.params
    if (params && params.bookname) {
      this.currentBook = params.bookname
    } else {
      this.currentBook = this.books[0]
    }
    this.getSummary()
  }
}
</script>

<style lang="scss">
  @import "~bee-mui/src/styles/bee.markdown";

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
        ul li, ul li p, ul li a {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > ul {
          > li {
            > p {
              font-weight: bold;
            }
          }
        }
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
        display: flex;
        > span {
          color: $ft-c-grey;
          &:last-child {
            color: $ft-c-black;
          }
        }
        .edit-btn {
          text-align: right;
          flex: 1;
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
        iframe {
          width: 100%;
          height: 250px;
        }
      }
      .edit-box {
        textarea {
          width: 100%;
        }
      }
    }
    .summary, .summary-list, .main-content, .main-content iframe, .main-content iframe document {
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
    .main-content {
      ul {
        li {
          line-height: 1.8;
        }
      }
    }
  }
</style>
