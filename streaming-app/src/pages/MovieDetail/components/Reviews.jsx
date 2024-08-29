import React from 'react';
import LoadingSpinner from '../../../common/LoadingSpinner/LoadingSpinner';
import { useMovieReviewQuery } from '../../../hooks/useMovieReview';
import ReviewBox from './ReviewBox/ReviewBox';
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
      <h3>리뷰</h3>
      {(data.length === 0) ? (
        <div>이 영화에는 리뷰가 아직 없어요.</div>
      ) : (
        data.map((review, idx) => (
          <ReviewBox review={review} key={idx} />
        ))
      )}
    </div>
  );
};

export default Reviews;
