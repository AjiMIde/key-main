function Watcher (vm, exp, cb) {
  this.cb = cb
  this.vm = vm
  this.exp = exp
  this.value = this.get()
}

Watcher.prototype = {
  update: function () {
    this.run()
  },
  run: function () {
    let val = this.get()
    let oldVal = this.value
    if (val !== oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  },
  get: function () {
    Dep.target = this
    let value = this.vm(this.exp)
    Dep.target = null;
    return value
  }
}

