# List_some_points

- Josephus problem: N명의 사람이 있고, 원형으로 앉아 있다. 처음 시작하는 사람부터 1, 2, ..., N과 같이 번호를 붙이고 1번부터 K번 떨어진 사람이 없어진다. 그 다음 사람을 시작으로 k번 만큼 떨어진 사람이 없어지고, 이러한 과정을 N-1번 반복할 경우 마지막에 남는 번호는?

  - 없앤다고 해서 주어진 배열에서 그 원소를 없애는 것이 아니라 -1과 같이 특정 값을 주어서 count되지 않게 하는 방법이 존재 => 비효율적인 연산이 계속 된다.

- 리스트:

  - 순서를 가진 데이터의 집합을 가리키는 주상 자료형(abstract data type)

  - 동일한 데이터를 가지고 있어도 상관 없음

  - 구현 방법에 따라 순차 리스트와 연결 리스트로 나뉨

    - 순차 리스트: 배열을 기반으로 구현된 리스트
    - 연결 리스트: 메모리의 동적 할당을 기반으로 구현된 리스트

  - 연산:

    - 리스트 앞쪽의 원소를 추가하는 연산
    - 리스트 뒤쪽에 원소를 추가하는 연산
    - 리스트의 특정 위치에 원소를 추가하는 연산
    - 추가한 원소들 중에 하나의 원소를 삭제하는 연산
    - 특정한 위치에 있는 원소를 리턴하는 연산

  - 순차 리스트:

    - 1차원 배열에 항목들을 순서대로 저장
    - 삽입과 삭제 연산 과정에서 연속적인 메모리 배열을 위해 원소들을 이동시키는 작업이 필요, 원소의 개수가 많아지고 삽입/삭제 연산이 빈번하게 일어날수록 작업에 소요되는 시간이 크게 증가 =>연결 리스트로 보완

  - 연결 리스트:

    - 자료의 논리적인 순서와 메모리 상의 물리적인 순서가 일치하지 않고, 개별적으로 위치하고 있는 원소의 주소를 연결하여 하나의 전체적인 자료 구조를 이룸
    - 자룍구조의 크기를 동적으로 조정할 수 있어, 메모리의 효율적인 사용이 가능

  - 단순 연결 리스트:

    - 링크를 하나만 가지고 있어 한 방향으로만 순회가 가능한 리스트
    - 구현이 상대적으로 쉽지만, 한 방향으로만 접근할 수 있어 찾아야 할 원소를 지나친 경우 다시 처음부터 찾아야 한다는 단점이 있음
    - 삽입과정:
      1.  새로운 노드 new를 생성하고 값을 저장
      2. 삽입할 위치의 바로 앞에 위치한 노드의 링크 필드를 new의 링크필드에 적용
      3. new의 주소를 앞 노드의 링크 필드에 저장
    - 삭제과정:
      1. 삭제할 노드의 앞 노드 찾기
      2. 삭제할 노드의 링크 필드를 앞 노드의 링크 필드에 복사
      3. 삭제한 노드의 메모리 제거

  - 이중 연결 리스트

    - 노드의 구성
      - 두 개의 링크 필드, 한 개의 데이터 필드
    - 삽입과정:
      1. 새로운 노드 new를 생성, 입력값을 저장
      2. 삽입할 위치의 바로 앞에 위치한 노드 cur의 next 링크(cur1)를 new의 next링크에 저장 -new에 cur1연결
      3. new의 주소를 cur의 next링크에 저장 -cur에 new연결
      4. cur의 주소를 new의 prev링크에 저장 -new에 cur연결
      5. new의 주소를 cur1의 prev링크에 저장 -cur1에 new연결
    - 삭제과정:
      1. 삭제할 노드가 cur, 그 앞의 노드가 cur-1, 뒤의 노드가 cur1이라 하자.
      2. cur의 next링크 값을 저장하여, cur-1의 next링크를 cur1의 주소로 저장
      3. cur의 prev링크 값을 저장하여, cur1의 prev링크를 cur-1의 주소로 저장
      4. cur의 메모리를 제거

  - 삽입 정렬(Insertion Sort)

    - 정렬 과정은 정렬할 자료를 정렬된 부분집합과 아직 정렬되지 않은 부분집합으로 나누어서 이루어짐. 정렬되지 않은 부분 집합의 원소를 하나씩 꺼내어 이미 정렬되어있는 부분집합의 마지막 원소부터 비교하면서 위치를 찾아 삽입한다.
    - 리스트의 첫 번째 원소를 정렬된 집합으로 보고 두 번째 원소부터 정렬된 집합의 원소와 비교하면서 더 큰 수가 나오는 경우 그 앞에 삽입
    - 이러한 과정을 정렬되지 않은 부분집합이 공집합이 될 때까지 반복.
    - 시간복잡도는 O(n**2)

  - 병합 정렬(Merge Sort)

    - 여러 개의 정렬된 자료의 집합을 병합하여 한 개의 정렬된 집합으로 만드는 방식
    - 분할 정복 알고리즘을 활용한 정렬 방법
      - 분할 정복 알고리즘: 자료를 최소 단위의 문제까지 나눈 후에 차례대로 정렬하여 결과를 얻어내는 Top-Down 방식
    - 시간복잡도: O(n log n)
    - 병합과정과 분할과정
      - 병합과정: 병합할 두 개의 집합의 첫 원소를 비교해, 더 작은 원소를 새로운 집합에 연결시키는 방식 반복

    

    

    

    

    

    

  

