import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import GenreSlider from "./components/GenreSlider";
import Footer from "../../common/Footer/Footer";
import { genreResponsive } from "../../constants/responsive";
import { useSearchMediaQuery } from "../../hooks/useSearchMedia";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./MoviePage.style.css";

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const genreParam = query.get('genre');
  const location = useLocation(); // 현재 경로 가져오기
  const [selectedGenre, setSelectedGenre] = useState(null);
  // console.log("selectedGenre:", selectedGenre);

  const {
    data: searchData,
    isLoading,
    isError,
    error,
  } = useSearchMediaQuery({ keyword, page, genre:selectedGenre?.id || genreParam });
  // console.log("useSearchMediaQuery's searchData:", searchData);

  const { data:genreData } = useMovieGenreQuery();
  // console.log("useSearchMediaQuery's genreData:", genreData);

  // 내비게이션에 있는 장르 페이지 보여주기
  useEffect(() => {
    if (genreParam) {
      const genre = genreData?.find(g => g.name === genreParam);
      setSelectedGenre(genre);
    }
  }, [genreParam, genreData]);

  // 장르 페이지를 벗어나 내비에서 /movies로 이동하면 장르 상태 초기화
  useEffect(() => {
    if (!genreParam) {
      setSelectedGenre(null);
    }
  }, [location]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.log("MoviePage Error Message:", error.message);
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    // console.log("handlePageClick:", page);
  };

  return (
    <div className="movie-container">
      <div className="movie-top">
        <div className="movie-top-info">
          {keyword
            ? `'${keyword}' 검색 결과: 총 ${searchData?.total_results}건`
            : selectedGenre
              ? `'${selectedGenre.name}' 장르의 영화를 보여드릴게요.`
              : `취향 저격! 오늘의 영화 추천 리스트`}
        </div>
        <GenreSlider
          genres={genreData}
          responsive={genreResponsive}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>
      <div className="movie-bottom">
        <div className="results-area">
          {searchData?.results.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} className="movie-card" />
          ))}
        </div>
        <ReactPaginate
          pageCount={
            searchData?.total_pages > 50 ? 50 : searchData?.total_pages
          } // 전체 페이지 수
          forcePage={page - 1} // 현재 페이지
          previousLabel=""
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
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
      <Footer />
    </div>
  );
};

export default MoviePage;
