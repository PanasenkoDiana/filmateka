import React from 'react';
import Header from '../components/Header';
import MovieCarousel from '../components/MovieCarousel';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <MovieCarousel />
      {/* Добавьте другие секции по мере необходимости */}
    </div>
  );
};

export default Home;