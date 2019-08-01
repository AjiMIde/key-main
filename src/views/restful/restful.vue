<template>
  <div class="restful">
    <div class="container">
      <div class="panel">
        <div class="panel-head">http://1.1.1.1/pay-orders
          <button @click="payOrdersGet">查询</button>
        </div>
        <div class="panel-body">
          <table v-if="payOrders.length > 0">
            <tr>
              <th>订单ID</th>
              <th>金额</th>
              <th>支付方式</th>
              <th>支付时间</th>
            </tr>
            <tr v-for="(item, index) in payOrders" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.payType | payMethod}}</td>
              <td>{{item.time}}</td>
            </tr>
          </table>
          <div v-else>...</div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">http://1.1.1.1/pay-orders/<input v-model="orderId"/>
          <Button @click="payOrdersGetDetail">详情</Button>
        </div>
        <div class="panel-body" v-if="payOrderDetail.id">
          <ul>
            <li><span>订单Id: </span>{{payOrderDetail.id}}</li>
            <li><span>订单金额: </span>{{payOrderDetail.amount}}</li>
            <li><span>订单类型: </span>{{payOrderDetail.payType | payMethod}}</li>
            <li><span>订单时间: </span>{{payOrderDetail.time}}</li>
          </ul>
        </div>
        <div  class="panel-body" v-else>...</div>
      </div>
      <div class="panel">
        <div class="panel-head">http://1.1.1.1/pay-orders/<input v-model="orderDelId"/><button @click="payOrdersDelete">删除</button></div>
        <div class="panel-body">
          {{payOderDelInfo}}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">http://1.1.1.1/pay-orders/</div>
        <div class="panel-body">
          <input type="text" placeholder="订单金额" v-model="order.amount">
          <input type="text" placeholder="订单类型" v-model="order.payType">
          <button @click="payOrderSubmit">提交</button>
          <div>{{payOderSubmitInfo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  filters: {
    payMethod (value) {
      if (value === 'zhifubao') {
        return '支付宝'
      } else if (value === 'wechat') {
        return '微信'
      } else if (value === 'yinlian') {
        return '银联'
      } else if (value === 'huabei') {
        return '花呗'
      } else {
        return '其他'
      }
    }
  },
  components: {},
  data () {
    return {
      url: 'http://10.20.10.57:8081',
      payOrders: [],

      orderId: '',
      payOrderDetail: {},

      orderDelId: '',
      payOderDelInfo: '',

      order: {
        amount: '',
        payType: 'zhifubao'
      },
      payOderSubmitInfo: ''
    }
  },
  methods: {
    payOrdersGet () {
      this.axios.get(this.url + '/pay-orders').then(res => {
        if (res.data.code === 0) {
          this.payOrders = res.data.data.data
        }
      }).catch(error => {
        console.error(error)
      })
    },

    payOrdersGetDetail () {
      this.axios.get(this.url + '/pay-orders/' + this.orderId).then(res => {
        if (res.data.code === 0) {
          this.payOrderDetail = res.data.data
        }
      }).catch(error => {
        console.error(error)
      })
    },

    payOrdersDelete () {
      this.axios.delete(this.url + '/pay-orders/' + this.orderDelId, {
        // crossDomain: true
      }).then(res => {
        this.payOderDelInfo = res.data
      }).catch(error => {
        console.error(error)
      })
    },

    payOrderSubmit () {
      let params = 'amount=' + this.order.amount + '&payType=' + this.order.payType
      this.axios.post(this.url + '/pay-orders?', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        this.payOderSubmitInfo = res.data
      })
    }
  },
  mounted () {
    console.log(window.me = this)
  }
}
</script>

<style lang="scss">
  .restful {
    input {    border-radius: 4px;
      border: 1px solid #eee;
      padding: 4px;
      margin: 4px 4px;
      width: 70px;}
    button {    background: aliceblue;
      border: 1px solid #eee;
      padding: 4px 8px;
      border-radius: 4px;}
    table {
      margin-top: 10px;
    }
    th, td {
      border: 1px solid #333;
      padding: 4px 12px;
    }
    .panel {
      &-head {
        padding: 8px 8px;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 10px;
      }
      &-body {
        border-bottom: 1px solid #e4e4e4;
        padding: 8px 16px;
        margin-bottom: 10px;
      }
    }
  }
</style>
