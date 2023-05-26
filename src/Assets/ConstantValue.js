import {
  dailypopularMovieData,
  krMovieData,
  nowPlayingMovieData,
  popularMovieData,
  weeklypopularMovieData,
} from '../API/movie';

export const STAR_POINT_INITIAL_NUMBER = 0.0;
export const YEAR_LENGTH_LIMIT = 4;
export const TEXT_LENGTH_LIMIT = 12;
export const STORY_LENGTH_LIMIT = 80;
export const GENRE_LIST = [
  { name: '액션', id: 28 },
  { name: '모험', id: 12 },
  { name: '애니메이션', id: 16 },
  { name: '코미디', id: 35 },
  { name: '범죄', id: 80 },
  { name: '다큐멘터리', id: 99 },
  { name: '드라마', id: 18 },
  { name: '가족', id: 10751 },
  { name: '판타지', id: 14 },
  { name: '역사', id: 36 },
  { name: '공포', id: 27 },
  { name: '음악', id: 10402 },
  { name: '미스터리', id: 9648 },
  { name: '로맨스', id: 10749 },
  { name: '과학 소설', id: 878 },
  { name: 'TV 영화', id: 10770 },
  { name: '스릴러', id: 53 },
  { name: '전쟁', id: 10752 },
  { name: '서부', id: 37 },
];
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const MOVIE_LENGTH_LIMIT = 10;
export const CAROUSEL_LENGTH_LIMIT = 5;
export const CATEGORY = {
  'TOP 10': { func: popularMovieData(API_KEY), title: '인기' },
  주간: { func: weeklypopularMovieData(API_KEY), title: '인기' },
  일간: { func: dailypopularMovieData(API_KEY), title: '인기' },
  '상영 중인': { func: nowPlayingMovieData(API_KEY), title: '' },
  한국: { func: krMovieData(API_KEY), title: '에서 인기있는' },
};
export const BACKDROP_IMG_URL = `https://image.tmdb.org/t/p/w1280`;
export const CAROUSEL_DELAY = 6000;
export const TRANSITION_TIME = 500;
