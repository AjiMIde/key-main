<template>
  <div class="dinner">
    <div class="header"></div>
    <div class="container">
      <div class="menu-1">
        <div class="list">
          <div class="list-item" v-for="(o, i)  in menu1" :key="i" @click="menu1Click(o)">
            {{ o.text }}
          </div>
        </div>
      </div>
      <div class="menu-2">
        <div class="list">
          <div class="list-item" v-for="(o, i) in menu2" :key="i" @click="menu2Click(o)">
            {{ o.text }}
          </div>
        </div>
      </div>
      <div class="menu-3">
        <div class="list">
          <div class="list-item" v-for="(o, i) in menu3" :key="i">
            <div class="item-text">
              {{ o.text }}
            </div>
            <div class="item-content">
              {{ o.contents.join(', ') }}
            </div>
            <div class="item-plus" @click="addGoods(o)"></div>
          </div>
        </div>
      </div>

      <div class="shopping-cart" @click="goodsShow=true">
        <div class="num"> {{goods.length}}</div>
      </div>
    </div>
    <bee-popup @onMaskTap="goodsShow = false" :show="goodsShow">
      <div class="goods">
        <div class="goods-list">
          <div class="list-item" v-for="(o, i) in goods" :key="i">
            {{ o.text }}
          </div>
        </div>
        <div class="content-list">
          <div class="list-item" v-for="(o, i) in Object.keys(goodContents)" :key="i">
            <div>
              <input type="radio">
              {{ o }} {{goodContents[o] > 1 ? 'x' + goodContents[o] : ''}}、
            </div>
          </div>
        </div>
      </div>
    </bee-popup>
  </div>
</template>

<script>
import BeePopup from 'bee-mui/src/components/bee-popup'

const menu1 = [
  { type: '01', text: '荤菜' },
  { type: '02', text: '素菜' },
  { type: '03', text: '材料' }
]

const menu2 = [
  { type: '01-01', text: '猪肉' },
  { type: '01-02', text: '鸡肉' },
  { type: '01-03', text: '牛肉' },
  { type: '01-04', text: '虾类' },
  { type: '01-05', text: '贝类' },

  { type: '02-01', text: '苦瓜' },
  { type: '02-02', text: '黄瓜' },
  { type: '02-03', text: '西兰花' },
  { type: '02-04', text: '菜花' },

  { type: '03-01', text: '菜调味' },
  { type: '03-02', text: '酱调味' }
]

const menu3 = [
  { id: '01-01-01', text: '红烧猪蹄', contents: ['猪蹄', '蘑菇', '花生'] },
  { id: '01-01-02', text: '红烧排骨', contents: ['排骨', '冰糖'] },

  { id: '01-02-01', text: '土豆焖鸡', contents: ['鸡肉', '土豆'] },
  { id: '01-02-02', text: '咖哩焖鸡', contents: ['鸡肉', '咖哩', '土豆', '胡萝卜'] }
]

export default {
  name: '',
  components: {
    BeePopup
  },
  computed: {
    goodContents () {
      let ary = []
      let ary2 = []
      let ary3 = {}
      this.goods.forEach(o => {
        ary = ary.concat(o.contents)
      })
      ary.forEach(o => {
        if (ary2.indexOf(o) === -1) {
          ary3[o] = 1
          ary2.push(o)
        } else {
          ary3[o] = ary3[o] + 1
        }
      })
      return ary3
    }
  },
  data () {
    return {
      menu1,
      menu2: [],
      menu3: [],
      currentMenuId: {
        menu1Id: '', menu2Id: '', menu3Id: ''
      },
      goods: [],
      goodsShow: false,
      goodsNum: 0
    }
  },
  methods: {
    menu1Click (item) {
      this.menu2 = menu2.filter(o => {
        return o.type.indexOf(item.type) === 0
      })
    },
    menu2Click (item) {
      this.menu3 = menu3.filter(o => {
        return o.id.indexOf(item.type) === 0
      })
    },
    addGoods (item) {
      this.goods.findIndex(o => {
        return o.id === item.id
      }) === -1 && this.goods.push(item)
    }
  },
  created () {
  },
  mounted () {
    window.m = this
  }
}
</script>

<style lang="scss">
  .dinner {
    background-color: #f56c6c;
    width: 100%;
    height: 100%;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header {
      height: 80px;
    }
    .container {
      flex: 1;
      overflow: hidden;
      display: flex;
      text-align: center;
      position: relative;
      .menu-1, .menu-2, .menu-3 {
        overflow: auto;
        .list {
          .list-item {
            padding: 4px 0;
            font-size: 17px;
          }
        }
      }
      .menu-1 {
        width: 100px;
      }
      .menu-2 {
        width: 100px;
      }
      .menu-3 {
        flex: 1;
        text-align: left;
        .list-item {
          position: relative;
        }
        .item-text {
        }
        .item-content {
          padding: 3px 0;
          font-size: 12px;
        }
        .item-plus {
          width: 14px;
          height: 14px;
          background-image: url(./plus.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 6px;
          right: 10px;
        }
      }

      .shopping-cart {
        width: 50px;
        height: 50px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        background-image: url(./shopping-cart.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .num {
          font-size: 12px;
          position: absolute;
          top: 5px;
          right: 5px;
          width: 14px;
          height: 14px;
          line-height: 14px;
          background-color: yellow;
          border-radius: 50%;
        }
      }
    }
    .goods {
      background-color: #fff;
      width: 80%;
      border-radius: 8px;
      padding: 10px 18px;
      .goods-list {
        display: flex;
        flex-wrap: wrap;
        .list-item {
          font-size: 18px;
          padding: 8px 10px;
        }
      }
      .content-list {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .list-item {

        }
      }
    }
  }
</style>
