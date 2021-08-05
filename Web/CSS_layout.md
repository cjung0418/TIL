# CSS_layout

## Float

- 본래는 이미지 좌,우측 주변으로 텍스트를 둘러싸는 레이아웃을 위해 도입
- 이미지가 아닌 요소들에도 적용해 웹 사이트의 전체 레이아웃을 만드는데까지 발전
- Float 속성:
  - none: 기본값
  - left: 요소를 왼쪽으로 띄움
  - right: 요소를 오른쪽으로 띄움
- Float clear
  - 선택한 요소의 맨 마지막 자식으로 가상 요소를 하나 생성
  - 보통 content 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용
  - 기본값은 inline
  - 선행 floating 요소 다음일 수 있는지 또는 그 아래로 내려가(해체되어(cleared))야 하는 지를 지정
  - clear 속성은 부동 및 비부동 요소 모두에 적용됨
- Float 정리
  - flexbox 및 그리드 레이아웃과 같은 기술이 나오기 이전에 열 레이아웃을 만드는데 사용됨
  - flexbox와 grid의 출현과 함께 결국 원래 텍스트 블록 내에서 float 이미지를 위한 역할로 돌아감(mdn에서는 더 새롭고 나은 레이아웃 기술이 나와있으므로 레거시 레이아웃 기술로 분류해놓기도)
  - 웹에서는 여전히 상용하는 경우도 있음

## Flexbox

- CSS Flexible Box Layout
  - 요소 간 공간 배분과 정렬 기능을 위한 1차원(단방향) 레이아웃
  - 요소와 축
    - 요소
      - Flex Container(부모 요소)
      - Flex item(자식 요소)
    - 축
      - main axis(메인축)
      - cross axis(교차축)
- Flexbox의 구성 요소
  - Flex Container(부모 요소)
    - flexbox  레이아웃을 형성하는 가장 기본적인 모델
    - Flex item들이 놓여있는 영역
    - display 속성을 flex 혹은 inline-flex로 지정
  - Flex item(자식 요소)
    - 컨테이너의 컨텐츠
- Flex에 적용하는 속성
  - display: flex
    - inline-flex
  - 배치 방향 설정
    - flex-direction
      - main-axis 방향만 바뀐다.
      - item이 쌓이는 방향 설정
      - row(기본값)-좌->우, row-reverse, column(위에서 아래), column-reverse
  - 메인축 방향 정렬
    - justify-content
      - main축 정렬
      - flex-start, flex-end-순서는 바뀌지 않고 뒤에서부터 쌓임, center, space-between-좌우 정렬(item들 간의 간격 동일), space-around-균등 좌우 정렬(내부 요소 여백은 외각 여백의 2배), space-evenly-균등 정렬(내부 요소 여백과 외각 여백 모두 동일)
  - 교차축 방향 정렬
    - align-items, align-self, align-content
    - cross 축 정렬
      - content: 여러 줄
        - flex-start, flex-end, center, stretch, space-between, space-around
      - items: 한 줄
        - flex-start, flex-end, center, stretch(기본 값), baseline
      - self: flex item 개별 요소
        - auto(기본 값), flex-start, flex-end, center, baseline, stretch
  - 기타
    - flex-wrap, flex-flow, flex-grow, order
      - flex-wrap
        - 요소들이 강제로 한 줄에 배치 되게 할 것인지 여부 설정
        - nowrap(기본): 한 줄에 우겨넣으려, wrap: 넘치면 다음 줄로. wrap-reverse
      - flex-flow
        - flex-direction과 flex-wrap의 shorthand
      - order
        - 작은 숫자 일수록 앞(우선 쌓이는 방향)으로 이동
        - 기본 값: 0
      - flex-grow
        - 주축에서 남는 공간을 항목들에게 분배하는 방법
        - 각 아이템의 상대적 비율을 정하는 것은 아님
        - 기본 값: 0
        - 음수 불가능

## Bootstrap

- <Quickly\> design and customize <responsive\> mobile-first sites with Bootstrap. <the world's most popular\> front-end open source toolkit, featuring Sass variables and mixins, <responsive grid system\>, extensive <prebuilt components\>, and powerful JavaScript plugins
- CDN
  - Content Delivery(Distribution) Network
  - 컨텐츠(CSS, JS, Image, Text 등)을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템
- spacing
  - 브라우저 html의 root 글꼴 크기는 16px
  - m-num
    - m-1 == 0.25 rem == 4 px
    - m-2 == 0.5 rem == 8 px
    - m-3 == 1 rem == 16 px
    - m-4 == 1.5 rem == 24 px
    - m-5 == 3 rem == 48 px
  - m: margin
  - p: padding
  - t: top
  - b: bottom
  - ...
- Responsive Web Design
  - 웹과 모바일 간의 연동이 잘 되게 하는 것
  - 다양한 화면 크기를 가진 디바이스들이 등장함에 따라 responsive web design 개념이 등장
  - 반응형 웹은 별도의 기술 이름이 아닌 웹 디자인에 대한 접근 방식, 반응형 레이아웃 작성에 도움이 되는 사례들의 모음 등을 기술하는데 사용되는 용어

## Grid system

- Grid system
  - flex는 container=>items 이고, Grid system은 container=> rows => col이다.
  - Bootstrap Grid system은 flexbox로 제작됨
  - container, rows, column으로 컨텐츠를 배치하고 정렬
  - 12 column, 6 grid breakpoints
  - 내용은 반드시 columns안에 있어야 하고, row밑에는 column만.
  - offset-n/12 지정 시 앞의 공간을 비움
  - gx-num:
    - gutter
    - col 간에 띄어있는 공간 설정
  - container는 크기가 정해져 있음. container-fluid를 쓰면 전체에 대해서 적용된다.
  - 0.5 column의 적용 => row안에 row를 놓아서 만든다.