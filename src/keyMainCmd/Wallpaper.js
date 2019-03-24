const wallpaper = require('wallpaper')
require('colors')


async function change (path) {
  await wallpaper.set(path)
  console.log((await wallpaper.get()).bgYellow)
}

module.exports = {
  change
}
