const c = require('child_process')

require('console-color-mr')
require('colors')

const NotifyToPlan = require('./NotifyToPlan')
const ExecApplication = require('./ExecApplication')

async function launchNotifyToPlan () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Ready to Work. Launching the WindowNotify now...'.green)
      NotifyToPlan.windowsNotify('Go', 'FIGHTING!!!')
      NotifyToPlan.start()
      resolve()
    }, 5000)
  })
}

async function launchExecApps () {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      console.log('Launching exe, just wait some seconds...'.green)
      await ExecApplication.start()
      resolve()
    }, 5000)
  })
}

async function launchKeyMainWeb () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Launching key-main web, just wait some seconds...'.green)
      c.exec('start https://ajimide.github.io/key-main')
      resolve()
    }, 5000)
  })
}

async function index () {
  console.log('Hello. Welcome Aji'.bold.italic)
  await launchExecApps()
  await launchNotifyToPlan()
  await launchKeyMainWeb()
}

index()
