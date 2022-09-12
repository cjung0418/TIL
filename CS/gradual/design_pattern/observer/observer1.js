const handler = {
  get: function(target, name) {
    return name === 'name' ? `${target.a} ${target.b}` : target[name]
  }
}

// 프록시 객체: 어떤 대상의 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 작업을 
// 가로챌 수 있는 객체, 두 개의 매개변수(target, handler)를 가짐

const p = new Proxy({a: 'Apple', b: 'is fruit'}, handler)
console.log(p.name)