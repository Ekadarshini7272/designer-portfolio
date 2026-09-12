import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import linkgrey from "../../../public/images/about/linkgrey.png";
import linkblack from "../../../public/images/about/linkblack.png";
import sociallink1 from "../../../public/images/alllinks/sociallink1.svg";
import sociallink2 from "../../../public/images/alllinks/sociallink2.svg";
import sociallink3 from "../../../public/images/alllinks/sociallink3.svg";
import sociallink4 from "../../../public/images/alllinks/sociallink4.svg";
import sociallink5 from "../../../public/images/alllinks/sociallink5.svg";
import sociallink6 from "../../../public/images/alllinks/sociallink6.svg";
import sociallink7 from "../../../public/images/alllinks/sociallink7.svg";
import styles from "./social.module.scss";

const socialLinks = [
  { label: "LinkedIn", icon: sociallink1, href: "https://www.linkedin.com/in/19design97/" },
  { label: "Medium", icon: sociallink2, href: "https://medium.com/@19design97" },
  { label: "Instagram", icon: sociallink3, href: "https://www.instagram.com/19design97/" },
  { label: "Behance", icon: sociallink4, href: "https://www.behance.net/19design97" },
  { label: "Dribbble", icon: sociallink5, href: "https://dribbble.com/19design97" },
  { label: "YouTube", icon: sociallink6, href: "https://www.youtube.com/@PPPDesigner" },
  { label: "X", icon: sociallink7, href: "https://twitter.com/19design97" },
];

const formatIstTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  })
    .format(new Date())
    .replace(".", "")
    .toUpperCase();

const Social = () => {
  const [currentTime, setCurrentTime] = useState(formatIstTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={styles.socialPage} style={{ "--page-grid": `url(${allbgimg.src})` }}>
      <Container fluid className={styles.pageShell}>
        <section className={styles.socialCard} aria-label="All Links">
          <header className={styles.socialHeader}>
            <Link href="/about" className={styles.backLink} aria-label="Back to about">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <Link href="/social" className={styles.socialTitle}>
              <span className={styles.titleIcon}>
                <Image src={linkgrey} alt="" className={styles.greyTitleIcon} sizes="18px" />
                <Image src={linkblack} alt="" className={styles.blackTitleIcon} sizes="18px" />
              </span>
              <span>All Links</span>
            </Link>
          </header>

          <nav className={styles.socialLinks} aria-label="Social profile links">
            {socialLinks.map((item) => (
              <a
                href={item.href}
                className={styles.socialLink}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                key={item.label}
              >
                <Image src={item.icon} alt="" className={styles.socialIcon} sizes="45px" />
              </a>
            ))}
          </nav>

          <footer className={styles.socialFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default Social;
