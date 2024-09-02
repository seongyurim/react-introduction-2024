import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMoviePreview = async ({ queryKey }) => {
  const id = queryKey[1];

  // 1차 시도: 한국어로 가져오기
  const response = await api.get(`/movie/${id}/videos`, {
    params: {
      language: 'ko'
    }
  });

  // 2차 시도: 한국어가 없으면 원어로 가져오기
  if (response.data.results.length === 0) {
    const defaultResponse = await api.get(`/movie/${id}/videos`);
    return defaultResponse;
  }

  return response;
}

export const useMoviePreviewQuery = (id) => {
  return useQuery({
    queryKey: ['movie-preview', id],
    queryFn: fetchMoviePreview,
    select: (result) => result.data.results[0]
  });
};