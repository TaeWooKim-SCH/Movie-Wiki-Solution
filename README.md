# 영화 정보 웹 프로젝트
TMDB API를 통해 영화 정보를 제공하는 웹 프로젝트입니다. 이 프로젝트는 팀 프로젝트입니다.

# Stack
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/>

CRA를 통해 프로젝트를 생성했습니다. 그리고 ESLint와 Prettier는 AirBnb 가이드를 따랐습니다. <br/>
CSS 프레임워크로는 다양한 경험을 해보기 위해 테일윈드와 테일윈드 스타일드 컴포넌트를 사용했습니다. 스타일링이 많아질수록 클래스명이 너무 길어져 전체적인 코드의 가독성이 떨어진다는 단점이 있어 테일윈드 스타일드 컴포넌트와 함께 사용했습니다. <br/>
처음에는 테일윈드의 정해진 수치와 속성명 때문에 불편했지만 쓰다 보니 오히려 바로바로 HTML을 작성하며 스타일링을 할 수 있어서 편했습니다.

# 기획
기획은 Figjam과 Figma로 진행했습니다.<br/>
먼저 사용자에게 어떤 정보를 보여줄지부터 고민을 하고 다른 큰 플랫폼들을 참고하기도 했습니다. <br/>
이 사이트는 페이지가 총 3페이지 Home/Search/Category로 나누어져 있습니다. 이 중에서 저는 Navbar와 Search 페이지를 구현했습니다.<br/>
Navbar의 기능으로는 총 3개의 페이지를 라우팅하고 Link로 페이지 이동이 가능한 기능과 저희 팀의 노션과 깃허브로 연결된 부분이 있습니다. Search 페이지의 기능은 검색 기능과 무한 스크롤 기능이 있습니다.

### 폴더 구조

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
폴더 구조가 조금 복잡합니다. 이 부분에서 보기 좋게 폴더 구조를 기획하지 못한 아쉬움이 있습니다.

### 기능
1. Navbar
- 아이콘 정렬
- Home, Search, Category 페이지 연결
- notion, github 연결
2. Search
- 영화 제목을 기준으로 검색
- 검색 후에는 사용자가 입력한 키워드의 검색 결과와 사용자가 검색한 영화를 바탕으로 추천해주는 영화 목록을 무한스크롤로 구현

### 문제 해결 
