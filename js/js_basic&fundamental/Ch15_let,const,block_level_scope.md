# let, const 키워드와 블록 레벨 스코프

## var 키워드로 선언한 변수의 문제점

- var 키워드로 선언된 변수들의 특징들

### 변수 중복 선언 허용

```js
var x = 1;
var y = 1;

// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작
var x = 100;
// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1
```

- 중복 선언 시 초기화문 유무에 따라 다르게 동작
  - 초기화문이 있을 때는 var 키워드가 없는 것처럼 동작
  - 초기화문이 없을 때는 무시

### 함수 레벨 스코프

- var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정

```js
var x = 1;

if (true) {
	var x = 10;
}

console.log(x); // 10
```

- for 문의 변수 선언문에서 var 키워드로 선언한 변수도 전역 변수가 된다.

```js
var i = 10;

for (var i = 0; i < 5; i++) {
	console.log(i); // 0 1 2 3 4
}

console.log(i); // 5
```

### 변수 호이스팅

- 변수 호이스팅에 의해 변수 선언문이 스코프의 선두에 끌어 올려진 것처럼 동작한다. 단, 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

```js
// 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언된다.(1. 선언단계)
// 변수 foo는 undefined로 초기화(2. 초기화 단계)
console.log(foo);

// 변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); // 123

// 변수 선언문은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;
```

## let 키워드

### 변수 중복 선언 금지

- let 키워드로 중복 선언하면 문법 에러가 발생

### 블록 레벨 스코프

- 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

```js
let foo = 1;

{
	let foo = 2;
	let bar = 3;
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined
```

### 변수 호이스팅

- let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

```js
console.log(foo); // foo is not defined
let foo;
```

- var 키워드로 선언한 변수는 선언 단계와 초기화 단계가 한번에 진행된다.

- let 키워드로 선언한 변수는 선언 단계와 초기화 단계가 분리되어 진행된다. => 런타임 이전에 자바스크립트 엔진에 의해 선언 단계가 실행되지만, 초기화 단계는 변수 선언문에 도달했을 때 실행된다.

- 일시적 사각지대(TDZ, Temporal Dead Zone): 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간

- let 키워드도 호이스팅이 발생한다.

- ```js
  let foo = 10;
  
  {
  	console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  	let foo = 20;
  }
  ```

- 자바스크립트는 ES6에서 도입된 let, const를 포함해서 모든 선언(var, let, const, function, function*, class 등)을 호이스팅한다. 단, ES6에서 도입된 let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다.

### 전역 객체와 let

- var 키워드로 선언한 전역 변수와 전역 함수, 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역 객체 window의 프로퍼티가 된다.
- 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있다.

```js
// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

console.log(window.x); // 1
console.log(x); // 1

console.log(window.y); // 2
console.log(y); // 2

console.log(window.foo); // ƒ foo() {}
console.log(foo); // ƒ foo() {}
```

- let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. => window.foo와 같이 접근할 수 없다.
- let 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.

```js
let x = 1;
console.log(window.x); // undefined
console.log(x); // 1
```

## const 키워드

- const 키워드는 상수를 선언하기 위해 사용한다.

### 선언과 초기화

- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

### 재할당 금지

- const 키워드로 선언한 변수는 재할당이 금지된다.

### 상수

- 상수는 재할당이 금지된 변수를 말한다.
- const 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 const 키워드에 의해 재할당이 금지되기에 할당된 값을 변경할 수 있는 방법은 없다.

### const 키워드와 객체

- const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
- const 키워드는 재할당을 금지할 뿐이다. 불변을 뜻하지는 않는다.

## var vs let vs const

- 변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다.
- ES6를 사용한다면 var 키워드는 사용하지 않는다.
- 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이 때 변수의 스코프는 최대한 좁게 만든다.
- 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수)원시 값과 객체에는 const 키워드를 사용한다.
- const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.