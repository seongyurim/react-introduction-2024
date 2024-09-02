import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { useMoviePreviewQuery } from '../../hooks/useMoviePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './PreviewModal.style.css';

const PreviewModal = ({ show, onHide, movie }) => {
  const modalBackOverlay = useRef(null);
  const [isMounted, setIsMounted] = useState(show);
  const [isVisible, setIsVisible] = useState(false);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      autohide: 1,
      rel: 1,
      modestbranding: 1,
    },
  };

  const { data, isLoading, isError, error } = useMoviePreviewQuery(movie.id);
  // console.log("useMoviePreviewQuery's data:", data);

  // 트랜지션 동작 이후에 DOM에서 요소 추가/제거
  useEffect(() => {
    if (show) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 400);
    }
    else {
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 400);
    }
  }, [show]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    console.log("PreviewModal Error Message:", error.message);
  }

  return (
    <div>
      {isMounted && (
        <div className={`modal-container ${isVisible ? 'show' : ''}`} ref={modalBackOverlay} onClick={event => {
          if (event.target === modalBackOverlay.current) {
            onHide();
            setIsVisible(false);
          }
        }}>
          {data ? (
            <div className={`modal-video-wrapper ${isVisible ? 'show' : ''}`}>
              <FontAwesomeIcon icon={faXmark} className='modal-close-btn' onClick={() => onHide() }/>
              <YouTube videoId={data?.key} opts={opts} className='youtube-frame' />
            </div>
          ) : (
            <div className={`modal-error-wrapper ${isVisible ? 'show' : ''}`} onClick={() => onHide()}>
              <FontAwesomeIcon icon={faCircleExclamation} className='modal-error-icon'/>
              <div className='modal-error-txt'>
                <p>죄송합니다.</p>
                <p>해당 영화는 예고편 정보가 존재하지 않습니다.</p>
              </div>
            </div>

          )}
        </div>
      )}
    </div>
  );
};

export default PreviewModal;