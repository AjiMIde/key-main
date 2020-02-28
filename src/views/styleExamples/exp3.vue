<template>
  <div class="style-exp1">
    <div class="wrap wrap-1">
      <div class="list">
        <div class="list-item" v-for="i in 3" :key="i">{{i}}</div>
        <div class="list-item" v-for="i in 3" :key="i">{{i}}</div>
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
    }
  },
  methods: {
    handler () {
    }
  },
  mounted () {
    console.log(window.m = this)
  }
}
</script>

<style lang="scss">
  @-webkit-keyframes move {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-180px);
    }
  }

  .style-exp1 {
    * {
      box-sizing: border-box;
    }
    .wrap {
      width: 300px;
      height: 70px;
      padding: 10px;
      margin: 50px;
      border-radius: 2px;
      border: 1px solid #eee;
      position: relative;
      overflow: hidden;
      .list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        animation: move 5s infinite linear;
        position: absolute;
        .list-item {
          width: 100px;
          height: 50px;
          margin-top: 10px;
          text-align: center;
          line-height: 50px;
          border: 1px solid #ff00ff;
          background-color: #bdbdbd;
          flex: none;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
</style>
