# 모듈

## 모듈과 패키지

- 모듈: 특정 기능을 파이썬 파일(.py)단위로 작성한 것.
- 패키지: 특정 기능과 관련된 여러 모듈의 집합, 패키지 안에는 또 다른 서브 패키지를 포함
- __init  _.py가 있어야 그냥 폴더가 아니라 패키지라고 인식한다.( python 3.3버전 이상이면 이렇게 할 필요는 없지만, 하위 버전과의 연동을 위해)
- 모듈에 있는 것이 함수인가? -> 직접 확인 해본다. or 이름을 제대로 짓는다.
- dir(모듈)을 사용해서 그 안을 들여다 볼 수 있다.
- 파이썬 표준 라이브러리(PSL)
- 파이썬 패키지 관리자(pip): PYPI(python package index)에 저장된 외부 패키지들을 설치하도록 도와주는 패키지 관리 시스템
- 패키지 설치: pip install somepackage == 버전, or >= 버전... bash, cmd환경에서 사용
- 패키지 삭제: pip uninstall somepackage
- 패키지 목록 및 특정 패키지 정보: pip list, pip show somepackage
- pip freeze: 설치된 패키지의 목록을 보여준다는 점은 같지만, pip install에서 활용되는 형식으로 출력한다. 설치된 목록을 requirements.txt으로 만들어 관리 ex) pip freeze > requirements.txt
- 패키지 관리하기: pip freeze > requirements.txt로 관리 -> pip -r requirements.txt로 설치

## 가상환경

- 가상환경: 
  - 파이썬 표준 라이브러리가 아닌 외부 패키지와 모듈을 사용하는 경우 모두 pip를 통해 설치해야 한다.
  - 여러 버전을 통해 여러 프로젝트가 진행되고 있으면, 가상환경을 만들어 프로젝트별로 독립적인 패키지를 관리할 수 있다.
- venv: 
  - 가상 환경을 만들고 관리하는데 사용되는 모듈, 특정 디렉토리에 가상환경을 만들고, 고유한 파이썬 패키지 집합을 가질 수 있음
  - 특정 폴더에 가상환경이 있고, 실행환경에서 가상환경을 활성화 시켜, 해당 폴더에 있는 패키지를 관리/사용함
- python -m venv <폴더명> 폴더명은 주로 venv를 사용한다.
- 가상환경 활성화/비활성화: POSIX - source <venv\> bin/active, 윈도우 = {C:\\> <venv\> 여기까지 내가 위에서 만든 venv } \Scripts\activate.bat, 가상환경의 활성화 범위는 그 폴더에만 적용되는 것이 아니라 컴퓨터 전체 어디에서나 활성화 된다.
- 비활성은 deactivate
- 가상환경은 복사등으로 관리하는 것이 아니라 requirements.txt로 관리하는 것. - 복사로 하면 너무 번거롭고, 변경을 놓칠 수 있음.
- 모듈활용 시 모든 것을 쓰고 싶으면, from ~ import *
- 모듈 이름이 겹치면, as를 써서 다른 이름을 적으면 된다.
- 모듈 사용법: 
  - import < > 
  - from module import var
  - from module import * : 이렇게 하면 많은 변수이름들을 뺏기게 되기 때문에 권장되지 않음.
  - from package import module
  - from package.module import val
