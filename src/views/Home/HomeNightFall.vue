<!--https://www.baidu.com/s?ie=UTF-8&wd=Thin%20Admin%20Template-->
<!--http://www.jqueryfuns.com/resource/586-->
<!--http://www.jqueryfuns.com/resource/view/586-->

<template>
  <div class="home-night-fall" ref="mainBack">
    <div class="header">
      <div class="logo"></div>
      <div class="function">
        <div class="search">
          <input type="text" placeholder="搜索...">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="left-tree">
        <ul>
          <li v-for="(o, i) in treeNav" :key="i">
            <a href="">{{o.txt}}</a>
          </li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui'

export default {
  name: 'homeNightFall',
  components: {
    'el-row': Row,
    'el-col': Col
  },
  data () {
    return {
      treeNav: [{
        txt: '综合导航',
        name: 'common-nav'
      }, {
        txt: '私人空间',
        name: 'private-space'
      }]
    }
  },
  methods: {
    autoHeight (ele) {
      ele.style.height = window.innerHeight + 'px'
      window.onresize = (e) => {
        const h = e.currentTarget.innerHeight
        ele.style.height = h + 'px'
      }
    }
  },
  mounted () {
    this.autoHeight(this.$refs.mainBack)
  }
}
</script>

<style lang="scss">
  @import "../../styles/key-main-common";

  .home-night-fall {
    $c-back-purple: #54364a;
    $c-font: #333;
    $url-a: '../../assets/home/homeNightFall/a.jpg';
    $url-logo: '../../assets/logo.png';

    // rest
    input {
      background-color: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #fff;
      padding: 6px 6px;
      outline: none;
      transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    }

    background-color: $c-back-purple;
    background-size: cover;
    background-image: url($url-a);
    color: $c-font;
    font-size: 14px;

    position: relative;
    // --- common
    // ---
    .header {
      height: 100px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      background-color: rgba(0, 0, 0, 0.25);
      padding: 10px;
      color: #fff;
      display: flex;
      .logo {
        width: 170*0.8px;
        height: 110*0.8px;
        background-image: url($url-logo);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .function {
        flex: 1;
        text-align: right;
        .search {
          height: 100%;
          line-height: 100*.75px;
        }
      }
    }
    .container {
      @extend .absolute-div;
      top: 100px;
      /*background-color: #e6a23c;*/
      overflow: hidden;
      .left-tree {
        @extend .absolute-div;
        @extend .webkit-beauty;
        overflow: auto;
        width: 150px;
        background-color: rgba(0, 0, 0, 0.20);
        color: #FFF;
        display: table-cell;
        vertical-align: top;

        ul {
          li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            a {
              border: 0 none;
              display: block;
              padding: 15px 15px 15px 20px;
              position: relative;
              text-decoration: none;
              text-transform: uppercase;
            }
          }
        }
      }
      .body {
        @extend .absolute-div;
        @extend .webkit-beauty;
        overflow: auto;
        left: 150px;
        /*background-color: rgba(255, 18, 63, 0.7);*/
      }
    }
  }
</style>
