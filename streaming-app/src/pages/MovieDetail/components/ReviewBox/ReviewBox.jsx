import React, { useState, useEffect } from 'react';
import authorDefaultImg from '../../../../asset/profile_default.jpg';
import { formatDateToSimpleString } from '../../../../utils/dateUtil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { truncateText } from '../../../../utils/textUtil';
import { REVIEW_WORD_LIMIT } from '../../../../constants/constants';
import './ReviewBox.style.css';

const ReviewBox = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncable, setIstruncable] = useState(false);
  const formattedCreatedDate = formatDateToSimpleString(review.created_at);
  const formattedUpdatedDate = formatDateToSimpleString(review.updated_at);
  const areDatesDifferent = formattedCreatedDate !== formattedUpdatedDate;
  const profileImg = review.author_details.avatar_path
    ? `https://media.themoviedb.org/t/p/w90_and_h90_face${review.author_details.avatar_path}`
    : authorDefaultImg;

  useEffect(() => {
    if (review && review.content) {
      const words = review.content.split(' ');
      setIstruncable(words.length > REVIEW_WORD_LIMIT);
    }
  }, [review]);


  return (
    <div className='review-box-container'>
      <div className='review-author-img' style={{backgroundImage: `url(${profileImg})`}}></div>
      <div className='review-author-info'>
        <div className='review-author-id'>{review.author}</div>
        {review.author_details.rating && (
          <span className='review-rating'>
            <FontAwesomeIcon icon={faStar} className='star-icon' />
            <span className='reiview-rating-score'>{review.author_details.rating}</span>
          </span>
        )}
      </div>
      <div className='review-author-content'>
        {isExpanded ? review?.content : truncateText(review?.content, REVIEW_WORD_LIMIT)}
        {isTruncable && (
          <div onClick={() => setIsExpanded(!isExpanded)} className='read-more-btn-review'>
            {isExpanded
              ? <><FontAwesomeIcon icon={faChevronUp} className='read-more-btn-arrow'/> 접기</>
              : <><FontAwesomeIcon icon={faChevronDown} className='read-more-btn-arrow'/> 더보기</>
            }
          </div>
        )}
      </div>
      <div className='review-author-date'>
        <div className='review-created-at'>
          <div className='review-date-desc'>Created at</div>
          {formattedCreatedDate}
        </div>
        {areDatesDifferent && (
          <div className='review-updated-at'>
            <div className='review-date-desc'>Updated at</div>
            {formattedUpdatedDate}
            </div>
        )}
      </div>
    </div>
  );
};

export default ReviewBox;
