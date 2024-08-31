import React, { useEffect, useState } from 'react';
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceTired } from '@fortawesome/free-regular-svg-icons';
import './NotFoundPage.style.css';

const NotFoundPage = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // console.log("usePopularMoviesQuery in not-found-pages's data:", data);
  const mainItem = data?.results[randomIndex];
  console.log('mainItem in not-found-pages:', mainItem);
  const posterUrl = `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${mainItem?.backdrop_path}`;
  const navigate = useNavigate();

  // 배너 작품 랜덤으로 보여주기: 0~19 사이의 난수 생성
  useEffect(() => {
    if (data && data.results) {
      const newIndex = Math.floor(Math.random() * data?.results?.length);
      setRandomIndex(newIndex);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("useRelatedMoviesQuery Error Message:", error.message);
  }

  return (
    <div className='not-found-container'>
      <div style={{backgroundImage: `url(${posterUrl})`}} className='not-found-movie-img' />
      <button className='not-found-logo' onClick={() => navigate('/')}>NETFLIP</button>
      <div className='not-found-txt-area'>
        <FontAwesomeIcon icon={faFaceTired} className='not-found-icon'/>
        <h1 className='not-found-title'>이런! 해당 페이지를 찾을 수 없습니다.</h1>
        <div className='not-found-desc'>
          <p>하지만 넷플립에는 더욱 다양하고 흥미로운</p>
          <p>영화 콘텐츠가 준비되어 있습니다.</p>
          <p>지금 바로 만나보세요!</p>
          <button className='not-found-home-btn' onClick={() => navigate('/')}>넷플립 홈으로 가기</button>
        </div>
      </div>
      <div className='not-found-movie-info' onClick={() => navigate(`/movies/${mainItem?.id}`)}>
        '<em>{mainItem?.title}</em>'의 영화 소개 포스터
      </div>
    </div>
  );
};

export default NotFoundPage;