import React, { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import { API_KEY, GENRE_LIST } from '../Assets/ConstantValue';
import Tag from '../Components/Tag';
import { movieGenreData } from '../API/movie';
import MovieCard from '../Components/MovieCard';
import useFetchMovie from '../Hooks/useFetchMovie';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import TopButton from '../Components/TopButton';
import EmptyMovie from '../Components/EmptyMovie';

function Category() {
  const [genreList, setGenreList] = useState([]);
  const [tagList, setTagList] = useState('');
  const [clickTag, setClickTag] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [emptyData, setEmptyData] = useState(false);
  const target = useRef(null);
  const isFirstRender = useRef(true);
  const { fetchData: fetchMovieData } = useFetchMovie();

  const options = {
    threshold: 1.0,
  };

  const fetchMovies = async () => {
    fetchMovieData(
      movieGenreData(
        API_KEY,
        clickTag.map(e => e.id),
        pageNum,
      ),
      data => {
        setEmptyData(false);
        if (data.results.length === 0 && genreList.length === 0) {
          setEmptyData(true);
          setIsLoading(false);
          return;
        }
        if (pageNum === 1) {
          setGenreList(data.results);
          setIsLoading(false);
          setCanLoadMore(true);
          return;
        }
        if (data.results && data.results.length > 0) {
          const newData = data.results.filter(
            newItem => !genreList.some(oldItem => oldItem.id === newItem.id),
          );
          setGenreList([...genreList, ...newData]);
          setCanLoadMore(true);
          return;
        }

        setEnd(true);
      },
    );
  };

  const onIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        if (canLoadMore) {
          setPageNum(prev => prev + 1);
          setCanLoadMore(false);
        }
      }
    });
  };

  const handleTagChange = () => {
    setGenreList([]);
    setTagList(() => {
      return clickTag
        .reduce((acc, cur) => `${acc + cur.name},`, '')
        .slice(0, -1);
    });
  };

  useEffect(() => {
    isFirstRender.current = true;
    handleTagChange();
    setEnd(false);
    setPageNum(1);
    if (pageNum === 1) {
      fetchMovies();
    }
  }, [clickTag]);

  useEffect(() => {
    setIsLoading(true);
    setEnd(false);
    fetchMovies();
  }, [pageNum]);

  useIntersectionObserver(onIntersection, options, target);

  return (
    <section id="category" className="ml-56">
      <TopButton />
      <div className="m-5">
        <TagContainer>
          {GENRE_LIST.map(e => (
            <Tag
              genre={e}
              clickTag={clickTag}
              setClickTag={setClickTag}
              key={e.id}
            />
          ))}
        </TagContainer>
      </div>
      <div className="mt-10 text-3xl font-bold text-white">
        {tagList || '태그를 클릭해주세요.'}
      </div>
      <div className="flex flex-wrap">
        {genreList && genreList.map(e => <MovieCard movie={e} key={e.id} />)}
        {emptyData && <EmptyMovie message="Please change the tag." />}
      </div>
      <div id="nextPage" ref={target} />
      {isLoading && (
        <Loading className={`${end && 'hidden'}`}>로딩중...</Loading>
      )}
    </section>
  );
}

const TagContainer = tw.div`
  flex
  flex-wrap
  justify-start
  border
  border-white
  py-5
  px-10
  rounded-3xl
`;

const Loading = tw.div`
  flex
  h-52
  items-center
  justify-center
  text-3xl
  font-bold
  text-white
`;

export default Category;
