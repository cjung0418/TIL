# 에러, 에러 처리(Error/ Exception handling)

## 에러

- 에러: 문법 에러(Syntax Error), 예외(실행 중 감지되는 에러들)
- 예외 
  - NameError: namespace에 해당 이름이 없음
  - TypeError: argument 누락, argument 개수 초과, argument type 불일치
  - ZeroDivisionError:  0으로 나눔
  - ValueError: 타입은 올바르나 값이 적절하지 않거나 없는 경우
  - ModuleNotFoundError: 존재하지 않는 모듈을 import하는 경우
  - KeyboardInterrupt: 임의로 프로그램을 종료하였을 때
  - IndentationError: Indentation이 적절하지 않은 경우
- 예외: 문법은 맞는데 에러가 뜨는 것.



## 예외처리

- 예외처리: try문 / except절을 이용하여 예외 처리를 할 수 있음.
- try 아래의 코드 블록이 실행됨 -> 예외 시, except절 실행 or 예외 없으면, except절 실행 X
- except에 어떤 에러인지 적으면, 그 에러에 해당하는 경우에만 실행, 쓰지 않으면 모든 에러에 대해서 실행
- except에 적을 때, Exception과 같이 가장 큰 범주를 먼저 적으면, 모든 에러가 여기에 걸리기 때문에 작은 범주부터 적어 주어야 한다.
- try: 실행 -> except: 에러 시 실행 or else: 에러가 아닌 경우 실행 -> finally:마지막에 어느 경우에도 실행
- as를 사용하여 원본 에러 메시지를사용할 수 있음. 
  - ex) except IndexError as err: print(f'{err}')
- 예외 발생 시키기:
  - raise <표현식>(메시지)라고 적으면 <표현시>: (메시지)라고 표현됨. ex) raise ValueError('값 에러 발생') -> ValueError: '값 에러 발생'
  - assert <표현식>, <메시지>: 일반적으로 디버깅 용도로 사용, 무조건 Assertion Error 발생. 여기에서 표현식은 T,F에 대한 것 등. -O 옵션으로 실행시 assert문과 _debug__에 따른 조건부 코드를 제거 후 실행