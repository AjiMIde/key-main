const notifier = require('node-notifier')
const c = require('child_process')
require('console-color-mr') // this two plugins for color
require('colors')

const FileHandler = require('./FileHandler')

const imageArray = FileHandler.readFilesSync('H:\\Aji\\My Image\\Other', true)

function getARandomImage () {
  const length = imageArray.length

  const index = Math.floor(Math.random() * (length + 1))
  return imageArray[index].path
}

function windowsNotify (title, message) {
  notifier.notify({
    title: title,
    message: message,
    icon: getARandomImage(),
    sound: true,
    wait: true
  })
}

function getRandomConsoleColor () {
  let i = Math.floor(Math.random() * (6 + 1))
  let array = ['green', 'yellow', 'bgBlue', 'underline', 'trap', 'random']
  return array[i]
}

setInterval(() => {
  const date = new Date()
  const h = date.getHours()
  const hStr = h > 9 ? h + '' : '0' + h
  const m = date.getMinutes()
  const mStr = m > 9 ? m + '' : '0' + m
  // const s = date.getSeconds()
  // const sStr = s > 9 ? s + '' : '0' + s
  const timeStr = `${hStr} - ${mStr}`
  // console.log(h, m, s)

  // 0~7 不通知
  const verifyHour = [0, 1, 2, 3, 4, 5, 6, 7].indexOf(h) === -1

  let content = ''
  // 整点休息
  if (m === 0 && verifyHour) {
    content = 'Time to Resting'
  }

  // 20分-40分，提醒一次
  if ((m === 20 || m === 40) && verifyHour) {
    content = 'Look to the Sky'
  }

  // 吃饭时间
  if ((h === 11 && m === 45) || (h === 18 && m === 30)) {
    content = 'Eating Time'
  }

  // 中午14:05, 晚17.45 分打开 tapd 跟 everyDay
  if ((h === 14 && m === 5) || (h === 17 && m === 45)) {
    c.exec('start https://www.tapd.cn/22298271/board/index?board_id=1122298271001000025&board_type=standard&view_type=board')
    c.exec('start https://www.teambition.com/project/5ac2551cbe97d01847b1834f/tasks/scrum/5ac2551cbe97d01847b18351')
    content = 'Day Plan'
  }

  // 晚17.55 分打开 github desktop
  if (h === 17 && m === 55) {
    c.exec('C:\\Users\\AJI\\AppData\\Local\\GitHubDesktop\\GitHubDesktop.exe')
    content = 'Update GitHub'
  }

  // 输出
  if (content) {
    console.log(`${timeStr} : ${content} `[getRandomConsoleColor()])
    windowsNotify(timeStr, content)
  }
}, 1000)

module.exports = {
  windowsNotify
}
