const fse = require('fs-extra')

const books = [
  { name: 'styles-book', source: 'H:\\GitHub\\' },
  // { name: 'mini-program-books', source: 'H:\\GitHub\\' }
  { name: 'vue-books', source: 'H:\\GitHub\\' }
]

books.forEach(item => {
  let source = item.source + item.name
  let dist = 'H:\\GitHub\\key-main\\public\\Books\\' + item.name
  fse.copy(source, dist, {
    filter: (src, dest) => {
      let srcAry = src.split('\\')
      const filterItem = srcAry.pop()
      const filterAry = ['node_modules', '.git', '.idea', '.gitignore', 'LICENSE', 'package.json']
      if (filterAry.indexOf(filterItem) > -1) {
        console.log(filterItem)
        return false
      } else {
        return true
      }
    }
  }).then(() => {
    console.log(item.name + ' is success')
  }).catch(err => {
    console.error(err)
  })
})
