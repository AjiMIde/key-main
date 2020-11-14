const http = {
  getList() {
    return [{id: 1, goodsName: '月饼'}]
  }
}

class GoodsSearch {
  constructor () {
    this.searchContent = ''
    this.list = ''

    this.dirty = false
  }

  getList () {
    this.list = http.getList(this.searchContent)
    this.dirty = true
  }
}
