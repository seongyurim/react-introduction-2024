import React from 'react';
import LoadingSpinner from '../../../common/LoadingSpinner/LoadingSpinner';
import MovieSlider from '../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../constants/responsive';
import { useRelatedMoviesQuery } from '../../../hooks/useRelatedMovies';

const RelatedMoviesSlide = ({ id }) => {
  const { data, isLoading, isError, error } = useRelatedMoviesQuery(id);
  // console.log("useRelatedMoviesQuery's data:", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("useRelatedMoviesQuery Error Message:", error.message);
  }
  
  return (
    <div>
      {(data?.results.length !== 0) && (
        <MovieSlider
          title='추천! 이 영화와 비슷한 작품들'
          movies={data?.results}
          responsive={responsive}
        />
      )}
    </div>
  );
};

export default RelatedMoviesSlide;