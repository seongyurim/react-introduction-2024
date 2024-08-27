import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./GenreSlider.style.css";

const GenreSlider = ({ genres, responsive }) => {
  console.log("genres:", genres);
  return (
    <div className="genre-slider-container">
      <Carousel
        infinite={true}
        responsive={responsive}
        draggable={true}
        showDots={true}
        containerClass="genre-carousel-container"
        sliderClass="genre-slider-class"
        itemClass="genre-item-class"
        dotListClass="genre-custom-dot-list-style"
      >
        {genres?.map((item, idx) => (
          <div className='genre-badge' key={idx}>{item.name}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default GenreSlider;