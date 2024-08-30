import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/MovieSlides/PopularMovieSlide';
import TopRatedMovieSlide from './components/MovieSlides/TopRatedMovieSlide';
import UpcomingMovieSlide from './components/MovieSlides/UpcomingMovieSlide';
import Footer from '../../common/Footer/Footer';
import NowPlayingMovieSlide from './components/MovieSlides/NowPlayingMovieSlide';
import './HomePage.style.css';

const HomePage = () => {
  return (
    <div className='home-container'>
      <Banner />
      <div className='home-slides'>
        <NowPlayingMovieSlide />
        <TopRatedMovieSlide />
        <PopularMovieSlide />
        <UpcomingMovieSlide />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
