<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>
    <el-row>
      <el-col :span="12">
        <h4 class="nav-l-title">{{this.nav.title}}</h4>
        <div class="nav-l-item">
          <span v-for="(item, index) in this.nav.list" :key="index">
            <a :href="item.link" target="_blank"> {{item.text}} </a>
          </span>
        </div>
      </el-col>
      <el-col :span="12">xx</el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Row, Col } from 'element-ui'
import Nav from '@/datas/nav.json'

export default {
  name: 'home',
  data () {
    return {
      nav: Nav
    }
  },
  components: {
    'el-row': Row,
    'el-col': Col,
    HelloWorld
  }
}
</script>

<style lang="scss">
  .home {
    text-align: left;
    .nav-l-title {
      font-size: 22px;
    }
    .nav-l-item {
      a {
        /*color: #75b2ff;*/
        color: #fff;
        text-decoration: none;
        padding: 4px 6px 4px 0;
        &:hover {
          text-shadow: 0px 0px 6px #e8e8e8;
          transition: all .3s;
        }
      }
    }
  }
</style>
