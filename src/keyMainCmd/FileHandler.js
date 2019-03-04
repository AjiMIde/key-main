var fs = require('fs');//引入文件读取模块

const readFilesSync = (dir, deep = false) => {
  const dirs = fs.readdirSync(dir)
  const array = []
  if (dirs.length > 0) {
    dirs.forEach(function (file) {
      let filePath = dir + '\\' + file
      let sts = fs.statSync(filePath)
      if (sts.isDirectory() && deep) {
        array.push({ text: file, path: filePath, children: readFilesSync(filePath, deep) })
      } else if (sts.isFile()) {
        array.push({ text: file, path: filePath })
      }
    })
  }
  return array
}

module.exports.readFilesSync = readFilesSync

