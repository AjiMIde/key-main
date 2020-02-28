<template>
  <div class="animate-1">
    <el-row>
      <el-col :span="12">
        <div class="ani-menu">
          <el-button @click="toggle('show1')">button</el-button>
        </div>
        <div class="ani-exp">
          <transition name="fade">
            <div class='ani-exp-div' v-if="show1">
              <div class="ani-exp-img"></div>
            </div>
          </transition>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ani-menu">
          <el-button @click="toggle('show2')">button</el-button>
        </div>
        <div class="ani-exp">
          <transition name="fade2">
            <div class='ani-exp-div-2' v-show="show2">
            </div>
          </transition>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="ani-menu">
          <el-button @click="toggle('show3')">button</el-button>
        </div>
        <div class="ani-exp">
          <transition name="ani1">
            <div class='ani-exp-div-3' v-show="show3"> </div>
          </transition>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ani-menu">
          <el-button @click="toggle('show4')">button</el-button>
        </div>
        <div class="ani-exp">
          <transition
            appear
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
          >
            <div class='ani-exp-div-4' v-if="show4">???</div>
          </transition>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="ani-menu">
          <el-button @click="list1Add">add</el-button>
          <el-button @click="list1Remove">remove</el-button>
        </div>
        <div class="ani-exp list-1">
          <transition-group name='list1' tag='p'>
            <span v-for="(o, i) in list1" :key="o" class="list-item">
              {{o}}
            </span>
          </transition-group>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ani-menu"> </div>
        <div class="ani-exp">
          <transition > </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Row, Col, Button } from 'element-ui'

export default {
  components: {
    'el-row': Row,
    'el-col': Col,
    'el-button': Button
  },
  data () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true,
      show7: true,
      show8: true,
      list1: [1, 2, 3, 4, 5],
      list1Length: 5,
    }
  },
  methods: {
    toggle (val) {
      this[val] = !this[val]
    },
    list1Add () {
      let i = Math.floor(Math.random() * this.list1.length)
      this.list1.splice(i, 0, this.list1Length++)
    },
    list1Remove () {
      let i = Math.floor(Math.random() * this.list1.length)
      this.list1.splice(i, 1)
    }
  },
  mounted () {
    console.log(window.m = this)
  },
  name: 'animate-1'
}
</script>

<style lang="scss">
  .animate-1 {
    min-width: 900px;
    max-width: 1200px;
    margin: 0 auto;
    .ani-menu {
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .ani-exp {
      .ani-exp-div {
        .ani-exp-img {
          width: 150px;
          height: 210px;
          background-image: url(./a.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .ani-exp-div-2 {
      width: 300px;
      height: 200px;
      background-color: orange;
    }

    .fade2-enter {
      width: 50px;
      height: 10px;
      background-color: #ff00ff;
    }
    .fade2-enter-to {
      width: 500px;
      height: 300px;
      background-color: blue;
    }
    .fade2-enter-active {
      transition: all 2s;
    }

    .fade2-leave {
      background-color: black;
      opacity: 1;
      width: 100px;
      height: 50px;
    }
    .fade2-leave-to {
      opacity: 1;
      background-color: red;
      width: 20px;
      height: 10px;
    }
    .fade2-leave-active {
      transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    // --
    // --
    .ani-exp-div-3, .ani-exp-div-4, .ani-exp-div-5, .ani-exp-div-6, .ani-exp-div-7, .ani-exp-div-8 {
      width: 300px;
      height: 200px;
      background-color: orange;
    }
    .ani1-enter-active {
      animation: bounce-in 1s;
    }
    .ani1-leave-active {
      animation: bounce-in 1s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }

    // --
    // --
    .list-1 {
      .list-item {
        display: inline-block;
        margin-right: 10px;
      }
      .list1-enter-active, .list1-leave-active {
        transition: all 1s;
      }
      .list1-enter, .list1-leave-to {
        opacity: 0;
        transform: translateY(30px);
      }
    }
  }
</style>

<style lang="scss">
  @import "./animate.css.scss";
</style>
