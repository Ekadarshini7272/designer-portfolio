'use client';

import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdContentCopy } from 'react-icons/md';
import styles from './footer.module.scss';

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('hello@example.com');
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerCard}>
          {/* Left Content */}
          <div className={styles.left}>
            <h2>
              Here’s To Simple Things <br />
              Done Thoughtfully.
            </h2>
            <button className={styles.copyBtn} onClick={copyEmail}>
              <MdContentCopy />
              Copy Email Address
            </button>
          </div>
          {/* Right Links */}
          <div className={styles.right}>
            <div className={styles.linkGroup}>
              <Link href="https://instagram.com" target="_blank">
                Instagram <FiArrowUpRight />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                LinkedIn <FiArrowUpRight />
              </Link>
              <Link href="https://medium.com" target="_blank">
                Medium <FiArrowUpRight />
              </Link>
              <Link href="https://behance.net" target="_blank">
                Behance <FiArrowUpRight />
              </Link>
            </div>
            <div className={styles.linkGroup}>
              <Link href="/projects">
                Projects <FiArrowUpRight />
              </Link>
              <Link href="/about">
                Know me <FiArrowUpRight />
              </Link>
              <Link href="/playground">
                Playground <FiArrowUpRight />
              </Link>
              <Link href="/products">
                Products <FiArrowUpRight />
              </Link>
            </div>
          </div>
          {/* Bottom */}
          <div className={styles.bottom}>
            <span>©2026</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
