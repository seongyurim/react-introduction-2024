import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMovieReview = ({ queryKey }) => {
  const id = queryKey[1];
  return api.get(`/movie/${id}/reviews`);
}

export const useMovieReviewQuery = (id) => {
  return useQuery({
    queryKey: ['movie-review', id],
    queryFn: fetchMovieReview,
    select: (result) => result.data.results
  });
};