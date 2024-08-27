import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMedia = ({ keyword, page }) => {
  return keyword
    ? api.get('/search/movie', {
      params: {
        language: 'ko',
        query: keyword,
        page
      }
    })
    : api.get('/movie/popular?', {
      params: {
        language: 'ko',
        page
      }
    });
};

export const useSearchMediaQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['media-search', { keyword, page }],
    queryFn: () => fetchSearchMedia({ keyword, page }),
    select: (result) => result.data
  });
};