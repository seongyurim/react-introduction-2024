import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // console.log("PopularMovieSlide's data:", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("PopularMovieSlide Error Message:", error.message);
  }

  return (
    <div>
      <MovieSlider
        title='요즘 가장 주목받는 TOP 20 영화'
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;