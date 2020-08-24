export default {
  evtKeys: {
    INFO: 'info', // 接收到信息
    CALL: 'call', // 接收到电话
    PYQ: 'pay'    // 接收到朋友圈更新
  },

  evtStack: {
    info: [],
    call: [],
    pyq: [],
  },

  listen (evtKey, onFun) {
    this.evtStack[evtKey].push(onFun)
  },

  one (evtKey, onFun) {
    onFun.one = true
    this.evtStack[evtKey].push(onFun)
  },

  remove (evtKey) {
    this.evtStack[evtKey] = []
  },

  trigger (evtKey, ...rest) {
    const _this = this
    this.evtStack[evtKey].forEach((fun, index) => {
      fun.apply(_this, rest)
      if (fun.one) {
        this.evtStack[evtKey].splice(index, 1)
      }
    })
  }
}
