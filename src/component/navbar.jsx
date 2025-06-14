import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='/logontch3.png' alt='Logo Nuansa Technology' width={300} height={300} style={{ maxWidth: '100%', height: 'auto' }}></img>
      </div>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {/* Menu Links */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href='#'>Home</a>
        <a href='#'>Produk</a>
        <a href='#'>Profil</a>
        <a href='#'>Kontak</a>
      </div>

      {/* <div className='navbar-buttons'>
        <button className='my-account-btn'>My Account</button>
        <button className='signup-btn'>Sign Up</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
