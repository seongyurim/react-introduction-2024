import './Banner.style.css';
import React, { useEffect, useState } from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';


const Banner = () => {
  const wordLimit = 25; // 영화 소개글을 축약할 단어 갯수 기준값
  const [randomIndex, setRandomIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncable, setIstruncable] = useState(false);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const mainItem = data?.results[randomIndex];
  const posterUrl = `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${mainItem?.backdrop_path}`;

  // 배너 작품 랜덤으로 보여주기: 0~19 사이의 난수 생성
  useEffect(() => {
    if (data && data.results) {
      const newIndex = Math.floor(Math.random() * data?.results?.length);
      setRandomIndex(newIndex);
    }
  }, [data]);

  // 축약 가능 여부를 통해 '더보기' 버튼 디스플레이 여부 결정
  useEffect(() => {
    if (mainItem && mainItem.overview) {
      const words = mainItem.overview.split(' ');
      setIstruncable(words.length > wordLimit);
    }
  }, [mainItem]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    console.log("Banner Error Message:", error.message);
  }

  if (!data || !data.results) {
    return <h1>데이터를 불러올 수 없습니다.</h1>;
  }
  
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  }

  return (
    <div className='banner-container'>
      <div className='banner-wrapper' style={{backgroundImage: `url(${posterUrl})`}}>
        <div className='item-info-area'>
          <h1 className='item-title'>{mainItem.title}</h1>
          <p className='item-desc'>
            {isExpanded ? mainItem.overview : truncateText(mainItem.overview)}
            {isTruncable && (
              <span onClick={() => setIsExpanded(!isExpanded)} className='read-more-btn'>
                {isExpanded ? '접기' : '더보기'}
              </span>
            )}
          </p>
          <button className='preview-btn'>
            <FontAwesomeIcon icon={faPlay} className='preview-btn-icon'/>
            <span className='preview-btn-text'>Preview</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
