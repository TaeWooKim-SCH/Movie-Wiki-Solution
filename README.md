# 영화 정보 웹 프로젝트
TMDB API를 통해 영화 정보를 제공하는 웹 프로젝트입니다. 이 프로젝트는 팀 프로젝트입니다.

## Stack
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/>

CRA를 통해 프로젝트를 생성했습니다. 그리고 ESLint와 Prettier는 AirBnb 가이드를 따랐습니다. <br/>
CSS 프레임워크로는 다양한 경험을 해보기 위해 테일윈드와 테일윈드 스타일드 컴포넌트를 사용했습니다. 스타일링이 많아질수록 클래스명이 너무 길어져 전체적인 코드의 가독성이 떨어진다는 단점이 있어 테일윈드 스타일드 컴포넌트와 함께 사용했습니다. <br/>
처음에는 테일윈드의 정해진 수치와 속성명 때문에 불편했지만 쓰다 보니 오히려 바로바로 HTML을 작성하며 스타일링을 할 수 있어서 편했습니다.

## 기획
기획은 Figjam과 Figma로 진행했습니다.<br/>
먼저 사용자에게 어떤 정보를 보여줄지부터 고민을 하고 다른 큰 플랫폼들을 참고하기도 했습니다. <br/>
이 사이트는 페이지가 총 3페이지 Home/Search/Category로 나누어져 있습니다. 이 중에서 저는 Search 페이지와 추가로 Navbar까지 구현했습니다.<br/>
Navbar의 기능으로는 총 3개의 페이지를 라우팅하고 Link로 페이지 이동이 가능한 기능과 저희 팀의 노션과 깃허브로 연결된 부분이 있습니다. Search 페이지의 기능은 검색 기능과 무한 스크롤 기능이 있습니다.

### 기능
1. Navbar
- 아이콘 정렬
- Home, Search, Category 페이지 연결
- notion, github 연결
2. Search
- 영화 제목을 기준으로 검색
- 검색 후에는 사용자가 입력한 키워드의 검색 결과와 사용자가 검색한 영화를 바탕으로 추천해주는 영화 목록을 무한스크롤로 구현

## 폴더 구조

```
Movie-Wiki
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ defaultBackdrop.png
│  ├─ defaultPoster.png
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ API
│  │  └─ movie.js
│  ├─ App.js
│  ├─ App.test.js
│  ├─ Assets
│  │  └─ ConstantValue.js
│  ├─ Components
│  │  ├─ EmptyMovie.jsx
│  │  ├─ home
│  │  │  ├─ Carousel.js
│  │  │  ├─ Mouse.js
│  │  │  ├─ RecommendList.js
│  │  │  ├─ RecommendMovieLi.js
│  │  │  ├─ RecommendTitle.js
│  │  │  └─ ScrollContainer.js
│  │  ├─ MovieCard.jsx
│  │  ├─ movieDetail
│  │  │  ├─ MovieInfo.js
│  │  │  └─ MovieOverViewVideo.js
│  │  ├─ Navbar.js
│  │  ├─ search
│  │  │  ├─ SearchInput.jsx
│  │  │  ├─ SearchResult.jsx
│  │  │  └─ SearchSimilar.jsx
│  │  ├─ Tag.jsx
│  │  └─ TopButton.jsx
│  ├─ Hooks
│  │  ├─ useFetchMovie.js
│  │  ├─ useIntersectionObserver.js
│  │  ├─ useInterval.js
│  │  └─ useScrollLock.js
│  ├─ index.css
│  ├─ index.js
│  ├─ Pages
│  │  ├─ Category.jsx
│  │  ├─ Home.js
│  │  ├─ MovieDetail.js
│  │  └─ Search.jsx
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  ├─ Store
│  │  ├─ index.js
│  │  └─ movieId-slice.js
│  ├─ Styles
│  │  └─ style.js
│  └─ utils
│     └─ throttle.js
└─ tailwind.config.js

```

## 문제 해결 과정
### 😅 검색: 간단 버그
검색 기능을 만들고 나니 데이터가 없는 키워드로 검색한 후에 정상적인 키워드로 검색하게 되면 더이상 데이터가 받아와지지 않는 버그가 있었습니다. <br/>
이 버그를 해결하기 위해 정말 오랜 시간이 걸렸던 거 같습니다... 아무리 찾아도 보이지 않다가 갑자기 떠올랐습니다. <br/>
데이터가 없는 키워드를 입력하고 검색하면 데이터의 id값이 존재하기 않아 계속 동작이 안했던 것입니다. <br/>
그래서 검색을 하고 데이터가 없는 경우를 처리를 해주었습니다. 데이터가 존재하지 않는 경우에는 모든 상태들을 초기화시키고 사용자에게 검색결과가 존재하지 않습니다라는 메세지를 보여주도록 했습니다.

### 🥺 데이터 Fetching: 중복 Fetching 발생
한 페이지 안에 검색 결과 영화에 대한 데이터 fetching과 추천 영화에 대한 데이터 fetching이 있다 보니 이 두 개의 fetch가 중복해서 발생해서 계속 에러가 났었습니다.
처음에는 정말 이유를 찾지 못하다가 3시간 정도 고민하던 도중 중복 fetching이 일어나서 데이터가 꼬여버리는 현상이 발생했다는 것을 찾았습니다.
그래서 isLoading이라는 상태를 만들어 각 useEffect 훅마다 isLoading이 true일 때에는 리턴을 시켜줬습니다. 그리고 데이터가 fetching이 되는 동안은 isLoading 상태가 true가 되도록 구현했습니다.
이렇게 하니까 중복 fetching 문제가 해결되었습니다. 전부터 이런 비동기적인 부분이 저에게는 어렵다는 것을 알았습니다. 아직 JavaScript 지식이 부족한 것 같아 비동기에 대해 더 공부할 계획입니다.

### 😅 무한 스크롤: EventListener VS ObserverAPI
처음에 무한 스크롤을 구현하려고 했을 때 라이브러리도 만들어진 게 많고 구글에만 검색해도 어떤식으로 구현했는지 다 나와있었습니다. 
하지만 저는 구글에 검색을 해보기 전에 한 번 스스로 로직을 짜고 직접 구현을 해보자고 마음을 먹었습니다.
제가 생각한 로직은 다음과 같이 두 방식이 있습니다.
- 스크롤 이벤트 사용
1. 스크롤을 합니다.
2. 특정 스크롤에 도달하면 새로 데이터를 fetching 해옵니다.

- useRef 사용
1. 스크롤을 합니다.
2. 특정 요소가 보이면 새로 데이터를 fetching 해옵니다.
<br/>
위와 같이 두 가지 방식을 생각했지만 개인적인 생각으로는 스크롤 이벤트를 하는 것이 조금 더 정밀한 컨트롤을 할 수 있을 것이라 생각해서 스크롤 이벤트로 구현하게 되었습니다. 그래서 useEffect 훅에 addEventListener('scroll', func)를 사용해봤습니다. <br/>
하지만 문제점이 하나 발생했습니다. <br/>
scroll 이벤트는 scroll이 발생할 때마다 이벤트가 계속해서 발생하기 때문에 많은 양의 컨텐츠가 있는 경우 성능 저하가 발생할 수 있습니다. 또한 스크롤을 할 때마다 호출을 하기 때문에 네트워크 리소스를 더 많이 사용하게 됩니다. <br/>
그래서 scroll 이벤트로 구현하고 나서 로직을 수정했습니다. 조금 더 효율적인 코드를 위해 Observer API를 사용하기로 했습니다. <br/>
하지만 Observer API는 이해하기가 힘들었습니다. <br/>
특정 요소가 뷰포트와 교차하면 데이터를 fetching하는 방식은 이해가 됐지만 이것을 코드로 구현한 것을 이해하기가 쉽지 않았습니다.<br/>
그러나 스크롤 이벤트와 비교해 불필요한 호출이 발생하지도 않고 효율성 측면에서 확실히 좋다고 생각해서 최종적으로 무한 스크롤은 Intersection Observer API를 이용해 구현했습니다.








![image](https://github.com/TaeWooKim-SCH/Movie-Wiki/assets/79956107/fd86251d-88d2-4945-bb3d-f9605cfc2b1e)
![image](https://github.com/TaeWooKim-SCH/Movie-Wiki/assets/79956107/8069adf9-1caf-4952-83fe-dc5e00f7a528)
![image](https://github.com/TaeWooKim-SCH/Movie-Wiki/assets/79956107/9d13a543-37e4-431e-b8e1-0e29e0e751e3)
![image](https://github.com/TaeWooKim-SCH/Movie-Wiki/assets/79956107/fd7e64a1-a073-4d96-9e35-cd140d4b87a2)

