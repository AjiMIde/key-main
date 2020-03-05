import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'

const api = {
  url: 'http://127.0.0.1:7890',
  gitHub: 'https://github.com/AjiMIde/',
  rawGitHub: 'https://raw.githubusercontent.com/AjiMIde/'
}
export default {
  _http (urlMethod = '', data = {}, method = 'post', needLoading = true, needToastError = true, needShowNetworkError = true) {
    // 实例化一个Vue对象
    const compVue = new Vue()

    // 显示 loading
    needLoading && compVue.bee.showLoading()

    // 创建请求 url 及参数
    let url = ''
    if (typeof urlMethod === 'string') {
      url = api.url + urlMethod
    } else {
      url = urlMethod[0] + urlMethod[1]
    }
    const param = {
      method, url
    }

    // 根据请求方法不同构建不同入参
    if (method === 'post') {
      param.data = data
    } else {
      param.url = param.url + '?' + qs.stringify(data)
    }

    // 返回promise
    return new Promise(function (resolve, reject) {
      axios(param).then(response => {
        // 隐藏 loading
        needLoading && compVue.bee.hideLoading()

        // 当返回状态为 200 时
        if (response.status === 200) {
          let respData = response.data

          if (respData) {
            resolve(respData)
          } else {
            let msg = respData.message || '请求错误'
            needToastError && compVue.bee.showToast(msg, 'fail')

            const error = new Error(msg)
            error.data = respData
            reject(error)
          }
        } else {
          // 其他情况
          let msg = ''
          switch (response.status) {
            case 0:
              msg = '网络连接已断开...'
              break
            case 403:
              msg = '访问权限受限'
              break
            case 404:
              msg = '访问地址无效'
              break
            case 500:
              msg = '服务器异常'
              break
            default:
              msg = '请求出现未知异常'
              break
          }
          reject(new Error(msg))
        }
      }).catch(error => {
        // 显示 loading
        needLoading && compVue.bee.hideLoading()

        let msg = '请求错误'
        msg = error.response.status > 399 ? '未找到请求方法或链接' : msg
        msg = error.response.status > 499 ? '服务器内部错误' : msg

        needShowNetworkError && compVue.bee.showToast(msg, 'fail')
        reject(new Error(msg))
      })
    })
  },

  test1 () {
    return this._http([api.gitHub, 'styles-book/blob/master/SUMMARY.md'], {}, 'get')
  },

  /**
   * 获取书本的目录
   *
   * @param link
   * @returns {*}
   */
  getBookSummary (link) {
    return this._http([api.rawGitHub, link], {}, 'get')
  },

  /**
   * 获取书本某个章节
   * @param link
   */
  getBookContent (link) {
    return this._http([api.rawGitHub, link], {}, 'get')
  }
}

export { api as HttpApi }
