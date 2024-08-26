import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTopRatedMovies = () => {
  return api.get('/movie/top_rated', {
    params: {
      language: 'ko'
    }
  });
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey:['movie-top-rated'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data
  });
};