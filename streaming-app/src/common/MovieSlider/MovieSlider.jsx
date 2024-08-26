import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.style.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="movie-slide-container">
      <h3 className="slide-title">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={false}
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        draggable={false}
      >
        {movies?.map((movie, idx) => (
          <MovieCard movie={movie} key={idx} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
