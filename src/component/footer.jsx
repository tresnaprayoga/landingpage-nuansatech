import React from 'react';
import '../style/footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div></div>
      <div className='footer-section logo-section'>
        <h2 className='brand'>
          Nuansa<span>Technology</span>
        </h2>
        <p>© 2025 Nuansa Technology</p>
      </div>

      <div className='footer-section link-section'>
        <a href='#'>Syarat & Ketentuan</a>
        <a href='#'>Ketentuan Pengembalian</a>
      </div>

      <div className='footer-section social-section'>
        <p>Stay connected with us</p>
        <div className='icons'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
        <a href='https://wa.me/62xxxxxxxxxx' className='whatsapp-button' target='_blank' rel='noopener noreferrer'>
          Butuh bantuan?
          <FaWhatsapp className='wa-icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
