<template>
  <div class="style-exp1">
    <div class="books-list">
      <div class="books-item" v-for="(o, i)  in list" :key="i">
        <div class="bi-header">
          <div class="bi-blur"> </div>
          <div class="bi-img"> </div>
        </div>
        <div class="bi-footer">
          听我说啊
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
      list: [1, 2, 3, 4, 5]
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
  .style-exp1 {
    padding: 100px;
    .books-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .books-item {
        width: 120px;
        box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2), 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        margin-right: 30px;
        .bi-header {
          height: 140px;
          background-color: rgba(249, 238, 237, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          .bi-img {
            width: 80px;
            height: 80px;
            z-index: 2;
            border-radius: 100%;
            border: 2px solid #fff;
            background-image: url(./a.png);
            background-size: 100% 100%;
          }
        }
        .bi-footer {
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
