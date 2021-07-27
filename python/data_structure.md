# 데이터 구조

## 데이터 구조

- 문자열, 리스트, 세트, 딕셔너리
- 먼저 데이터 구조를 정하고 그 후에 알고리즘을 정하면 프로그램을 만들 수 있다.
- 데이터 구조 = 자료구조
- 순서 O(시퀀스) - 문자열 ,리스트
- 순서 X(비시퀀스) - 세트, 딕셔너리
- 앞에 .이 붙어있으면 메서드
- dir()를 쓰면 어떤 메서드 등을 사용할 수있는지 알 수 있다. ex) dir(모듈)
- 변경은 immutable과 mutable의 차이가 존재



## 문자열

- 문자열의 나열
- 변경 X, 순서 O(정렬되어 있다는 것이 아니다), 순회 가능(반복 가능)
- 인덱스는 0부터 시작
- slicing[start:stop:step]
- .find(x): x의 첫 번째 위치를 반환, 없으면 -1 반환
- .index(x): x의 첫 번째 위치를 반환, 없으면 ValueError 일으킴
- .replace(old ,new[ , count]): 바꿀 대상 글자를 새로운 글자로 바꿔서 반환(복사본 반환), count가 없으면 모두 다 바꾼다. ex) 'coone'.replace('c','t,2) -> 'toone'
- 베커스-나우르 표기법?
- .strip([chars]): 특정한 문자들을 지정하면, 양쪽을 제거하거나, 왼쪽을 제거하거나(lstrip), 오른쪽 제거(rstrip), 문자열 지정하지 않으면, 공백을 제거함. 제거시에 chars안에 있는 각 요소를 제거한다. 만약에 제거할 문자가 존재하더라도 양 옆에 지우지 않는 요소가 막고 있으면 제거 되지 않는다. ex) 'oxo'.replace('x') -> 'oxo'
- .split(sep=None): 문자열을 특정한 단위로 나눠 *리스트**로 반환 ex)'a, b, c'.split(' ')-> ['a,b,c'], 'a b c'.split() -> ['a', 'b', 'c']
- 'separator'.join(iterable): 반복 가능한 컨테이너 요소들을 separator(구분자)로 합쳐 *문자열**로 반환 ex)'!'.join('ssafy')-> 's!s!a!f!y', ' '.join(['3', '5']) -> '3 5' (주의, 구분하는 것을 앞에 써야 한다.)
- .capitalize(): 첫 문자를 대문자, 나머지는 소문자
- .title(): '나 공백 이후의 단어 첫 문자를 대문자로 'hi! everyone i'm'.title() -> 'Hi! Everyone I'M'
- .upper(): 모두 대문자로
- .lower(): 모두 소문자로
- .swapcase(): 대<->소문자로 변환
- .isalpha(): 알파벳 문자 여부
- .isupper(): 대문자 여부 -> 해당 문자 모두 대문자인가?
- .islower(): 소문자 여부 -> 해당 문자 모두 소문자인가?
- .istitle(): 타이틀 형식 여부
- is -> True or False



## 리스트

- 순서가 있는 시퀀스, 인덱스로 접근
- 변경 가능, 순서가 있고, 순회 가능
- .append(x): 리스트 끝에 값을 추가
- .extend(iterable): 리스트에 iterable의 항목을 추가함 ex) numbers = [1, 2, 3], number.append([4, 5]) -> [1, 2, 3, [4, 5]], numbers.extend([4, 5]) -> [1, 2, 3, 4, 5]
- .insert(i, x): 정해진 위치 i에 값 x를 추가함. 단, i가 리스트 길이보다 큰 경우 맨 뒤에 추가함.
- .remove(x): 리스트에서 값이 x인 첫번째 항목 삭제, 없으면 ValueError
- .pop(i): 정해진 위치 i에 있는 값을 삭제하고, 그 항목을 반환함. i가 지정되지 않으면, 마지막 항목을 삭제하고 반환함.

- .clear(): 모든 항목을 삭제함, 리스트 자체를 없애는 것이 아니라 항목만 없앤다. []로 초기화하는 것과는 연산을 행한 후, 주소값이 변한다는 차이점이 존재. (clear는 주소가 변하지 않는다.)
- .index(x):  첫번째 x값을 찾아 index 값을 반환, 없으면 ValueError
- .count(x): 원하는 값 x의 개수를 반환
- .sort(): 원본 리스트를 정렬함. None 반환, 원본이 바뀐다. sorted함수와는 다름
- sorted()함수는 메서드가 아니며, 원본을 바꾸지 않고 복사본을 반환한다.
- .reverse(): 순서를 반대로 뒤집음(정렬하는 것이 아니다.), 원본이 변화하고 None 반환 ex)[1, 5, 3, 2] -> [2, 3, 5, 1]
- 리스트의 복사는 같은 리스트의 주소를 참조 -> 복사한 리스트의 값을 바꾸면 원본의 값도 변경된다.
- 얕은 복사
  - 1.  slice 연산자 활용하여 같은 원소를 가진 리스트지만 연산된 결과를 복사(다른 구조) ex) a = [1, 2, 3] b = a[:]
    2.  list()활용하여 같은 원소를 가진 리스트지만 연산된 결과를 복사 ex) a = [1, 2, 3], b = list(a)
- 복사하는 리스트의 원소가 주소를 참조하는 경우 ex) 리스트의 원소가 리스트라면? 리스트인 원소의 값을 바꾸면, 원본도 바뀜 -> 이것까지 얕은 복사를 하고 싶으면, import copy하고 copy.deepcopy()해야 한다.
- list comprehension 쓰는 방법. 먼저 for문부터 작성 -> for문 앞에 채워나갈 식을 쓰면 된다. ex) [for i in range(4)] -> [i+1 for i in range(4)]
- 2차원 list를 만들 때에 반복문을 사용한다고 하면, 그 안에 넣는 list는 계속해서 초기화 되어야 한다. 그렇지 않으면 복사문제가 발생. ex) for i in range(4): list1.append(list2)를 하게 되면, 동일한 list를 넣었기 때문에 한 개가 바뀌면 모두가 바뀜.
- list comprehension에서 for 2개 사용하면, 앞부터 뒤로 진행.
- filter(function, 대상)는 function이 T,F를 return해야 한다.
- map은 한 번 소비되고 사라진다. list처리 한 번 하거나 하면 사라짐. 그리고 map은 소비할 때에 실행된다.
- filter도 마찬가지 - generator 특성 때문에
- return으로 error?, 그냥 진행? 그 때 그 때 다르다.



## 세트

- 중복 없이 순서가 없는 데이터 구조
- 변경 가능, 순서 X, 반복 O
- .add(elem): 세트에 값을 추가
- .update(*others): 여러 값을 추가 ex) a.update(['딸기', '바나나', '참외'])라고 해도 {'딸기', '참외',...} 등으로 나뉘어서 넣게 된다.
- .remove(elem): 세트에서 삭제하고, 없으면 KeyError
- .discard(elem): 세트에서 삭제하고 없어도 에러가 발생하지 않음
- .pop(): *임의**의 원소를 제거해 반환, 세트가 비어있는 경우 KeyError
- 세트는 집합개념이므로 합집합, 교집합, 차집합을 사용할 수 있다.



## 딕셔너리

- key와 value로 구성된 데이터 구조
- 변경 가능, 순서 X, 순회 O
- .get(key,[, default]): key에 대응하는 value를 가져옴, key가 딕셔너리에 없어도 KeyError가 발생하지 않으며, default를 돌려줌(None)
- .pop(key[,default]): key가 딕셔너리에 있으면 제거하고 해당 값을 반환, 그렇지 않으면 default를 반환, default 값이 없고 key가 딕셔너리에 없으면 KeyError
- .update(): 값을 제공하는 key, value로 갱신 (기존 key에 대해 하면 덮어씀) ex) dict.update({'a': 1})
- 딕셔너리는 기본적으로 key를 순회하며, key를 통해 값을 활용 ex) grades = {'john': 80, ...} for student in grades: print(student) -> john... 값도 보고 싶으면 grades[student]를 해야 한다.
- 추가 메서드를 활용하여 순회할 수 있다. .keys(): key로 구성된 결과, .values(): value로 구성된 결과, .items(): (key, value)의 튜플로 구성된 결과.
- dictionary comprehension: {key: value for <변수> in (iterable) if <표현식> }
- dict에서 in을 사용하면 key값이 있는지 확인