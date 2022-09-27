# 타입 변환과 단축 평가

## 타입 변환이란?

- 타입변환

  - 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성. 기존의 원시 값을 직접 변경하는 것은 아니다.

  - 명시적 타입 변환(explicit coercion), 타입 캐스팅(type casting)

    - 개발자가 의도적으로 타입을 변환하는 것

    - ```js
      var x = 10;
      var str = x.toString();
      console.log(typeof str, str); // string 10
      
      console.log(typeof x, x); // number 10
      ```

  - 암묵적 타입 변환(implicit coercion), 타입 강제 변환(type coercion)

    - 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환

    - 기존 변수 값을 재할당하여 변경하는 것이 아니다. 표현식을 에러 없이 평가하기 위해 피연산자의 값을 암묵적 타입 변환해 새로운 타입의 값을 만들어 단 한 번 사용하고 버린다.

    - ```js
      var x = 10;
      var str = x + '';
      console.log(typeof str, str); // string 10
      
      console.log(typeof x, x); // number 10
      ```

## 암묵적 타입 변환

- 암묵적 타입 변환이 발생하면 문자열, 숫자, boolean과 같은 원시 타입 중 하나로 타입을 자동 변환한다.

### 문자열 타입으로 변환

```js
1 + '2' // "12"
```

- 위의 + 연산자는 피연산자 중 하나 이상이 문자열이기 때문에 문자열 연결 연산자로 작동한다.

- 자바스크립트 엔진은 표현식을 평가할 때 코드 문맥에 부합하도록 암묵적 타입 변환을 실행한다.

- 연산자 표현식의 피연산자만이 암묵적 타입 변환의 대상이 되는 것은 아니다.

  - ex) 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적으로 변경한다.

  - ```js
    `1 + 1 = ${1 + 1}` // "1 + 1 = 2"
    ```

- 자바스크립트 엔진은 문자열 타입 아닌 값을 문자열 타입으로 암묵적 타입 변환을 수행할 때 다음과 같이 동작한다.

  - ```js
    // 숫자 타입
    0 + '' // "0"
    -0 + '' // "0"
    1 + '' // "1"
    -1 + '' // "-1"
    NaN + '' // "NaN"
    Infinity + '' // "Infinity"
    -Infinity + '' // "-Infinity"
    
    // 불리언 타입
    true + '' // "true"
    false + '' // "false"
    
    // null 타입
    null + '' // "null"
    
    // undefined 타입
    undefined + '' // "undefined"
    
    // 심벌 타입
    (Symbol()) + ''  // TypeError: Cannot convert a Symbol value to a string
    
    // 객체 타입
    ({}) + '' // "[object Object]"
    Math + '' // "[object Math]"
    [] + '' // ""
    [10, 20] + '' // "10,20"
    (function(){}) + '' // "function(){}"
    Array + '' // "function Array() { {native code} }"
    ```

### 숫자 타입으로 변환

```js
1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN
```

- 산술 연산자
  - 자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
  - 이 때 피연산자를 숫자 타입으로 변환할 수  없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 된다.

```js
'1' > 0 // true
'-1' > 0 // false
```

- 비교 연산자
  - 비교 연산자는 피연산자의 크기를 비교하므로 모든 피연산자는 코드의 문맥상 모두 숫자 타입이어야 한다.
  - 자바스크립트 엔진은 비교 연산자 표현식을 평가하기 위해 비교 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.

```js
// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌 타입
+Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{} // NaN
+[] // 0
+[10,20] // NaN
+(function(){}) // NaN
```

- \+ 단항 연산자
  - 빈 문자열(''), 빈 배열([]), null, false는 0으로, true는 1로 변환된다.
  - 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다.

### 불리언 타입으로 변환

- 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.
- 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는  Falsy 값(거짓으로 평가되는 값)으로 구분한다.
- Falsy
  - false
  - undefined
  - null
  - 0, -0
  - NaN
  - ''(빈 문자열)
- Truthy: Falsy 값 이외에는 모두 true로 평가되는 Truthy 값이다.

## 명시적 타입 변환

- 표준 빌트인 생성자 함수(String, Number, Boolean)를 new 연산자 없이 호출하는 방법
  - 표준 빌트인 생성자 함수: 객체를 생성하기 위한 함수이며 new 연산자와 함께 호출한다.
- 표준 빌트인 메서드를 사용하는 방법
  - 표준 빌트인 메서드: 자바스크립트에서 기본 제공하는 빌트인 객체의 메서드
- 암묵적 타입 변환을 이용하는 방법
- 표준 빌트인 생성자 함수

### 문자열 타입으로 변환

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메서드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1); // '1'
String(NaN); // 'NaN'
String(Infinity); // 'Infinity'
// boolean 타입 => 문자열 타입
String(true); // 'true'
String(false); // 'false'

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(1).toString(); // '1'
(NaN).toString(); // 'NaN'
(Infinity).toString(); // 'Infinity'
// boolean 타입 => 문자열 타입
(true).toString(); // 'true'
(false).toString(); // 'false'

// 3. 문자열 연결 연산자를 이용하는 방법
1 + ''; // '1'
NaN + ''; // 'NaN'
Infinity + ''; // 'Infinity'
// boolean 타입 => 문자열 타입
true + ''; // 'true'
false + ''; // 'false'
```

### 숫자 타입으로 변환

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
3. \+ 단항 산술 연산자를 이용하는 방법
4. \* 산술 연산자를 이용하는 방법

```js
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); // 10.53
// boolean 타입 => 숫자 타입
Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
parseInt('0'); // 0
parseInt('-1'); // 1
parseFloat('10.53'); // 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+'0'; // 0
+'-1'; // 1
+'10.53'; // 10.53
// boolean 타입 => 숫자 타입
+true; // 1
+false; // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
'0' * 1; // 0
'-1' * 1; // -1
'10.53' * 1; // 10.53
// boolean 타입 => 숫자 타입
true * 1; // 1
false * 1; // 0
```

 ### 불리언 타입으로 변환

1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 연산자를 두 번 사용하는 방법

```js
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => boolean 타입
Boolean('*'); // true
Boolean(''); // false
Boolean('false'); // true
// 숫자 타입 => boolean 타입
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true
// null 타입 => boolean 타입
Boolean(null); // false
// undefined 타입 => boolean 타입
Boolean(undefined); // false
// 객체 타입 => 불리언 타입
Boolean({}); // true
Boolean([]); // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
// 문자열 타입 => boolean 타입
!!'X'; // true
!!''; // false
!!'false'; // true
// 숫자 타입 => boolean 타입
!!0; // false
!!1; // true
!!NaN; // false
!!Infinity; // false
// null 타입 => boolean 타입
!!null; // false
// undeinfed 타입 => boolean 타입
!!undefined; // false
// 객체 타입 => 불리언 타입
!!{}; // true
!![]; // true
```

## 단축 평가

### 논리 연산자를 사용한 단축 평가

- 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다. 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.

- 논리곱 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다.

  - 논리곱의 첫 번째 피연산자가 true여도 두 번째 피연산자가 true여야만 전체 결과가 true가 되기 때문에 두 번째 피연산자도 확인을 해야만 한다. 따라서 논리 연산의 결과를 결정하는 두 번째 피연산자의 결과를 그대로 반환한다.

  - 논리곱의 첫 번째 피연산자가 false라면 두 번째 피연산자가 true인지 false인지는 상관이 없게 된다. 따라서 첫 번째 피연산자를 반환한다.

  - ```js
    'cat' && 'dog'; // 'dog'
    '' && 'dog' // ''
    ```

- 논리합 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.

  - 만약 첫 번째 피연산자가 true라면, 두 번째 피연산자가 true인지 false인지에 상관없이 결과는 true가 된다. 따라서 논리 연산의 결과를 결정하는 첫 번째 피연산자의 결과를 그대로 반환한다.

  - 첫 번째 피연산자가 false라면, 두 번째 피연산자가 true인지 false인지에 따라 결과가 결정된다. 따라서 논리 연산의 결과를 결정하는 두 번째 피연산자의 결과를 그대로 반환한다.

  - ```js
    'cat' || 'dog'; // 'cat'
    '' || 'dog' // 'dog'
    ```

- | 첫 번째 피연산자 | 두 번째 피연산자 | 연산자 | 결과 반환 |
  | ---------------- | ---------------- | ------ | --------- |
  | T                | T                | &&     | 두 번째   |
  | T                | F                |        | 두 번째   |
  | F                | T                |        | 첫 번째   |
  | F                | F                |        | 첫 번째   |
  | T                | T                | \|\|   | 첫 번째   |
  | T                | F                |        | 첫 번째   |
  | F                | T                |        | 두 번째   |
  | F                | F                |        | 두 번째   |

- 단축 평가(short-circuit evaluation): 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것

- 조건이 Truthy 값일 때 무엇을 해야 한다면, 논리곱 연산자 표현식으로 if 문을 대체할 수 있다.

  - ```js
    var done = true;
    var gone = false;
    var message = '';
    message = gone && 'gone';
    console.log(message); // false
    message = done && 'done';
    console.log(message); // done
    ```

- 조건이 Falsy 값일 때 무엇을 해야 한다면 논리합 연산자 표현식으로 if 문을 대체할 수 있다.

  - ```js
    var done = false;
    var message = '';
    message = done || 'done';
    console.log(message); // done
    ```

- 단축 평가는 다음 상황에서 유용하게 사용된다.

  - 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

    - 객체의 값이 null 또는 undefined일 때, 객체의 프로퍼티를 참조하면 타입 에러가 발생한다. 이 때 단축 평가를 사용하면 에러를 발생시키지 않을 수 있다.

    - ```js
      var elem = null;
      var value = elem && elem.value;
      ```

  - 함수 매개변수에 기본값을 설정할 때

    - 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 이 때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.

    - ```js
      function getStringLength(str) {
          str = str || '';
          return str.length;
      }
      ```

### 옵셔널 체이닝 연산자

- 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

  - ```js
    var elem = null;
    var value = elem?.value;
    console.log(value); // undefined
    ```

- 옵셔널 체이닝 연산자 ?.는 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 유용하다. 그 전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수가 null 또는 undefined인지 확인했다.

  - 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이면 좌항 피연산자를 그대로 반환한다. 좌항 피연산자가 Falsy 값인 0이나 ''인 경우도 마찬가지다. 하지만 0이나 ''은 객체로 평가될 때도 있다.

  - ```js
    var str = '';
    var length = str && str.length;
    console.log(length) // ''
    ```

  - 하지만 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.

  - ```js
    var str = '';
    var length = str?.length;
    console.log(length) // 0
    ```

### null 병합 연산자(nullish coalescing)

- null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.

- null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.

- ```js
  var foo = null ?? 'default string';
  console.log(foo) // 'default string'
  ```

- 이전에는 논리 연산자 ||를 사용한 단축 평가를 통해 변수에 기본값을 설정했다. 논리 연산자 ||를 사용한 단축 평가의 경우 좌항의 피연산자가 false로 평가되는 Falsy 값이면 우항의 피연산자를 반환한다. 만약 False 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수도 있다.

- ```js
  // ''를 기본값으로 설정하고 싶었다고 생각해보자. 그런데도 ''는 기본값으로 인식되지 않는다.
  var foo = '' || 'default string';
  console.log(foo); // 'default string'
  ```

- 하지만 null 병합 연산자 ??는 좌항의 피연산자가 false로 평가되는 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.

- ```js
  var foo = '' ?? 'default string';
  console.log(foo); // ''
  ```



