import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchRelatedMovies = ({ queryKey }) => {
  const id = queryKey[1];
  return api.get(`/movie/${id}/recommendations`, {
    params: {
      language: 'ko'
    }
  });
}

export const useRelatedMoviesQuery = (id) => {
  return useQuery({
    queryKey: ['movie-related', id],
    queryFn: fetchRelatedMovies,
    select: (result) => result.data
  });
};