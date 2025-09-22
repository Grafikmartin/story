import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          LOGO
        </div>
        <nav className="navigation">
          <button className="nav-button">Bereich 1</button>
          <button className="nav-button">Bereich 2</button>
          <button className="nav-button">Bereich 3</button>
          <button className="nav-button">Bereich 4</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
