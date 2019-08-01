<template>
  <div class="flex-layout">
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="pic">{{item.title}}</div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      list: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
          desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
          desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
          desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.',
          desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolor hic in labore molestias nemo quibusdam, voluptas! At et harum modi nihil nisi non perferendis quidem rem repudiandae sunt.'
        }
      ]
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss">
  .flex-layout {
    .list {
      width: 400px;
      border: 1px solid #333;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        display: inline-block;
        border: 1px solid #333;
        .pic {
          background-color: #e6a23c;
        }
        .info {
          .title {
            font-size: 28px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .desc {
            color: #999;
            font-size: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>
