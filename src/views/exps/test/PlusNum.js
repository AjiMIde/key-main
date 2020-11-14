const cache = {}

function plusNum (...rest) {
  if (cache[rest.join('-')]) {
    return cache[rest.join('-')]
  } else {
    let val = 0
    rest.forEach(o => {
      val = val + o
    })
    cache[rest.join('-')] = val
    return val
  }
}


plusNum.after = function (...afterFuns) {
  let originFun = this
  console.log(originFun)
  return function (...rest) {
    let ret = originFun.apply(this, rest)
    afterFuns.forEach(fun => {
      fun.apply(this, rest)
    })
    return ret
  }
}

plusNum = plusNum.after(function (...rest) {
  console.log(rest)
}, function (...rest) {
  console.log(rest.join('==='))
})


export default plusNum
