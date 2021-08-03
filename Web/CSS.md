# CSS

## CSS

- CSS:
  - 스타일, 레이아웃 등을 통해 문서(HTML)를 표시하는 방법을 지정하는 언어
  - CSS 구문은 선택자와 함께 열림
  - 선택자를 통해 스타일을 지정할 HTML 요소를 선택
  - 중괄호 안에서는 속성과 값, 하나의 쌍으로 이루어진 선언을 진행
  - 각 쌍은 선택한 요소의 속성, 속성에 부여할 값을 의미
    - 속성: 어떤 스타일 기능을 변경할지
    - 값: 어떻게 스타일 기능 변경할지
-  CSS 정의방법:
  - 인라인: 해당 태그에 직접 style 속성 활용
  - 내부참조: head 태그 내에 style에 지정
  - 외부참조: 외부 CSS 파일을 <head\>내 <link\>를 통해 불러오기, 상황에 따라 선택한다.
- CSS Selectors:
  - 선택자: HTML 문서에서 특정한 요소를 선택하여 스타일링 하위해서는 반드시 선택자라는 개념이 필요.
  - 기본 선택자: 전체 선택자, 요소 선택자, 클래스 선택자, 아이디 선택자, 속성 선택자
  - 결합자: 자손 결합자, 자식 결합자, 일반 형제 결합자, 인접 형제 결합자
  - 의사 클래스/요소(Pseudo class): 링크, 동적 의사 클래스, 구조적 의사 클래시...
  - id 선택자는 #사용. 전체에서 딱 한개만
  - 공백으로 클래스 나열
  - 요소 선택자: HTML 태그를 직접 선택
  - 클래스 선택자: 마침표(.)문자로 시작하며, 해당 클래스가 적용된 모든 항목을 선택
  - 아이디 선택자: #문자로 시작하며, 해당 아이디가 적용된 모든 항목을 선택
- CSS 적용 우선순위: 
  1. 중요도: !important
  2. 우선 순위: 인라인 > id선택자 > class 선택자 > 요소 선택자
  3. 소스 순서
- CSS 상속: 
  - CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속한다. 
  - 속성 중에는 상속이 되는 것과 되지 않는 것이 있음
    - 상속이 되는 것: Text 관련요소(font, color, text-align), opacity, visibility 등
    - 상속이 되지 않는 것: Box model 관련 요소(width, height, margin, padding, border, box-sizing, display), position 관련 요소(position, top/right/bottom/left, z-index) 등
    - color는 text관련 속성

## CSS 단위

- 크기단위:
  - px(픽셀): 모니터 해상도의 한 화소인 '픽셀'을 기준, 픽셀의 크기는 변하지 않기 때문에 고정적인 단위
  - %: 백분율 단위,  가변적인 레이아웃에서 자주 사용
  - em: (바로 위, 부모 요소에 대한) 상속의 영향을 받음, 배수 단위, 요소에 지정된 사이즈에 상대적인 사이즈를 가짐
  - rem: (바로 위, 부모 요소에 대한) 상속의 영향을 받지 않음, 최상위 요소(html)의 사이즈를 기준으로 배수 단위를 가짐
  - viewpoint: 웹 페이지를 방문한 유저에게 바로 보이게 되는 웹 컨텐츠의 영역, 주로 스마트폰이나 태블릿 디바이스의 화면을 일컫는 용어로 사용됨, 글자 그대로 디바이스의 viewpoint를 기준으로 상대적인 사이즈가 결정됨, vw, vh, vmin, vmax
  - html의 기준은 16pixel
- 색상 단위:
  - 색상 키워드: 대소문자를 구분하지 않음, red, blue, black과 같은 특정 색을 직접 글자로 나타냄
  - RGB 색상: 16진수 표기법 혹은 함수형 표기법을 사용해서 특정 색을 표현하는 방식
  - HSL 색상: 색상, 채도, 명도를 이용해서 색을 표시
  - rgba이면, a는 alpha(투명도)가 추가된 것

## selectors 심화

- 결합자 :
  - 자손 결합자: selector A 하위의 모든 selector B ex) div span==div 뒤의 모든 span
  - 자식 결합자: selector A 바로 아래의 selector B ex) div > span == div 바로 뒤의 span
  - 일반 형제 결합자: selector A의 형제 요수 중 뒤에 위치하는 selector B 요소를 모두 선택 ex) p ~ span: p 앞에 있는 span은 제외하고 뒤에 있는 span 모두 선택
  - 인접 형제 결합자: selector A의 형제 요소 중 바로 뒤에 위치하는 selector B 요소를 선택 ex) p + span == 바로 뒤에 있는 span만 바뀜.
- 모든 요소는 박스 형태(심지어 원이라도)
  - 하나의 박스는 content, padding, border, margin으로 이루어짐
    - margin: 테두리 바깥의 외부 영역, 배경색을 지정할 수 없다.
    - border: 테두리 영역
    - content: 그링나 이미지 등 요소의 실제 내용
    - padding: 테두리 안쪽의 내부 여백, 요소에 적용된 배경색, 이미지는 padding까지 적용
  - .margin{top,...}로 상하좌우 여백 설정 가능
  - .margin-padding 그냥 몇 px인지 적으면 상하좌우 모두 적용
    - 1개 쓰면 - 상하좌우, 2개 쓰면 - 상하/좌우 적용, 3개 쓰면 - 상/좌우/하, 4개 쓰면 - 상/우/하/좌(시계방향)
    -  margin : auto => 상하 마진 X, 좌우 가운데 정렬
    - 크기를 지정한는 것은 content를 기준으로 한다. 내가 생각한 것은 border인데, content가 기준이라서 다르게 된다. ->  *로 전체 선택자에 대해서 box-sizing:border-box로 선언하고 진행하는 것이 일반적
    - 기본은 content-box, 우리가 일반적으로 영역을 보는 것이 border-box이므로 그렇게 설정
  - 마진 상쇄: block A의 top과  block B의 bottom에 적용된 각각의 margin이 둘 중에서 큰 마진 값으로 결합(겹쳐지게)되는 현상

##  CSS display

- 모든 요소는 네모(박스모델)이고 어떻게 보여지는지(display)에 따라 문서에서의 배치가 달라질 수 있다.
- 블록 요소: contents의 자리 뿐만 아니라 끝까지 차지하여 다음 내용이 다음 줄로 떨어지도록 한다.
- 인라인 요소: contents만큼만 공간을 차지한다.
- display:
  - 블록 요소:
    - 줄 바꿈이 일어나는 요소
    - 화면 크기 전체의 가로 폭을 차지한다.
    - 블록 레벨 요소 안에 인라인 레벨 요소가 들어갈 수 있음
  - 인라인 요소:
    - 줄 바꿈이 일어나지 않는 행의 일부 요소
    - content 너비만큼 가로 폭을 차지한다.
    - width, height, margin-top, margin-bottom을 지정할 수 없다.
    - 상하 여백은 line-height로 지정한다.
- 블록 레벨 요소: 
  - div/ ul,ol,li / p / hr / form 등 - 크기를 지정해도 소용없다. 나머지를 마진이 차지하게 된다
- 인라인 레벨 요소:
  - span/ a / img / input,label / b,em,i,strong / 등
- block:
  - margin-right:auto -> 좌측 정렬
  - margin-left:auto -> 우측 정렬
  - margin-right:auto ; maring-left:auto -> 가운데 정렬
- inline:
  - text-align:left -> 좌측 정렬
  - text-align:right -> 우측 정렬
  - text-align:center -> 가운데 정렬
- display:
  - inline-block 
    - block과 inline 레벨 요소의 특징을 모두 갖는다.
    - inline처럼 한 줄에 표시 가능, block처럼 width, height, margin 속성을 모두 지정 가능
  - display:none
    - 해당 요소를 화면에 표시하지 않는다.(공간조차 사라진다.)
  - visibility:hidden
    - 해당 요소를 화면에 표시하지 않는 점에서 display:none과 비슷하지만, 공간은 차지한다.

## CSS position

- 문서 상에서 요소를 배치하는 방법을 지정
- static: 
  - 모든 태그의 기본 값(기준 위치)
  - 일반적인 요소의 배치 순서에 따름(좌측 상단)
  - 부모 요소 내에서 배치될 때는 부모 요소의 위치를 기준으로 배치함
- relative, absolute, fixed는 좌표 프로퍼티(top, bottom, left, right)를 사용하여 이동이 가능(음수 값도 가능)
- relative: 
  - 상대 위치, 자기 자신의 static 위치를 기준으로 이동
  - 레이아웃에서 요소가 차지하는 공간은 static일 때와 같음(이동해도 다른 것들에는 영향을 주지 않음. 원래 있던 위치는 공간이 유지됨) => 보이는 것만 다르게 보이는 것.
- absolute:
  - 절대 위치
  - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음(원래 있던 위치의 공간이 비게 된다. 레이아웃이 무너지게 된다.)
  - static이 아닌 가장 가까이 있는 부모/조상 요소를 기준으로 이동(없는 경우 body에 붙는 형태)
- fixed:
  - 고정 위치
  - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음
  - 부모요소와 관계없이 viewpoint를 기준으로 이동, 스크롤 시에도 항상 같은 곳에 위치함
- 위치의 기준은 좌측 상단으로 top 100 => 위로 100 이동이 아니라, 100만큼 위에서 아래로 이동, left:100 => 왼쪽에서 오른쪽으로 100이동
- absolute를 할 때는 부모(Static)를 설정하는 것이 먼저
- absolute의 특징: 
  - 원래 위치해 있었던 과거 위치에 있던 공간은 더 이상 존재하지 않음. 즉, 다른 모든 것과 별개로 독자적인 곳에 놓음
  - 페이지의 다른 요소의 위치와 간섭하지 않는 격리된 사용자 인터페이스 기능을 만드는데 활요-팝업 정보 상자, 제어 메뉴, 롤오버 패널, 페이지 어느 곳에서나 끌어서 놓기 할 수 있는 유저 인터페이스 페이지 등등
