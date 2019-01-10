<template>
  <div class="secret">
    <ul>
      <li v-for="(item, i) in list" :key="i" @click="goto(item)">
        {{item.txt}}
      </li>
    </ul>
    <div v-html="content"></div>
  </div>

</template>

<script>
import Marked from 'marked'

export default {
  name: 'secret',
  components: {},
  data () {
    return {
      directory: '',
      list: [],
      content: '',
      xx: ''
    }
  },
  methods: {
    goto (item) {
      this.axios.get(`./document/${this.directory}/${item.file}`).then(res => {
        console.log(res)
        this.content = Marked(res.data)
      })
    },
    getList () {
      this.axios.get('./document/others.json').then(res => {
        if (res.data.directory && res.data.list.length > 0) {
          this.directory = res.data.directory
          this.list = res.data.list
        } else {
          window.alert('发生错误')
        }
      }).catch(error => {
        window.alert('发生错误')
        console.error(error)
      })
    },
    x () {}
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss">
  .secret {
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
          background-color: rgba(255, 255, 255, .8);
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
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
        > span {
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
