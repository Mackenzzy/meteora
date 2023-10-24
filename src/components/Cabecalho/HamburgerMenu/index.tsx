import React, { useState } from 'react';
import './style.scss';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0); // Índice do item selecionado

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
    setIsOpen(false);
  };

  const items = ['Home', 'Nossas Lojas', 'Novidades', 'Promoções'];

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {isOpen && (
        <ul className="menu-items">
          {items.map((item, index) => (
            <li
              key={index}
              className={selectedItem === index ? 'selected' : ''}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
