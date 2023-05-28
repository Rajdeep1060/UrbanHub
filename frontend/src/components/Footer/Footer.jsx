import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Box, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et consequat nisi.</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>AC Cleaning</li>
            <li>House Cleaning</li>
            <li>Bathroom Cleaning</li>
            <li>Dish Washing</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: urbanhub@gmail.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UrbanHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
