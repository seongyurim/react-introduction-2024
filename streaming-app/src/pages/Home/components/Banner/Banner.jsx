import React, { useEffect, useState } from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { truncateText } from '../../../../utils/textUtil';
import { WORD_LIMIT } from '../../../../constants/constants';
import { useNavigate } from "react-router-dom";
import PreviewModal from '../../../../common/PreviewModal/PreviewModal';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import { showGenre } from '../../../../utils/genreUtil';
import './Banner.style.css';


const Banner = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncable, setIstruncable] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const mainItem = data?.results[randomIndex];
  console.log("Banner's mainItem:", mainItem);
  const posterUrl = `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${mainItem?.backdrop_path}`;

  const { data:genreData } = useMovieGenreQuery();
  // console.log("Home Banner's genre:", genreData);

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
      setIstruncable(words.length > WORD_LIMIT);
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

  return (
    <div className='banner-container'>
      <div className='banner-wrapper' style={{backgroundImage: `url(${posterUrl})`}}>
        <div className='item-info-area'>
          <h1 className='item-title'>{mainItem.title}</h1>
          <div className='banner-genres'>
            {showGenre(mainItem.genre_ids, genreData).map((id, idx) => <div key={idx} className='banner-movie-genre'>{id}</div>)}
          </div>
          <p className='item-desc'>
            {isExpanded ? mainItem.overview : truncateText(mainItem.overview)}
            {isTruncable && (
              <span onClick={() => setIsExpanded(!isExpanded)} className='read-more-btn'>
                {isExpanded ? '접기' : '더보기'}
              </span>
            )}
          </p>
          <div className='banner-btns'>
            <button className='basic-btn preview-btn' onClick={() => setModalShow(true)}>
              <FontAwesomeIcon icon={faPlay} className='btn-icon'/>
              <span className='preview-btn-text'>예고편</span>
            </button>
            <button className='basic-btn detail-btn' onClick={() => navigate(`/movies/${mainItem.id}`)}>
              <FontAwesomeIcon icon={faCircleInfo} className='btn-icon detail-btn-icon'/>
              <span className='preview-btn-text'>상세정보</span>
            </button>
          </div>
        </div>
      </div>

      <PreviewModal show={modalShow} onHide={() => setModalShow(false)} movie={mainItem}/>
    </div>
  );
};

export default Banner;
