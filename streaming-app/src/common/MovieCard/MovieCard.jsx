import React, { useState } from 'react';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.style.css';

const MovieCard = ({ movie, className = '' }) => {
  const posterUrl = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  const { data:genreData } = useMovieGenreQuery();
  // console.log("genre:", genreData);

  // 영화 장르 아이디를 문자열로 변경
  // ex. genreIdList(movie.genre_ids): [28, 53]
  // ex. genreData: [{id:28, name:'액션'}, {id:53, name:'드라마'}, ...]
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id)
      return genreObj.name;
    });
    return genreNameList;
  }

  // 개봉일에서 연도만 추출
  const getYear = (releaseDate) => {
    let date = new Date(releaseDate);
    let year = date.getFullYear();
    return year;
  }

  return (
    <div
      style={{backgroundImage: `url(${posterUrl})`}}
      className={`movie-card-container ${className}`}
    >
      <div className='card-overlay'>
        <div className='card-overlay-top'>
          <h1 className='movie-title'>{movie.title}</h1>
          <div className='movie-vote-average'>
            <FontAwesomeIcon icon={faStar} className='star-icon' />
            <span className='vote-score'>{movie.vote_average.toFixed(1)}</span>
          </div>
          <div className='movie-popularity'>
            <FontAwesomeIcon icon={faHeart} className='heart-icon' />
            <div className='pop-score'>{Math.round(movie.popularity)}</div>
          </div>
        </div>
        <div className='card-overlay-bottom'>
          <div className='movie-release-year'>{getYear(movie.release_date)}</div>
          <div className='genres'>
            {showGenre(movie.genre_ids).map((id, idx) => <div key={idx} className='movie-genre'>{id}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;