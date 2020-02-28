<template>
  <div class="animate-201809131635">
    <div class="exp-block">
      <div class="title">实现 卡片 翻动效果</div>
      <div class="content">

        <transition-group name="list" class="list" tag="div">
          <div v-for="(o, i) in list1" v-bind:key="i" class="list-item"
               :style="{'transform': 'translateY(' + 20*i + 'px)' +
               ' scale(' + i * (1/list1.length) + ')'}"
          >
            {{ o }}
          </div>
        </transition-group>

        <div class="list">
          <div class="list-item" v-for="(o, i ) in list1" :key="i"
               :style="{'transform': 'translateY(' + 20*i + 'px)' +
               ' scale(' + 0.1*(i) + ')'}"
          >
            {{o}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      list1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    }
  },
  methods: {
    setList1 () {
      let item = ''
      window.setTimeout(() => {
        window.setInterval(() => {
          item = this.list1.pop()
        }, 3000)
      }, 1000)
      window.setTimeout(() => {
        window.setInterval(() => {
          //this.list1.unshift(item)
        }, 3000)
      }, 2000)
    }
  },
  mounted () {
    this.setList1()
  }
}
</script>

<style lang="scss">
  @import "../../vueExp/animate";
  .animate-201809131635 {
    .exp-block {
      .title {
      }
      .content {
        border: 1px solid #eee;
        border-radius: 4px;
        width: 500px;
        padding: 50px;
        .list {
          position: relative;
          height: 300px;
          .list-item {
            border: 1px solid #ff00ff;
            border-radius: 2px;
            text-align: center;
            height: 150px;
            line-height: 150px;
            position: absolute;
            width: 100%;
            background-color: #fff;
            box-shadow: 0px 0px 14px 0px #606060;
            user-select: none;
          }
        }
        .list-enter-active {
        }
        .list-enter, .list-leave-to
          /* .list-leave-active for below version 2.1.8 */ {
          opacity: 0;
          transform: translateY(300px) !important;
        }
        .list-leave-active {
          transition: all 1s;
          position: absolute;
        }
      }
    }
  }
</style>
0.9 0.7 0.5  0.3
0.9 0.6 0.3
