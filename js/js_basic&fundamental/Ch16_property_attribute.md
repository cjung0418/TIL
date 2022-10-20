# 프로퍼티 어트리뷰트

## 내부 슬롯과 내부 메서드

- 내부 슬롯: 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티(pseudo property)
- 내부 메서드: 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 메서드(pseudo method)
- ECMAScript 사양에 등장하는 이중 대괄호([[...]])로 감싼 이름들이 내부 슬롯과 내부 메서드이다.
- 내부 슬롯과 내부 메서드에 원칙적으로 접근할 수 없지만, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있다.
- ex) [[Prototype]]에 _\_proto\_\_를 통해 간접적으로 접근할 수 있다.

## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

- 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

  - 프로퍼티의 상태: 프로퍼티의 값, 값의 갱신 가능 여부(writable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)

- 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값(meta-property)인 내부 슬롯 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]이다.

- 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.

- ```js
  const person = {
  	age: 16
  };
  
  // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
  console.log(Object.getOwnPropertyDescriptor(person, 'age')) // {value: 16, writable: true, enumerable: true, configurable: true}
  ```

- 존재하지 않는 프로퍼티나 상속 받은 프로퍼티에 대해 프로퍼티 디스크립터를 요구하면 undefined를 반환한다.

- ES8에서 도입된 Object.getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.

```js
const person = {
	age: 16
};

person.country = 'Korea';

console.log(Object.getOwnPropertyDescriptors(person));
/* 
{
    "age": {
        "value": 16,
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "country": {
        "value": "Korea",
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
}
*/
```

## 데이터 프로퍼티와 접근자 프로퍼티

- 데이터 프로퍼티: 키와 값으로 구성된 일반적인 프로퍼티.
- 접근자 프로퍼티: 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티

### 데이터 프로퍼티

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명                                                         |
| ------------------- | ----------------------------------- | ------------------------------------------------------------ |
| [[Value]]           | value                               | - 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값<br />- 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당한다. 이 때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다. |
| [[Writable]]        | writable                            | - 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.<br />- [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다. |
| [[Enumerable]]      | enumerable                          | - 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.<br />- [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in 문이나 Object.keys 메서드 등으로 열거할 수 없다. |
| [[Configurable]]    | configuralbe                        | - 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.<br />- [[Configurable]]의 값이 false인 경우 해당 프로퍼티의  삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다. 단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다. |

### 접근자 프로퍼티(accessor property)

- 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명                                                         |
| ------------------- | ----------------------------------- | ------------------------------------------------------------ |
| [[Get]]             | get                                 | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수. 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값. 즉, getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다. |
| [[Set]]             | set                                 | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수. 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값. 즉, setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다. |
| [[Enumerable]]      | enumerable                          | 데이터 프로퍼티의 [[Enumerable]]과 같다.                     |
| [[Configurable]]    | configurable                        | 데이터 프로퍼티의 [[Configurable]]과 같다.                   |

- 접근자 함수는 getter/setter 함수라고도 부른다.
- 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다.

```js
const animal = {
    type: 'cat',
    name: 'kitty',
    
    get callName() {
        return `${this.type} ${this.name}`;
    },
    
    set callName(name) {
        [this.type, this.name] = name.split(' ');
    }
};

console.log(animal.type + ' ' + animal.name); // cat kitty

animal.callName = 'dog oscar';
console.log(animal);
/* 
{
    "type": "dog",
    "name": "oscar",
    "callName": "dog oscar"
}
*/

console.log(animal.type); // dog

let descriptor = Object.getOwnPropertyDescriptor(animal, 'type');
console.log(descriptor);
/*
{
    "value": "dog",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/

descriptor = Object.getOwnPropertyDescriptor(animal, 'name');
console.log(descriptor);
/*
{
    "value": "oscar",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/
```

- 내부 작동 과정
  1. 프로퍼티 키가 유효한지 확인. 프로퍼티 키는 문자열 또는 심벌이어야 한다. 프로퍼티 키 "callName"은 문자열이므로 유효한 프로퍼티 키이다.
  2. 프로토타입 체인에서 프로퍼티를 검색한다. animal 객체에 callName 프로퍼티가 존재한다.
  3. 검색된 callName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. callName 프로퍼티는 접근자 프로퍼티이다.
  4. 접근자 프로퍼티 callName 프로퍼티 어트리뷰트 [[Get]]의 값. 즉 getter 함수를 호출하여 결과를 반환한다. 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 객체의 get 프로퍼티 값과 같다.

- 프로토타입

  - 어떤 객체의 상위(부모) 객체의 역할을 하는 객체
  - 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속
  - 프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메서드인 것처럼 자유롭게 사용할 수 있다.
  - 프로토타입 체인
    - 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조
    - 객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 프로토타입 체인을 따라 프로토타입의 프로퍼티나 메서드를 차례대로 검색한다.

- ```js
  // 일반 객체의 __proto__는 접근자 프로퍼티이다.
  Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
  /*
  {
      "enumerable": false,
      "configurable": true
  }
  */
  
  // 함수 객체의 prototype은 데이터 프로퍼티이다.
  Object.getOwnPropertyDescriptor(function() {}, 'prototype');
  /*
  {
      "value": {},
      "writable": true,
      "enumerable": false,
      "configurable": false
  }
  */
  ```

## 프로퍼티 정의

- 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것
- Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.

```js
const animal = {};

// 데이터 프로퍼티 정의
Object.defineProperty(animal, 'type', {
	value: 'cat',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(animal, 'name', {
    value: 'kitty'
});

let descriptor = Object.getOwnPropertyDescriptor(animal, 'type');
console.log('type', descriptor);
/*
type
{
    "value": "cat",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(animal, 'name');
console.log('name', descriptor);
/*
name
{
    "value": "kitty",
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/

// enumerable이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열러될 수 없다.
// name 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(animal)); // ["type"]

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// name 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이 때 값을 변경하면 에러는 발생하지 않고 무시된다.
animal.name = 'oscar'; // 변경되지 않음.

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
delete animal.name;

descriptor = Object.getOwnPropertyDescriptor(animal, 'name');
console.log(descriptor);
/*
{
    "value": "kitty",
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/

// 접근자 프로퍼티 정의
Object.defineProperty(animal, 'callName', {
    get() {
        return `${this.type} ${this.name}`;
    },
    
    set(name) {
        [this.type, this.name] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(animal, 'callName');
console.log('callName', descriptor);
/*
callName
{
    "enumerable": true,
    "configurable": true
}
*/

animal.callName = 'dog oscar';
console.log(animal);
/*
{
    "type": "dog",
    "callName": "dog kitty"
}
*/
```

- 프로퍼티 디스크립터 객체에서 생략된 어트리뷰트의 기본값

| 프로퍼티 디스크립터 객체의 프로퍼티 | 대응하는 프로퍼티 어트리뷰트 | 생략했을 때의 기본값 |
| ----------------------------------- | ---------------------------- | -------------------- |
| value                               | [[Value]]                    | undefined            |
| get                                 | [[Get]]                      | undefined            |
| set                                 | [[Set]]                      | undefined            |
| writable                            | [[Writable]]                 | false                |
| enumerable                          | [[Enumerable]]               | false                |
| configurable                        | [[Configurable]]             | false                |

- Object.defineProperties 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.

## 객체 변경 방지

- 객체의 변경을 방지하는 다양한 메서드

| 구분           | 메서드                   | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의 |
| -------------- | ------------------------ | ------------- | ------------- | ---------------- | ---------------- | -------------------------- |
| 객체 확장 금지 | Object.preventExtensions | X             | O             | O                | O                | O                          |
| 객체 밀봉      | Object.seal              | X             | X             | O                | O                | X                          |
| 객체 동결      | Object.freeze            | X             | X             | O                | X                | X                          |

### 객체 확장 금지

- Object.preventExtensions 메서드를 사용
- 프로퍼티 추가 금지
- 확장이 가능한 객체인지 Object.isExtensible 메서드로 확인 가능

```js
const animal = { type: 'cat' };

console.log(Object.isExtensible(animal)); // true

Object.preventExtensions(animal);

console.log(Object.isExtensible(animal)); // false

animal.name = 'kitty';
console.log(animal); // {type: 'cat'}

delete animal.type;
console.log(animal); // {}

Object.defineProperty(animal, 'tall', { value: '15cm' });
// TypeError: Cannot define property tall, object is not extensible
```

### 객체 밀봉

- Object.seal을 사용
- 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지
- 밀봉된 객체는 읽기와 쓰기만 가능
- Object.isSealed 메서드로 확인 가능

```js
const animal = { type: 'cat' };

console.log(Object.isSealed(animal)); // false

Object.seal(animal);

console.log(Object.isSealed(animal)); // true

console.log(Object.getOwnPropertyDescriptors(animal)); 
/*
{
    "type": {
        "value": "cat",
        "writable": true,
        "enumerable": true,
        "configurable": false
    }
}
*/

// 프로퍼티 추가가 금지된다.
animal.name = 'kitty';
console.log(animal); // { type: "cat" }

// 프로퍼티 삭제가 금지된다.
delete animal.type;
console.log(animal); // { type: "cat"}

// 프로퍼티 값 갱신은 가능하다.
animal.type = 'dog';
console.log(animal); // { type: "dog"}

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(animal, 'name', { configurable: true });
// Cannot define property name, object is not extensible
```

### 객체 동결

- Object.freeze 메서드는 객체를 동결한다.
- 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다.
- 동결된 객체는 읽기만 가능하다
- Object.isFrozen 메서드로 확인 가능하다.

```js
const animal = { type: 'cat' };

console.log(Object.isFrozen(animal)); // false

Object.freeze(animal);

console.log(Object.isFrozen(animal)); // true

console.log(Object.getOwnPropertyDescriptors(animal));
/*
{
    "type": {
        "value": "cat",
        "writable": false,
        "enumerable": true,
        "configurable": false
    }
}
*/

animal.name = 'kitty';
console.log(animal); // { type: 'cat'}

delete animal.type;
console.log(animal); // { type: 'cat'}

animal.type = 'dog';
console.log(animal); // { type: 'cat'}

Object.defineProperty(animal, 'name', { configurable: true });
// TypeError: Cannot define property name, object is not extensible
```

### 불변 객체

- 지금까지의 변경 방지 메서드들은 얕은 변경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지 못한다. 따라서 Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다.

```js
const animal = {
    type: 'cat',
    parent: { mother: 'kitty', father: 'tom'}
};

Object.freeze(animal);

console.log(Object.isFrozen(animal)); // true

console.log(Object.isFrozen(animal.parent)); // false

animal.parent.mother = 'lucy';
console.log(animal);
/*
{
    "type": "cat",
    "parent": {
        "mother": "lucy",
        "father": "tom"
    }
}
*/
```

- 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.

```js
function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const animal = {
    type: 'cat',
    parent: { mother: 'kitty', father: 'tom' }
};

deepFreeze(animal);

console.log(Object.isFrozen(animal)); // true
console.log(Object.isFrozen(animal.parent)); // true

animal.parent.mother = 'lucy';
console.log(animal);
/*
{
    "type": "cat",
    "parent": {
        "mother": "kitty",
        "father": "tom"
    }
}
*/
```

