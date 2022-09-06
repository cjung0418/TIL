# Tree_some_points

- 트리: 

  - 1 : n (n >= 0)의 관계를 가지면 부분 집합도 재귀적으로 같은 정의가 적용되는 자료의 구조를 뜻한다.
  - 비선형 구조
  - 원소들 간에 계층관계를 가지는 계층형 자료구조
  - 정의
    - 노드 중 최상위 노드를 루트라고 한다
    - 나머지 노드들은 n개의 분리 집합으로 분리될 수 있다.
    - 이들은 각각 하나의 트리가 되며(재귀적 정의) 루트의 부 트리라 한다.
  - 트리 용어 정리:
    - 노드(node): 트리의 원소
    - 간선(edge): 노드를 연결하는 선. 부모와 자식 노드를 연결
    - 루트 노드: 트리의 시작 노드
    - 형제 노드(sibling node): 같은 부모 노드의 자식 노드들
    - 조상 노드: 간선에 따라 루트 노드까지 이르는 경로에 있는 모드 노드들
    - 서브 트리: 부모 노드와 연결된 간선을 끊었을 때 생성되는 트리
    - 자손 노드: 서브 트리에 있는 하위 레벨의 노드들
    - 노드의 차수(degree): 노드에 연결된 자식 노드의 수
    - 트리의 차수: 트리에 있는 노드의 차수 중에서 가장 큰 값
    - 단말 노드(리프 노드): 차수가 0인 노드. 자식 노드가 없는 노드
    - 노드의 높이: 루트에서 노드에 이르는 간선의 수 , 노드의 레벨
    - 트리의 높이: 트리에 있는 노드의 높이 중에서 가장 큰 값. 최대 레벨

- 이진 트리

  - 한 노드가 최대 두 개의 자손 노드를 가지는 트리

  - 첫 번째 노드를 부모 노드, 자손 노드는 왼쪽, 오른쪽으로 불림

  - 이진 트리의 특징:

    - 각 노드가 자손 노드를 최대한 2개 까지만 가질 수 있는 트리

  - 이진 트리의 특성:

    - 레벨 i에서의 노드의 최대 개수는 2^i
    - 높이가 h인 이진 트리가 가질 수 있는 노드의 최소 개수는 h+1개가 되며, 최대 개수는(2^(h+1)-1) 개가 된다.

  - 이진 트리의 종류:

    - 포화 이진 트리(Full binary tree)
    - 완전 이진 트리(complete binary tree)
    - 편향 이진 트리(skewed binary tree)

  - 이진 트리의 순회:

    - 트리의 각 노드를 중복되지 않게 전부 방문하는 것

    - 전위 순회(preorder traversal)

      - VLR

      - 알고리즘:

        def preorder(T):

        ​	if T:

        ​		visit(T)

        ​		preorder(T.left)

        ​		preorder(T.right)

        ​	End preorder

    - 중위 순회(inorder traversal)

      - LVR

      - 알고리즘:

        def inorder(T):

        ​	if T:

        ​		inorder(T.left)

        ​		visit(T)

        ​		inorder(T.right)

        ​	end inorder

    - 후위 순회(postorder traversal)

      - LRV

      - 알고리즘:

        def postorder(T):

        ​	if T:

        ​		postorder(T.left)

        ​		postorder(T.right)

        ​		visit(V)

        ​	end postorder

- 이진 탐색 트리
  - 모든 원소는 서로 다른 유일한 키를 가지고 있음
  - 루트 노드의 왼쪽 서브트리는 루트보다 작은 노드로 되어 있고, 오른쪽 서브트리는 루트보다 큰 노드로 되어 있음
  - 탐색연산 과정
    1. 루트에서 시작
    2. 탐색할 키값 x를 루트 노드의 키값과 비교
    3. 키값 x == 루트노드의 키값: -> 탐색연산 성공
    4. 키값 x < 루트노드의 키값:-> 루트노드의 왼쪽 서브트리에 대해서 탐색연산 수행
    5. 키값 x > 루트노드의 키값: ->루트노드의 오른쪽 서브트리에 대해서 탐색연산 수행
    6. 서브트리에 대해서 순환적으로 탐색 연산을 반복
  - 이진 탐색 트리의 삭제 과정
    1. 삭제하려는 노드가 단말 노드일 경우
       - 해당 노드만을 삭제
    2. 삭제하려는 노드가 하나의 서브 트리만 가지고 있는 경우
       - 해당 노드를 찾은 후, 그 노드의 부모 노드에 자식 노드를 연결한 후 해당 노드 삭제
    3. 삭제하려는 노드가 두 개의 서브 트리 모두 가지고 있는 경우
       - 해당 노드의 왼쪽 서브 트리에서 가장 큰 값 혹은 오른쪽 서브 트리에서 가장 작은 값인 노드를 삭제하는 노드의 위치로 옮기고 삭제
  - 부모 노드 * 2 = 왼쪽 자손 노드
  - 부모 노드 * 2 + 1 = 오른쪽 자손 노드
  - 이진 탐색 트리의 탐색, 삽입, 삭제 시간복잡도 : 
    - O(h) (h: 이진 탐색 트리의 깊이(높이))
    - cf)  이진 트리가 균형적으로 생성되어 있는 경우: O(log n),  한쪽으로 치우친 경사 이진 트리: O(n)
- 힙
  - 완전 이진트리에 있는 노드 중에서 키값이 가장 큰 노드나 키값이 가장 작은 노드를 찾기 위해서 만든 자료구조
  - 최대 힙
    - 키값이 가장 큰 노드를 찾기 위한 완전 이진 트리
    - 부모노드의 키값 > 자손노드의 키값
    - 루트노드는 키값이 가장  큰 노드
  - 최소 힙
    - 키값이 가장 작은 노드를 찾기 위한 완전 이진 트리
    - 부모노드의 키값 < 자손노드의 키값
    - 루트노드는 키값이 가장 작은 노드
  - 삽입의 경우 비어 있는 공간에 삽입을 한 후 부모노드와의 비교를 통해 자리를 바꿀지를 선택한다.
  - 삭제 연산
    - 힙에서는 루트 노드의 원소만을 삭제 할 수 있다
    - 루트 노드의 원소를 삭제하여 반환한다
    - 힙의 종류에 따라 최대값 또는 최소값을 구할 수 있다
    - 힙의 삭제는 항상 루트의 원소를 삭제해야 한다.
    - 트리의 마지막 노드의 원소와 바꿔주고, 마지막 노드를 삭제한다. 
    - 두 자식 중 큰쪽 자식과 바꿔주는 연산으로 바꾼 노드가 단말 노드가 되거나 두 자식노드보다 클 때까지 반복.
- 수식 트리
  - 수식 이진 트리
  - 연산자는 루트 노드이거나 가지 노드, 피연산자는 모두 단말 노드
  - 사칙연산 유효성 검사
    - 부모 노드에 자손 노드가 존재할 시, 왼쪽과 오른쪽 노드가 둘 다 있어야한다
    - 계산을 하기 위해서는 리프 노드(자손이 없는 노드)는 숫자 노드이어야 한다