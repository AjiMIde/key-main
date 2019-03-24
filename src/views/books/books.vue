<template>
  <div class="books">
    <el-row class="nav-row">
      <el-col :span="4" class="nav-col">
        <form action="">
          <select name="" id="" @change="booksSelectChange($event)">
            <option value="Vue2.x">Vue2.x</option>
            <option value="StylesBooks">StylesBooks</option>
          </select>
        </form>
        <div class="summary" v-html="summary" @click="getContent($event)"></div>
      </el-col>
      <el-col :span="20" class="nav-col">
        <div v-html="content" @click="getContent($event)"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { Row, Col } from 'element-ui'
import Marked from 'marked'

export default {
  name: 'books',
  components: {
    'el-row': Row,
    'el-col': Col
  },
  data () {
    return {
      currentBook: 'Vue2.x',
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
    getContent ($e) {
      let href = $e.target.getAttribute('href')
      if (href) {
        href.replace(/^\.\//, '')
        this._handHttp(href).then(data => {
          this.content = Marked(data)
        }, err => {
          console.error(err)
        })
      } else {
        console.error('Summary href not found')
      }
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
    this.getSummary()
  }
}
</script>

<style lang="scss">
  .books {
    $color: #364149;
    color: #fff;
    font-size: 18px;
    text-align: left;
    .summary {
      color: $color;
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
        color: $color;
        text-decoration: none;
        &:hover {
          color: #00bb00;
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
  }
</style>
