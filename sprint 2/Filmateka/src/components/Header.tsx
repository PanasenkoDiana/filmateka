import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <input type="text" placeholder="Поиск..." />
      <nav>
        <ul>
          <li>Все фильмы</li>
          <li>Популярные</li>
          <li>Скоро в прокате</li>
          <li>Эксклюзивный контент</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;