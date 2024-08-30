import React from 'react';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import ReviewBox from '../ReviewBox/ReviewBox';
import './Reviews.style.css';

const Reviews = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieReviewQuery(id);
  console.log("useMovieReviewQuery's data:", data);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    console.log("useMovieReviewQuery Error Message:", error.message);
  }

  return (
    <div className='reviews-container'>
      <div className='reviews-title'>
        <h3 className='reviews-title-txt'>리뷰 인사이드: 팬들이 말하는 이야기</h3>
        <span className='reviews-title-count'>({data.length})</span>
      </div>
      {(data.length === 0) ? (
        <div className='no-review'>리뷰가 아직 작성되지 않았어요.</div>
      ) : (
        data.map((review, idx) => (
          <ReviewBox review={review} key={idx} />
        ))
      )}
    </div>
  );
};

export default Reviews;
