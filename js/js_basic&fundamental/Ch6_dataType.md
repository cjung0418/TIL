# 데이터 타입

- 데이터 타입은 값의 종류를 말한다.

- 자바스크립트의 모든 값은 데이터 타입을 갖는다.

- 자바스크립트는 8개의 데이터 타입을 제공한다. 8개의 데이터 타입은 원시 타입(primitive type)과 객체 타입(object/reference type)으로 분류할 수 있다.

- | 구분      | 데이터 타입          | 설명                                                         |
  | --------- | -------------------- | ------------------------------------------------------------ |
  | 원시타입  | 숫자(number) 타입    | 숫자. 정수와 실수 구분 없이 하나의 숫자 타입만 존재          |
  |           | 문자열(string) 타입  | 문자열                                                       |
  |           | 불리언(boolean) 타입 | 논리적 참(true)과 거짓(false)                                |
  |           | undefined 타입       | var 키워드로 선언된 변수에 암묵적으로 할당되는 값            |
  |           | null 타입            | 값이 없다는 것을 의도적으로 명실할 때 사용하는 값            |
  |           | 심벌 타입            | ES6에서 추가된 7번째 타입                                    |
  |           | bigint 타입          | 숫자값을 안정적으로 나타낼 수 있는 최대치인 2<sup>53</sup>-1보다 큰 정수를 표현할 수 있는 새로운 원시값 |
  | 객체 타입 |                      | 객체, 배열, 함수 등                                          |

## 숫자 타입

- ECMAScript 사양에 따르면 배정밀도 64비트 부동소수점 형식을 따른다. 즉, 모든 수를 실수로 처리하며, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다

- 정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 메모리에 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다

- 2진수, 8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.

- ```js
  var binary = 0b01000001; // 2진수
  var octal = 0o101; // 8진수
  var hex = 0x41; // 16진수
  
  console.log(binary); // 65
  console.log(octal); // 65
  console.log(hex); // 65
  console.log(binary === octal); // true
  console.log(octal === hex); // true
  ```

- 정수로 표시해도 실수로 처리한다. 따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올 수 있다.

- ```js
  console.log(1 === 1.0) // true
  console.log(4 / 2); // 2
  console.log(3 / 2); // 1.5
  ```

- 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.

  - Infinity: 양의 무한대
  - -Infinity: 음의 무한대
  - NaN: 산술 연산 불가(not-a-number). Nan을 NAN, Nan, nan과 같이 표현하면 에러가 생긴다. 자바스크립트는 NAN, Nan, nan을 값이 아닌 식별자로 해석한다.

## 문자열 타입

- 문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.
- 문자열은 작은따옴표(' '), 큰따옴표(" "), 백틱(``)을 ㅗ텍스트를 감싼다
- 문자열은 따옴표로 감싸는 이유는 키워드나 식별자와 같은 토큰과 구분하기 위해서이다. 또한 스페이스와 같은 공백 문자도 포함할 수 없다.
- 변경 불가능한(immutable) 값이다

## 템플릿 리터럴

- ES6부터 도입된 새로운 문자열 표기법
- 멀티라인 문자열, 표현식 삽입, 태그드 템플릿등 편리한 문자열 처리 기능 제공
- 템플릿 리터럴은 런타임에 일반 문자열로 변환되어 처리된다
- 백틱을 사용해 표현한다.

### 멀티라인 문자열

- 일반 문자열 내에서는 줄바꿈이 허용되지 않는다.

- ```js
  var str = 'Hello
  world.'; // SyntaxError: Invalid or unexpected token
  ```

- 따라서 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 백슬래시(\\)로 시작하는 이스케이프 시퀀스를 사용해야 한다.

- | 이스케이프 시퀀스 | 의미                                                         |
  | ----------------- | ------------------------------------------------------------ |
  | \\0               | Null                                                         |
  | \b                | 백스페이스                                                   |
  | \f                | 폼 피드: 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동한다. |
  | \n                | 개행(LF, Line Feed): 다음 행으로 이동                        |
  | \r                | 개행(CR, Carriage Return): 커서를 처음으로 이동              |
  | \t                | 탭(수평)                                                     |
  | \v                | 탭(수직)                                                     |
  | \uXXXX            | 유니코드. 예를 들어 '\\u0041'은 'A'                          |
  | \\'               | 작은 따옴표                                                  |
  | \\"               | 큰 따옴표                                                    |
  | \\\               | 백슬래스                                                     |

- 개행(newline) 문자

  - 텍스트의 한 줄이 끝남을 표시하는 문자 또는 문자열
  - 라인 피드(\n): 커서를 정지한 상태에서 종이를 한 줄 올리는 것
  - 캐리지 리턴(\\r): 종이를 움직이지 않고 커서를 맨 앞줄로 이동하는 것
  - 초기의 컴퓨터는 라인 피드와 캐리지 리턴을 동시에 사용했다. CRLF(\r\n)로 커서를 맨 앞으로 이동시키고 종이를 한 줄 올리는 방식으로 개행했다.
  - 윈도우는 CR+LF로 새 줄을 나타낸다
  - 유닉스는 LF로 새 줄을 나타낸다.
  - macOS에서는 버전 9까지는 CR, 버전 10부터는 LF를 사용한다.
  - 따라서 다른 운영체제에서 작성한 텍스트 파일은 서로 개행 문자를 인식하지 못한다. 단, 대부분의 텍스트 에디터는 운영체제에 맞게 개행 문자를 자동으로 번환해주므로 큰 문제는 없다.

- ```js
  var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
  console.log(template);
  /*
  <ul>
  	<li><a href="#">Home</a></li>
  </ul>
  */
  ```

- 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.

- ```js
  var template = `<ul>
  	<li><a href="#">Home</a></li>
  </ul>`;
  
  console.log(template);
  /*
  <ul>
  	<li><a href="#">Home</a></li>
  </ul>
  */
  ```

###  표현식 삽입

- 문자열은 +를 사용해 연결할 수 있다. +연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다. 그 외의 경우는 덧셈 연산자로 동작한다.

- ```js
  var first = 'Jason';
  var second = 'mask';
  
  console.log('My name is ' + first + ' ' + second + '.'); //My name is Jason mask.
  ```

- 템플릿 리터럴 내에서는 표현식 삽입을 통해 간단히 문자열을 삽입할 수 있다.

- ```js
  var first = 'Fredy';
  var second = 'dream';
  
  console.log(`My name is ${first} ${second}.`); // My name is Fredy dream.
  ```

- 표현식을 삽입하려면 ${}로 표현식을 감싼다. 이 때 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입된다.

- 표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다. 템플릿 리터럴이 아닌 일반 문자열에서 표현식 삽입은 문자열로 취급된다.

## 불리언 타입

- 불리언 타입의 값은 논리적 참, 거짓을 나타내는 true, false 뿐이다.

## undefined 타입

- undefined 타입의 값은 undefined가 유일하다
- var 키워드로 선언된 변수는 암묵적으로 undefined로 초기화된다. 따라서 변수 선언에 의해 확보된 메모리 공간이 처음 할당이 이뤄질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화한다.
- undefined는 개발자가 의도한 값이 아니라 자바스크립트 엔진이 초기화할 때 사용하는 값이다. 변수를 참조했을 때, undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는 변수라는 것을 알 수 있다.
- 변수에 undefined를 의도적으로 할ㄷ아한다면 undefined의 의도에 벗어나며, 혼란을 줄 수 있다. 만약 변수에 값이 없다는 것을 명시하고 싶다면 null을 사용해야 한다.
- 선언(declaration)과 정의(definition)
  - undefined에서의 정의는 변수에 값을 할당하여 변수의 실체를 명확히 하는 것을 말한다.
  - 다른 언어에서는 선언과 정의를 엄격하게 구분해서 사용한다. C에서 선언과 정의는 "실제로 메모리 주소를 할당하는가"로 구분된다. 단순히 컴파일러에게 식별자의 존재만 알리는 것은 선언이고, 실제로 컴파일러가 변수를 생성해서 식별자와 메모리 주소가 연결되면 정의로 구분한다.
  - 자바스크립트의 경우 변수를 선언하면 암묵적으로 정의가 이루어지기 때문에 선언과 정의의 구분이 모호하다.
  - ECMAScript 사양에서는 변수는 선언하고 함수는 정의한다고 표현한다.

## null 타입

- null 타입의 값은 null이 유일하다.
- null은 Null, NULL 등과 다르다.
- null은 변수에 값이 없다는 것을 의도적으로 명시(의도적 부재,intentional absence)할 때 사용한다.
- 변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다. 이는 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며, 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행한다.
- 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다. 예를 들어, HTML 요소를 검색해 반환하는 document.querySelector 메서드는 조건에 부합하는 HTML 요소를 검색할 수 없을 경우 에러 대신 null을 반환한다.

## 심벌 타입

- ES6에서 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다

- 다른 값과 중복되지 않는 유일무이한 값이다.

- 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다

- 심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심벌은 Symbol 함수를 호출해 생성한다. 이 때 생성된 심벌값은 외부에 노출되지 않으며, 다른 값과 절대 중복되지 않는 유일무이한 값이다

- ```js
  var key = Symbol('key');
  console.log(typeof key); // symbol
  
  var obj = {};
  
  // 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
  obj[key] = 'value';
  console.log(obj[key]); // value
  ```

## 객체 타입

- 자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체이다.

## 데이터 타입의 필요성

### 데이터 타입에 의한 메모리 공간의 확보와 참조

- 값은 메모리에 저장하고 참조할 수 있어야 하고, 메모리에 값을 저장하려면 먼저 확보해야 할 메모리 공간의 크기를 결정해야 한다. 다시 말해, 몇 바이트의 메모리 공간을 사용해야 낭비와 손실 없이 값을 저장할 수 있는지 알아야 한다.
- 자바스크립트 엔진은 데이터 타입, 즉 값의 종류에 따라 정해진 크기의 메모리 공간을 확보한다. 즉, 변수에 할당되는 값의 데이터 타입에 따라 확보해야 할 메모리 공간의 크기가 결정된다.
- 데이터 타입에 따라 확보되는 메모리 공간의 크기
  - ECMAScript 사양은 문자열과 숫자 타입 외의 데이터 타입의 크기를 명시적으로 규정하고 있지는 않다. 따라서 문자열과 숫자 타입을 제외하고 데이터 타입에 따라 확보되는 메모리 공간의 크기는 자바스크립트 엔진 제조사의 구현에 따라 다를 수 있다. 단, ECMAScript 사양에 숫자 타입은 배정밀도 64비트 부동소수점 형식을 사용한다고 명시되어 있다.
- 심벌 테이블
  - 컴파일러 또는 인터프리터는 심벌 테이블이라고 부르는 자료 구조를 통해 식별자를 키로 바인딩된 값의 메모리 주소, 데이터 타입, 스코프를 관리한다.

### 데이터 타입에 의한 값의 해석

- 모든 값은 데이터 타입을 가지며, 메모리에 2진수로, 비트의 나열로 저장된다. 이 값의 해석은 데이터 타입에 따라 달라지게 된다.

### 데이터 타입이 필요한 이유 정리

- 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
- 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

## 동적 타이핑

### 동적 타입 언어와 정적 타입(static/strong) 언어

- 정적 타입 언어

  - C나 자바 같은 정적 타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 값의 종류, 즉 데이터 타입을 사전에 선언해야 한다. 이를 명시적 타입 선언(explicit type declaration)이라 한다.

  - 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.

  - 컴파일 시점에 타입 체크(선언한 데이터 타입에 맞는 값을 할당했는지 검사하는 처리)를 수행한다. 만약 타입 체크를 통과하지 못했다면 에러를 발생시키고 프로그램의 실행 자체를 막는다. 이를 통해 타입의 일관성을 강제함으로써 더욱 안정적인 코드의 구현을 통해 런타임에 발생하는 에러를 줄인다.
  - ex) C, C++, Java, Kotlin, Go, Haskel, Rust, Scala

- 동적 타입 언어

  - JavaScript에서 typeof연산자로 변수를 연산하면 변수의 데이터 타입, 변수에 할당된 값의 데이터 타입을 반환한다.
  - 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입을 언제든지 자유롭게 변경할 수 있다.
  - 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론,type inference)된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.

### 동적 타입 언어와 변수

- 변수 값은 언제든지 변경될 수 있기 때문에 복잡한 프로그램에서는 변화하는 변수 값을 추적하기 어려울 수 있다.
- 변수의 타입이 고정되어 있지 않고 동적으로 변하는 동적 타입 언어의 변수는 값의 변경에 의해 타입도 언제든지 변경될 수 있다. 따라서 동적 타입 언어의 변수는 값을 확인하기 전에 타입을 확신할 수 없다.
- 자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되기도 한다.
- 동적 타입 언어는 유연성은 높지만 신뢰성은 떨어진다.
- 변수를 사용할 때 주의할 사항
  - 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다.
  - 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다.
  - 전역 변수는 최대한 사용하지 않도록 한다.
  - 변수보다는 상수를 사용해 값의 변경을 억제한다.
  - 변수 이름은 변수의 목적이나 의미를 파악할 수 있도록 네이밍한다.