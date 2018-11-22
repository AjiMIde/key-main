<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>
    <el-row>
      <el-col :span="12">
        <h4>{{this.nav.title}}</h4>
        <ul>
          <li v-for="(item, index) in this.nav.list" :key="index">
            <a :href="item.link" target="_blank"> {{item.text}} </a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">xx</el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {Row, Col} from 'element-ui'
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
