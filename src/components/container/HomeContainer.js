import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import Header from "../Header/Header";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import leftarrowdot from "../../../public/images/commonpageimg/commingdot.svg";
import rightarrowdot from "../../../public/images/commonpageimg/rightarrowdot.png";
import styles from "./homecontainer.module.scss";

const projects = [
  { year: "2025-26", name: "Mahindra IFVI", href: "/mahindra" },
  { year: "2020-23", name: "ApnaKlub App", href: "/apnaklub" },
  { year: "2025-26", name: "Extreme Network", href: "/projects" },
  { year: "2020-23", name: "Gynger", href: "/gynger" },
  { year: "2025-26", name: "SMS (ERP)", disabled: true },
  { year: "2020-23", name: "Original4sure", href: "/projects" },
];

const workHeadings = [
  ["Me Looking For You !", "Senior Product Designer"],
  ["You Looking For Me !", "Senior UX/UI Designer"],
  ["Lest Work Together !", "Lead Product Designer"],
  ["You + Me + Figma = Magic", "Product Design Lead"],
  ["Less Talk. More Design.", "Lead UX Designer"],
  ["Think. Design. Ship.", "Design Lead"],
  ["Found Your Designer", "Design Manager"],
  ["Shall We Create?", "Product Design Manager"],
  ["I Bring Good Pixels", "UX Design Manager"],
  ["Ideas x Design", "AI Product Designer"],
  ["Got Problems? Hi.", "Design Systems Lead"],
];

const workRows = [
  ["Feb 2025 - Present", "VVDN", "Sr Designer"],
  ["Jul 2023 - Feb 2025", "ApnaKlub", "Product designer"],
  ["May 2020 - Apr 2023", "O4S", "Product Designer"],
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

const HomeContainer = () => {
  const [workHeadingIndex, setWorkHeadingIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(formatIstTime);
  const [workTitle, workTitleMeta] = workHeadings[workHeadingIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  const handleWorkRefresh = () => {
    setWorkHeadingIndex((current) => (current + 1) % workHeadings.length);
  };

  return (
    <main
      className={styles.homePage}
      style={{ "--page-grid": `url(${allbgimg.src})` }}
    >
      <Container fluid className={styles.pageShell}>
        <Header />

        <section className={styles.homeContent} aria-label="Portfolio summary">
          <p className={styles.statusLine}>
            <span className={styles.statusDot} aria-hidden="true" />
            Currently at <strong>VVDN</strong>, making ERP software feel awesome
          </p>

          <section className={styles.sectionBlock} aria-labelledby="project-title">
            <h1 id="project-title" className={styles.sectionTitle}>
              PROJECT
            </h1>

            <div className={styles.projectWrap}>
              <div className={styles.comingSoon}>
                <span>Coming soon...</span>
                <Image src={leftarrowdot} alt="" width={100} height={45} />
              </div>

              <Row className={styles.projectGrid}>
                {projects.map((project) => {
                  const content = (
                    <>
                      <span className={styles.projectYear}>{project.year}</span>
                      <span className={styles.projectName}>{project.name}</span>
                    </>
                  );

                  return (
                    <Col xs={12} sm={6} key={`${project.year}-${project.name}`}>
                      {project.disabled ? (
                        <span className={`${styles.projectItem} ${styles.disabledProject}`}>
                          {content}
                        </span>
                      ) : (
                        <Link href={project.href} className={styles.projectItem}>
                          {content}
                        </Link>
                      )}
                    </Col>
                  );
                })}
              </Row>
            </div>
          </section>

          <section className={styles.sectionBlock} aria-labelledby="work-title">
            <div className={styles.workHeading}>
              <h2 id="work-title" className={styles.sectionTitle}>
                WORK
              </h2>
            </div>

            <div className={styles.workTable}>
              <div className={styles.workSymbol}>{"\u221e"}</div>
              <div className={styles.workIntro} key={`work-title-${workHeadingIndex}`}>
                {workTitle}
              </div>
              <div className={styles.workIntroMeta}>
                <span key={`work-role-${workHeadingIndex}`}>{workTitleMeta}</span>
                <Image src={rightarrowdot} alt="" width={137} height={45} />
                <button
                  className={styles.refreshButton}
                  onClick={handleWorkRefresh}
                  type="button"
                  aria-label="Change work heading"
                >
                  <FiRefreshCw aria-hidden="true" />
                </button>
              </div>

              {workRows.map(([date, company, role]) => (
                <React.Fragment key={`${date}-${company}-${role}`}>
                  <div className={styles.workDate}>{date}</div>
                  <div className={styles.workCompany}>{company}</div>
                  <div className={styles.workRole}>{role}</div>
                </React.Fragment>
              ))}
            </div>
          </section>
        </section>

        <footer className={styles.homeFooter}>
          <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
          <time suppressHydrationWarning>{currentTime} IST</time>
        </footer>
      </Container>
    </main>
  );
};

export default HomeContainer;
