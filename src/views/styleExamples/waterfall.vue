<template>
  <div class="waterfall">
    <div class="waterfall-js" :style="'width: ' + (700 + index*100) + 'px'">
      <button @click="handler()">changeMethod</button>
      <div class="waterfall-list" :class="{'waterfall-list-2': index >= 2, 'waterfall-list-4': index >= 4}" ref="list">
        <div class="waterfall-item" v-for="(item, index) in list" :key="index">
          <div class="waterfall-item-content">
            <div class="waterfall-item-name">
              <span>{{index}}</span>
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

const LIST = [
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non ',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam,',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in ',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing ',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
  }
]
export default {
  name: '',
  components: {},
  data () {
    return {
      active: false,
      index: 0,
      list: []
    }
  },
  methods: {
    handler () {
      this.index++
      if (this.index === 1) {
        this.handlerWaterList()
      } else {
        this.handlerWaterList2()
      }
    },

    handlerWaterList () {
      const listEle = this.$refs.list
      const waterfallItems = listEle.getElementsByClassName('waterfall-item')
      for (let i = 0; i < waterfallItems.length; i++) {
        let item = waterfallItems[i]
        let leftItem = {}
        let topItem = {}
        if (i >= 1) {
          leftItem = waterfallItems[i - 1]
        }

        if (i >= 3) {
          topItem = waterfallItems[i - 3]
        }

        item.style.position = 'absolute'
        item.style.left = '0'
        item.style.top = '0'

        if (i % 3 === 1 || i % 3 === 2) {
          item.style.left = (leftItem.offsetWidth + leftItem.offsetLeft) + 'px'
        }
        if (i - 3 >= 0) {
          item.style.top = (topItem.offsetTop + topItem.offsetHeight) + 'px'
        }
      }
    },

    handlerWaterList2 () {
      const listEle = this.$refs.list
      const waterfallItems = listEle.getElementsByClassName('waterfall-item')
      let columnsAry = [0, 0, 0]

      for (let i = 0; i < waterfallItems.length; i++) {
        let item = waterfallItems[i]

        item.style.position = 'absolute'

        if (i === 0) {
          columnsAry[0] += item.offsetHeight
          item.style.top = '0'
          item.style.left = '0'
        }
        if (i === 1) {
          columnsAry[1] += item.offsetHeight
          item.style.top = '0'
          item.style.left = '200px'
        }
        if (i === 2) {
          columnsAry[2] += item.offsetHeight
          item.style.top = '0'
          item.style.left = '400px'
        }
        let getTheShortColumn = () => {
          let theShort = columnsAry[0]
          let theShortIndex = 0
          for (let i = 0; i < columnsAry.length; i++) {
            if (columnsAry[i] < theShort) {
              theShort = columnsAry[i]
              theShortIndex = i
            }
          }
          return theShortIndex
        }

        if (i > 2) {
          let i = getTheShortColumn()
          item.style.left = i * 200 + 'px'
          item.style.top = columnsAry[i] + 'px'
          columnsAry[i] += item.offsetHeight
        }
      }
    }
  },
  mounted () {
    this._ = _
    let list = []
    let index = 0
    for (let j = 0; j < 4; j++) {
      list = list.concat(LIST.map(item => {
        let obj = { index }
        Object.assign(obj, item)
        index++
        return obj
      }))
    }
    list = _.shuffle(list)
    this.list = list
    console.log(window.m = this)
    this.$nextTick(() => {
      window.setTimeout(() => {
        // this.handlerWaterList()
      }, 1000)
    })
  }
}
</script>

<style lang="scss">
  .waterfall {
    .waterfall-js {
      width: 700px;
      height: 700px;
      box-sizing: border-box;
      border: 1px solid #999;
      border-radius: 4px;
      margin-top: 40px;
      margin-left: 40px;
      overflow: auto;
      position: relative;

      button {
        border: 1px solid #eee;
        padding: 2px 8px;
        font-size: 14px;
        position: absolute;
        top: 0;
        left: 0;
        z-index:999;
      }

      .waterfall-list {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*flex-wrap: wrap;*/
        width: 600px;
        box-sizing: border-box;
        position: relative;
        &-2 {
          height: 1200px;
        }
        &-4 {
          height: 1500px;
        }
        * {
          box-sizing: border-box;
        }
      }
      .waterfall-item {
        font-size: 18px;
        border: 1px solid #e6a23c;
        box-sizing: border-box;
        display: inline-block;
        /*margin-bottom: 1em;*/
        /*margin-left: 1em;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        width: 200px;
        padding: 10px;

        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        /*transition: all .5s;*/
        .waterfall-item-content {
          /*margin: 10px;*/
        }
        span {
          font-weight: bold;
          padding: 0 8px;
        }
      }

    }

  }

  .style-exp1 {
    .exp {
    }

    .flex-box {
      width: 100%;
      border: 1px solid #999;
      overflow: hidden;
      padding: 10px;
      &.active {
      }
      .flex-item-spec, .flex-item {
        display: inline-block;
        width: 48%;
        border: 1px solid #999;
        float: left;
      }
      .flex-item-spec {
        white-space: normal;
        min-height: 180px;
        span {
          display: inline-block;
          padding: 4px 8px;
          border: 1px solid #999;
          margin: 0 4px 4px 0;
        }
      }
      .flex-item {
        overflow: hidden;
        &:nth-child(2n) {
          margin-left: 4%;
          /*padding-left: 10px;*/
        }
        &:nth-child(2n +1) {
          /*padding-right: 10px;*/
        }
      }
      .flex-name {
        background-color: #00ffff;
        height: 100px;
        overflow: hidden;
      }
      .flex-title {
        font-size: 20px;
        font-weight: bold;
        //
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        //
      }
      .flex-desc {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 12px;
      }
    }
  }
</style>
