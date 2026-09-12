import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft, TbEye } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import cvgrey from "../../../public/images/about/cvgrey.png";
import cvblack from "../../../public/images/about/cvblack.png";
import resume from "../../../public/images/commonpageimg/resume.png";
import coverletter from "../../../public/images/commonpageimg/coverletter.png";
import styles from "./resume.module.scss";

const documents = [
  {
    label: "Resume",
    image: resume,
    href: "https://drive.google.com/file/d/1HRCRTkGobZZo21CE5r9zhIlL0Oe4-UyB/view?pli=1",
  },
  {
    label: "Cover letter",
    image: coverletter,
    href: "https://drive.google.com/file/d/1KizOGm83YXgGhReV99gEkWv-DFy81D3A/view",
  },
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

const Resume = () => {
  const [currentTime, setCurrentTime] = useState(formatIstTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={styles.resumePage} style={{ "--page-grid": `url(${allbgimg.src})` }}>
      <Container fluid className={styles.pageShell}>
        <section className={styles.resumeCard} aria-label="Resume, Cover letter">
          <header className={styles.resumeHeader}>
            <Link href="/about" className={styles.backLink} aria-label="Back to about">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <Link href="/resume" className={styles.resumeTitle}>
              <span className={styles.titleIcon}>
                <Image src={cvgrey} alt="" className={styles.greyTitleIcon} sizes="18px" />
                <Image src={cvblack} alt="" className={styles.blackTitleIcon} sizes="18px" />
              </span>
              <span>Resume, Cover letter</span>
            </Link>
          </header>

          <section className={styles.documentGrid} aria-label="Documents">
            {documents.map((document) => (
              <a
                href={document.href}
                className={styles.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                key={document.label}
              >
                <span className={styles.previewFrame}>
                  <Image
                    src={document.image}
                    alt=""
                    className={styles.documentImage}
                    sizes="235px"
                    priority
                  />
                  <span className={styles.previewIcon} aria-hidden="true">
                    <TbEye />
                  </span>
                </span>
                <span className={styles.documentLabel}>{document.label}</span>
              </a>
            ))}
          </section>

          <footer className={styles.resumeFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default Resume;
