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

    const ImgHandler = (() => {
      let imgNode = document.createElement('img')
      imgNode.style.width = '400px'
      imgNode.style.height = '800px'
      const app = document.getElementById('app')
      app.appendChild(imgNode)
      return {
        setSrc: src => {
          imgNode.src = src
        }
      }
    })()

    const proxyImgHandler = (() => {
      let tempImg = new Image()
      tempImg.onload = (evt) => {
        ImgHandler.setSrc(evt.path[0].src)
      }
      return {
        setSrc: src => {
          let loadingGif = 'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/%E5%AF%BC%E8%88%AAList_%E7%99%BE%E5%BA%A6.png'
          ImgHandler.setSrc(loadingGif)
          tempImg.src = src
        }
      }
    })()


    let imgSrc = 'https://images.pexels.com/photos/3694706/pexels-photo-3694706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // ImgHandler.setSrc(imgSrc)
    window.doit = () => {
      proxyImgHandler.setSrc(imgSrc)
    }


















  }
}


</script>

<style lang="scss">
</style>
