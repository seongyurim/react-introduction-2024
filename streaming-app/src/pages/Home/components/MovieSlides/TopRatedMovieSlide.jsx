import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  // console.log("TopRatedMovieSlide's data:", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("TopRatedMovieSlide Error Message:", error.message);
  }

  return (
    <div>
      <MovieSlider
        title='시간이 지나도 빛나는 명작'
        movies={data?.results}
        responsive={responsive}
        />
    </div>
  );
};

export default TopRatedMovieSlide;