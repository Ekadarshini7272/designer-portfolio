'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { GiMaterialsScience } from 'react-icons/gi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import styles from './header.module.scss';
import logo from '../../../public/images/logo.png';
// import headericon1 from '../../../public/images/headericon1.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <Container className={styles.containerHeader}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" width={48} height={48} priority />
        </Link>
        {/* Center Navigation */}
        <Nav className={styles.navMenu}>
          <Link href="/projects" className={styles.navLink}>
            {/* <BsGridFill /> */}
            {/* <Image src={headericon1} alt="logo" width={48} height={48} priority /> */}
            <span>🎬 Projects</span>
          </Link>
          <Link href="/about" className={styles.navLink}>
            {/* <HiOutlineUser /> */}
            {/* <Image src={headericon2} alt="logo" width={48} height={48} priority /> */}
            <span>👀 Know me</span>
          </Link>
         <Link href="#playground" className={`${styles.navLink} ${styles.hasTooltip}`}>
  <span>🛝 Playground</span>
  <span className={styles.tooltip}>Coming soon</span>
</Link>

<Link href="#products" className={`${styles.navLink} ${styles.hasTooltip}`}>
  <span>📦 Products</span>
  <span className={styles.tooltip}>Coming soon</span>
</Link>
        </Nav>
        {/* Location */}
        <div className={styles.location}>
          {/* <FaMapMarkerAlt /> */}
          <span>📍 Odisha, India</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
