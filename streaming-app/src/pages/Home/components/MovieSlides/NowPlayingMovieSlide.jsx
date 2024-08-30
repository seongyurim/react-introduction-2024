import React from 'react';
import { useNowPlayingMoviesQuery } from '../../../../hooks/useNowPlayingMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';

const NowPlayingMovieSlide = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();
  // console.log("useNowPlayingMoviesQuery's data:", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("useNowPlayingMoviesQuery Error Message:", error.message);
  }

  return (
    <div>
      <MovieSlider
        title='지금 극장에서 만나볼 수 있는 영화들'
        movies={data?.results}
        responsive={responsive}
        />
    </div>
  );
};

export default NowPlayingMovieSlide;