export default class {
  constructor (type,) {
    const MAP_TYPES = ['qq', 'bd', 'gd']
    this.type = MAP_TYPES[type]
  }
  static getPoint () {
    console.log('ppppoint')
    this.getHigh()
    this.getLine()
  }
  static getHigh () {
    console.log('hhhhhhigh')
  }
  getLine () {
    console.log('lllline')
  }
}
