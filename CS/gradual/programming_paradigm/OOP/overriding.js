class Animal {
  bark(){
    console.log('muu~')
  }
}

class Dog extends Animal {
  bark(){
    console.log('bark!')
  }
}

const dog = new Dog();
dog.bark();