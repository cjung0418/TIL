# array

배열:

```
 정수형 인덱스를 입력하여 저장한 값들에 대한 접근
 2차원 배열 선언시, 실제 2차원 공간에 메모리가 할당되는 것이 아니라 행*열만큼의 크기가 메모리에 연속적으로 할당.
 gravity 문제의 경우 해결하는 idea는 array로 전체 공간을 설정하고, 그 공간에 블럭을 할당한다. ex) 전체공간은 10*10의 공간이고, 각 줄에 블럭이 있을 경우 1의 값을, 없으면 0의 값을 설정한다. 그 후에 낙차가 얼마인지 구하기 위해서는 떨어지는 방향쪽으로 0이 얼마만큼 존재하는 가를 계산하면 된다.
```

Baby Gin Game:

```
 완전검색(Exhaustive Search) or Brute-Force or Generate-And-Test 기법: 모든 경우를 테스트하여 해법 도출, 경우의 수가 상대적으로 적을 때 유용. 오답일 가능성이 매우 낮다.
 정렬의 종류: 버블정렬(Bubble sort), 카운팅 정렬(Counting sort), 선택 정렬(Selection sort), 퀵 정렬(Quick sort), 삽입 정렬(Insertion Sort), 병합 정렬(Merge Sort)
 버블 정렬(Bubble Sort): 인접한 두 개의 원소를 비교하여 자리를 계속 교환하는 방식. O(n^2)
-특징: 1. 첫 번째 원소부터 인접한 원소끼리 계속 자리를 교환하며 맨 마지막 자리까지 이동
2. 한 단계가 끝나면 가장 큰 원소가 마지막 자리로 정렬.
3. 교환하며 자리를 이동하는 모습이 물 위에 올라오는 거품모양과 같아 버블 정렬.
 카운팅 정렬(Counting sort): 항목들의 순서를 결정하기 위해 집합에 각 항목이 몇 개 있는지 세서 선형 시간에 정렬하는 효율적 알고리즘. O(n+k)(n은 리스트 길이, k는 정수의 최대값) n이 비교적 적을 때만 가능.
-특징: 1. 정수나 정수로 표현할 수 있는 자료에 대해서만 적용 가능.
2. 카운트들을 위한 충분한 공간을 할당하려면 집합 내의 가장 큰 정수를 알아야.
3. 속도가 빠르고 안정적
-실현 과정: counts라는 배열을 만들고 이에 각 숫자들의 개수 할당, 그 후에 앞의 값을 뒤에 더해 나가기 시작 ex)1,2,3->1,3,6 그 후에 temp라는 결과를 나타낼 빈 배열에 위의 counts에 따라 할당.
```

```
Greedy: 최적 해를 구하는 데 사용되는 근시안적인 방법, 선택할 수 있는 여러 경우 중 하나를 선택할 때 가장 최적이라고 생각되는 것을 선택, 진행하여 최종해답에 도달하는 방법. 하지만 각 시점에서 최적인 것이 지역적에서는 최적이어도 전체에서는 최적이 아닐수도.
```

비트 연산자, 검색, 대표문제-집합의 합 해결 ex)부분 집합의 합

```
 모든 경우를 계산하는 경우, for문을 사용하여 0,1로 모든 부분에 대한 것을 나타내고 계산. ->비트 연산자 사용해서 더 간결하게 사용 가능.
  비트 연산자는 &,<<,>>,|,^,~로 6개 존재.
&: 비트 AND, <<: 비트 왼쪽으로 시프트, >>: 비트 오른쪽으로 시프트, |: 비트 OR, ^: 비트 XOR(같으면 0, 다르면 1), ~: 비트 보수(하나의 이진수의 모든 비트를 뒤집음 ex)~0101=1010)
 검색: 저장된 자료 중에서 원하는 항목을 찾는 작업.
종류: 순차 검색(Sequential Search), 이진 검색(Binary Search), 해싱(Hash)
 순차 검색: 일렬로 되어 있는 자료를 순서대로 검색하는 방법.
특징: 1. 가장 간단하고 직관적
2. 배열이나 연결 리스트 등 순차구조로 구현된 자료구조에서 원하는 항목 찾을 때 유용
3. 알고리즘이 단순하여 구현 쉬움. 하지만 검색 대상의 수가 많은 경우에는 수행시간이 급격히 증가, 비효율적.
정렬되어 있지 않은 경우: 처음부터 끝까지 있는지 하나씩 비교, 찾으면 그 원소의 인덱스 반환, 끝까지 검색 대상 찾지 못하면 검색 실패.O(n)
정렬되어 있는 경우: 오름차순으로 정렬했을 경우에는 비교된 숫자가 찾는 것보다 더 클 경우 탐색 종료. O(n)
 이진 검색: 자료 가운데에 있는 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속 진행하는 방법. 빠르긴 하지만 사전에 준비해야 하는 과정이 있음(자료가 정렬된 상태여야 함).
검색과정: 1.자료의 중앙에 있는 원소를 고른다. 
2.중앙 원소의 값과 찾고자 하는 목표 값을 비교 
3.목표 값이 중앙 원소의 값보다 작으면 자료의 왼쪽 반에 대해서 새로 겁색을 수행, 크다면 자료의 오른쪽 반에 대해서 새로 검색. 
4.찾고자 하는 값을 찾을 때까지 반복
 인덱스: 테이블에 대한 동작 속도를 높여주는 자료 구조를 말함.


```

배열의 순회, 선택 정렬, 대표문제-Ladder

```
 배열의 순회: n이 자연수 일때, 모든 n차원의 배열에서 일어날 수 있음. 행 우선 순회, 열 우선 순회, 지그재그 순회, 대각선 순회가 있음.
 선택정렬: 주어진 자료들 중 가장 작은 값의 원소부터 차례대로 선택하여 위치를 교환하는 방식.셀렉션 알고리즘을 적용한 것. 
셀렉션 알고리즘:저장되어 있는 자료로부터 k번째로 큰 원소 혹은 작은 원소를 찾는 방법.
과정: 정렬 알고리즘을 이용하여 자료를 정렬 -> 원하는 순서에 있는 원소 가져오기
일반적인 셀렉션 알고리즘: 1번부터 k번째까지 작은 원소들을 찾아 배열의 앞쪽으로 이동, 배열의 k번째 반환 -> k가 비교적 작을 때 유용하며 O(kn)의 수행시간
정렬 과정: 주어진 리스트 중에서 최소값을 찾음-> 그 값을 리스트의 맨 앞에 위치한 값과 교환->맨 처음 위치를 제외한 나머지 리스트를 대상으로 위의 과정 반복. O(n^2)
```





