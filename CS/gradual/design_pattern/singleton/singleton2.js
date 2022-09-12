class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
  getInstance() {
    return this.instance
  }
}

const a = new Singleton()
const b = new Singleton()
console.log(a === b) // true - a와 b는 하나의 인스턴스를 가짐