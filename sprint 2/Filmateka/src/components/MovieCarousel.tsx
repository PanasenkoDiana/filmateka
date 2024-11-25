import React from 'react';
import Slider from 'react-slick';

const MovieCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      <div><img src="movie1.jpg" alt="Movie 1" /></div>
      <div><img src="movie2.jpg" alt="Movie 2" /></div>
      <div><img src="movie3.jpg" alt="Movie 3" /></div>
      <div><img src="movie4.jpg" alt="Movie 4" /></div>
    </Slider>
  );
};

export default MovieCarousel;