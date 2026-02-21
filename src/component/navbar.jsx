import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ homeRef, produkRef, profilRef, hargaRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    setIsMenuOpen(false); // Tutup menu
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='/logontch3.png' alt='Logo Nuansa Technology' width={300} height={300} style={{ maxWidth: '100%', height: 'auto' }}></img>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {/* Menu Links */}
      <span>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' className='link' style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          {/* <li onClick={() => scrollToSection(produkRef)}>Produk</li> */}
          <li>
            <Link to='/produk' className='link' style={{ textDecoration: 'none' }}>
              Produk
            </Link>
          </li>
          <li>
            <Link to='/contact' className='link' style={{ textDecoration: 'none' }}>
              Kontak
            </Link>
          </li>
          {/* <li onClick={() => scrollToSection(profilRef)}>Profil</li>
          <li onClick={() => scrollToSection(hargaRef)}>Harga</li> */}
        </ul>
      </span>

      {/* <div className='navbar-buttons'>
        <button className='my-account-btn'>My Account</button>
        <button className='signup-btn'>Sign Up</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
