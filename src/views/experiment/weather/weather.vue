<template>
  <div class="exp-weather-light">
    <div class="exp-weather-left">
      <div class="header-1">
        <div class="input">
          <div class="icon-search">
            <svg class="wt-icon" aria-hidden="true"><use xlink:href="#icon-search"></use> </svg>
          </div>
          <input type="text" placeholder="Search new place" v-model="inputCity" @keyup.enter="inputCityChange">
        </div>
        <div class="selector">
          <span> All places </span>
          <span style="vertical-align: sub;">
          <svg class="wt-icon" aria-hidden="true"><use xlink:href="#icon-arrow-down"></use> </svg>
        </span>
        </div>
      </div>
      <div class="header-2">
        Weather <span>Forecast</span>
      </div>
      <div class="header-3">
        <div class="list">
          <div class="item" :class="{'item-active': currentCity.id === o.id}"
               v-for="(o, i) in citys" :key="o.id" @click="selectCity(o)">
            <div class="content" :class="'content-' + o.id"></div>
            <div class="desc">{{o.txt}}</div>
          </div>
          <div class="item">
            <div class="content content-plus">
              <div>+</div>
              <div>Add Plus</div>
            </div>
            <div class="desc">&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="header-4">
        <div class="list">
          <div class="item" v-for="(o, i) in forecastsData" :key="i">
            <div class="item-date">{{weeks[parseInt(o.week) - 1]}}</div>
            <div class="power">
              <svg class="wt-icon" aria-hidden="true"><use xlink:href="#icon-yangsha"></use></svg>
              {{o.dayWindPower}}
            </div>
            <div class="weather-icon">
              <svg class="wt-icon" aria-hidden="true">
                <use :xlink:href="o.dayWeather | weatherIcon"></use>
              </svg>
            </div>
            <div class="low-temperature">
              <div class="number">{{o.nightTemp}}°C</div>
              <div class="stick">
                <div class="content-stick" :style="{'width': o.nightTemp*100/40 + '%'}"></div>
                <div class="decorate-line"></div>
              </div>
            </div>
            <div class="high-temperature">
              <div class="stick">
                <div class="content-stick" :style="{'width': o.dayTemp*100/40 + '%'}"></div>
                <div class="decorate-line"></div>
              </div>
              <div class="number">{{o.dayTemp}}°C</div>
            </div>
          </div>
        </div>
      </div>


    </div>
    <div class="exp-weather-right">
      <div class="header-1">
        <div class="notifications">
          <div>Notifications</div>
          <div>4</div>
        </div>
        <div class="place">Place</div>
        <div class="avatar">
          <div class="dot"></div>
        </div>
      </div>
      <div class="header-2">
        <div class="weather-icon">
          <svg class="wt-icon" aria-hidden="true">
            <use :xlink:href="todayInfo.weather | weatherIcon"></use>
          </svg>
        </div>
        <div class="date">
          <div class="date-1">Today</div>
          <div class="date-2">{{nowDate}}</div>
        </div>
      </div>
      <div class="header-3">
        <div class="temperature">{{todayInfo.temperature}}<span>°C</span></div>
        <div class="location">{{currentCity.txt}}, China</div>
        <div class="feels-like">
          <span> humidity: {{todayInfo.humidity}} </span>
          <span> . </span>
          <span>WindPower: {{todayInfo.windPower}}</span>
        </div>
      </div>
      <div class="header-4">
        <div class="title">Chance of rain</div>
        <div class="list">
          <div class="item item-header">
            <div class="span">sunny</div>
            <div class="span">rainy</div>
            <div class="span">heavy rain</div>
          </div>
          <div class="item" v-for="(o, i) in timeLine" :key="i">
            <div class="stick" >
              <div class="stick-1" :class="{'active': o.sunny}" :style="{height: (o.length/10)*100 + '%'}"></div>
              <div class="stick-2"></div>
            </div>
            <div class="desc">{{o.txt}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 参考：https://cdn.dribbble.com/users/702789/screenshots/7177589/media/88d3d8cdbf919bf4b5f5efadb4eda68a.png
import './iconfont'
import moment from 'moment'

const weeks = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]
const citys = [
  { txt: 'GuangZhou', id: 'gz', txt2: '广州市'},
  { txt: 'ShanTou', id: 'st', txt2: '汕头市'},
  { txt: 'BeiJing', id: 'bj', txt2: '北京市'},
]
const timeLine = [
  { txt: '10AM', length: 3, sunny: false },
  { txt: '12AM', length: 4, sunny: false },
  { txt: '14PM', length: 6, sunny: true },
  { txt: '18PM', length: 9, sunny: false },
  { txt: '20PM', length: 4, sunny: false },
  { txt: '22PM', length: 7, sunny: false },
]
export default {
  name: '',
  components: {
  },
  data () {
    return {
      weeks,
      forecastsData: [],

      citys,
      currentCity: citys[0],
      inputCity: '',

      todayInfo: '',
      nowDate: '',
      timeLine
    }
  },
  filters: {
    weatherIcon (val) {
      console.log(val)
      if (val.indexOf('大雨') >= 0) return '#icon-dayu'
      if (val.indexOf('中雨') >= 0) return '#icon-zhongyu'
      if (val.indexOf('小雨') >= 0) return '#icon-xiaoyu'
      if (val.indexOf('阵雨') >= 0) return '#icon-zhenyu'
      if (val.indexOf('雨') >= 0) return '#icon-zhenyu'

      if (val.indexOf('阴') >= 0) return '#icon-yin'
      if (val.indexOf('多云') >= 0) return '#icon-duoyun'
      if (val.indexOf('晴') >= 0) return '#icon-qing'

      if (val.indexOf('雾') >= 0) return '#icon-wu'

    }
  },
  methods: {
    inputCityChange () {
      this.getAMapWeather(this.inputCity)
    },

    getAMapWeather (city = '广州市') {
      window.AMap.plugin('AMap.Weather', () => {
        const weather = new window.AMap.Weather()

        weather.getLive(city, (err, data) => {
          this.todayInfo = data
        })
        weather.getForecast(city, (err, data) => {
          this.forecastsData = data.forecasts
          // console.log(err)
          // this.wData.forecastsLeast = [data.forecasts[1], data.forecasts[2]]
        })
      })
    },
    selectCity (o) {
      this.currentCity = o
      this.getAMapWeather(o.txt2)
    }
  },
  mounted () {
    window.w = this
    window.m = moment
    const mDate = moment()
    this.nowDate = mDate.format('ddd') + ',' + mDate.date() + ' ' + mDate.format('MMM')
    this.getAMapWeather()
  }
}
</script>

<style lang="scss">
  .exp-weather-light {
    margin: 80px auto 0 auto;
    width: 1260px;
    font-family: 'PingFang SC Regular','Avenir', Helvetica, Arial, sans-serif !important;
    display: flex;

    $c-main: #03020D;

    .wt-icon {
      font-size: 24px;
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    div, input {
      box-sizing: border-box;
    }

    .exp-weather-left {
      width: 900px;
      background-color: #E3F6FE;
      border-radius: 12px 0 0 12px;
      padding: 20px 20px;
      .header-1 {
        display: flex;
        .input {
          width: 240px;
          position: relative;
          .icon-search {
            font-size: 28px;
            position: absolute;
            top: 2px;
            left: 3px;
            color: #ccc;
          }
          input {
            width: 240px;
            border: 1px solid transparent;
            background-color: #fff;
            color: #e3e3e3;
            padding: 10px 14px 10px 30px;
            border-radius: 8px;
            outline: none;
          }
        }
        .selector {
          font-size: 16px;
          font-weight: bold;
          color: #232e4f;
          padding: 0 20px;
          line-height: 40px;
        }
      }
      .header-2 {
        padding: 30px 0;
        font-size: 32px;
        span {
          font-weight: bold;
        }
      }
      .header-3 {
        .list {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .item {
            text-align: center;
            .content {
              width: 180px;
              height: 190px;
              border-radius: 18px;
              background-color: #f56c6c;
              background-position: center center;
              background-size: cover;
            }
            .content-gz {
              background-image: url(gz.jpg);
            }
            .content-st {
              background-image: url(st.jpg);
            }
            .content-bj {
              background-image: url(bj.jpg);
            }
            .content-plus {
              width: 130px;
              border: 1px solid #504e4e;
              background: transparent;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              >div:first-child {
                font-size: 28px;
              }
              >div:last-child {
                padding: 6px 0;
              }
            }
            .desc {
              color: #757e90;
              font-weight: bold;
              padding: 10px 0;
            }
          }
          .item-active {
            .content {
              height: 210px;
            }
          }
        }
      }
      .header-4 {
        .list {
          .item {
            display: flex;
            padding: 18px 0;
            .item-date {
              width: 100px;
              color: #767f8d;
            }
            .power {
              width: 80px;
              text-align: center;
              color: #c3cbd1;
            }
            .weather-icon {
              width: 80px;
              text-align: center;
            }
            .low-temperature, .high-temperature {
              flex: 1;
              display: flex;
              align-items: center;
              .number {
                width: 80px;
                text-align: center;
                color: #a8b2b8;
              }
              .stick {
                display: inline-flex;
                flex-direction: row-reverse;
                /*background: aqua;*/
                flex: 1;
                height: 5px;
                position: relative;
              }
              .content-stick {
                height: 5px;
                background-color: #d1e4f9;
                margin-right: 0;
                z-index: 9;
              }
              .decorate-line {
                width: 100%;
                height: 2px;
                border-bottom: 2px dotted #c6e1ec;
                top: 2px;
                position: absolute;
              }
            }
            .high-temperature {
              .stick {
                flex-direction: row;
              }
              .content-stick {
                background-color: #f04809;
              }
            }
          }
        }
      }
    }
    .exp-weather-right {
      width: 360px;
      background-color: #110e3c;
      border-radius: 0 12px 12px 0;
      color: #fff;
      .header-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        .notifications {
          display: flex;
          padding: 0 10px;
          >div:last-child {
            background-color: #f45464;
            border-radius: 4px;
            text-align: center;
            width: 18px;
            height: 18px;
            margin: 0 10px;
            font-size: 12px;
            line-height: 18px;
          }
        }
        .place {
          padding: 0 8px;
        }
        .avatar {
          background-image: url(gz.jpg);
          background-size: 100% 100%;
          border-radius: 8px;
          width: 54px;
          height: 54px;
          margin-left: 40px;
          position: relative;
          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #f45464;
            position: absolute;
            top: -2px;
            right: -2px;
          }
        }
      }
      .header-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        .weather-icon {
          padding: 0 10px;
          .wt-icon {
            font-size: 32px;
          }
        }
        .date {
          .date-1 {
            font-size: 32px;
          }
          .date-2 {
            margin-top: 4px;
            text-align: center;
            font-size: 12px;
          }
        }
      }
      .header-3 {
        text-align: center;
        .temperature {
          font-size: 50px;
          font-weight: bold;
          margin-top: 30px;
          span {
            font-size: 14px;
            vertical-align: super;
          }
        }
        .location {
          margin-top: 10px;
          font-size: 12px;
          color: #ccc;
        }
        .feels-like {
          margin-top: 20px;
          font-size: 12px;
          color: #ccc;
        }
      }
      .header-4 {
        padding: 0 20px;
        margin-top: 40px;
        .title {
          font-size: 18px;
          padding: 20px 0;
        }
        .list {
          display: flex;
          justify-content: space-around;
          .item {
            height: 200px;
            width: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .stick {
              flex: 1;
              width: 10px;
              position: relative;
              &-1 {
                background-color: #302e63;
                border-radius: 4px;
                position: absolute;
                bottom: 0;
                width: 100%;
                z-index: 9;
              }
              &-1.active {
                background-color: #f7c500;
              }
              &-2 {
                height: 100%;
                border-right: 2px dashed #2d2964;
                width: 4px;
                position: absolute;
                top: 0;
                left: 2px;
              }
            }
            .desc {
              margin-top: 24px;
              font-size: 12px;
            }
          }
          .item-header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 0 30px 0;
            .span {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
</style>
