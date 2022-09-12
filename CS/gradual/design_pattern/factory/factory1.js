const num = new Object(42)
const str = new Object('abc')
console.log(num.constructor.name); // Number
console.log(str.constructor.name); // String

// 둘 다 Object를 사용하지만, 넣는 값에 따라 다른 타입의 객체를 생성한다.
// 전달받은 값에 따라 다른 객체를 생성하며 인스턴스의 타입을 정한다.