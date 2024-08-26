import React from 'react';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from "../../../../constants/responsive";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  // console.log("UpcomingMovieSlide's data:", data);

  if (isLoading) {
    return <h1>UpcomingMovieSlide Loading...</h1>;
  }

  if (isError) {
    console.log("UpcomingMovieSlide Error Message:", error.message);
  }

  return (
    <div>
      <MovieSlider
        title='개봉을 기다리는 기대작들'
        movies={data?.results}
        responsive={responsive}
        />
    </div>
  );
};

export default UpcomingMovieSlide;