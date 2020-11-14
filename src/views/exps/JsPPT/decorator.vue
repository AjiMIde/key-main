<template>
  <div class="">
    <div>
      <span>头像 -- </span>
      <span>姓名 -- </span>
    </div>
    <ul>
      <li @click="goToOrder">我的订单</li>
      <li @click="goToCollect">我的收藏</li>
      <li @click="goToPocket">我的钱包</li>
    </ul>
  </div>
</template>


<script>

export default {
  name: '',
  components: {},
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    decoratorBefore (funAry, beforeFun) {
        funAry.forEach(funName => {
          const originFun = this[funName]

          this[funName] = (...rest) => {
            let bool = beforeFun.apply(this, rest)
            if (bool) {
              return originFun.apply(this, rest)
            }
          }

        })
    },
    decoratorAfter (funAry, afterFun) {
      funAry.forEach(funName => {
        const originFun = this[funName]
        const currentFunName = funName

        this[funName] = (...rest) => {

          const result = originFun.apply(this, rest)

          afterFun.apply(this, [currentFunName, ...rest])

          return result

        }
      })
    },
    goToOrder () {
      console.log('...order', this.isLogin)
    },
    goToCollect (collectA, collectB) {
      console.log('...collect', collectA, collectB)
    },
    goToPocket () {
      console.log('...pocket')
      return {money: 123}
    }
  },
  created () {
    this.decoratorBefore(['goToOrder', 'goToCollect', 'goToPocket'], () => {
      if (this.isLogin === false) {
        console.log('show login box')
        return false
      }
      return true
    })

    this.decoratorAfter(['goToOrder', 'goToCollect', 'goToPocket'], (currentAction) => {
      if (this.isLogin) {
        console.log('user click ', currentAction)
        return false
      }
    })

  },
  mounted () {
    window.dd = this
  }
}


</script>

<style lang="scss">
</style>
