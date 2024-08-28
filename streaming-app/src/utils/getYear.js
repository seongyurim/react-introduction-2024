// 개봉일(yyyy-mm-dd)에서 연도 추출
export const getYear = (fullDate) => {
  let date = new Date(fullDate);
  let year = date.getFullYear();
  return year;
}