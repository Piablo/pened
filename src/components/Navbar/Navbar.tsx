// components/Navbar.js

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Button from '../Button/Buttton';

const Navbar = () => {

  function onClick(){
    console.log("onClick")
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo.png" alt="Logo" className={styles.logoImage} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/courses">Courses</Link>
          </div>

          {/* CTA Button */}
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1em'}}>
              <Link target="_blank" href="https://lx-library.github.io/tos/">Terms of Service</Link>
            </div>
          
            <div className={styles.cta}>
              
              <Button label='Sign me up!' onClick={onClick}/>
              {/* <Link href="/signup" className={styles.ctaButton}>
                Sign Up
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
