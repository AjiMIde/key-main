<template>
  <div class="style-exp1">
    <div class="style-item">
      <div class="list list-1">
        <div class="list-item" :class="{'list-item-checked': o.checked}"
             v-for="(o, i) in list" @click="listClick(o, i)" :key="i">
        </div>
      </div>
    </div>

    <div class="style-item">
      <div class="list list-2">
        <div class="list-item" :class="{'list-item-checked': o.checked}"
             v-for="(o, i) in list" @click="listClick(o, i)" :key="i">
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
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false }
      ]
    }
  },
  methods: {
    handler () {
    },
    listClick (o, i) {
      this.list = this.list.map(item => {
        item.checked = false
        return item
      })
      o.checked = true
      this.$set(this.list, i, o)
    }
  },
  mounted () {
    console.log(window.m = this)
  }
}
</script>

<style lang="scss">
  .style-exp1 {
    padding: 100px;
    $c-bg: #f4726d;
    $c-w: #fff;
    .style-item {
      background-color: $c-bg;
      width: 500px;
      height: 200px;
      border: 1px solid transparent;
    }

    .list {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .list-item:after {
        position: absolute;
        width: 100%;
        height: 0;
        border-radius: 50%;
        display: block;
        transition: all 0.3s ease;
        content: ' ';
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
      }
      .list-item {
        margin-right: 20px;
        width: 18px;
        height: 18px;
        border: 3px solid $c-w;
        border-radius: 50%;
        position: relative;
        &:hover {
          background: #666;
        }
      }
      @keyframes ani-1 {
        0% {
          background: linear-gradient(0deg, #fff 0%, transparent 1%) !important;
        }
        50% {
          background: linear-gradient(0deg, #fff 50%, transparent 51%, transparent 100%) !important;
        }
        100% {
          background: linear-gradient(0deg, #fff 0%, #fff 100%) !important;
        }
      }
    }

    .list-1 {
      .list-item-checked {
        &:after {
          height: 100%;
        }
        /*animation: ani-1 3s;*/
        /*background: linear-gradient(0deg, #fff 0%, #fff 100%) !important;*/
      }
    }

    .list-2 {
      .list-item {
        border: none;
      }
      .list-item:after {
        height: 100% !important;
        background-color: transparent;
        box-shadow: inset 0px 0px 0px 3px #fff;
      }
      .list-item-checked:after {
        box-shadow: inset 0px 0px 0px 12px #fff;
      }
    }
  }
</style>
