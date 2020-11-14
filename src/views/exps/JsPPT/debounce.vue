<template>
  <div class="debounce">
    <div class="container" id="container"></div>
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
  },
  mounted () {
    const c = document.getElementById('container')
    let i = 0
    c.onmousemove = ((func, wait) => {
      let previous = 0
      let timeout = null
      // return () => {
      //   let now = +new Date()
      //   if (now - previous > wait) {
      //     func()
      //     previous = now
      //   }
      // }
      return () => {
        !timeout && (timeout = setTimeout(() => {
          timeout = null
          func()
        }, wait))
      }
    })(() => {
      c.innerText = i++
    }, 1000)
  }
}


</script>

<style lang="scss">
  .debounce {
    .container {
      width: 300px;
      height: 300px;
      background-color: #00ffff;
    }
  }
</style>
