<template>
  <div class="">
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
    const add = (...rest) => {
      let i = 0
      rest.forEach(j => {
        i+=j
      })
      return i
    }
    const cacheHandler = (fun) => {
      let cache = {}
      return (...rest) => {
        let key = rest.length + rest.join(',')
        if (Reflect.has(cache, key)) {
          return cache[key]
        } else {
          cache[key] = fun(...rest)
          return cache[key]
        }
      }
    }
    let addCache = cacheHandler(add)

    console.time('start')
    for(let i = 0; i< 10000; i++) {
      addCache(1,2,3,4,5)
    }
    console.timeEnd('start')

    console.time('start2')
    for(let i = 0; i< 10000; i++) {
      add(1,2,3,4,5)
    }
    console.timeEnd('start2')
  }
}


</script>

<style lang="scss">
</style>
