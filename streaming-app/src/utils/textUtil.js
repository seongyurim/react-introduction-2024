import { WORD_LIMIT } from "../constants/constants";  
  
  // 문단이 wordLimit보다 길면 생략
  export const truncateText = (text, wordLimit = WORD_LIMIT) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  }