import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // console.log("PopularMovieSlide's data:", data);

  if (isLoading) {
    return <h1>PopularMovieSlide Loading...</h1>;
  }

  if (isError) {
    console.log("PopularMovieSlide Error Message:", error.message);
  }

  return (
    <div>
      <MovieSlider
        title='지금 가장 핫한 TOP 20 영화'
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;