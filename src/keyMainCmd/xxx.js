async function funB () {
  setTimeout(() => {
    console.log('i am funB')
  }, 5000)
  // return new Promise((resolve, reject) => {
  //   setTimeout(async () => {
  //     console.log('i am funB')
  //     resolve()
  //   }, 5000)
  // })
  // for (const item of [1, 2, 3]) {
  //   const path = await doExecApp(item)
  //   if (path.indexOf('https') >= 0) {
  //     c.exec('start ' + path)
  //   } else {
  //     c.exec(path)
  //   }
  // }
}

async function funA () {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      await funB()
      console.log('i am funA')
      resolve()
    }, 5000)
  })
}

async function index () {
  console.log('---1')
  await funA()
  console.log('---2')
}
index()
