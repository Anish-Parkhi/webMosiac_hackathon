import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  const path = useLocation().pathname;

  return (
    <nav className={styles.navbarMainContainer}>
      <ul className={styles.navbarListContainer}>
        <li onClick={handleClick} className={styles.navbarLogo}>
          Blog Spot
        </li>
        <li style={path === '/' ? {textDecoration:'underline', textUnderlineOffset:'0.4rem'} : null} onClick={handleClick}>Home</li>
        <li>Top Blogs</li>
        <li>Favourite</li>
        <li>Category</li>
        <li className={styles.accountLogoContainer}>A</li>
      </ul>
    </nav>
  );
}

export default Navbar;
