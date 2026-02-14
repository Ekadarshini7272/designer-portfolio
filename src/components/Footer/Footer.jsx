import {useState} from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdContentCopy } from 'react-icons/md';
import styles from './footer.module.scss';
const Footer = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('prabhu.baba57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
  };
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerCard}>
          <div className={styles.left}>
            <h2> Here’s To Simple Things <br />Done Thoughtfully.</h2>
            <button className={styles.copyBtn} onClick={copyEmail}>
              <MdContentCopy />
              {copied ? 'Copied' : 'Copy Email Address'}
              </button></div>
          <div className={styles.right}>
            <div className={styles.linkGroup}>
              <Link href="https://www.linkedin.com/in/19design97/" target="_blank">LinkedIn <FiArrowUpRight /></Link>
              <Link href="https://medium.com/@19design97" target="_blank">Medium <FiArrowUpRight /></Link>
              <Link href="https://dribbble.com/19design97" target="_blank">dribble <FiArrowUpRight /></Link>
              <Link href="https://www.behance.net/19design97" target="_blank">Behance <FiArrowUpRight /></Link>
              <Link href="https://www.instagram.com/19design97/" target="_blank">Instagram <FiArrowUpRight /></Link>
              <Link href="https://www.youtube.com/@PPPDesigner" target="_blank">Youtube <FiArrowUpRight /></Link>
              <Link href="https://twitter.com/19design97" target="_blank">Twitter <FiArrowUpRight /></Link>
            </div>
            <div className={styles.linkGroup}>
              <Link href="/projects">Projects <FiArrowUpRight /></Link>
              <Link href="/about">Know me <FiArrowUpRight /></Link>
              <Link href="/playground">Playground <FiArrowUpRight /></Link>
              <Link href="/products">Products <FiArrowUpRight /></Link>
            </div>
          </div>
          <div className={styles.bottom}> <span>©2026</span></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
