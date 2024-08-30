import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page, genre }) => {
  const params = {
    language: 'ko',
    query: keyword,
    page,
    ...(genre && { with_genres: genre }),
  };

  const endpoint =
    keyword
      ? '/search/movie' // 키워드가 있는 경우
      : genre
        ? '/discover/movie' // 키워드가 없고, 장르만 있는 경우
        : '/movie/popular'; // 키워드와 장르가 모두 없는 경우

  // console.log('Fetching data from:', endpoint, 'with params:', params);
  return api.get(endpoint, { params });
};

export const useSearchMediaQuery = ({ keyword, page, genre }) => {
  return useQuery({
    queryKey: ['media-search', { keyword, page, genre }],
    queryFn: () => fetchSearchMovie({ keyword, page, genre }),
    select: (result) => result.data
  });
};