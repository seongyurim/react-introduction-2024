// 개봉일(yyyy-mm-dd)에서 연도 추출
export const getYear = (fullDate) => {
  if (fullDate === '') return;
  let date = new Date(fullDate);
  let year = date.getFullYear();
  return year;
}

// ISO 형식의 날짜 문자열 커스텀
// 기존: 2024-06-06T19:47:54.037Z
// 변경: 2024-06-06 19:47
export const formatDateToSimpleString = (isoDate) => {
  const date = new Date(isoDate);

  // UTC를 KST로 변환
  date.setHours(date.getHours() + 9);

  const year = date.getFullYear();
  const month = String(date.getMonth() +1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedDate;
}