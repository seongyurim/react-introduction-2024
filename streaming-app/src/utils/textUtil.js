import { WORD_LIMIT } from "../constants/constants";  
  
  // 영화 소개글이 wordLimit보다 길면 생략
  export const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length <= WORD_LIMIT) return text;
    return words.slice(0, WORD_LIMIT).join(' ') + '...';
  }