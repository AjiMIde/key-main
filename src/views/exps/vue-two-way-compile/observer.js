
function Dep () {
  this.subs = []
}

Dep.prototype = {
  addSub: (sub) => {
    this.subs.push(sub)
  },
  notify: () => {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}


function defineReactive (data, key, value) {
  var dep = new Dep()

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      return val
    },
    set: function (newVal) {
      if (newVal === val) {
        return
      }
      console.log('.....')
      val = newVal

      dep.notify()
    }
  })
}

function observe(data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

var aji = { name: 'Aji', age: 18}
observe(aji)

