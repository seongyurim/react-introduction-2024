import React, { useState } from 'react';
import './ReviewBox.style.css';
import authorDefaultImg from '../../../../asset/profile_default.jpg';

const ReviewBox = ({ review }) => {
  // const [profileImg, setProfileImg] = useState(authorDefaultImg);
  const profileImg = review.author_details.avatar_path
    ? `https://media.themoviedb.org/t/p/w90_and_h90_face${review.author_details.avatar_path}`
    : authorDefaultImg;

  return (
    <div className='review-box-container'>
      <div className='review-author'>{review.author}</div>
      <div className='review-'>{review.content}</div>
      <div className='review-'>{review.created_at}</div>
      <div className='review-'>{review.updated_at}</div>
      <div className='review-'>{review.author_details.rating}</div>
      <div className='review-author-img' style={{backgroundImage: `url(${profileImg})`}}></div>
    </div>
  );
};

export default ReviewBox;
