'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import navitem1 from "../../../public/images/navitem1.png";
import navitem2 from "../../../public/images/navitem2.png";
// import navitem3 from "../../../public/images/navitem3.png";
import navitem4 from "../../../public/images/navitem4.png";
import navhover1 from "../../../public/images/iconb1.png";
import navhover2 from "../../../public/images/iconb2.png";
// import navhover3 from "../../../public/images/iconb3.png";
import navhover4 from "../../../public/images/iconb4.png";
import navitem5 from '../../../public/images/locamap.png';
import odisha1 from '../../../public/images/odisha1.png';
import odisha2 from '../../../public/images/odisha2.png';
import odisha3 from '../../../public/images/odisha3.png';
import odisha4 from '../../../public/images/odisha4.png';
import odisha5 from '../../../public/images/odisha5.png';
import styles from './header.module.scss';
import logo from '../../../public/images/headerlogo.png';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
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
          <Link href="/projects" className={`${styles.navLink} ${pathname === "/projects" ? styles.active : ""}`}>
            <span className={styles.navItem}>
              <span className={styles.iconCircle}>
                <Image src={navitem1} alt="Projects" width={20} height={20} className={styles.defaultIcon} />
                <Image src={navhover1} alt="Projects" width={20} height={20} className={styles.hoverIcon} />
              </span>
              Projects
            </span>
          </Link>

          <Link href="/about" className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}>
            <span className={styles.navItem}>
              <span className={styles.iconCircle}>
                <Image src={navitem2} alt="Projects" width={20} height={20} className={styles.defaultIcon} />
                <Image src={navhover2} alt="Projects" width={20} height={20} className={styles.hoverIcon} />
              </span>
              Know me
            </span>
          </Link>

          {/* <Link href="#playground" className={`${styles.navLink} ${styles.hasTooltip}`}>
    <span className={styles.navItem}>
       <span className={styles.iconCircle}>
                <Image src={navitem3} alt="Projects" width={20} height={20} className={styles.defaultIcon} />
                <Image src={navhover3} alt="Projects" width={20} height={20} className={styles.hoverIcon} />
              </span>
      Playground
    </span>
    <span className={styles.tooltip}>Coming soon</span>
  </Link> */}

        <Link href="/product" className={`${styles.navLink} ${pathname === "/product" ? styles.active : ""}`}>
            <span className={styles.navItem}>
              <span className={styles.iconCircle}>
                <Image src={navitem4} alt="Projects" width={20} height={20} className={styles.defaultIcon} />
                <Image src={navhover4} alt="Projects" width={20} height={20} className={styles.hoverIcon} />
              </span>
              Products
            </span>
          </Link>
        </Nav>
        <div className={styles.location}>
          <span className={styles.locationText}>
            <Image src={navitem5} height={20} width={20} className={styles.locationIcon} />
            Odisha, India
          </span>
          <div className={styles.locationImages}>
            <Image src={odisha1} alt="odisha" width={185} height={185} />
            <Image src={odisha2} alt="odisha" width={185} height={185} />
            <Image src={odisha3} alt="odisha" width={185} height={185} />
            <Image src={odisha4} alt="odisha" width={185} height={185} />
            <Image src={odisha5} alt="odisha" width={185} height={185} />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
