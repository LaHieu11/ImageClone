import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './style/NavigationMenu.css'
const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navigation'>
      <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      {showMenu && (
        <div className='menu-items'>
          <button className='custom-button'>Home</button>
          <button className='custom-button'>Women</button>
          <button className='custom-button'>Men</button>
          <button className='custom-button'>About us</button>
          <button className='custom-button'>blog</button>
          <button className='custom-button'>collections</button>
          <button className='custom-button'>contact</button>
          <button className='custom-button'><FaSearch /></button>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
