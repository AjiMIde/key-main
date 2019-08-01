<template>
  <div class="meeting-room">
    <div class="mr-container">
      <div class="mr-content">
        <div class="">{{bookedTime}}</div>
        <div class="mr-head" v-if="false">
          <div class="head-item">
            <div class="head-title">区域：</div>
            <div class="head-content">
              <div class="hc-list">
                <div class="hc-item" :class="{'hc-item-active': o.area === area}" v-for="(o, i)  in areas" :key="i"
                     @click.self="test(o)">
                  {{ o.txt }}
                </div>
              </div>
            </div>
          </div>
          <div class="head-item">
            <div class="head-title">设施：</div>
            <div class="head-content">
              <div class="hc-list">
                <div class="hc-item" :class="{'hc-item-active': facility === o.facility}" v-for="(o, i)  in facilities"
                     :key="i"
                     @click.self="test(o)">
                  {{ o.txt }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mr-body">
          <div class="mr-table">
            <div class="table-head">
              <div class="table-head-date">
                <div class="table-head-space" style="border-bottom: none;"></div>
                <div class="th-item" v-for="(o, i) in dates" :key="i">
                  <div>{{o.xq}}</div>
                  <div>{{o.date}}</div>
                </div>
              </div>
              <div class="table-head-time">
                <div class="table-head-space"></div>
                <div class="th-item" v-for="(o, i) in times" :key="i">
                  <div>{{o.time}}</div>
                </div>
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-room">
                <div class="tb-item" v-for="(o, i) in rooms" :key="i">
                  <div>{{o.txt}}</div>
                </div>
              </div>
              <div class="table-body-checker">
                <div class="tb-checker-row" v-for="(o, i) in books" :key="i">
                  <div class="tb-checker-column"
                       :class="{'tb-checker-column-booked': oo.booked,
                                'tb-checker-column-checked': bookedAry.indexOf(i + '-' + ii) > -1
                       }"
                       v-for="(oo, ii) in o.bookTime" :key="ii"
                       :data-indexs="[i, ii]"
                       @mousedown="checkerMouseDown(o, i, oo, ii, $event)"
                       @mouseup="checkerMouseUp"
                       @mouseover="checkerMouseOver(o, i, oo, ii, $event)"
                  >
                    <!--@click="bookTimeClick(o, i, oo, ii)"-->
                    <!--<div>{{oo.time}}</div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="float-info">
            <div class="float-info-content">
              ajiaji
            </div>
            <div class="float-info-angle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
// https://mirror198829.github.io/vue-roomReservationPlugin/dist/index.html#/

export default {
  name: '',
  components: {},
  data () {
    return {
      areas: [
        { area: 'all', txt: '全部' },
        { area: 'gd', txt: '岗顶' },
        { area: 'py', txt: '番禺' },
        { area: 'sz', txt: '深圳' },
        { area: 'bj', txt: '北京' }
      ],
      area: 'all',
      facilities: [
        { facility: 'touying', txt: '投影' },
        { facility: 'dianshi', txt: '电视' },
        { facility: 'shipin', txt: '视频通话' },
        { facility: 'baiban', txt: '白板' },
        { facility: '20', txt: '20座(大型)' }
      ],
      facility: 'touying',
      dates: [],
      times: [],
      rooms: [
        { type: 'gd-1', txt: '一号会议室', area: 'gd' },
        { type: 'gd-2', txt: '二号会议室', area: 'gd' },
        { type: 'gd-3', txt: '三号会议室', area: 'gd' },
        { type: 'gd-4', txt: '四号会议室', area: 'gd' },
        { type: 'py-1', txt: '一号（番禺）', area: 'py' },
        { type: 'py-2', txt: '二号（番禺）', area: 'py' }
      ],
      books: [],

      bookedRowIndex: -1,     // 当前选择的行数，不能跨行选择
      bookedAry: [],

      bookedStartT: '',       // 最终计算出来的开始时间
      bookedEndT: '',         // 结束时间
      bookedTime: '',         // 总时间

      isDropping: false,        // 拖动中，拖动选择
      isClick: false,           // 是否是 mouseDown 的click
      theClickOrder: 0,         // 点击的次数，用来做增加或重置
      x: ''
    }
  },
  methods: {
    createDates () {
      let i = 0
      let xqs = ['一', '二', '三', '四', '五', '六', '日']
      this.dates = []
      while (i < 7) {
        let m = moment().add(i, 'd')
        let date = m.format('YYYY-MM-DD')
        let xq = xqs[parseInt(m.format('e'))]
        this.dates.push({ xq: '星期' + xq, date: date })
        i++
      }
    },
    createTimes () {
      let i = 8
      while (i < 21) {
        let time = (i > 9 ? i : '0' + i) + ':00'
        this.times.push({ time: time })
        i++
      }
    },

    createBooksObj () {
      this.books = [
        {
          date: '2019-06-17', room: 'gd-1',
          bookTime: [
            { time: '8-1', booked: true },
            { time: '8-2', booked: true },
            { time: '9-1', booked: true },
            { time: '9-2', booked: false },
            { time: '10-1', booked: false },
            { time: '10-2', booked: false },
            { time: '11-1', booked: false },
            { time: '11-2', booked: false },
            { time: '12-1', booked: false },
            { time: '12-2', booked: false },
            { time: '13-1', booked: false },
            { time: '13-2', booked: false },
            { time: '14-1', booked: false },
            { time: '14-2', booked: false },
            { time: '15-1', booked: false },
            { time: '15-2', booked: false },
            { time: '16-1', booked: false },
            { time: '16-2', booked: false },
            { time: '17-1', booked: false },
            { time: '17-2', booked: false },
            { time: '18-1', booked: true },
            { time: '18-2', booked: true },
            { time: '19-1', booked: true },
            { time: '19-2', booked: false },
            { time: '20-1', booked: false },
            { time: '20-2', booked: false }
          ]
        },
        {
          date: '2019-06-17', room: 'gd-2',
          bookTime: [
            { time: '8-1', booked: false },
            { time: '8-2', booked: false },
            { time: '9-1', booked: false },
            { time: '9-2', booked: false },
            { time: '10-1', booked: false },
            { time: '10-2', booked: false },
            { time: '11-1', booked: false },
            { time: '11-2', booked: false },
            { time: '12-1', booked: true },
            { time: '12-2', booked: true },
            { time: '13-1', booked: true },
            { time: '13-2', booked: false },
            { time: '14-1', booked: false },
            { time: '14-2', booked: false },
            { time: '15-1', booked: true },
            { time: '15-2', booked: true },
            { time: '16-1', booked: true },
            { time: '16-2', booked: true },
            { time: '17-1', booked: false },
            { time: '17-2', booked: false },
            { time: '18-1', booked: false },
            { time: '18-2', booked: false },
            { time: '19-1', booked: false },
            { time: '19-2', booked: false },
            { time: '20-1', booked: false },
            { time: '20-2', booked: false }
          ]
        },
        {
          date: '2019-06-17', room: 'gd-3',
          bookTime: [
            { time: '8-1', booked: false },
            { time: '8-2', booked: false },
            { time: '9-1', booked: false },
            { time: '9-2', booked: false },
            { time: '10-1', booked: false },
            { time: '10-2', booked: false },
            { time: '11-1', booked: true },
            { time: '11-2', booked: true },
            { time: '12-1', booked: true },
            { time: '12-2', booked: true },
            { time: '13-1', booked: false },
            { time: '13-2', booked: false },
            { time: '14-1', booked: false },
            { time: '14-2', booked: false },
            { time: '15-1', booked: false },
            { time: '15-2', booked: false },
            { time: '16-1', booked: true },
            { time: '16-2', booked: true },
            { time: '17-1', booked: false },
            { time: '17-2', booked: false },
            { time: '18-1', booked: false },
            { time: '18-2', booked: true },
            { time: '19-1', booked: true },
            { time: '19-2', booked: false },
            { time: '20-1', booked: false },
            { time: '20-2', booked: false }
          ]
        },
        {
          date: '2019-06-17', room: 'gd-4',
          bookTime: [
            { time: '8-1', booked: false },
            { time: '8-2', booked: false },
            { time: '9-1', booked: false },
            { time: '9-2', booked: false },
            { time: '10-1', booked: false },
            { time: '10-2', booked: false },
            { time: '11-1', booked: false },
            { time: '11-2', booked: true },
            { time: '12-1', booked: true },
            { time: '12-2', booked: true },
            { time: '13-1', booked: true },
            { time: '13-2', booked: false },
            { time: '14-1', booked: false },
            { time: '14-2', booked: false },
            { time: '15-1', booked: false },
            { time: '15-2', booked: false },
            { time: '16-1', booked: false },
            { time: '16-2', booked: false },
            { time: '17-1', booked: false },
            { time: '17-2', booked: true },
            { time: '18-1', booked: true },
            { time: '18-2', booked: true },
            { time: '19-1', booked: false },
            { time: '19-2', booked: false },
            { time: '20-1', booked: false },
            { time: '20-2', booked: false }
          ]
        },
        {
          date: '2019-06-17', room: 'py-1',
          bookTime: [
            { time: '8-1', booked: false },
            { time: '8-2', booked: false },
            { time: '9-1', booked: false },
            { time: '9-2', booked: false },
            { time: '10-1', booked: true },
            { time: '10-2', booked: true },
            { time: '11-1', booked: true },
            { time: '11-2', booked: true },
            { time: '12-1', booked: false },
            { time: '12-2', booked: false },
            { time: '13-1', booked: false },
            { time: '13-2', booked: false },
            { time: '14-1', booked: false },
            { time: '14-2', booked: false },
            { time: '15-1', booked: false },
            { time: '15-2', booked: false },
            { time: '16-1', booked: false },
            { time: '16-2', booked: false },
            { time: '17-1', booked: false },
            { time: '17-2', booked: false },
            { time: '18-1', booked: true },
            { time: '18-2', booked: true },
            { time: '19-1', booked: true },
            { time: '19-2', booked: false },
            { time: '20-1', booked: false },
            { time: '20-2', booked: false }
          ]
        },
        {
          date: '2019-06-17', room: 'py-2',
          bookTime: [
            { time: '8-1', booked: false },
            { time: '8-2', booked: false },
            { time: '9-1', booked: false },
            { time: '9-2', booked: false },
            { time: '10-1', booked: false },
            { time: '10-2', booked: true },
            { time: '11-1', booked: true },
            { time: '11-2', booked: true },
            { time: '12-1', booked: false },
            { time: '12-2', booked: false },
            { time: '13-1', booked: false },
            { time: '13-2', booked: false },
            { time: '14-1', booked: true },
            { time: '14-2', booked: true },
            { time: '15-1', booked: true },
            { time: '15-2', booked: false },
            { time: '16-1', booked: false },
            { time: '16-2', booked: false },
            { time: '17-1', booked: false },
            { time: '17-2', booked: false },
            { time: '18-1', booked: false },
            { time: '18-2', booked: false },
            { time: '19-1', booked: false },
            { time: '19-2', booked: false },
            { time: '20-1', booked: false },
            { time: '20-2', booked: false }
          ]
        }
      ]
    },

    bookTimeClick (o, i, oo, ii) {
      // 已经预定的，直接返回
      if (oo.booked) {
        this.bookedAry = []
        return
      }

      // 已经选中的，直接返回
      if (this.bookedAry.indexOf(i + '-' + ii) > -1) {
        return
      }

      //  跨行重置
      if (this.bookedRowIndex !== i) {
        this.bookedRowIndex = i
        this.bookedAry = []
      }

      let ary = this.bookedAry

      // 同行时，且只有一个时，拿出这一个，和现在要选的进行对比
      // 这种情况只发生在，选中一个，再选中另一个
      if (ary.length === 1) {
        let last = ary[0]
        last = parseInt(last.split('-')[1])
        if (last < ii) {              // 当选中的B比选中的A远，则包含所有，否则
          while (last < ii) {
            last += 1

            if (this.books[i].bookTime[last].booked) {     // 当选的队列中有包含 booked 的，直接死掉
              last = 1000
              this.bookedAry = []
            } else {
              this.bookedAry.push(i + '-' + last)  // 打入
            }
          }
          this.computeTime()
        } else {                      // 否则把当前选中的当为第一次
          this.bookedAry = []
          this.bookedAry.push(i + '-' + ii)
        }
      } else if (this.isDropping) {
        if (this.isClick) {
          if (this.bookedAry.length > 0) {
            this.bookedAry = []
            this.bookedAry.push(i + '-' + ii)
          } else {
            if (this.bookedAry.indexOf(i + '-' + ii) === -1) {
              this.bookedAry.push(i + '-' + ii)
              this.computeTime()
            }
          }
        } else {
          if (this.bookedAry.indexOf(i + '-' + ii) === -1) {
            this.bookedAry.push(i + '-' + ii)
            this.computeTime()
          }
        }
      } else { // 第一次选，直接打进
        this.bookedAry = []
        this.bookedAry.push(i + '-' + ii)
      }
    },

    checkerMouseDown (o, i, oo, ii, $evt) {
      this.isDropping = true
      this.isClick = true
      this.theClickOrder += 1
      console.log('---- click')
      this.bookTimeClick(o, i, oo, ii)
    },

    checkerMouseUp ($evt) {
      this.isDropping = false
      this.isClick = false
    },

    checkerMouseOver (o, i, oo, ii, $evt) {
      // console.log($evt)
      this.isClick = false
      if (this.isDropping) {
        this.bookTimeClick(o, i, oo, ii)
      }
    },

    computeTime () {
      let array = [].concat(this.bookedAry)
      array = _.uniq(array)
      // array = _.sortBy(array, (o) => {
      //   return o.split('-')[1]
      // })

      if (array.length < 2) {
        this.bookedStartT = ''
        this.bookedEndT = ''
        this.bookedTime = ''
        return
      }

      const fun1 = (str, plus = 0) => {
        str = parseInt(str) + plus
        str = (str / 2 + 8)
        str = str > Math.floor(str) ? Math.floor(str) + ':30' : str + ':00'
        return str.length <= 4 ? '0' + str : str
      }

      let st = array[0].split('-').pop()
      let et = array[array.length - 1].split('-').pop()
      this.bookedStartT = fun1(st)
      this.bookedEndT = fun1(et, 1)
      this.bookedTime = this.bookedStartT + '-' + this.bookedEndT
      // console.log(this.bookedAry, st, et)
    },

    test (o) {
    }
  },
  mounted () {
    console.log(window.t = this)
    console.log(window.m = moment)
    this.createDates()
    this.createTimes()

    this.createBooksObj()
    // test
    let ary = [{
      'id': 1,
      'roomId': 'gd-1',
      'roomName': '岗顶一号会议室',
      'bookedTimes': [
        {
          'id': 1,
          'title': 'odoo第五次全司代表大会',
          'person': '黄杰',
          'time': '2019-06-18 14:00-15:00',
          'timeStart': '14:00',
          'timeEnd': '15:00'
        }
      ]
    }]
    // test
  },
  watch: {
    bookedAry () {
    }
  }

}
</script>

<style lang="scss">
  .meeting-room {
    $c-1: #606266;
    $c-2: #ffffff;
    $c-3: #ddd;
    $c-active: #a0cfff;
    //$c-2:
    .mr-container {
      padding: 30px 0 0 0;
      > div {
        box-sizing: border-box;
      }
    }
    .mr-content {
      width: 1000px;
      margin: 0 auto;
      color: $c-1;
      font-size: 14px;

      .mr-head {
      }
      .head-item {
        display: flex;
      }
      .head-title {
        font-size: 18px;
        font-weight: bold;
        width: 80px;
      }
      .head-content {
        flex: 1;
      }
      .hc-list {
        display: flex;
        flex-wrap: wrap;
      }
      .hc-item {
        display: inline-block;
        background-color: #ddd;
        padding: 8px 12px;
        border-radius: 4px;
        margin: 0 12px 12px 0;
      }
      .hc-item-active {
        font-weight: bold;
        background-color: $c-active;
        color: $c-2;
      }

      .mr-body {
        position: relative;
      }
      .mr-table {
      }

      .table-head {
        .table-head-date, .table-head-time {
          display: flex;
          .th-item {
            padding: 8px 4px;
            flex: 1;
            text-align: center;
            border: 1px solid $c-3;
            border-left: none;
          }
        }
        .table-head-date .th-item {
          border-bottom: none;
        }
        .table-head-space {
          width: 100px;
          border: 1px solid $c-3;
        }
        .table-head-date {
        }
        .table-head-time {
          .th-item {
            padding: 4px 0px;
            width: 80px;
            text-align: center;
          }
        }
      }

      .table-body {
        display: flex;
        .table-body-room {
          width: 100px;
          text-align: center;
          .tb-item {
            border-width: 0px 1px 1px 1px;
            border-style: solid;
            border-color: $c-3;
            height: 40px;
            line-height: 40px;
            &:first-child {
              border-top: none;
            }
            &:last-child {
              border-bottom: 1px solid $c-3;
            }
          }
        }
        .table-body-checker {
          flex: 1;
          display: flex;
          flex-direction: column;
          .tb-checker-row {
            width: 100%;
            height: 40px;
            display: flex;
          }
          .tb-checker-column {
            /*width: 40px;*/
            flex: 1;
            border-width: 0 1px 1px 0;
            border-style: solid;
            border-color: $c-3;
          }
          .tb-checker-column-booked {
            background-color: lighten($c-3, 5%);
            cursor: not-allowed;
            //background-color: invert($c-3, 2%);
          }
          .tb-checker-column-checked {
            background-color: $c-active;
          }
        }
        .tb-item {
        }
      }

      .float-info {
        position: absolute;
        top: 60px;
        left: 350px;
        min-height: 50px;
        min-width: 100px;
        padding: 10px;
        /*border: 1px solid #999;*/
        box-shadow: 0px 4px 8px 0px rgba(153, 153, 153, 0.5);
        background-color: #fff;
        border-radius: 4px;
        .float-info-angle {
          width: 20px;
          height: 20px;
          background: transparent;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
          border-width: 12px 10px 8px 10px;
          position: absolute;
          bottom: -19px;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
  }
</style>
