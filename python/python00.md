# 210719 수업받은 것

## 기초

- ctrl + /: 주석처리
- ''' or """으로 작성하는 주석은 나중에 docstring-함수 등에 대한 설명을 적은 주석-으로 사용하며 ____doc____으로 읽어올 수 있다.
- id(): 메모리 주소 확인
- pythonic!
- keyword.kwlist로 식별자로 사용하면 안 되는 것들을 출력할 수 있다.
- 실수(여기에서는 주로 float)는 ==로 판별하지 않고, 어떠한 정도의 범위를 정하고 그 안에 속하는가를 비교한다.
  - 1. 임의의 작은 수를 설정하여 그것보다 더 작은 차이를 가지는가를 확인 ex) abs(a-b) <= 1e-10
    2. sys.float_info.epsilon 사용
    3. math.isclose(a,b) 사용
- 허수부분은 j로 표시 ex) a= 3+4j, a.real==3, a.imag==4j
- 나눗셈은 결과가 항상 실수이다.
- divmod()로 몫과 나머지를 한번에 얻을 수 있다. ex) quotient, remainder = divmod(4,3)
- is 와 is not은 같은 객체인지 확인하는 것. 값만 확인하는 것은 아니다.
- None인지 확인은 ==이 아니라 is로 확인해야 한다.
- not 'hi' => False, not ~일 때, ~가 비어있으면 True, 값이 있으면 False (본질은 무언가 값이 차있으면 True, 비어있으면 False)
- python에서는 결과가 확실한 경우 그 이후의 값은 확인하지 않고 지금까지 진행한 값을 반환한다. 특히, and와 or 연산에서.
  - ex in and) 3 and 5 => 5, 5 and 3 => 3, 0 and 5 => 0, 5 and 0 => 0
  - ex in or) 3 or 0 => 3, 0 or 3 => 3, 5 or 3 => 5
- ~ in containment : contaiment에 ~가 있는가?
- python에서 -5~256까지의 숫자의 id는 동일, 257부터의 id는 다르다.
- 표현식: 식별자, 값, 연산자로 이루어짐.
- 문장: 실행 최소단위
- input()은 거의 str형태로 저장이 된다.
- f-strings에서 연산은 되지만, 할당은 안 된다.
- 비어있는 list등은 모두 False, 숫자 중에서 0만 False, None은 False
- id는 RAM에 어떤 공간에 할당하여 놓는다. (3,2)와 같이 좌표로 나타낼수도 있지만, 190과 같이 나타낼 수도 있다. 뒤의 길게 쓴 것이 id
- 함수들 중에 a.count와 같이 .과 같이 오는 게 있는데, 이거는 method다. 
- 변수를 만들 때에 literal-ex)[],()- 혹은 initialize-ex) list(),map()로 한다.
- 문자열을 붙이는 경우, char + result와 result + char은 다르다.

## 컨테이너

- 시퀀스: 순서가 있는(ordered)-인덱스로 접근가능-데이터, 
  - 순서가 있다 != 정렬되어 있다. 그렇다면 반대는?
- 비시퀀스: 순서가 없는(unordered)-'key'로 접근해야 하는-데이터
- 튜플은 일반적으로 파이썬 내부에서 활용됨 ex)x, y = 1, 2일 때, 내부적으로는 x, y = (1, 2)로 처리됨
- 하나의 항목으로 구성된 튜플은 생성시 값 뒤에 쉼표를 붙여야 함. ex) b = (1, )
- in 과 not in : 시퀀스 포함 여부 확인
- concatenation(연결): range간에는 불가능. 그 외에는 가능하다.
  - ex) [1, 2] + ['a'] = [1, 2, 'a'], (1, 2) + ('a') = (1, 2, 'a'), '12' + 'b' = '12b'
- 시퀀스반복: *로 반복. range는 불가능하다. 
  - ex) [0] * 4 == [0, 0, 0, 0], (1, 2)*2 = (1, 2, 1, 2), 'hi'*3 = 'hihihi'
- 인덱싱: range도 인덱싱이 가능하다. ex) range(3)[2] = 2
- 시퀀스.count(찾는대상): 등장하지 않으면 0 반환
- 세트 만들 때에 {1, 2, 3}으로 만들면 된다. 단, {}처럼 비어있는 중괄호는 딕셔너리이기 때문에 비어있는 set을 만들고 싶으면 set()을 이용. 순서가 없기 때문에 인덱싱은 불가
- 세트끼리 (-): 차집합, (|): 합집합, (&): 교집합
- 세트에서 중복되는 값을 쉽게 없앨 수 있다. 하지만 순서가 무시되기에 순서가 중요한 경우 사용할 수 없다.
  - ex) 고유한 개수를 세기 위해서는 set를 사용하면 되지만, 고유한 값들을 등장한 순서대로 출력해야 한다면 set은 사용할 수 없다.
- 딕셔너리: 중괄호로 만들면 key에 ''를 붙여야 하고, dict함수를 이용하면 ''를 이용하지 않아도 된다. key는 변경 불가능한 데이터만 활용 가능. ex) list는 key로 사용하지 못한다. value는 모든 값이 가능하다.
- 변경 불가능한 데이터는 복사하게 되어 값을 바꿔도 각자 존재하며, 동일한 영향을 받지 않는다. ex) a=10, b=10, b += 10, a == 10
- 변경 가능한 데이터(list, set, dictionary)는 복사할 때에 동일한 곳을 참조한다. 따라서 복사한 후 값을 바꾸면 둘 다 영향을 받는다. ex)list1 = [0,1] list2 = list1, list2[0] = 100, list1[0] == 100
- 인덱싱에도 step을 줄 수 있다. ex) list1[2:50:2]
- 슬라이싱을 하면, 값만 가져오는 게 아니라 새로운 list를 생성하는 것임.
- dict에서 .keys(), .values(), .items()를 사용.
- mutable과 immutable의 차이? immutable-유목민, mutable-농작민
- 1차원 list를 만들 때에는 *를 사용하거나 []를 사용하거나 같다. 하지만 2차원 list를 만들 때에 *를 사용하면 [list1,list1]의 형태와 같이 동일한 list를 집어넣게 되어 [1] [1]와 같이 한 개의 원소를 변화시키게 되면 전체의 해당 부분이 변하게 된다. []를 이용해서 list를 만들면 [list1,list2,list3]와 같이 2차원 배열이 만들어지기 때문에 한 개의 요소를 바꿔도 다른 부분에는 영향이 없다. 이건 첫번째는 list안에 list를 넣게 되는 것이기 때문에 차이 발생. list는 mutable이라 이런 일 생김.

## 제어문

- 제어문: 특정 상황에 따라 코드를 선택적 실행(분기/조건), 계속하여 실행(반복)제어 필요, 순서도로 표현이 가능

- 조건문: if는 조건식(expression)과 함께 사용

- 중첩은 주로 nested라는 용어로 사용된다.

- 조건 표현식: <True인 경우 값> if <expression>  else <False인 경우 값>으로 표현되며 삼항 연산자라고도 한다. ex) value = num if num>=0 else -num과 같이 절대값을 나타낼 수 있다. 단, else이후 False인 경우를 나타낼 때, value = ...이라 쓰면 안 된다. 그냥 return 값만 나타내야 한다.

- 반복문: while, for문 반복제어는 break, continue, for~else

- iterable한: 반복가능한

- while: 조건문이 False가 될 때까지 반복

- for문은 시퀀스를 포함한 iterable한 객체 요소를 모두 순회함 for <변수명> in <iterable>: 

- 변수명을 적을 때에 시퀀스형은 복수형으로 적는 것이 좋다.

- enumerate로 인덱스와 value를 동시에 받을 수 있다. ex) for idx, member in enumerate(list_name, (start=1과 같이 시작을 지정할 수 있다.))

- 반복문 제어: 

  - break: 반복문을 종료

  - continue: continue 이후의 코드 블록은 수행하지 않고, 다음 반복을 수행

  - for~else: 끝까지 반복문을 실행한 이후에 else문 실행, break로 중간에 종료되는 경우 else문은 실행되지 않음.

    ```python
    for char in 'apple':
        if ...:
            pass
        	break
    else:
        pass
    #여기에서 break로 반복문이 종료되면 else의 부분은 실행되지 않는다. 반복문이 정상적으로 종료되어야 else의 부분이 실행된다.	
    ```

- for  문에서 리스트의 원소를 사용은 하는데, 그 값은 필요없고 그냥 원소 만큼 반복을 돌리고 싶을 때는 _로 표현해 주는 것이 좋다. ex) for _ in items:

## jupyter notebook

- commad mode-파란색, insert mode-초록색



