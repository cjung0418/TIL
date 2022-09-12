const private = (() => {
  const a = 1
  const b = () => 2
  const public = {
    c : 2,
    d : () => 3
  }
  return public
})
console.log(private)
console.log(private.a)

// class에서의 private는 #를 사용하면 된다.
class Private{
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}