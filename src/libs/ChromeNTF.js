const NTF = 'Notification'
const ntf = window.Notification

export default {
  support: NTF in window,
  permission: ntf.permission,
  canIUse: ntf.permission === 'granted',
  request (callback) {
    ntf.requestPermission((permission) => {
      if (callback && typeof callback === 'function') {
        const bool = (permission === 'granted')
        callback(bool)
      }
    })
  },
  show (title = '', body = '', icon = '') {
    if (this.canIUse) {
      return new window.Notification(title, {
        body: body,
        tag: 1,
        icon: icon
      })
    } else {
      this.request(canIUse => {
        if (canIUse) {
          return new window.Notification(title, {
            body: body,
            tag: 1,
            icon: icon
          })
        } else {
          console.error('请允许使用桌面通知~~')
          return null
        }
      })
    }
  }
}
