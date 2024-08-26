import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from "../../../../constants/responsive";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  console.log("TopRatedMovieSlide's data:", data);

  if (isLoading) {
    return <h1>TopRatedMovieSlide Loading...</h1>;
  }

  if (isError) {
    console.log("TopRatedMovieSlide Error Message:", error.message);
  }

  return (
    <div>
      <MovieSlider
        title='오래도록 사랑받는 영화'
        movies={data?.results}
        responsive={responsive}
        />
    </div>
  );
};

export default TopRatedMovieSlide;