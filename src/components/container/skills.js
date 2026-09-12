import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import skillgrey from "../../../public/images/about/skillgrey.png";
import skillblack from "../../../public/images/about/skillblack.png";
import geryarrow from "../../../public/images/slills/geryarrow.png";
import blackhoverarrow from "../../../public/images/slills/blackhoverarrow.png";
import designfirst from "../../../public/images/slills/designfirst.svg";
import designsecond from "../../../public/images/slills/designsecond.svg";
import designthird from "../../../public/images/slills/designthird.svg";
import designfourth from "../../../public/images/slills/designfourth.svg";
import designfifthicon from "../../../public/images/slills/designfifthicon.svg";
import designfifthiconhover from "../../../public/images/slills/designfifthiconhover.svg";
import designsixthicon from "../../../public/images/slills/designsixthicon.svg";
import designsixthiconhover from "../../../public/images/slills/designsixthiconhover.svg";
import designseventhicon from "../../../public/images/slills/designseventhicon.svg";
import designseventhhovericon from "../../../public/images/slills/designseventhhovericon.svg";
import prototypefirsticon from "../../../public/images/slills/prototypefirsticon.svg";
import prototypefirsticonhover from "../../../public/images/slills/prototypefirsticonhover.svg";
import prototypesecondicon from "../../../public/images/slills/prototypesecondicon.svg";
import prototypesecondiconhover from "../../../public/images/slills/prototypesecondiconhover.svg";
import motionfirsticon from "../../../public/images/slills/motionfirsticon.svg";
import motionfirsticonhover from "../../../public/images/slills/motionfirsticonhover.svg";
import motionsecondicon from "../../../public/images/slills/motionsecondicon.svg";
import motionsecondiconhover from "../../../public/images/slills/motionsecondiconhover.svg";
import aifirsticon from "../../../public/images/slills/aifirsticon.svg";
import aifirsticonhover from "../../../public/images/slills/aifirsticonhover.svg";
import aisecondicon from "../../../public/images/slills/aisecondicon.svg";
import aisecondiconhover from "../../../public/images/slills/aisecondiconhover.svg";
import aithirdicon from "../../../public/images/slills/aithirdicon.svg";
import aithirdiconhover from "../../../public/images/slills/aithirdiconhover.svg";
import shipfirsticon from "../../../public/images/slills/shipfirsticon.svg";
import shipfirsticonhover from "../../../public/images/slills/shipfirsticonhover.svg";
import shipsecondicon from "../../../public/images/slills/shipsecondicon.svg";
import shipsecondiconhover from "../../../public/images/slills/shipsecondiconhover.svg";
import shipthirdicon from "../../../public/images/slills/shipthirdicon.svg";
import shipthirdiconhover from "../../../public/images/slills/shipthirdiconhover.svg";
import styles from "./skills.module.scss";

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

const imageLinks = {
  design: [
    { label: "Figma Design", src: designfirst, href: "/figma-design" },
    { label: "FigJam", src: designsecond, href: "/figjam" },
    { label: "Slides", src: designthird, href: "/slides" },
    { label: "Make", src: designfourth, href: "/make" },
    { label: "Ai Illustrator", src: designfifthicon, hover: designfifthiconhover, href: "/illustrator" },
    { label: "Photoshop", src: designsixthicon, hover: designsixthiconhover, href: "/photoshop" },
    { label: "Sketch", src: designseventhicon, hover: designseventhhovericon, href: "/sketch" },
  ],
  prototype: [
    { label: "Framer", src: prototypefirsticon, hover: prototypefirsticonhover, href: "/framer" },
    { label: "Protopie", src: prototypesecondicon, hover: prototypesecondiconhover, href: "/protopie" },
  ],
  motion: [
    { label: "Figma Motion", src: motionfirsticon, hover: motionfirsticonhover, href: "/figma-motion" },
    { label: "Lottiefiles", src: motionsecondicon, hover: motionsecondiconhover, href: "/lottiefiles" },
  ],
  ai: [
    { label: "Gemini", src: aifirsticon, hover: aifirsticonhover, href: "/gemini" },
    { label: "Claude", src: aisecondicon, hover: aisecondiconhover, href: "/claude" },
    { label: "ChatGpt", src: aithirdicon, hover: aithirdiconhover, href: "/chatgpt" },
  ],
  ship: [
    { label: "Notion", src: shipfirsticon, hover: shipfirsticonhover, href: "/notion" },
    { label: "Linear", src: shipsecondicon, hover: shipsecondiconhover, href: "/linear" },
    { label: "Storybook", src: shipthirdicon, hover: shipthirdiconhover, href: "/storybook" },
  ],
};

const tagGroups = {
  "design-practice": [
    "UI/UX Design",
    "Design Systems Architecture",
    "Motion",
    "Interaction Design",
    "Wireframing",
    "Micro-interaction Design",
    "Visual Design",
    "Accessibility (WCAG)",
    "Prototyping",
  ],
  research: [
    "User Research",
    "Usability Testing",
    "A/B Testing",
    "Behavioral Analysis",
    "Persona Development",
    "Heatmap",
    "Journey Mapping",
    "UX Strategy",
  ],
  method: [
    "Design Sprints",
    "Design Thinking",
    "Mentorship",
    "Stakeholder Management",
    "Human-Centered Design",
    "Design Leadership",
    "CF-Collaboration",
    "Journey Mapping",
  ],
};

const skills = [
  { key: "design", label: "design", type: "icons" },
  { key: "prototype", label: "prototype", type: "icons" },
  { key: "motion", label: "motion", type: "icons" },
  { key: "ai", label: "ai", type: "icons" },
  { key: "ship", label: "ship", type: "icons" },
  { key: "design-practice", label: "design practice", type: "tags" },
  { key: "research", label: "research & strategy", type: "tags" },
  { key: "method", label: "methodologies", type: "tags" },
];

const SkillIconLink = ({ item }) => (
  <Link
    href={item.href}
    className={`${styles.toolLink} ${item.hover ? styles.expandableToolLink : ""}`}
    aria-label={item.label}
  >
    <span
      className={styles.toolIconWrap}
      style={{
        "--compact-width": `${item.src.width || 36}px`,
        "--hover-width": `${(item.hover?.width || item.src.width || 36)}px`,
      }}
    >
      <Image src={item.src} alt="" className={styles.toolIcon} sizes="160px" />
      {item.hover && (
        <Image src={item.hover} alt="" className={styles.toolIconHover} sizes="160px" />
      )}
    </span>
  </Link>
);

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [currentTime, setCurrentTime] = useState(formatIstTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={styles.skillsPage} style={{ "--page-grid": `url(${allbgimg.src})` }}>
      <Container fluid className={styles.pageShell}>
        <section className={styles.skillsCard} aria-label="Skills">
          <header className={styles.skillsHeader}>
            <Link href="/about" className={styles.backLink} aria-label="Back to about">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <Link href="/skills" className={styles.skillsTitle}>
              <span className={styles.titleIcon}>
                <Image src={skillgrey} alt="" className={styles.greyTitleIcon} sizes="18px" />
                <Image src={skillblack} alt="" className={styles.blackTitleIcon} sizes="18px" />
              </span>
              <span>Skills</span>
            </Link>
          </header>

          <div className={styles.skillList}>
            {skills.map((skill) => {
              const isActive = activeSkill === skill.key;

              return (
                <section className={styles.skillItem} key={skill.key}>
                  <button
                    type="button"
                    className={`${styles.skillButton} ${isActive ? styles.active : ""}`}
                    onClick={() => setActiveSkill(isActive ? null : skill.key)}
                    aria-expanded={isActive}
                  >
                    <span className={styles.skillName}>{skill.label}</span>
                    <span className={styles.arrowStack}>
                      <Image src={geryarrow} alt="" className={styles.greyArrow} sizes="448px" />
                      <Image src={blackhoverarrow} alt="" className={styles.blackArrow} sizes="448px" />
                    </span>
                  </button>

                  <div
                    className={`${styles.skillPanel} ${isActive ? styles.activePanel : ""}`}
                    aria-hidden={!isActive}
                  >
                    {skill.type === "icons" ? (
                      <div className={styles.iconPanel}>
                        {imageLinks[skill.key].map((item, index) => (
                          <React.Fragment key={item.label}>
                            <SkillIconLink item={item} />
                            {skill.key === "design" && index === 3 && (
                              <span className={styles.panelBreak} aria-hidden="true" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <div className={styles.tagPanel}>
                        {tagGroups[skill.key].map((tag) => (
                          <span className={styles.skillTag} key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          <footer className={styles.skillsFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default Skills;
