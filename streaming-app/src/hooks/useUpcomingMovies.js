import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovies = () => {
  return api.get('/movie/upcoming', {
    params: {
      language: 'ko'
    }
  });
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey:['movie-upcoming'],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data
  });
};