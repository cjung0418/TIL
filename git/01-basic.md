# git basic

```
$ git init - master로 설정
$ git add . - 사진찍을 준비
$ git commit -m '<COMMIT MESSAGE>' - 실제 촬영
$ git remote add origin <URL> - 올릴 경로 설정
$ git push origin master - 자료 올림
$ git log - 올리지 않은 자료는 빨간색으로 표시됨.
$ git status - 찍히지 않은 자료는 빨간색
$ git pull origin master - 자료 받아오기.
$ git clone url - 받아올 주소 설정
$ touch - 파일 생성
$ start - 파일 실행
$ jupyter notebook - 주피터노트북 실행
git: version control system
$ git init directory-> repository
repo안에는 3개의 공간 구성: 작업공간(working directory)-코드 작성 및 수정, 스테이지(stagin area)-기록될 파일들의 변경사항들을 스테이지에 올리기, 저장소(commits)- 스테이지 위의 변경사항들을 저장 ->분장실, 촬영장, 사진들
서명 남기기: $git config --global user.name <이름>
$git config --global user.email <이메일>
$git status: 무슨 일을 하는지 현재 상태 보기
$git log: 저장소의 상태를 알려줌
$git add -> $git commit
$git log --oneline: 간략하게 표시
원격 저장소
Remote repo: local repo의 자료 저장, 고유 URL 존재.
1. Local repo 생성 2. Remote repo 생성 3. Local repo와 Remote repo연결 4. 커밋 업로드 
```



## git bash

```
$: prompt, 명령어를 받아들일 준비가 되어있다는 기호
/: root directory, 모든 파일/폴더들의 최상위 폴더
~: Home directory, 사용자(계정)에게 할당된 폴더
.: 현재 위치한 폴더를 지칭
..: 현재 위치한 폴더를 기준으로 상위 폴더를 지칭
Tab: 파일/폴더 이름 자동완성 기능
ctrl + c: 실행중인 프로세스 취소
ctrl + l: 터미널 창 정리하기
화살표 위, 아래: 이전에 입력한 명령어 기록 탐색
명령어들
$ ls: 현재 위치한 폴더 내부의 파일/폴더 출력
$ ls -a: 숨김파일까지 표시
$ touch: 파일이름으로 파일생성(확장자도 적어야 한다.)
$ start: 시작 mac은 open
$ rm: 파일 삭제
$ mkdir: 폴더 생성
$ cd: 지정한 폴더로 이동
$ cd ..: 현재위치한 폴더의 상위 폴더로 이동
$ rm -r: 지정한 폴더 및 파일 삭제
$ rm -rf: 지정한 폴더 및 파일 강제 삭제


```



