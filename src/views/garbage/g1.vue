<template>
  <div class="g1">
    <div class="mobile">
      <div class="mobile-item">hello soft UI</div>
      <button class="btn">try it</button>
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
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .g1 {
    background: linear-gradient(135deg, #fff, #e4e4e4, #fff);;
    padding: 40px;
    overflow: auto;
    @mixin create-neu($cl: #fff, $distance: 6px, $type: null) {
      background-color: $cl;
      box-shadow: $type $distance $distance $distance*2 darken($cl, 11%),
      $type $distance*-1 $distance*-1 $distance*2 lighten($cl, 8%);
    }

    .mobile {
      width: 700px;
      height: 800px;
      margin: 0px auto;
      text-align: center;
      background-image: linear-gradient(45deg, #f6faff, #f6faff);
      border-radius: 40px;
      .mobile-item {
        text-shadow: -6px -6px 12px #ffffff50, 6px 6px 12px #D1CDC750;
      }
      .btn {
        width: 180px;
        height: 40px;
        border: none;
        border-radius: 10px;
        @include create-neu(#e3ecf6, 6px)
      }
    }
  }
</style>
