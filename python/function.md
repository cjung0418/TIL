# 함수

## 함수

- 함수 만들 때에 앞에 def 빼먹지 말기.
- 함수는 일의 단위
- 함수와 함수()는 다르다. 함수: code 자체를 의미한다. 함수(): 실제 실행
- 함수의 실행: call
- lambda는 함수의 몸통을 나타내는 것
- (함수 로직 분리하기 == def 형태에서 lambda형태로 변환): 
  1. def와 이름을 지운다.
  2. 그 자리에 lambda라고 쓴다.
  3. 매개변수를 감싸는 괄호를 지우고, 띄어쓰기 한다.
  4. 엔터와 return을 지운다.
- 함수는 이름, 매개변수, 함수 바디, 반환 값의 4가지가 중요
- jupyter notebook에서 함수에 커서를 놓고 shift + tab or _doc__으로 docstring으로 일기. code에서는 함수 위에 마우스를 올려 놓으면 docstring이 나옴.
- 함수는 반드시 하나의 객체를 반환, 어떠한 객체라도 상관 없음
- 함수의 사용은 함수의 호출로
- return에 함수 사용 가능
- 함수는 호출로 시작해서 return으로 종료한다.
- 복수의 객체를 return하는 것처럼 보여도, 1개의 튜플로 return하기 때문에 무조건 하나의 객체를 반환하는 것이다.
- 명시적인 return 값이 없는 경우라도 None이라는 객체를 return하기 때문에, 결과적으로 하나의 객체를 반환
- 함수 이름은 동사형으로 적고, 함수 이름에서 return과 그 타입이 뭔지 알 것 같게 만드는 것이 좋다.



## 함수 input

- 매개변수(parameter) 과 위치인자(argument)
- 매개변수: 함수에 입력으로 전달된 값을 받는 변수
- 인자는 함수 호출시에 전달되는 값. ex)def func(a,b) -> a, b는 매개변수, fun(1,2) -> 1,2는 위치인자
- 기본값을 지정하여 함수 호출 시 인자값을 설정하지 않게 할 수도 있다.
- 키워드 인자: 직접 변수의 이름으로 특정 인자 전달 가능 ex)def add(a,b) add(b=2,a=3)
- 가변 인자 리스트: 함수에서 print(*...)와 같이 매개변수를 *로 표시한 것은 정해지지 않은 여러 개의 인자를 처리하는 방법이다. - 인자들은 튜플로 묶여 처리된다.(packing)
- *args라 쓰는데, args대신 다른 이름을 적어도 된다. 하지만 args라고 쓰는 것이 권장된다.
- 가변 키워드 인자: 함수가 임의의 개수 인자를 키워드 인자로 호출될 수 있도록 지정, 인자들은 딕셔너리로 묶여 처리, 매개변수에 **를 붙여 표현 ex) def family(****kwargs): family(father='john',...):에서 father는 key, 'john'이 value
- 주의)기본 인자 값을 가지는 인자 다음에 기본 값이 없는 인자 정의 불가. ex) def greeting(name='john doe', age) -> X, def greeting(age, name='john doe')-> O
- 키워드 인자 다음 위치 인자 사용 불가 ex) add(x=2,6) -> X
- 가변 인자리스트가 위치 인자보다 앞쪽에 올 수 없음. ex)add(*agrs,x)->X why? add(1,2,3)인 경우 x가 무엇인지 확정할 수 없음 -> add(x, *args)로 만들어야 한다. 가변 키워드 인자도 마찬가지.
- 순서는 함수(위치인자, 가변 인자리스트, 가변 키워드 인자)형태로 만들어야 한다.
- unpacking은 *를 사용한다. ex1)list1 = [1, 2, 3], print(list1) = [1, 2, 3], print( *list) = 1 2 3 ex2) a, *b, c = range(4) -> a==(), b==[1, 2], c == 3 ex3) for a, b* in ([1, 2, 3], [4, 5, 6, 7]): print(b) -> [2, 3], [5, 6, 7]
- dict는 **를 써야 묶여서 나온다. *만 쓰면 key만 나옴
- call by value, call by reference? -> 함수의 인자를 어떻게 가져오는가? python에서는 call by assignment



## 함수 scope

- LEGB Rule: 작은 거부터 큰 것으로 찾아가는 규칙
  - L(Local scope): 함수
  - E(Enclosed scope): 특정 함수의 상위 함수
  - G(Global scope): 함수 밖의 함수, import 모듈
  - B(Built-in scope): 파이썬 내부의 함수, 속성
- 큰 것에서 작은 것으로 탐색은 불가.
- 작은 것에서 큰 것으로 탐색은 가능하나, 수정은 불가하다. ex) print = 5와 같이 할 경우, print()가 실행이 안 되는 것은 G에서 정의했기에 B에 도달할 수 없는 것이다.(print라는 함수에 덮어씌운 것이 아니다.)
- 함수에서 global을 사용하면 global 변수를 변경할 수 있다. 단, global에 나열된 이름은 같은 코드 블록에서 global 앞에 등장할 수 없다. global에 나열된 이름은 매개변수, for 루프 대상, 클래스/함수 정의 등으로 정의되지 않아야 한다.
- nonlocal의 주의사항은 global과 비슷. 전역을 제외한 상위 범위에 대해 영향을 줄 수 있게 된다. 단, global은 선언된 적 없는 변수도 사용이 가능하나, nonlocal은 미리 선언된 변수에만 사용할 수 있다. nonlocal은 enclosed된 상황에서 사용.
- 클로저(closure)
- global과 nonlocal은 가급적 사용하지 앟는 것을 권장, 함수로 값을 바꾸고자 한다면 항상 인자로 넘기고 리턴 값을 사용하는 것을 추천.
- python tutor에서의 frame은 이름에 대한 것이고 이 부분이 scope
- 참조 == 접금 != (할당 ro  수정)
- 모듈 == 파일, 인터프리터가 끝날 때 == 프로그램 종료
- scope는 함수에서만 생각하는 것

## 재귀 함수

- 메모리 스택이 넘치게 되면 프로그램이 동작하지 않게 됨
- 최대 재귀 깊이가 1000번으로 이를 넘어가면 recursion에러가 뜨게 됨.
- ex) fibo(), fact()