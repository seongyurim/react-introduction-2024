import React, { useEffect, useState } from 'react';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import Reviews from './components/Reviews/Reviews';
import RelatedMoviesSlide from './components/RelatedMoviesSlide';
import Footer from '../../common/Footer/Footer';
import DetailBanner from './components/DetailBanner/DetailBanner';
import './MovieDetailPage.style.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log("id:", id);
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  // console.log("useMovieDetailQuery's data:", data);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    console.log("useMovieDetailQuery Error Message:", error.message);
  }

  return (
    <div className='movie-detail-container'>
      <DetailBanner data={data} />
      <div className='movie-bottom-info'>
        <RelatedMoviesSlide id={id} className='related-movie-slider-container'/>
        <Reviews id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailPage;