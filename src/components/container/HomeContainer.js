import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import Header from "../Header/Header";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import leftarrowdot from "../../../public/images/commonpageimg/rightdotimg.svg";
import rightarrowdot from "../../../public/images/commonpageimg/rightarrowdot.png";
import styles from "./homecontainer.module.scss";

const projects = [
  { year: "2025-26", name: "Mahindra IFVI", href: "https://www.figma.com/proto/MVo0PfpWWBzMpB7WPvTiqA/CASE-Study--part-2-?node-id=2001-5011&viewport=176%2C120%2C0.28&t=oBsAeOQfuROkWb23-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2" },
  { year: "2020-23", name: "ApnaKlub App", href: "https://www.figma.com/proto/MVo0PfpWWBzMpB7WPvTiqA/CASE-Study--part-2-?node-id=1-18108&viewport=489%2C-11%2C0.07&t=gHAQsAnddPXC7HOi-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A18108&page-id=1%3A5255" },
  { year: "2025-26", name: "Extreme Network", href: "https://www.figma.com/proto/MVo0PfpWWBzMpB7WPvTiqA/CASE-Study--part-2-?node-id=2001-5213&viewport=236%2C424%2C0.25&t=GINh0IF2zurn25Ei-1&scaling=min-zoom&content-scaling=fixed&page-id=2001%3A5212" },
  { year: "2020-23", name: "Gynger", href: "https://www.figma.com/proto/MVo0PfpWWBzMpB7WPvTiqA/CASE-Study--part-2-?node-id=1-18848&viewport=441%2C45%2C0.04&t=3bKJ5beuwv7AWPlb-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A18848&page-id=1%3A18404" },
  { year: "2025-26", name: "SMS (ERP)", disabled: true },
  { year: "2020-23", name: "Original4sure", href: "https://www.figma.com/proto/MVo0PfpWWBzMpB7WPvTiqA/CASE-Study--part-2-?node-id=8-1155&viewport=228%2C87%2C0.09&t=7Soq4PsaFFzvXXJN-1&scaling=contain&content-scaling=fixed&starting-point-node-id=8%3A1155&page-id=8%3A6" },
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
                  const isExternal = project.href?.startsWith("http");
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
                      ) : isExternal ? (
                        <a
                          href={project.href}
                          className={styles.projectItem}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
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
