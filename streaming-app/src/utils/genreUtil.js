// 영화 장르 아이디를 문자열로 변경
// ex. genreIdList(movie.genre_ids): [28, 53]
// ex. genreData: [{id:28, name:'액션'}, {id:53, name:'드라마'}, ...]
export const showGenre = (genreIdList, genreData) => {
  if (!genreData) return [];
  const genreNameList = genreIdList.map((id) => {
    const genreObj = genreData.find((genre) => genre.id === id);
    return genreObj ? genreObj.name : 'Unknown';
  });
  return genreNameList;
};