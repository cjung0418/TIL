# Queue

## queue?

```
1. 삽입, 삭제의 위치가 제한적인 자료구조
	큐 뒤: 상입, 큐 앞: 삭제
2. 선입선출구조(FIFO): 
	큐에 삽입한 순서대로 원소가 저장
	가장 먼저 삽입(First In)된 원소는 가장 먼저 삭제(First Out)됨
3. 큐의 예: 서비스 대기 행렬
맨 앞을 머리(Front), 맨 뒤를 꼬리(Rear)라고 함.
큐의 주요 연산:
    enQueue(item): 큐의 뒤쪽(rear 다음)에 원소를 삽입하는 연산
    deQueue(): 큐의 앞쪽(front)에서 원소를 삭제하고 반환하는 연산
    createQueue(): 공백 상태의 큐를 생성하는 연산
    isEmpty(): 큐의 공백상태인지를 확인하는 연산
    isFull(): 큐가 포화상태인지를 확인하는 연산
    Qpeek(): 큐의 앞쪽(front)에서 원소를 삭제 없이 반환하는 연산
큐의 기본 연산 과정:
    front와 rear 값이 같으면 queue가 비어있다고 판단.
    처음에는 front와 rear가 -1이었다가 원소가 들어올 수록 rear의 위치는 1씩 늘어난다. front는 deQueue()할 때마다 1씩 뒤로 이동한다.
Queue의 종류:
    선형 큐: 간단하고 기본적인 형태, 리스트 사용
    원형 큐: 선형에서 발전된 형태, 리스트 사용
    연결 큐: 연결 리스트 형식을 이용 ->(응용) 우선순위 큐	
```

## Queue의 종류

```
선형 Queue:
    특징:
        1. 1차원 리스트를 이용한 큐
            큐의 크기 = 리스트의 크기
            front: 저장된 첫 번째 원소의 인덱스
            rear: 저장된 마지막 원소의 인덱스
        2. 상태 표현
            초기 상태: front = rear = -1
            공백 상태: front = rear
            포화 상태: rear = n-1(n:리스트의 크기, n-1: 리스트의 마지막 인덱스)
    선형 큐의 구현
        초기 createQueue(): 초기 공백큐 생성, 크기 n인 1차원 리스트 생성, front,rear = -1로 초기화
        enQueue(item): 마지막 원소 뒤에 새로운 원소를 삽입하기 위해 rear값을 하나 증가시켜 새로운 원소를 삽입할 자리를 마련함, 그 인덱스에 해당하는 리스트원소 Q[rear]에 item을 저장
            def enQueue(item):
                global rear
                if isFull(): print("Queue_Full")
                else:
                    rear += 1
                    Q[rear] = item
        deQueue: 가장 앞에 있는 원소를  삭제하기 위해
            1. front 값을 하나 증가시켜 큐에 남아있는 첫 번째 원소로 이동함
            2. 새로운 첫 번째 원소를 리턴함으로써 삭제와 동일한 기능을 함
            def deQueue():
                global front
                if isEmpty(): print("Queue_Empty")
                else:
                    front += 1
                    return Q[front]
        isEmpty(),ifFull(): 공백상태: front = rear, 포화상태: rear = n-1
            def ifEmpty():
                return front == rear
            def isFull():
                return rear == len(Q) - 1
        Qpeek(): 가장 앞에 있는 원소를 검색하여 반환하는 연산, 현재 front의 한자리 뒤(front + 1)에 있는 원소, 즉 큐의 첫 번째에 있는 원소를 반환
            def Qpeek():
                if isEmpty(): print("Queue_Empty")
                else: return Q[front+1]
    선형 큐의 문제점: 잘못된 포화 상태 인식!
        리스트의 크기를 고정 -> 사용할 큐의 크기만큼을 미리 확보 -> 메모리의 낭비 발생
        1. 삽입, 삭제를 계속할 경우 리스트의 앞부분에 활용할 수 있는 공간이 있음에도, rear = n-1인 상태 즉, 포화 상태로 인식
        2. 더 이상의 삽입을 수행할 수 없음
            선형 큐의 장점: 삽입, 삭제의 처리속도 빠름
            선형 큐의 단점: 메모리 낭비가 심함
            선형 큐의 단점 해결 방법:
            원형 큐 사용으로 메모리 절약
            파이썬의 리스트 특성을 사용한 큐 사용으로 메모리 절약 단, 삽입, 삭제 시 복사, 데이터 이동시키는 연산 수행에 많은 시간 소모하는 단점 존재
            단순연결 리스트로 구현한 큐 사용으로 메모리 동적 확보
            큐 라이브 사용

원형 큐:
    1차원 리스트를 사용하되, 논리적으로 리스트의 처음과 끝이 연결되어 원형형태의 큐를 이룬다고 가정하고 사용함.
    원형 큐의 특징:
        1. 초기 공백 상태: front = rear = 0
        2. index의 순환: front와 rear의 위치가 리스트의 마지막 인덱스인 n-1를 가리킨 후, 논리적 순환을 이루어 리스트의 처음 인덱스인 0으로 이동해야 함, 이를 위해 나머지 연산자 %를 사용
        3. front 변수: 공백 상태와 포화 상태 구분을 쉽게 하기 위해 front가 있는 자리는 사용하지 않고 항상 빈자리로 둠
        4. 삽입 위치 및 삭제 위치: 
            선형 큐의 삽입 위치: rear = rear + 1
            선형 큐의 삭제 위치: front = front + 1
            원형 큐의 삽입 위치: rear = (rear + 1) % n
            원형 큐의 삭제 위치: front = (front + 1) % n
    원형 큐의 기본 연산 과정:
        프론트가 있는 공간은 사용하지 않기 때문에, 이를 빼고 모든 공간이 차 있다면, Full
    원형 큐의 구현:
        초기 createQueue(): 크기 n인 1차원 리스트 생성,front, rear = 0으로 초기화
        isEmpty(), isFull(): 공백상태: front = rear, 포화상태: 삽입할 rear의 다음 위치 = 현재 front (rear + 1) % n = front
            def isEmpty():
                return front == rear
            def isFull():
                return (rear + 1) % len(cQ) == front
        enQueue(item): 마지막 원소 뒤에 새로운 원소를 삽입하기 위해 
            1. rear 값을 조정하여 새로운 원소를 삽입할 자리를 마련함: rear <- (rear + 1) % n; 
            2. 인덱스를 해당하는 리스트원소 cQ[rear]에 item을 저장
            def enQueue(item):
                global rear
                if isFull():
                    print("Queue_Full")
                else:
                    rear = (rear + 1) % len(cQ)
                    cQ[rear] = item
        deQueue: 가장 앞에 있는 원소를 삭제하기 위해
            1. front 값을 조정하여 삭제할 자리를 준비함
            2. 새로운 front 원소를 리턴함으로써 삭제와 동일한 기능을 함
            def deQueue():
                global front
                if isEmpty():
                    print("Queue_Empty")
                else:
                    front = (front + 1) % len(cQ)
                    return cQ[front]
            def delete():
                global front
                if isEmpty():
                    print("Queue_Empty")
                else:
                front = (front + 1) % len(cQ)
    파이썬으로 구현한 원형 큐의 삽입 및 삭제 함수
        def isEmpty():
            return front == rear
        def isFull():
            return (rear + 1) % len(cQ) == front
        def enQueue(item):
            global rear
            if isFull():
                print("Queue_FUll")
            else:
                rear = (rear + 1) % len(cQ)
        def deQueue():
            global front
            if isEmpty():
                print("Queue_Empty")
            else:
                front = (front + 1) % len(cQ)
                return cQ[front]

        cQ_SIZE = 3
        cQ = [0] * cQ_SIZE

        front = rear = 0

        enQueue('A')
        enQueue('B')
        enQueue('C')
        print(deQueue())
        ...

    파이썬 사용 시:
        1. 파이썬의 리스트 특성을 사용한 큐: 리스트는 크기를 동적으로 변경할 수 있음. 메모리 절약. 삽입, 삭제 시 복사, 데이터를 이동시키는 연산을 수행하는데 많은 시간 소모
        2. 리스트의 메서드: append(item), pop(index)
        3. front는 리스트의 맨 앞: -1
        4. rear는 리스트의 맨 뒤: len(queue) - 1
    리스트의 특성을 사용한 원형 큐의 삽입 및 삭제 함수 구현:
        def enQueue(item):
            queue.append(item)
        def deQueue():
            if isEmpty():
                print("Queue_Empty")
            else:
                return queue.pop(0)
        def isEmpty():
            return len(queue) == 0
        def Qpeek():
        if isEmpty():
            print("Queue_Empty")
        else:
            return queue[0]

    연결 큐의 특징:
        1. 단순 연결 리스트를 이용한 큐
            큐의 원소: 단순 연결 리스트의 노드
            큐의 원소 순서: 노드의 연결 순서, 링크로 연결되어 있음
            front: 첫 번째 노드를 가리키는 링크
            rear: 마지막 노드를 가리키는 링크
        2. 상태 표현
            초기 상태: front = rear = None
            공백 상태: front = rear = None
            포화 상태는 없다
    연결 큐의 연산 과정:
    연결 큐의 구현:
    create Linked Queue(): 리스트 노드 없이 포인터 변수만 생성, front와 rear를 None로 초기화
    isEmpty(): 공백상태: front = rear =None
        def isEmpty():
            return front == None
    enQueue(item):
        1. 새로운 노드 생성 후 데이터 필드에 item 저장
        2. 연결 큐가 공백인 경우, 아닌 경우에 따라 front, rear 변수 지정
        def enQueue(item):
            global front, rear
            newNode = Node(item)
            if isEmpty():
                front = newNode
            else:
                rear.next = newNode
            rear = newNode
    deQueue():
        1. old가 지울 노드를 가리키게 하고, front 재설정
        2. 삭제 후 공백 큐가 되는 경우, rear도 None로 설정
        3. old가 가리키는 노드를 삭제하고 메모리 반환
        def deQueue():
            global front, rear
            if isEmpty():
                print("Queue_Empty")
                return None
            item = front.item
            front = front.next
            if isEmpty():
                rear = None
            return item
    파이썬으로 구현한 연결 큐:
        class Node:
            def__init__(self,item,n=None):
                self.item = item
                self.next = n

        def enQueue(item):
            global front, rear
            newNode = Node(item)
            if front == None:
                front = newNode
            else:
                rear.next = newNode
            rear = newNode
        def isEmpty():
            return front == None
        def deQueue():
            global front, rear
            if isEmpty():
                print("Queue_Empty")
                return None
            item = front.item
            front = front.next
            if front == None:
                rear = None
            return item

        def Qpeek():
            return front.item

        def printQ():
            f = front
            s = ""
            while f:
                s += f.item + " "
                f = f.next
            return s

    Queue 라이브러리:
        큐 모듈:
            1. 큐 모듈에 정의된 클래스
                queue.Queue(maxsize): 선입선출큐 객체를 생성
                queue.LifoQueue(maxsize): 스택개념의 후입선출큐 객체 생성
                queue.PriorityQueue(maxsize): 우선순위 큐 객체를 생성, 입력되는 아이템의 형식은 (순위, 아이템)의 튜플로 입력되며, 우선순위는 숫자가 작을수록 높은 순위를 가짐
            2. maxsize는 최대 아이템수, 지정하지 않거나 음수이면 내용만큼 늘어남
            3. 제시된 3개의 클래스는 다음과 같은 메서드를 동일하게 가짐
                qsize(): 큐 객체에 입력된 아이템의 개수를 반환
                put(item[, block[, timeout]]): 큐 객체에 아이템을 입력
                get([block[, timeout]]): 생성된 큐 객체 특성에 맞추어, 아이템 1개를 반환
                empty(): 큐 객체가 비어있으면 True 리턴
                full(): 규객체가 꽉차있으면 True 리턴
            4.클래스의 정렬방식에 따라 get 계열의 메서드 결과가 달라짐
```



## Queue의 활용

```
우선순위 큐:
    우선순위를 가진 항목들을 저장하는 큐
    FIFO 순서가 아니라 우선순위가 높은 순서대로 먼저 나가게 됨
    적용분야: 시뮬레이션 시스템, 네트워크 트래픽 제어, 운영체제의 태스크 스케줄링
구현:
    리스트를 이용한 우선순위 큐
    우선순위 큐 라이브러리 사용
리스트를 이용한 우선순위 큐의 구현:
	1. 리스트를 이용하여 자료 저장
	2. 원소를 삽입하는 과정에서 우선순위를 비교하여 적절한 위치에 삽입하는 구조
	3. 가장 앞에 최고 우선순위의 원소가 위치하게 됨
	문제점: 리스트를 사용하므로, 삽입이나 삭제 연산이 일어날 때 원소의 재배치가 발생, 소요되는 시간이 많이 걸림
	해결: PriorityQueue(maxsize)클래스 사용, 힙 자료구조 사용
버퍼:
	데이터를 한 곳에서 다른 한 곳으로 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리의 영역
	버퍼링: 버퍼를 활용하는 방식 또는 버퍼를 채우는 동작을 의미
	버퍼의 자료구조:
		일반적으로 입출력 및 네트워크와 관련된 기능에서 이용
		순서대로 입력/출력/전달되어야 하므로 FIFO 방식의 자료구조인 큐가 활용됨
버퍼의 활용:
	키보드 버퍼의 수행 과정: APS enter -> 키보드 입력버퍼에 저장 -> 키보드 입력 버퍼에 enter 키 입력이 들어오면 프로그램 실행 영역, 연산	
```



## BFS(너비 우선 탐색)

```
그래프 탐색 방법: DFS, BFS
	DFS(깊이 우선 탐색):
		stack 활용
	BFS(너비 우선 탐색):
		큐 활용
		시작점의 인접한 정점들을 모두 차례로 방문한 후 방문했던 정점을 시작점으로 하여 다시 인접한 정점들을 차례로 방문하는 방식
		인접한 정점들을 탐색한 후, 차례로 너비 우선 탐색을 진행해야 하므로 선입선출 형태의 자료구조인 큐 활용
BFS 알고리즘:
	def BFS(G, v): # 그래프 G, 탐색 시작점 v
		visited = [0] * n #n: 정점의 개수
		queue = []
		queue.append(v)
		while queue:
			t = queue.pop(0)
			if not visited[t]:
				visited[t] = True
				visit(t)
			for i in G[t]:
				if not visited[i]:
					queue.append(i)
```

