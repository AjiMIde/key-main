<template>
  <div class="music-comp">
    <ul>
      <li v-for="(item, index) in data" v-bind:key="index">
        <div v-if="item.children && item.children.length > 0">
          <div class="music-title">{{item.text}}</div>
          <music-comp :data="item.children"></music-comp>
        </div>
        <div class="music-item" v-else>
          <span :href="'file:///' + item.path" @click="musicClick(item)">
            {{item.text}}
          </span>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import musicComp from './music-comp'
export default {
  name: 'musicComp',
  components: {
    musicComp
  },
  props: {
    data: {
      'default': [],
      type: Array
    }
  },
  data () {
    return {
    }
  },
  methods: {
    musicClick (item) {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .music-comp {
    text-align: left;
    ul, li {
      list-style: none;
      li {
        padding: 0 0 0 20px;
      }
    }
    .music-title {
      font-size: 24px;
      padding: 8px 0;
      color: aliceblue;
    }
    .music-item {
      font-size: 18px;
      padding: 8px 0;
      span {
        cursor: pointer;
        color: #199fa7;
        text-decoration: none;
      }
    }
  }
</style>
