# 표현식과 문

## 값(value)

- 식이 평가되어 생성된 결과

  - 평가: 식을 해석해서 값을 생성하거나 참조하는 것

- 모든 값은 데이터 타입을 가지며, 메모리에 2진수(bit의 나열)로 저장된다

- 메모리에 저장된 값은 데이터 타입에 따라 다르게 해석될 수 있다.

  - ex) 0100 0001 은 숫자로는 65이지만 문자로는 'A'이다.

- 변수에 할당되는 것은 값이다.

- ```js
  // 변수에는 10 + 20이 평가되어 생성된 숫자 값 30이 할당된다.
  var sum = 10 + 20;
  ```

- 변수에 할당되는 것은 10+20이 아니라 30이다. 따라서 할당 이전에 평가되어 값을 생성해야 한다.

- 값을 생성하는 방식은 대표적으로 리터럴이 있다.

## 리터럴

- 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법을 말한다

- ```js
  // 숫자 리터럴 3
  3
  ```

- 3은 단순한 아라비아 숫자가 아니라 숫자 리터럴이다. 사람이 이해할 수 있는 아라비아 숫자를 사용해 숫자 리터럴 3을 코드에 기술하면 자바스크립트 엔진은 이를 평가해 숫자 값 3을 생성한다.

- 자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성한다.

- 정수 리터럴, 부동소수점 리터럴 ,..., 객체 리터럴, 배열 리터럴, 함수 리터럴, 정규 표현식 리터럴 등이 있다.

## 표현식(expression)

- 값으로 평가될 수 있는 문(statement)이다. 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다.
- 리터럴은 값으로 평가되기 때문에 리터럴도 표현식이다.
- 식별자 참조는 값을 생성하지는 않지만 값으로 평가되기에 표현식이다.
- 리터럴, 식별자(변수, 함수 등의 이름), 연산자, 함수 호출 등의 조합으로 이루어 질 수 있다.
- 표현식 === 표현식이 평가된 값

## 문(statement)

- 프로그램을 구성하는 기본 단위이자 최소 실행 단위
- 문의 집합으로 이뤄진 것이 프로그램이고 문을 작성하고 순서에 맞게 나열하는 것이 프로그램이다
- 문은 여러 토큰으로 구성된다
- 토큰
  - 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소
  - 키워드, 식별자, 연산자, 리터럴, 특수기호는 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소이므로 토큰이다.
- 컴퓨터에 내리는 명령어라고 할 수 있다. 문이 실행되면 명령이 실행되고 무슨 일인가가 일어난다
- 선어문, 할당문, 조건문, 반복문 등으로 구분할 수 있다.

## 세미콜론과 세미콜론 자동 삽입 기능

- 세미콜론은 문의 종료를 나타낸다.

- 자바스크립트 엔진은 세미콜론으로 문이 종료한 위치를 파악하고 순차적으로 하나씩 문을 실행한다.

- 단, 0개 이상의 문을 괄호로 묶은 코드 블록 뒤에는 세미콜론을 붙이지 않는다.

  - 코드 블록은 언제나 문의 종료를 의미하는 자체 종결성(self closing)을 갖기 때문

- 자바스크립트 엔진이 소스코드를 해석할 때 문의 끝이라고 예측되는 지점에 세미콜론을 자동으로 붙여주는 세미콜론 자동 삽입 기능(ASI, Automatic Semicolon Insertion)이 있기 때문에 세미콜론은 생략이 가능하다

- 하지만 생각과 다르게 세미콜론이 적용될 수도 있다.

- ```js
  function foo () {
      return
  	    {}
      // ASI의 동작 결과 => return; {};
      // 의도 => return {};
  }
  
  console.log(foo());
  
  var bar = function () {}
  (function() {})();
  // ASI의 동작 결과 => var bar = function () {}(function() {})(); =>TypeError: (intermediate value)(...) is not a function
  // 의도 => var bar = function() {}; (function() {})(); => undefined
  ```

## 표현식인 문과 표현식이 아닌 문

- 표현식인 문은 값으로 평가될 수 있는 문이다.

- 표현식이 아닌 문은 값으로 평가될 수 없는 문이다.

- ex) 

  - 변수 선언문은 값으로 평가될 수 없기에 표현식이 아닌 문이다.
  - 할당문은 값으로 평가될 수 있기에 표현식인 문이다

- 표현식과 표현식이 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해 보는 것이다. 표현식인 문은 값으로 평가되므로 변수에 할당할 수 있다. 하지만 표현식이 아닌 문은 값으로 평가할 수 없기에 변수에 할당하면 에러가 발생한다.

- ex)

  - ```js
    var foo = var x; // SyntaxError: Unexpected token 'var'
    ```

  - ```js
    var foo = x = 100;
    console.log(foo); // 100
    ```

- 완료 값(completion value)

  - 크롬 개발자 도구에서 표현식이 아닌 문을 실행하면 항상 undefined를 출력한다.
  - 완료 값은 표현식의 평가 결과가 아니다. 따라서 다른 값과 같이 변수에 할당할 수 없고 참조할 수도 없다

