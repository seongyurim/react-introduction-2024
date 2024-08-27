import React, { useState } from "react";
import { useSearchMediaQuery } from "../../hooks/useSearchMedia";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import "./MoviePage.style.css";
import GenreSlider from "./components/GenreSlider";
import { responsiveGenre } from '../../constants/responsiveGenre';
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data:searchData, isLoading, isError, error } = useSearchMediaQuery({ keyword, page });
  // console.log("useSearchMediaQuery's searchData:", searchData);

  const { data: genreData } = useMovieGenreQuery();
  // console.log("useSearchMediaQuery's genreData:", genreData);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    console.log("MoviePage Error Message:", error.message);
  }

  const handlePageClick = ({ selected }) => {
    console.log("setPage before:", page);
    setPage(selected + 1);
    console.log("setPage after:", page);
  };

  return (
    <div className="movie-container">
      <div className="movie-top">
        <GenreSlider genres={genreData} responsive={responsiveGenre} />
      </div>
      <div className="movie-bottom">
        <div className="results-area">
          {searchData?.results.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} className="movie-card" />
          ))}
        </div>
        <ReactPaginate
          pageCount={searchData?.total_pages > 50 ? 50 : searchData?.total_pages} // 전체 페이지 수
          forcePage={page - 1} // 현재 페이지
          previousLabel=""
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          renderOnZeroPageCount={null}
          
          containerClassName="pagination" // 전체 컨테이너 css
          pageClassName="page-item" // 각 페이지 아이템(li) css
          previousClassName="page-item prev-btn" // 이전 버튼(li) css
          nextClassName="page-item next-btn" // 다음 버튼(li) css
          breakClassName="page-item" // 구분자(...)(li) css

          pageLinkClassName="page-link" // 각 페이지 링크(a) css
          previousLinkClassName="page-link" // 이전 버튼 링크(a) css
          nextLinkClassName="page-link" // 다음 버튼 링크(a) css
          breakLinkClassName="page-link" // 구분자(...) 링크(a) css

          activeClassName="page-active" // 현재 활성화된 페이지 css
          disabledClassName="page-disabled" // 비활성화된 버튼 css
        />
      </div>
    </div>
  );
};

export default MoviePage;
