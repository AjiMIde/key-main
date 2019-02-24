<template>
  <div class="my-music">
    <div @click="musicClick" class="my-music-container">
      <music-comp :data="musics"></music-comp>
    </div>
  </div>

</template>

<script>
import musicComp from './music-comp'

export default {
  name: 'myMusic',
  components: {
    musicComp
  },
  data () {
    return {
      musics: [],
      musicPath: '',
      musicPlay: null,
      d: [
        { txt: 'a' }, { txt: 'b' },
        {
          txt: 'c',
          c: [{ txt: 'cc' }, { txt: 'ccc' },
            { txt: 'd', c: [{ txt: 'dd' }, { txt: 'ddd' }] }
          ]
        }
      ]
    }
  },
  methods: {
    musicClick (evt) {
      this.musicPath = window.encodeURIComponent(evt.target.attributes.href.value)
      this.musicPlay.play()
    },
    goto (item) {
      this.axios.get(`./xx.json`).then(res => {
        const { data } = res
        if (data && data.length > 0) {
          this.musics = data
        }
      }).catch(err => {
        console.error(err)
      })
    },
    x () {
    }
  },
  mounted () {
    console.log(window.mm = this)
    this.goto()
    this.musicPlay = document.getElementById('musicPlay')
  }
}
</script>

<style lang="scss">
  .my-music {
    .my-music-container {
      > .music-comp {
        > ul {
          display: flex;
          flex-wrap: wrap;
          > li {
            width: 33.333%;
            overflow: hidden;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
