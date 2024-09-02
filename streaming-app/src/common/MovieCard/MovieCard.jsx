import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { getYear } from '../../utils/dateUtil';
import { showGenre } from '../../utils/genreUtil';
import './MovieCard.style.css';

const MovieCard = ({ movie, className = '' }) => {
  const navigate = useNavigate();
  const posterUrl = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  const { data:genreData } = useMovieGenreQuery();
  // console.log("MovieCard's genre:", genreData);

  return (
    <div
      style={{backgroundImage: `url(${posterUrl})`}}
      className={`movie-card-container ${className}`}
      onClick={() => navigate(`/movies/${movie.id}`)}
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
            {showGenre(movie.genre_ids, genreData).map((id, idx) => <div key={idx} className='movie-genre'>{id}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;