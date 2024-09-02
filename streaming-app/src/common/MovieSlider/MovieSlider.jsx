import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="movie-slide-container">
      <h3 className="slide-title">{title}</h3>
      <Carousel
        infinite={true}
        responsive={responsive}
        draggable={true}
        showDots={true}
        containerClass="carousel-container"
        sliderClass="slider-class"
        itemClass="item-class"
        dotListClass="custom-dot-list-style"
      >
        {movies?.map((movie, idx) => (
          <MovieCard movie={movie} key={idx} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
