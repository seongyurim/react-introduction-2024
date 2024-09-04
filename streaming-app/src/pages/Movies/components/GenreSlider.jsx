import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./GenreSlider.style.css";

const GenreSlider = ({ genres, responsive, selectedGenre, setSelectedGenre }) => {
  // console.log("genres:", genres);
  // console.log("selectedGenre:", selectedGenre);
  
  const navigate = useNavigate();

  const handleClick = (item) => {
    setSelectedGenre(item);
    navigate(`/movies?genre=${item.name}`);
  }
  
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
          <div
            className={`genre-badge ${selectedGenre?.id == item.id ? 'genre-active' : ''}`}
            onClick={() => handleClick(item)} key={idx}
          >
            {item.name}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GenreSlider;