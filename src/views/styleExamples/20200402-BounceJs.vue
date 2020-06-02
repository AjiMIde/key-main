<template>
  <div class="se-20200402-BJ">
    <div class="row">
      <div class="eg-1" ref="eg1"></div>
      <div class="eg-2" ref="eg2"></div>
      <div class="eg-3" ref="eg3"></div>
      <div class="eg-4" ref="eg4"></div>
    </div>
    <div class="row">
      <div class="eg-11" ref="eg11"></div>
      <div class="eg-12" ref="eg12"></div>
    </div>
  </div>
</template>

<script>
import Bounce from 'bounce.js'

export default {
  name: '',
  components: {
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      // scale, rotate, translate and skew
      const bounce1 = new Bounce()
      const bounce2 = new Bounce()
      const bounce3 = new Bounce()
      const bounce4 = new Bounce()
      const bounce11 = new Bounce()
      const bounce12 = new Bounce()


      bounce1.scale({
        duration: 2000,
        from: { x: 0.5, y: 0.5 },
        to: { x: 1, y: 1 }
      })
      bounce1.applyTo(this.$refs.eg1, {
        loop: true
      })

      bounce2.rotate({
        duration: 2000,
        from: 0,
        to: 90
      })
      bounce2.applyTo(this.$refs.eg2)

      bounce3.translate({
        duration: 2000,
        from: { x: 0, y: 0 },
        to: { x: 0, y: 50 }
      })
      bounce3.applyTo(this.$refs.eg3)

      bounce4.skew({
        duration: 2000,
        from: { x: 0, y: 0 },
        to: { x: 20, y: 0 }
      })
      bounce4.applyTo(this.$refs.eg4)


      bounce11.scale({
        duration: 1000,
        from: { x: 1, y: 1 },
        to: { x: 2, y: 1 },
        stiffness: 1,
      }).scale({
        duration: 1000,
        from: { x: 1, y: 1 },
        to: { x: 1, y: 2 },
        bounce: 9,
        stiffness: 1,
      }).applyTo(this.$refs.eg11, {
      })

      bounce12.skew({
        from: { x: 0, y: 0},
        to: { x: 4, y: 6},
      })
        .scale({
          from: {x: 1, y: 1},
          to: {x: 2, y: 2},
        })
        .applyTo(this.$refs.eg12, {
        })

    })
  }
}
</script>

<style lang="scss">
  .se-20200402-BJ {
    padding: 100px;
    .row {
      display: flex;
      margin-bottom: 150px;
      > div {
        width: 50px;
        height: 50px;
        margin-right: 80px;
        border-radius: 2px;
      }
      .eg-1, .eg-11 {
        background-color: #5daf34;
      }
      .eg-2, .eg-12 {
        background-color: #ff00ff;
      }
      .eg-3 {
        background-color: #f56c6c;
      }
      .eg-4 {
        background-color: #00ffff;
      }
    }
  }
</style>
