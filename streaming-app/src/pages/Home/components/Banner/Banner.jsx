import './Banner.style.css';
import React, { useEffect, useState } from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const Banner = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const mainItem = data?.results[randomIndex];
  const posterUrl = `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${mainItem?.poster_path}`;

  useEffect(() => {
    if (data && data.results) {
      const newIndex = Math.floor(Math.random() * data?.results?.length); // 0~19 사이의 난수 생성
      setRandomIndex(newIndex);
    }
  }, [data]);

  if (isLoading) {
    <h1>잠시만 기다려주세요</h1>
  }

  if (isError) {
    <h1>{error.message}</h1>
  }

  if (!data || !data.results) {
    return <h1>데이터를 불러올 수 없습니다.</h1>;
  }

  return (
    <div className='banner-container'>
      <div className='banner-wrapper' style={{backgroundImage: `url(${posterUrl})`}}>
        <div className='item-info-area'>
          <h1 className='item-title'>{mainItem.original_title}</h1>
          <p className='item-desc'>{mainItem.overview}</p>
          <button className='preview-btn'>
            <FontAwesomeIcon icon={faPlay} className='preview-btn-icon'/>
            <span className='preview-btn-text'>Preview</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
