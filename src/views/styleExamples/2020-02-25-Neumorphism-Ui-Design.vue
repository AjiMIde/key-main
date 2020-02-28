<template>
  <div class="se-2020-02-05-neumorphism">
    <div class="father father-1">
      <div class="item"></div>
    </div>
    <div class="father father-2">
      <div class="item"></div>
    </div>
    <div class="father father-3">
      <div class="item item-1" v-show="active===false" @click="active=true">
        <svg t="1582614247201" class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 32px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2074" width="32" height="32"><path d="M526.464 159.573333C572.586667 113.472 631.893333 85.333333 704 85.333333c155.221333 0 277.333333 126.869333 277.333333 305.408 0 107.093333-52.693333 196.138667-150.016 292.202667-20.949333 20.693333-84.970667 79.317333-87.850666 82.090667-9.066667 8.618667-18.837333 17.557333-29.290667 26.773333a1554.282667 1554.282667 0 0 1-41.301333 35.114667c-29.866667 24.533333-61.76 49.237333-93.632 72.917333a2607.744 2607.744 0 0 1-42.688 31.061333 42.666667 42.666667 0 0 1-49.109334 0 2607.744 2607.744 0 0 1-42.709333-31.04 2444.010667 2444.010667 0 0 1-93.610667-72.938666 1554.282667 1554.282667 0 0 1-41.301333-35.114667c-10.453333-9.216-20.224-18.154667-29.290667-26.773333-2.88-2.773333-66.901333-61.418667-87.850666-82.090667C95.381333 586.88 42.666667 497.856 42.666667 390.741333 42.666667 212.181333 164.778667 85.333333 320 85.333333c72.106667 0 131.413333 28.117333 177.536 74.24 5.184 5.184 10.005333 10.368 14.464 15.488 4.48-5.12 9.28-10.304 14.464-15.466666z m1.898667 671.786667A2360.746667 2360.746667 0 0 0 618.666667 761.002667a1469.802667 1469.802667 0 0 0 39.04-33.173334c9.664-8.533333 18.645333-16.746667 26.88-24.576 3.989333-3.797333 67.2-61.717333 86.784-81.024C853.952 540.672 896 469.674667 896 390.741333 896 258.624 811.349333 170.666667 704 170.666667c-47.765333 0-86.144 18.197333-117.205333 49.258666a202.325333 202.325333 0 0 0-27.946667 35.029334 129.728 129.728 0 0 0-7.872 13.909333c-15.04 33.749333-62.933333 33.749333-77.952 0a129.728 129.728 0 0 0-7.850667-13.909333 202.325333 202.325333 0 0 0-27.968-35.029334C406.144 188.864 367.765333 170.666667 320 170.666667c-107.349333 0-192 87.957333-192 220.074666 0 78.933333 42.026667 149.930667 124.629333 231.466667 19.562667 19.328 82.794667 77.248 86.784 81.045333 8.234667 7.829333 17.216 16.042667 26.88 24.576 12.074667 10.666667 25.130667 21.76 39.04 33.173334a2360.746667 2360.746667 0 0 0 106.666667 82.410666c5.205333-3.818667 10.666667-7.829333 16.362667-12.053333z" p-id="2075" fill="#1296db"></path></svg>
      </div>
      <div class="item item-2" v-show="active===true" @click="active=false">
        <svg t="1582614420996" class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 32px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2404" width="32" height="32"><path d="M512 953.6h-6.4c-6.4 0-12.8-3.2-16-9.6L118.4 572.8C64 518.4 32 444.8 32 364.8s32-153.6 86.4-208c54.4-54.4 128-86.4 208-86.4 67.2 0 134.4 22.4 185.6 67.2 115.2-96 288-86.4 393.6 19.2 115.2 115.2 115.2 300.8 0 416L534.4 944c-6.4 6.4-12.8 9.6-22.4 9.6z" p-id="2405" fill="#1296db"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .se-2020-02-05-neumorphism {
    .father {
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        width: 100px;
        height: 100px;
        border-radius: 10px;
      }
    }
    .father-1 {
      $c-bg: #efffff;
      background-color: $c-bg;
      .item {
        background-color: $c-bg;
        box-shadow: -6px -6px 12px #ffffff50, 6px 6px 12px #D1CDC750;
      }
    }
    .father-2 {
      $c-bg: #ff7070;
      background-color: $c-bg;
      .item {
        background-color: $c-bg;
        box-shadow: -6px -6px 12px #ffffff50, 6px 6px 12px #b1ada7;
      }
    }
    .father-3 {
      $c-bg: #f8f8f8;

      background-color: $c-bg;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }

      @mixin create-neu($cl: #fff, $distance: 6px, $type: null) {
        background-color: $cl;
        box-shadow: $type $distance $distance $distance*2 darken($cl, 8%),
        $type $distance*-1 $distance*-1 $distance*2 lighten($cl, 8%);
      }
      .item-1 {
        @include create-neu($c-bg, 6px)
      }
      .item-2 {
        @include create-neu($c-bg, 6px, inset)
      }
    }
  }
</style>
