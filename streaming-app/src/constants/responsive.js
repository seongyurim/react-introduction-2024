// 영화 슬라이더
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1500 },
    items: 7,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

// 장르 슬라이더
export const genreResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1500 },
    items: 12,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4
  }
};