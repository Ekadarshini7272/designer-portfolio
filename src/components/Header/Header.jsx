'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { BsGridFill } from 'react-icons/bs';
// import { HiOutlineUser } from 'react-icons/hi';
// import { GiMaterialsScience } from 'react-icons/gi';
// import { MdProductionQuantityLimits } from 'react-icons/md';
import odisha1 from '../../../public/images/odisha1.png';
import odisha2 from '../../../public/images/odisha2.png';
import odisha3 from '../../../public/images/odisha3.png';
import odisha4 from '../../../public/images/odisha4.png';
import odisha5 from '../../../public/images/odisha5.png';
import styles from './header.module.scss';
import logo from '../../../public/images/logo.png';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Navbar expand="lg" fixed="top" className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.containerHeader}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="prabhu" width={84} height={66} priority />
        </Link>
        <Nav className={styles.navMenu}>
          <Link href="/projects" className={styles.navLink}>
            <span>🎬 Projects</span>
          </Link>
          <Link href="/about" className={styles.navLink}>
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
<div className={styles.location}>
  <span className={styles.locationText}>📍 Odisha, India</span>

  <div className={styles.locationImages}>
    <Image src={odisha1} alt="odisha" width={60} height={60} />
    <Image src={odisha2} alt="odisha" width={60} height={60} />
    <Image src={odisha3} alt="odisha" width={60} height={60} />
    <Image src={odisha4} alt="odisha" width={60} height={60} />
    <Image src={odisha5} alt="odisha" width={60} height={60} />
  </div>
</div>

      </Container>
    </Navbar>
  );
};

export default Header;
