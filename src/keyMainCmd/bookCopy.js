const fse = require('fs-extra')

const books = [
  'node-js'
  // 'aa'
]
books.forEach(item => {
  let source = 'H:\\GitHub\\' + item
  let dist = 'H:\\GitHub\\key-main\\public\\Books\\' + item
  fse.copy(source, dist, {
    filter: (src, dest) => {
      let srcAry = src.split('\\')
      const filterItem = srcAry.pop()
      const filterAry = ['node_modules', '.git', '.idea', '.gitignore', 'LICENSE', 'package.json']
      if (filterAry.indexOf(filterItem) > -1) {
        return false
      } else {
        return true
      }
    }
  }).then(() => {
    console.log(item + ' is success')
  }).catch(err => {
    console.error(err)
  })
})
