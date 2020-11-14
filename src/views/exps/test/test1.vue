<template>
  <div class="test-1">
    <button @click="jump">点我</button>
    <div>价格：{{price | priceFilter}}</div>
  </div>
</template>

<script>
import PlusNum from './PlusNum'
import cutNum from './cutNum'
import Map from './Map'
import axios from 'axios'

console.log(window.PlusNum = PlusNum)

console.log(axios, '...')

window.Map = Map

var aji = 'aji'

const v = {
  name: '',
  components: {
  },
  filters: {
    priceFilter (val) {
      let v = (val / 100).toFixed(2)
      return v
    }
  },
  data () {
    return {
      price: 1000,
    }
  },
  methods: {
    jump() {
      console.log(object.name)
      object.name = 'linbei'
      this.$router.push({
        path: '/exps/test/test2'
      })
    },

    testOne () {
      console.log(this.testOne)
      this.testOne = () => {
        console.log('aji')
      }
    }
  },
  mounted () {
    window.t = this
    window.cn = cutNum

    let aji = 'jjj'

    function c () {
      console.log(aji)
      // let aji = 'yyy'
    }
    c()
  }
}

export default v

</script>

<style lang="scss">
</style>
