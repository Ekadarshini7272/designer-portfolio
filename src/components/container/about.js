import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft, TbCheck, TbUser } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import aboutprofileimg from "../../../public/images/about/aboutprofileimg.jpg";
import emailsideimg from "../../../public/images/about/emailsideimg.png";
import skillgrey from "../../../public/images/about/skillgrey.png";
import skillblack from "../../../public/images/about/skillblack.png";
import gallerygrey from "../../../public/images/about/gallerygrey.png";
import galleryblack from "../../../public/images/about/galleryblack.png";
import cvgrey from "../../../public/images/about/cvgrey.png";
import cvblack from "../../../public/images/about/cvblack.png";
import collaborationgrey from "../../../public/images/about/collaborationgrey.png";
import collaborationblack from "../../../public/images/about/collaborationblack.png";
import linkgrey from "../../../public/images/about/linkgrey.png";
import linkblack from "../../../public/images/about/linkblack.png";
import recomendationgrey from "../../../public/images/about/recomendationgrey.png";
import recomendationblack from "../../../public/images/about/recomendationblack.png";
import styles from "./about.module.scss";
const email = "theppp.28@gmail.com";
const quickLinks = [
  { label: "skills", href: "/skills", grey: skillgrey, black: skillblack },
  { label: "My Photo Gallery", href: "/gallery", grey: gallerygrey, black: galleryblack },
  { label: "Resume, Cover letter", href: "/resume", grey: cvgrey, black: cvblack },
  { label: "Collaboration", href: "/collaboration", grey: collaborationgrey, black: collaborationblack },
  { label: "Social Links", href: "/social", grey: linkgrey, black: linkblack },
  { label: "Recommendations", href: "/recommendations", grey: recomendationgrey, black: recomendationblack },
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

const About = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatIstTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main
      className={styles.aboutPage}
      style={{ "--page-grid": `url(${allbgimg.src})` }}
    >
      <Container fluid className={styles.pageShell}>
        <section className={styles.aboutCard} aria-label="About Prabhu">
          <header className={styles.aboutHeader}>
            <Link href="/" className={styles.backLink} aria-label="Back to home">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <div className={styles.aboutTitle}>
              <TbUser aria-hidden="true" />
              <span>About</span>
            </div>
          </header>

          <section className={styles.profileRow}>
            <div className={styles.profileImageWrap}>
              <Image
                src={aboutprofileimg}
                alt="Prabhu Prasad Pradhan"
                className={styles.profileImage}
                priority
                sizes="154px"
              />
            </div>
            <Image
              src={emailsideimg}
              alt=""
              aria-hidden="true"
              className={styles.emailSideImg}
              sizes="154px"
            />

            <div className={styles.statBlock}>
              <span>years designing</span>
              <strong>6+</strong>
            </div>

            <button
              type="button"
              className={`${styles.emailButton} ${copied ? styles.copied : ""}`}
              onClick={handleCopyEmail}
              aria-label={`Copy ${email}`}
            >
              <span className={styles.emailIdle}>Email Me</span>
              <span className={styles.emailCopied}>
                <TbCheck aria-hidden="true" />
                Email Copied
              </span>
            </button>

            <div className={`${styles.statBlock} ${styles.locationBlock}`}>
              <span>based in</span>
              <strong>odisha</strong>
            </div>

            <div className={`${styles.statBlock} ${styles.workBlock}`}>
              <span>currently at</span>
              <strong>VVDN</strong>
            </div>
          </section>

          <p className={styles.bioText}>
            I design systems that scale and experiences that convert. I&apos;ve built a{" "}
            <strong>1000+ component design system</strong> adopted across{" "}
            <strong>6 product teams</strong> at a <strong>$208M ARR</strong> company,
            cutting handoff time <strong>80%</strong>. At my last product company, I
            doubled homepage conversion and drove revenue from{" "}
            <strong>₹1.54 Cr to ₹1.81 Cr</strong> through behavior-driven, gamified UX,
            while hitting <strong>70% M1</strong> and <strong>65% M6</strong> retention.
            I also led UI/UX for a supply chain SaaS platform that went on to raise a{" "}
            <strong>$6M Series A</strong>.
          </p>

          <nav className={styles.quickLinks} aria-label="About quick links">
            {quickLinks.map((item) => (
              <Link href={item.href} className={styles.quickLink} key={item.label}>
                <span className={styles.tooltip}>{item.label}</span>
                <span className={styles.iconStack}>
                  <Image src={item.grey} alt="" className={styles.greyIcon} sizes="22px" />
                  <Image src={item.black} alt="" className={styles.blackIcon} sizes="22px" />
                </span>
              </Link>
            ))}
          </nav>

          <footer className={styles.aboutFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default About;
