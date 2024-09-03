import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { getYear } from '../../../../utils/dateUtil';
import { truncateText } from '../../../../utils/textUtil';
import { WORD_LIMIT } from '../../../../constants/constants';
import PreviewModal from '../../../../common/PreviewModal/PreviewModal';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import './DetailBanner.style.css';

const DetailBanner = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncable, setIstruncable] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isImageLoad, setIsImageLoad] = useState(false);

  useEffect(() => {
    if (movie && movie.overview) {
      const words = movie.overview.split(' ');
      setIstruncable(words.length > WORD_LIMIT);
    }
  }, [movie]);

  const handleImageLoad = () => {
    setIsImageLoad(true);
  }

  return (
    <div className='movie-detail-banner-container'>
      {(!isImageLoad) && <LoadingSpinner />}
      <div className='detail-bg-wrapper'>
        <div className='detail-bg' style={{backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${movie?.backdrop_path}')`}}></div>
        <div className='detail-article'>
          <div className='detail-left-section'>
            <div className='detail-badges-wrapper'>
              {(movie?.release_date !== '') && (<div className='detail-badges'>{getYear(movie?.release_date)}</div>)}
              {(movie?.runtime !== 0) && (<div className='detail-badges'>{movie?.runtime}분</div>)}
              <div className='detail-vote-average'>
                <div className='detail-badges'>
                  <FontAwesomeIcon icon={faStar} className='star-icon' />
                  <span className='vote-score'>{movie?.vote_average.toFixed(1)}</span>
                </div>
              </div>
              <div className='detail-popularity'>
                <div className='detail-badges'>
                  <FontAwesomeIcon icon={faHeart} className='heart-icon' />
                  <span className='pop-score'>{Math.round(movie?.popularity)}</span>
                </div>
              </div>
            </div>
            <h1 className='detail-title'>{movie?.title}</h1>
            {(movie?.tagline) && (
              <p className='detail-tagline'>{movie?.tagline}</p>
            )}
            <p className='detail-overview'>
              {isExpanded ? movie?.overview : truncateText(movie?.overview)}
              {isTruncable && (
                <span onClick={() => setIsExpanded(!isExpanded)} className='read-more-btn'>
                  {isExpanded ? '접기' : '더보기'}
                </span>
              )}
            </p>
            <div className='detail-genre-box'>
              {movie?.genres.map((item, idx) => <div className='detail-genre' key={idx}>{item.name}</div>)}
            </div>
            <button className='basic-btn preview-btn'>
              <FontAwesomeIcon icon={faPlay} className='btn-icon'/>
              <span className='preview-btn-text' onClick={() => setModalShow(true)}>예고편</span>
            </button>
          </div>
          <div className='detail-right-section'>
            <img className='detail-poster' src={`https://www.themoviedb.org/t/p/w600_and_h900_multi_faces${movie?.poster_path}`} alt={movie?.title} onLoad={handleImageLoad}/>
          </div>
        </div>
      </div>

      <PreviewModal show={modalShow} onHide={() => setModalShow(false)} movie={movie}/>
    </div>
  );
};

export default DetailBanner;
