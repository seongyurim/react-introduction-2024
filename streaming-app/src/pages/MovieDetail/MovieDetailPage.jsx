import React, { useEffect, useState } from 'react';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { getYear } from '../../utils/dateUtil';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { truncateText } from '../../utils/textUtil';
import { WORD_LIMIT } from '../../constants/constants';
import './MovieDetailPage.style.css';
import Reviews from './components/Reviews';

const MovieDetailPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncable, setIstruncable] = useState(false);
  const { id } = useParams();
  console.log("id:", id);
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  // console.log("useMovieDetailQuery's data:", data);

  useEffect(() => {
    if (data && data.overview) {
      const words = data.overview.split(' ');
      setIstruncable(words.length > WORD_LIMIT);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    console.log("useMovieDetailQuery Error Message:", error.message);
  }

  return (
    <div className='movie-detail-container'>
      <div
        className='detail-bg-wrapper'
        style={{backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${data?.backdrop_path}')`}}>
        <div className='detail-article'>
          <div className='detail-left-section'>
            <div className='detail-badges-wrapper'>
              <div className='detail-badges'>{getYear(data?.release_date)}</div>
              <div className='detail-badges'>{data?.runtime}분</div>
              <div className='detail-vote-average'>
                <div className='detail-badges'>
                  <FontAwesomeIcon icon={faStar} className='star-icon' />
                  <span className='vote-score'>{data?.vote_average.toFixed(1)}</span>
                </div>
              </div>
              <div className='detail-popularity'>
                <div className='detail-badges'>
                  <FontAwesomeIcon icon={faHeart} className='heart-icon' />
                  <span className='pop-score'>{Math.round(data?.popularity)}</span>
                </div>
              </div>
            </div>
            <h1 className='detail-title'>{data?.title}</h1>
            <p className='detail-tagline'>{data?.tagline}</p>
            <p className='detail-overview'>
              {isExpanded ? data?.overview : truncateText(data?.overview)}
              {isTruncable && (
                <span onClick={() => setIsExpanded(!isExpanded)} className='read-more-btn'>
                  {isExpanded ? '접기' : '더보기'}
                </span>
              )}
            </p>
            <div className='detail-genre-box'>
              {data?.genres.map((item, idx) => <div className='detail-genre' key={idx}>{item.name}</div>)}
            </div>
            <button className='basic-btn preview-btn'>
              <FontAwesomeIcon icon={faPlay} className='btn-icon'/>
              <span className='preview-btn-text'>예고편 감상</span>
            </button>
          </div>
          <div className='detail-right-section'>
            <img className='detail-poster' src={`https://www.themoviedb.org/t/p/w600_and_h900_multi_faces${data?.poster_path}`} alt={data?.title} />
          </div>
        </div>
      </div>
      <Reviews id={id} />
    </div>
  );
};

export default MovieDetailPage;