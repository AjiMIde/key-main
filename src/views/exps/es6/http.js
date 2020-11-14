function errorRequestMethod
const h = {
  _http (requestMethod, data, method = 'post') {

    return new Promise((resolve, reject) => {
      resolve
    })
  },

  order: {
    list () {
      return
    }
  }
}
export default h
