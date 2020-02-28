const c = require('child_process')

const apps = [
  { txt: 'TIM', path: 'H:\\NormalProgram\\Tecent\\Tim\\Bin\\QQScLauncher.exe' },
  { txt: 'Wechat', path: 'C:\\Aji\\NormalProgram\\Tencent\\WeChat\\WeChat.exe' },
  { txt: 'FoxMail', path: 'C:\\Aji\\NormalProgram\\Foxmail 7.2\\Foxmail.exe' },
  { txt: 'ShadowSock', path: 'C:\\Aji\\DevProgram\\ssr-win\\ShadowsocksR-dotnet4.0.exe' },
  // { txt: 'Everything', path: 'C:\\Aji\\DevProgram\\Everything\\Everything.exe' },
  // { txt: 'Wox', path: 'C:\\Users\\AJI\\AppData\\Local\\Wox\\Wox.exe' },
  { txt: 'OneDirve', path: 'C:\\Users\\AJI\\AppData\\Local\\Microsoft\\OneDrive\\OneDrive.exe' },
  {
    txt: 'Teambition',
    path: 'https://www.teambition.com/project/5e3a58ee54d05f0021710a39/tasks/scrum/5e3a58eff3b0ba0021db86f5'
  },
  { txt: 'TAPD', path: 'https://www.tapd.cn/22298271/board/index?board_id=1122298271001000025' }
]

// 采用 async/await 异步调用
async function doExecApp (app) {
  return new Promise((resolve, reject) => {
    console.log('启动 ', app.txt, '......')
    setTimeout(() => {
      resolve(app.path)
    }, 3000)
  })
}

async function start () {
  // return new Promise(async (resolve, reject) => {
  for (const item of apps) {
    const path = await doExecApp(item)
    if (path.indexOf('https') >= 0) {
      c.exec('start ' + path)
    } else {
      c.exec(path)
    }
  }
  // resolve()
  // })
}

module.exports = {
  start
}
