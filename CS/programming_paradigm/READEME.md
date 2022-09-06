# 프로그래밍 패러다임

- 프로그래밍 패러다임: 프로그래머에게 프로그래밍의 관점을 갖게 해주는 역할을 하는 개발 방법론
- 프로그래밍 패러다임 => (선언형, 명령형)
  - 선언형 => 함수형
  - 명령형 => (객체지향형, 절차지향형)

## 선언형

- 선언형 프로그래밍(declaritive programming): '무엇을' 풀어내는가에 집중하는 패러다임
- "프로그래밍은 함수로 이루어진 것이다."
- 함수형 프로그래밍은 선언형 패러다임의 일종
- 함수형 프로그래밍은 작은 '순수 함수'들을 블록처럼 쌓아 로직을 구현하고 '고차 함수'를 통해 재사용성을 높인 프로그래밍 패러다임
  - 순수 함수: 출력이 입력에만 의존하는 것
  - 고차 함수: 함수가 함수를 값처럼 매개변수로 받아 로직을 생성할 수 있는 것
    - 고차 함수를 쓰기 위해서는 해당 언어가 일급 객체라는 특징을 가져야 한다.
    - 일급 객체의 특징
      - 변수나 메서드에 함수를 할당할 수 있다.
      - 함수 안에 함수를 매개변수로 담을 수 있다.
      - 함수가 함수를 반환한다.
- 커링([Currying](https://velog.io/@dami/CSFunctional-Programming-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%BB%A4%EB%A7%81Currying))
  - 함수에 인자를 하나씩 적용해 나가다가 필요한 인자가 모두 채워지면 함수 본체를 실행하는 기법
  - JS에서는 커링이 지원되지 않지만, 일급 함수가 지원되고 평가 시점을 다룰 수 있기 때문에 커링 직접 구현 가능
  - 커링 함수는 인자로 함수를 받고 커리 함수를 실행하는 즉시 함수를 리턴. 해당 함수가 실행되면 또 다른 함수가 연쇄적으로 실행
  - currying 함수에서 앞에 있는 인자일수록 변동가능성이 적게끔 구현하는 것이 좋다. 따라서 인자를 역으로 받아야 하는 경우를 고려하여 오른쪽에서부터 인자를 적용해나가는 currying 함수를 별도로 만들어 사용

- [불변성](https://evan-moon.github.io/2020/01/05/what-is-immutable/)

  - 상태를 변경하지 않는 것 === 메모리에 이미 담겨있는 값을 변경하지 않음

  - 변수의 선언: 메모리 공간을 확보

  - 변수의 할당: 메모리 공간에 저장되어 있는 값을 변경, 상태를 변경 => 재할당을 하지 않으면 상태를 변경하지 않으므로 불변성을 지킬 수 있음? => NO, 프로그램이 변수가 가리키고 있는 메모리 공간에 있는 값을 불러오고 사용하는 방식이 단순하지 않음(값에 의한 호출, 참조에 의한 호출).

  - 값에 의한 호출

    - 함수의 인자로 어떤 변수를 넘길 때 해당 변수가 가지고 있는 값을 그대로 복사하여 함수에게 넘겨주는 방식
    - 기존 변수가 가리키고  있는 메모리 공간에 있는 값을 함수에 인자로 넘기는 것이 아니라 그 값을 복사해서 새로운 메모리 공간에 저장 후 넘겨준다.
    - JS에서 string, number, boolean과 같은 원시 자료형을 사용하는 변수들은 모두 값에 의한 호출 방식을 사용
    - cf) JS 원시 자료형(primitive type): null, undefined, boolean, number, string, symbol, bigint
      - complex data type: object

  - 참조에 의한 호출 방식

    - 변수가 가리키고 있는 메모리 공간의 주소를 넘기는 방식
    - Array, Object 등이 사용
    - 메모리 공간에 저장되어 있던 값을 직접 변경하기 때문에 상태가 변경되고, 불변성이 깨진다.

  - Why 불변성?

    - 무분별한 상태의 변경을 막는다.

      - 전역변수를 선언하고, 여러 함수를 통해 이를 변경한다면 나중에 가서는 어디서 해당 변수를 변경했는지 추적하기가 힘들어 진다.
      - 따라서 불변성을 유지하며 순수 함수를 사용할 경우, 예측하지 못한 상태의 변경을 방어할 수 있다.

    - 상태의 변경을 추적하기가 쉽다.

      - 참조에 의한 호출을 사용하는 객체를 변경할 때, 생각과 다르게 변수가 변경될 수 있다. ex) 

        ```js
        const jeong = {age: 21}
        function getOlder(person) {
        	person.age += 10;
        	return person;	
        }
        const lee = getOlder(jeong);
        
        // lee라는 새로운 객체를 만들어 낸 것 같지만, 인자로 넣었던 jeong의 값도 변했다.
        console.log(jeong.age); // 31
        console.log(lee.age); // 31
        console.log(jeong === lee) // true
        ```

      - 위와 같은 상황을 방지하기 위해서 함수의 인자를 받아 해당 값을 가진 새로운 객체를 만든 후 해당 객체를 반환하면 된다.

        ```js
        const jeong = {age: 21}
        function getOlder(person) {
        	return {
                ...person,
                age: person.age + 10
            }
        }
        const lee = getOlder(jeong);
        
        console.log(jeong.age) // 21
        console.log(lee.age) // 31
        console.log(jeong === lee) // false
        ```

## 객체지향 프로그래밍(OOP, Object-Oriented Programming)

- 객체들의  집합으로 프로그램의 상호 작용을 표현하며 데이터를 객체로 취급하여 객체 내부에 선언된 메서드를 활용하는 방식
- 설계에 많은 시간이 소요되며 처리 속도가 다른 프로그래밍 패러다임에 비해 상대적으로 느리다.
- 객체지향 프로그래밍의 특징
  - 추상화: 복잡한 시스템으로부터 핵심적인 개념 또는 기능을 간추려내는 것
  - 캡슐화: 객체의 속성과 메서드를 하나로 묶고 일부를 외부에 감추어 은닉하는 것
  - 상속성: 상위 클래스의 특성을 하위 클래스가 이어받아서 재사용하거나 추가, 확장하는 것. 코드의 재사용 측면, 계층적인 관계 생성, 유지 보수면 측면에서 중요
  - 다형성: 하나의 메서드나 클래스가 다양한 방법으로 동작하는 것. ex) 오버로딩, 오버라이딩
    - 오버로딩: 같은 이름을 가진 메서드를 여러 개 두는 것. 컴파일 중에 발생하는 '정적' 다형성
    - 오버라이딩: 주로 메서드 오버라이딩을 말하며, 상위 클래스로부터 상속받은 메서드를 하위 클래스가 재정의하는 것을 의미. 컴파일 중에 발생하는 '동적' 다형성

- 설계 원칙
  - 단일 책임 원칙(SRP, Single Responsibility Principle)
    - 모든 클래스는 각각 하나의 책임만 가져야 하는 원칙. 
    - ex) A라는 로직이 있을 때, 어떠한 클래스는 A에 관한 클래스여야 하고 이를 수정한다고 해도 A와 관련된 수정이어야 한다.
  - 개방-폐쇄 원칙(OCP, Open Closed Principle)
    - 유지 보수사항이 생긴다면 코드를 쉽게 확장할 수 있도록 하고 수정할 때는 닫혀 있어야 하는 원칙
    - 기존의 코드는 잘 변경하지 않으면서도 확장은 쉽게 할 수 있어야 한다.
  - 리스코프 치환 원칙(LSP, Liskov Substitution Principle)
    - 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 하는 것을 의미
    - 클래스가 상속되며 부모, 자식의 관계가 형성된다. 이 때 부모 객체의 자리에 자식 객체를 넣어도 시스템이 문제없이 돌아가게 만들어야 하는 것을 뜻한다.
  - 인터페이스 분리 원칙(ISP, Interface Segregation Principle)
    - 하나의 일반적인 인터페이스보다 구체적인 여러 개의 인터페이스를 만들어야 하는 원칙
  - 의존 역전 원칙(DIP, Dependency Inversion Principle)
    - 자신보다 변하기 쉬운 것에 의존하던 것을 추상화된 인터페이스나 상위 클래스를 두어 변하기 쉬운 것의 변화에 영향받지 않도록 하는 원칙
    - 상위 계층은 하위 계층의 변화에 대한 구현으로부터 독립해야 한다.

## 절차형 프로그래밍

- 로직이 수행되어야 할 연속적인 계산 과정으로 이루어짐
- 일이 진행되는 방식으로 코드를 구현하면 되기 때문에 코드의 가독성이 좋으며, 실행 속도가 빠르다.
- 모듈화하기 어렵고 유지 보수성이 떨어진다.