<template>
  <div class="chat-demo">
    <div class="chat-container">
      <div class="chat-list" ref="chatList">
        <div class="chat-item" v-for="(o, i)  in list" :key="i">
          {{ o.txt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      list: [
        { txt: 'adbcadfeae' },
        { txt: 'adjfakldjj' },
        { txt: '3465464654' }
      ]
    }
  },
  methods: {
    pushList () {
      if (this.list.length >= 14) {
        return
      }
      let v = Math.floor(Math.random() * (1000000000 - 1 + 1) + 1)
      this.list.push({ txt: v })
      this.$nextTick(() => {
        this.$refs.chatList.style.bottom = '-30px'
        window.setTimeout(() => {
          this.$refs.chatList.style.transition = 'all .5s'
          this.$refs.chatList.style.bottom = '0px'
        }, 100)
        window.setTimeout(() => {
          this.$refs.chatList.style.transition = ''
        }, 600)
        if (this.list.length > 8) {
          this.list.splice(0, 1)
        }
      })
      // this.$refs.chatList
    }
  },
  mounted () {
    console.log(window.m = this)
    window.setInterval(() => {
      this.pushList()
    }, 1000)
  }
}
</script>

<style lang="scss">
  .chat-demo {
    .chat-container {
      position: absolute;
      top: 200px;
      left: 400px;
      width: 200px;
      height: 200px;
      border: 1px dotted #333;
      padding: 6px;
      overflow: hidden;
      .chat-list {
        /*transition: all .5s;*/
        position: absolute;
        bottom: 0;
      }
      .chat-item {
        padding: 4px;
        background-color: rgba(0, 0, 0, .5);
        margin-bottom: 4px;
      }
    }
  }
</style>
