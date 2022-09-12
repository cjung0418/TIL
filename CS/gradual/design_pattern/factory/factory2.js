class Latte {
  constructor() {
    this.name = "latte"
  }
}

class Espresso {
  constructor() {
    this.name = "Espresso"
  }
}

class LatteFactory {
  static createCoffee() {
    return new Latte()
  }
}

class EspressoFactory {
  static createCoffee() {
    return new Espresso()
  }
}

const factoryList = { LatteFactory, EspressoFactory }

class CoffeFactory {
  static createCoffee(type) {
    const factory = factoryList[type]
    return factory.createCoffee()
  }
}

const main = () => {
  // 커피 주문
  const coffee = CoffeFactory.createCoffee("LatteFactory")
  // 커피 이름을 부른다.
  console.log(coffee.name)
}
main()