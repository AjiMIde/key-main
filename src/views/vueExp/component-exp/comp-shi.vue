<template>
<div class="comp-shi">
  <div class="title"><slot name="title"></slot></div>
  <div class="author"><slot name="author"></slot></div>
  <!--不指定[name=]属性的，默认default-->
  <div class="content">
    <slot :info="info"></slot>
  </div>
  <div class="time">{{id}}</div>
  <div class="time">唐朝</div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  inject: ['id'],
  data () {
    return {
      info: { type: '古诗', length: 4 }
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss">
  .comp-shi {
    font-family: '楷体';
    width: 200px;
    text-align: center;
    margin: 50px 0 0 50px;
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .author {
      text-align: right;
    }
    .content {
      padding: 20px 0;
    }
    .time {
      text-align: right;
      font-style: italic;
    }
  }
</style>
