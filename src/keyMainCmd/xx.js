const notifier = require('node-notifier')

function a () {
  notifier.notify({
    title: 'xxx',
    message: 'xxx',
    icon: 'C:\\Users\\AJI\\Pictures\\xxxx.png',
    sound: true,
    wait: true
  })
}

const options = {
  title: 'xxx',
  message: 'xxx',
  icon: 'C:\\Users\\AJI\\Pictures\\xxxx.png',
  sound: true,
  wait: true
}

const nn = require('node-notifier');
a()
// new nn.NotificationCenter(options).notify();
// new nn.NotifySend(options).notify();
// new nn.WindowsToaster(options).notify(options);
// new nn.WindowsBalloon(options).notify(options);
// new nn.Growl(options).notify(options);
// const WindowsBalloon = require('node-notifier/notifiers/balloon');
// new WindowsBalloon(options).notify();

// const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
// new NotificationCenter(options).notify();
//
// const NotifySend = require('node-notifier/notifiers/notifysend');
// new NotifySend(options).notify();
//
// const WindowsToaster = require('node-notifier/notifiers/toaster');
// new WindowsToaster(options).notify();
//
// const Growl = require('node-notifier/notifiers/growl');
// new Growl(options).notify();
//
//
