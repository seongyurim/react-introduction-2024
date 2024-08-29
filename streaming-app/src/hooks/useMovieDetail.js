import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMovieDetail = ({ queryKey }) => {
  const id = queryKey[1];
  return api.get(`/movie/${id}`, {
    params: {
      language: 'ko'
    }
  });
}

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ['movie-detail', id],
    queryFn: fetchMovieDetail,
    select: (result) => result.data
  });
};