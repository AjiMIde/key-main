<template>
  <div class="style-exp1">
    <div class="summary" data-content="
        六王毕，四海一；蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落！长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。
        妃嫔媵嫱，王子皇孙，辞楼下殿，辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也；绿云扰扰，梳晓鬟也；渭流涨腻，弃脂水也；烟斜雾横，焚椒兰也。雷霆乍惊，宫车过也；辘辘远听，杳不知其所之也。一肌一容，尽态极妍，缦立远视，而望幸焉；有不得见者，三十六年。
      ">
      <p class="content">
      六王毕，四海一；蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落！长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。
      妃嫔媵嫱，王子皇孙，辞楼下殿，辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也；绿云扰扰，梳晓鬟也；渭流涨腻，弃脂水也；烟斜雾横，焚椒兰也。雷霆乍惊，宫车过也；辘辘远听，杳不知其所之也。一肌一容，尽态极妍，缦立远视，而望幸焉；有不得见者，三十六年。
      </p>
    </div>
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
    handler () {
    }
  },
  mounted () {
    console.log(window.m = this)
  }
}
</script>

<style lang="scss">
  .style-exp1 {
    .exp {
      font-size: 18px;
      margin-top: 40px;
      margin-left: 40px;
      width: 500px;
      height: 400px;
      border-radius: 4px;
      border: 1px solid #999;
      padding: 20px;
      overflow: auto;
      position: relative;
      .btn-group {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
      button {
        border: 1px solid #eee;
        padding: 2px 8px;
        font-size: 14px;
        margin: 0 4px 0 0;
      }
    }

    .summary{
      position: relative;
      overflow: hidden;
      margin-bottom: 5px;
      line-height: 22px;
      word-break: break-all;
      text-indent:5em;
    }
    .summary p{
      height: 90px;
    }
    .summary:before{
      display: block;
      content: attr(data-content);
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      height: 66px;//这里的高是3×22的结果，其中22是行高 ，3是4-1
      width: 100%;
      overflow: hidden;
      color: #000;
      background-color: #fff;
      text-indent: 5em;

    }
    .summary:after{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-line-clamp: 4;//4就是需要在收起的时候显示的行数
      content: attr(data-content);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-indent: -4em;
      padding-right: 3em;
      color: #000;
      background-color: #fff;
    }
  }
</style>
