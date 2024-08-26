import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/MovieSlides/PopularMovieSlide';
import TopRatedMovieSlide from './components/MovieSlides/TopRatedMovieSlide';
import UpcomingMovieSlide from './components/MovieSlides/UpcomingMovieSlide';
import Footer from '../../common/Footer/Footer';

const HomePage = () => {
  return (
    <div className='home-container'>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
      <Footer />
    </div>
  );
};

export default HomePage;
