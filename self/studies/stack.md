# stack

stack?:

```
물건을 쌓아 올리듯 자료를 쌓아 올린 형태의 자료구조
스택에 저장된 자료는 선형구조를 가짐 cf) 선형구조: 자료 간의 관계가 1대1, 비선형구조: 1대N의 관계 ex)트리
스택에 자료를 삽입하거나 스택에서 자료를 꺼낼 수 있음
마지막에 삽입한 자료를 가장 먼저 꺼냄 (LIFO,Last-in-First_Out)

```

구현:

```
자료를 선형으로 저장할 저장소 필요.
c-배열, python-list
저장소 자체를 스택이라 부르기도 함.
스택에서 마지막 삽입된 원소의 위치를 top이라 부름.
연산: 삽입(push),삭제(pop),isEmpty(공백인지 확인),peek(top의 원소 반환)
ex) push a->push b-> push c:
abc <-top
pop:
ab <-top
push 알고리즘: 
def push(item):
	s.append(item) (단,s는 저장할 공간)
pop 알고리즘:
def pop():
	if len(s)==0:
		return
	else:
		return s.pop(-1)

스택 구현 고려사항:
-리스트 사용시
장점: 구현이 용이
단점: 리스트의 크기를 변경하는 작업은 내부적으로 큰 overhead 발생 작업으로 많은 시간이 소요
->해결방법: 리스트의 크기가 변동되지 않도록 배열처럼 크기를 미리 정해놓고 사용하는 방법, 동적 연결리스트를 이용하여 저장소를 동적으로 할당하여 스택을 구현하는 방법
->장점: 구현이 용이, 단점: 리스트로 구현하는 것보다 구현이 복잡.
```

stack의 응용:

```
괄호검사
종류:대괄호,중괄호,소괄호
조건:1.왼쪽 괄호의 개수와 오른쪽 괄호의 개수가 같아야 함
2.같은 괄호에서 왼쪽 괄호는 오른쪽 괄호보다 먼저 나와야 함
3.괄호 사이에는 포함 관계만 존재
스택을 이용한 괄호 검사
여는 괄호 push, 닫는 괄호 pop
괄호 조사 알고리즘:
문자열에 있는 괄호를 차례대로 조사->왼쪽 괄호를 만나면 스택에 삽입, 오른쪽 괄호를 만나면 스택에서 top 괄호를 삭제한 후 오른쪽 괄호와 짝이 맞는지 확인->위배:스택이 비어있음, 괄호의 짝이 맞지 않음, 문자열 끝까지 조사한 후에도 스택에 괄호가 남아 있음
함수 호출 관리:프로그램에서의 함수 호출과 복귀에 따른 수행 순서를 관리, 구체적 과정: 가장 마지막에 호출된 함수가 가장 먼저 실행 완료하고 복귀하는 후입선출 구조, 따라서 스택을 이용하여 수행순서 관리-> 함수 호출이 발생하면 호출한 함수 스택에 필요한 지역변수, 매개변수 및 수행 후 복귀할 주소 등의 정보를 스택 프레임에 저장하여 시스템 스택에 삽임-> 함수의 실행이 끝나면 시스템 스택의 top원소(스택 프레임)를 삭제(pop)하면서 프레임에 저장되어있던 복귀주소를 확인하고 복귀 -> 함수 호출과 복귀에 따라  반복 모든 게 끝나면 시스템 스택은 공백 스택이 됨.
ex)main->f1내의 f2->f2의 실행 ->f1내의 f2-> main의 f1->끝
재귀 호출: 자기 자신을 호출하여 순환 수행되는 것, 함수에서 실행해야 하는 작업의 특성에 따라 일반적인 호출방식보다 재귀 호출 방식을 사용하여 함수를 만들면 프로그램의 크기를 줄이고 간단하게 작성할 수 있음, 디버깅이 어렵고 잘못 작성시 수행시간이 많이 걸림
ex)factorial(4): fact(4)=4*fact(3),fact(3)=3*fact(2),fact(2)=2*fact(1),fact(1)=1
```

memoization:

```
피보나치 수열:0과1로 시작하여 이전의 두 수 합을 다음항으로 갖는 수열
F_0 = 0, F_1 = 1, F_i = F_i-1 + F_i-2 for i>=2
알고리즘:
def fibo(n):
	if n<2:
		return n
	else:
		return fibo(n-1) + fibo(n-2)
->중복호출 문제
->메모이제이션:컴퓨터 프로그램을 실행할 때 이전에 계산한 값을 메모리에 저장하여 매번 다시 계산하지 않도록 하여 전체적인 실행속도를 빠르게 하는 기술, DP(동적계획법)의 핵심이 되는 기술
메모이제이션 != 메모리제이션
Memoization 이용한 알고리즘:
def fibo1(n):
	global memo
	if n>= 2 and len(memo) <= n:
		memo.append(fibo1(n-1)+fibo1(n-2))
	return memo[n]
	
memo = [0,1]
	
```

DP(동적 계획법):

```
Dynamic Programmiong: 그리디 알고리즘과 같이 최적화 문제를 해결하는 알고리즘, 먼저 입력 크기가 작은 부분 문제들을 모두 해결한 후에 그 해들을 이용하여 보다 큰 크기의 부분 문제들을 해결, 최종적으로 원래 주어진 입력의 문제를 해결
피보나치에 적용:
1.문제를 부분 문제로 분할->fibo(n)은 fibo(n-1)과 fibo(n-2)의 합, fibo(n-1)은 fibo(n-2)와 fibo(n-3)의 합,...,
결과적으로 fibo(n)은 fibo(n-1),...fibo(1),fibo(0)의 부분집합으로 나뉘게 됨
2.부분 문제로 나누는 일을 끝냈으면 가장 작은 부분 문제부터 해를 구함
3.그 결과를 테이블에 저장, 테이블에 저장된 부분 문제의 해를 이용하여 상위 문제의 해를 구함
적용한 알고리즘:
def fibo2(n):
	f=[0,1]
	for i in range(2,n+1):
		f.append(f[i-1]+f[i-2])
	return f[n]

DP의 구현 방식:recursive 방식, iterative 방식
recursive: fibo1(), 재귀적 구조는 내부에 시스템 호출 스택을 사용하는 overhead가 발생할 수 있음
iterative: fibo2(), Memoization을 재귀적 구조에 사용하는 것보다 반복적 구조로 DP를 구현한 것이 성능 면에서 보다 효율적
```

DFS(깊이 우선 탐색):

```
그래프의 시작 정점의 한 방향으로 갈 수 있는 경로가 있는 곳까지 깊이 탐색 -> 더 이상 갈 곳이 없게 되면, 가장 마지막에 만났던 갈림길 간선이 있는 정점으로 돌아옴 -> 다른 방향의 정점으로 탐색을 계속 반복하여 결국 모든 정점을 방문하여 순회 -> 가장 마지막에 만났던 갈림길의 정점으로 되돌아가서 다시 깊이 우선 탐색을 반복해야 하므로 후입선출 구조의 스택을 사용
알고리즘:
시작 정점 v를 결정하여 방문->정점 v에 인접한 정점 중에서 
if 방문하지 않은 정점 w가 존재하면:
	정점 v를 스택에 push하고 정점 w를 v로 하여 다시 위의 과정 반복
elif 방문하지 않은 정점이 존재X:
	탐색의 방향을 바꾸기 위해서 스택을 pop하여 받은 가장 마지막 방문 정점을 v로 하여 다시 위의 과정 반복)
ex)
visited[],stack[]
DFS(v)
	v 방문:
	visted[v] <-true:
	do {
		if (v의 인접 정점 중 방문 안 한 w찾기)
			push(v);
		while(w){
			w방문;
			visited[w]<-true;
			push(w);
			v<-w;
			v의 인접 정점 중 방문 안 한 w찾기
		}
		v<-pop(stack);
	}while(v)
end DFS()
```

계산기:

```
문자열 수식 계산의 일반적 방법:
1. 스택을 이용해서 중위표기법(infix notation)의 수식을 후위표기법으로 변경
2. 후위표기법(연산자를 피연산자 뒤에 배치)의 수식을 스택을 이용해서 계산
중위표기식의 후위표기식으로 변환 방법1:
1. 수식의 각 연산자에 대해서 우선순위에 따라 괄호를 사용하여 다시 표현
2. 각 연산자를 그에 대응하는 오른쪽 괄호의 뒤로 이동
3. 괄호 제거
중위표기식의 후위표기식으로 변환 방법2(스택 이용):
토큰: 수식에서 의미 있는 최소의 단위
1. 입력 받은 중위표기식에서 토큰을 읽음
2. 토큰이 피연산자이면 토큰 출력
3. 토큰이 연산자(괄호포함)일 경우
-1.우선순위기 높으면 -> 스택에 push
-2.우선순위가 안 높으면 -> 연산자의 우선순위가 토큰의 우선순위보다 작을 때까지 스택에서 pop한 후 토큰의 연산자를 push
-3.만약 top에 연산자가 없으면 -> push
-4.토큰이 오른쪽 괄호 ')'인 경우 -> 스택 top에 왼쪽 괄호 '('가 올 때까지 스택에 pop 연산을 수행 -> pop한 연산자 출력 ->왼쪽 괄호를 만나면 pop만 하고 출력하지는 않음
-5.중위표기식에 더 읽을 것이 없다면 중지, 더 읽을 것이 있다면 1부터 반복
-6.스택에 남아 있는 연산자를 모두 pop하여 출력
스택 밖의 왼쪽 괄호는 우선 순위가 가장 높으며, 스택 안의 왼쪽 괄호는 우선 순위가 가장 낮음

구체적) 연산자는 스택을 거쳐감, 피연산자는 후위표기법 수식에 출력됨 연산자에서 우선순위가 낮은 것은 아래에 있음. 
icp(in-coming priority)와 isp(in-stack priority)를 고려해야 한다.
if(icp > isp) push() #본인보다 순위가 낮은 것을 만날때까지 POP
else pop()
| 토큰 | ISP | ICP | 클수록 순위 높음
|   ) |  -  |  -   |
| *,/ |  2  |  2  |
| +,- |  1  |  1  |
|  (  |  0  |  3  |
)는 여는 괄호를 만날 때까지 모두 POP, 순위가 같은 경우에도 POP.

위의 과정을 끝낸 후(후위표기법 수식으로 만든 후),스택을 이용하여 계산할 경우
1. 피연산자를 만나면 스택에 push함
2. 연산자를 만나면 필요한 만큼의 피연산자를 스택에서 pop하여 연산하고, 연산결과를 다시 스택에 push함
3. 수식이 끝나면, 마지막으로 스택을 pop하여 출력
구체적) 연산자이면 스택에서 피연산자를 두 번 pop()하여 두 개 꺼냄 이 때, **(적용하는 순서는 먼저 꺼낸 것을 뒤에, 나중에 꺼낸 것을 앞에 놓아야 한다.)** ex) 연산자: '-', 피연산자: 2(나중), 8(먼저) => 2 - 8
결과를 다시 스택에 집어 넣음

문자열로 된 수식을 계산 시
스택을 두 번 사용해서 처리했던 연산을 파이썬에서 제공되는 eval()내장 함수로 계산할 수 있음
eval():
-문자열로 된 수식을 계산
-올바른 수식이 아닌 경우 SyntaxError 예외가 발생함
-eval("6+5*(2-8)/2")는 문자열로 된 수식의 계산결과 반환함
```

백트래킹:

```
 백트래킹: 해를 찾는 도중에 '막히면', (즉, 해가 아니면)되돌아가서 다시 해를 찾아가는 기법
->최적화 문제와 결정 문제에 사용.-문제의 조건을 만족하는 해가 존재하는지의 여부를 'yes' 또는 'no'로 답하는 문제 ex)미로 찾기, n-Queen 문제, Map coloring, 부분 집합의 합(Subset Sum) 문제 등
 활용 예시: 미로찾기 이동한 경로를 stack에 push, 이동하지 못하면 pop하면서 돌아감
 백트래킹과 깊이 우선 탐색의 차이:
 
```

| 백트래킹                                                     | 깊이 우선 탐색                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 어떤 노드에서 출발하는 경로가 해결책으로 이어질 것 같지 않으면 더 이상 그 경로를 따라가지 않음으로써 시도의 횟수를 줄임 | 모든 경로를 추적                                             |
| 가지치기(prunning)                                           | N! 가지의 경우의 수를 가진 문제에 대해 깊이 우선 탐색을 가하면 처리 불가능한 문제 |
| 불필요한 경로의 조기 차단                                    | 모든 후보를 검사                                             |
| N! 가지의 경우의 수를 가진 문제에 대해 백트래킹에 가하면 일반적으로 경우의 수가 줄어들지만 이 역시 최악의 경우에는 여전히 지수함수 시간(Exponential Time)을 요하므로 처리 불가능 |                                                              |
| 모든 후보를 검사하지 않음                                    |                                                              |

```
 백트래킹 기법은 어떤 노드의 유망성을 점검한 후에 유망하지 않다-어떤 노드를 방문하였을 때 그 노드를 포함한 경로가 해답이 될 수 없으면-고 결정되면 그 노드의 부모로 되돌아가 다음 자식 노드로 감. 해답의 가능성이 있으면 유망
 가지치기(Pruning): 유망하지 않은 노드가 포함되는 경로는 더 이상 고려하지 않음
 알고리즘의 절차:
 1. 상태 공간 Tree의 깊이 우선 검색을 실시
 2. 각 노드가 유망한지를 점검
 3. 만일 그 노드가 유망하지 않으면, 그 노드의 부모 노드로 돌아가서 검색을 계속
 n-Queen문제에 적용시 알고리즘: 
n*n의 정사각형 안에 n개의 queen을 배치하는 문제로, 모든 queen은 자신의 일직선상 및 대각선상에 아무것도 놓이지 않는 문제
def checknode(v): #node
	if promising(v):
		if there is a solution at v:
			write the solution
		else:
			for u in each child of v:
				checknode(u)

 power set: 어떤 집합의 공집합과 자기자신을 포함한 모든 부분집합, 구하고자 하는 어떤 집합의 원소 개수가 n일 경우 부분집합의 개수는 2^n이 나옴
 백트래킹 기법으로 power set 구하기:
일반적인 백트래킹 접근 방법 이용
n개의 원소가 들어있는 집합의 2^n개의 부분집합을 만들 때, True 또는 False 값을 가지는 항목들로 구성된 n개의 리스트를 만드는 방법 이용
리스트의 i번째 항목은 i번째의 원소가 부분집합의 값인지 아닌지를 나타내는 값
def backtrack(a, k, input):
	global MAXCANDIDATES
	c = [0]*MAXCANDIDATES
	
	if k == input:
		process_solution(a, k) #답이면 원하는 작업을 한다
	else:
		k += 1
		ncandidates = contstruct_candidates(a, k, input, c)
		for i in range(ncandidates):
			a[k] = c[i]
			backtrack(a,k,input)
def construct_candidates(a, k, input, c):
	c[0] = True
	c[1] = False
	return 2
	
def process_solution(a,k):
	print("(", end="")
	for i in range(k+1):
		if a[i:
		print(i, end= " ")
	print(")")
MAXCANDIDATES = 100
NMAX = 100
a = [0] * NMAX
backtrack(a,0,3)

순열을 구하는 백트래킹 알고리즘:
def backtrack(a, k ,input):
	global MAXCANDIDATES
	c = [0] * MAXCANDIDATES
	
	if k == input:
		for i in range(1, k+1):
			print(a[i], end=" ")
		print()
	else:
		k += 1
		ncandidates = construct_candidates(a, k, input, c)
		for i in range(ncandidates):
			a[k] = c[i]
			backtrack(a, k, input)
			
def construct_candidates(a, k, input, c):
	in_perm = [False] * NMAX
	
	for i in range(1,k):
		in_perm[a[i]] = True
	
	ncandidates = 0
	for i in range(1, input+1):
		if in_perm[i] == False:
			c[ncandidates] = i
			ncandidates += 1
	return ncandidates
		
```

분할정복

```
분할,정복,통합
분할: 해결할 문제를 여러 개의 작은 부분으로 나눔
정복: 나눈 작은 문제를 각각 해결
통합: (필요하다면)해결된 해답을 모음
거듭제곱 알고리즘: O(n)
def power(Base, Exponent):
	if Base == 0: return 1
	result = 1
	for i in range(Exponent):
		result *= Base
	return result
분할 정복 기반의 알고리즘: O(log2n)
def Power(Base, Exponent):
	if Exponent == 0 or Base == 0:
		return 1
	if Exponent % == 0:
		NewBase = Power(Base, Exponent/2)
		return NewBase * NewBase
	else:
		NewBase = Power(Base,(Exponent-1)/2)
		return (NewBase * NewBase) * Base
합병 정렬과 퀵 정렬의 공통점: 주어진 리스트를 두 개로 분할하고, 각각을 정렬
차이점; | 		합병 정렬 		| 		퀵 정렬 		|
	   | 분할할 때, 단순하게 두 |분할할 때, 기준 아이템(p|
	   | 부분으로 나눔	     |ivot Item)을 중심으로, |
	   | 각 부분 정렬이 끝난 후,|이보다 작은 것은 왼편, 큰|
	   | '합병'이란 후처리 작업이|것은 오른편에 위치시킴  |
	   | 필요함			   |각 부분 정렬이 끝난 후, |
	   | 					 |후처리 작업이 필요하지X |
def quickSort(a, begin, end):
	if begin < end:
		p = partition(a, begin, end)
		quickSort(a, begin, p-1)
		quickSort(a, p+1, end)

주어진 리스트에서 피봇을 구하는 알고리즘
def partition(a, begin, end):
	pivot = (begin + end)//2
	L = begin
	R = end
	while L < R:
		while(a[L] < a[pivot] and L<R): L += 1
		while(a[r] >=a[pivot] and L<R): R -= 1
		if L < R:
			if L == pivot : pivot = R
			a[L], a[R] = a[R], a[L]
	a[pivot], a[R] = a[R], a[pivot]
	return R
퀵 정렬의 최악의 시간 복잡도는 O(n^2)->합병정렬에 비해 좋지 못함. 하지만 평균 복잡도는 nlogn임.
```



