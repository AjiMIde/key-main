<template>
  <div class="home-common-nav">
    <el-row class="nav-row">
      <el-col :span="24" class="nav-col">
        <div class="nav-list" v-for="(item, i) in this.nav.list" :key="i">
          <!--<img :src="`${ baseUrl }chick(1).png`" alt="" style="display: none">-->
          <h4 class="nav-l-title">{{item.title}}</h4>
          <div class="nav-l-item">
            <span v-for="(subItem, index) in item.list" :key="index">
              <span class="nav-l-logo-txt" v-if="!subItem.link">{{subItem.text.substr(0,1)}}</span>
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
import { Row, Col } from 'element-ui'

export default {
  name: '',
  components: {
    'el-row': Row,
    'el-col': Col
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
