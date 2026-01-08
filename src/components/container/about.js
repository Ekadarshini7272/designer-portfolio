import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Batchdigit1 from "../../../public/images/batchdigit1.png";
import Batchdigit2 from "../../../public/images/batchdigit2.png";
import Batchdigit3 from "../../../public/images/batchdigit3.png";
import Batchdigit4 from "../../../public/images/batchdigit4.png";
import profileimg from '../../../public/images/profileimg.png';
import gridframeimg from '../../../public/images/gridframeimg.png';
import resumeimg from '../../../public/images/resumeimg.png';
import twitterimg from '../../../public/images/twitterimg.png';
import behanceimg from '../../../public/images/behanceimg.png';
import dribbleimg from '../../../public/images/dribbleimg.png';
import mediumimg from '../../../public/images/mediumimg.png';
import instaimg from '../../../public/images/instaimg.png';
import linkedinimg from '../../../public/images/linkedinimg.png';
import youtubeimg from '../../../public/images/youtubeimg.png';
import tool1 from '../../../public/images/tool1.png';
import tool2 from '../../../public/images/tool2.png';
import tool3 from '../../../public/images/tool3.png';
import tool4 from '../../../public/images/tool4.png';
import tool5 from '../../../public/images/tool5.png';
import tool6 from '../../../public/images/tool6.png';
import tool7 from '../../../public/images/tool7.png';
import tool8 from '../../../public/images/tool8.png';
import tool9 from '../../../public/images/tool9.png';
import frame1 from '../../../public/images/frame1.png';
import frame2 from '../../../public/images/frame2.png';
import frame3 from '../../../public/images/frame3.png';
import frame4 from '../../../public/images/frame4.png';
import frame5 from '../../../public/images/frame5.png';
import frame6 from '../../../public/images/frame6.png';
import frame7 from '../../../public/images/frame7.png';
import frame8 from '../../../public/images/frame8.png';
import eye from '../../../public/images/eye.png';
import grpchildrens from '../../../public/images/grpchildrens.png';
import insect from '../../../public/images/insect.png';
import monkey from '../../../public/images/monkey.png';
import diya from '../../../public/images/diya.png';
import boat from '../../../public/images/boat.png';
import twochild from '../../../public/images/twochild.png';
import smilechild from '../../../public/images/smilechild.png';
import styles from './about.module.scss';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const brandListRef = useRef(null);
  const autoScrollRef = useRef(null);
  const sliderData = [
    {
      label: "For Anyone",
      text:
        "Hello there, I’m a designer who cares about making beautiful things that help people.",
    },
    {
      label: "Recruiter",
      text:
        "I’m a product designer with 5+ years of experience across brand and product, at companies large and small. I’m actively looking for a new role.",
    },
    {
      label: "Product Design",
      text:
        "As a systems thinker, I prioritize quality in every detail. I’m here to collaborate and learn from you. Together, we’ll create something we can be proud of.",
    },
    {
      label: "Product Manager",
      text:
        "I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I’ll partner closely with you to generate the highest impact possible.",
    },
    {
      label: "Engineers",
      text:
        "I’m highly technical and while I’m not an engineer, I know my way around code and can speak fluently with you.",
    },
    {
      label: "Design Director",
      text:
        "I take pride in my craft and love mentoring earlier career designers. I develop cross-functional partnerships and thrive in complex, ambiguous environments.",
    },
  ];
  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
    const container = brandListRef.current;
    if (!container) return;
    const scrollAmount = 180;
    const delay = 2000;
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }, delay);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
    // Start initially
    startAutoScroll();
    // Pause on hover
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);
  return (
    <section className={styles.homeSection}>
      <Container>
        <h1 className={styles.typohead}>I'm a Odia <span className={styles.typobold}>Sr. Designer,</span> Learner, and <br />Traveler, living in <span className={styles.typobold}>Odisha, India.</span></h1>
        <Row className={styles.badgeRow}>
          <Col md={3} sm={6} xs={6}>
            <div className={styles.badgeCard}>
              <Image src={Batchdigit1} alt="Years of Experience" />
              <p>Year of Exp</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className={styles.badgeCard}>
              <Image src={Batchdigit2} alt="Products" />
              <p>Products</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className={styles.badgeCard}>
              <Image src={Batchdigit3} alt="Global Brand" />
              <p>Global Brand</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className={styles.badgeCard}>
              <Image src={Batchdigit4} alt="Downloads" />
              <p>Downloads</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.aboutGrid}>
          {/* LEFT SIDE */}
          <Col lg={6}>
            {/* SLIDER */}
            <div className={styles.sliderCard}>
              <div className={styles.question}>
                👀 What is my significance to you?
              </div>
              <div className={styles.contentBox}>
                <span className={styles.label}>
                  {sliderData[activeIndex].label}
                </span>
                <p>{sliderData[activeIndex].text}</p>
              </div>

              <div className={styles.controls}>
                <div className={styles.gridImgWrap}>
                  <Image src={gridframeimg} alt="grid" />
                </div>
                <div className={styles.buttons}>
                  <button
                    onClick={prevSlide}
                    className={activeIndex === sliderData.length - 1 ? styles.activeBtn : ""}
                  >
                    <FiArrowLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className={activeIndex !== sliderData.length - 1 ? styles.activeBtn : ""}
                  >
                    <FiArrowRight />
                  </button>
                </div>
                <div className={styles.gridImgWrap}>
                  <Image src={gridframeimg} alt="grid" />
                </div>
              </div>
            </div>
            <Row className="g-4 mt-1">
              <Col md={6}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  <div className={styles.smallCard}>
                    <span className={styles.arrow}><FiArrowUpRight /></span>
                    <Image src={linkedinimg} alt="LinkedIn" width={80} height={80} />
                  </div>
                </a>
              </Col>
              <Col md={6}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  <div className={styles.smallCard}>
                    <span className={styles.arrow}><FiArrowUpRight /></span>
                    <Image src={resumeimg} alt="Resume" width={218} height={300} />
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div className={styles.profileCard}>
              <Image
                src={profileimg}
                alt="profile"
                className={styles.profileImg}
                width={269}
                height={699}
              />
            </div>
          </Col>
        </Row>
        <Row className="g-4 mt-1">
          <Col lg={3}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={behanceimg} alt="Resume" />
              </div>
            </a>
          </Col>
          <Col lg={3}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={dribbleimg} alt="Resume" />
              </div>
            </a>
          </Col>
          <Col lg={3}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={mediumimg} alt="Resume" />
              </div>
            </a>
          </Col>
          <Col lg={3}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={instaimg} alt="Resume" />
              </div>
            </a>
          </Col>
        </Row>
        <Row className="g-4 mt-1">
          <Col lg={3}>
          </Col>
          <Col lg={3}>
          </Col>
          <Col lg={3}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={twitterimg} alt="Resume" />
              </div>
            </a>
          </Col>
          <Col lg={3}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={youtubeimg} alt="Resume" />
              </div>
            </a>
          </Col>
        </Row>
        {/* Experience section */}
        <Row className="mt-5">
          <Col>
            <div className={styles.experienceCard}>

              {/* Header pill */}
              <div className={styles.expHeader}>
                <span>🧳 Recent Experience</span>
              </div>
              {/* Item 1 */}
              <div className={styles.expItem}>
                <div>
                  <h4>Senior Designer</h4>
                  <p>VVDN</p>
                </div>
                <span className={styles.expDate}>Current</span>
              </div>
              <div className={styles.divider} />
              {/* Item 2 */}
              <div className={styles.expItem}>
                <div>
                  <h4>Product Designer</h4>
                  <p>ApnaKlub</p>
                </div>
                <span className={styles.expDate}>July 2023 - Feb 2025</span>
              </div>
              <div className={styles.divider} />
              {/* Item 3 */}
              <div className={styles.expItem}>
                <div>
                  <h4>Product Designer</h4>
                  <p>O4S</p>
                </div>
                <span className={styles.expDate}>May 2020 - April 2023</span>
              </div>
              {/* Footer CTA */}
              <div className={styles.expFooter}>
                <button>
                  See Full Experience <span>↗</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        {/* Tools Section */}
        <Row className="mt-5">
          <Col>
            <div className={styles.globalBrandSection}>
              {/* Title pill */}
              <div className={styles.question}>
                ⚙️ The Magical Tools
              </div>
              {/* Brand logos */}
              <div className={styles.brandList} ref={brandListRef}>
                <div className={styles.brandItem}>
                  <Image src={tool1} alt="Brand 1" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool2} alt="Brand 2" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool3} alt="Brand 3" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool4} alt="Brand 4" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool5} alt="Brand 5" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool6} alt="Brand 6" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool7} alt="Brand 7" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool8} alt="Brand 8" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={tool9} alt="Brand 9" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* Own Image section */}
        <section className={styles.cameraSection}>
          <div className={styles.cameraCard}>
            <p className={styles.question}>
              📸 Check out what my camera captures when I’m off duty!
            </p>
            {/* TOP GRID */}
            <div className={styles.topGrid}>
              {/* Left 4 images */}
              <div className={styles.leftGrid}>
                <div className={styles.imgWrap}><Image src={frame1} alt="" /></div>
                <div className={styles.imgWrap}><Image src={frame2} alt="" /></div>
                <div className={styles.imgWrap}><Image src={frame4} alt="" /></div>
                <div className={styles.imgWrap}><Image src={frame5} alt="" /></div>
              </div>
              {/* Right tall image */}
              <div className={styles.rightGrid}>
                <Image src={frame3} alt="" />
              </div>
            </div>
            {/* BOTTOM GRID */}
            <div className={styles.bottomGrid}>
              <div className={styles.imgWrap}><Image src={frame6} alt="" /></div>
              <div className={styles.imgWrap}><Image src={frame7} alt="" /></div>
              <div className={styles.imgWrap}><Image src={frame8} alt="" /></div>
            </div>
            <div className={styles.expFooter}>
              <button>
                See Full Experience <span>↗</span>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.cameraSection}>
          <div className={styles.cameraCard}>
            <p className={styles.question}>
              📸 Check out what my camera captures when I’m off duty!
            </p>
            <div className={styles.cameraGrid}>
              <div className={`${styles.card} ${styles.eye}`}>
                <Image src={eye} alt="Eye" fill />
              </div>

              <div className={`${styles.card} ${styles.grpchildrens}`}>
                <Image src={grpchildrens} alt="Group Children" fill />
              </div>

              <div className={`${styles.card} ${styles.insect}`}>
                <Image src={insect} alt="Insect" fill />
              </div>

              <div className={`${styles.card} ${styles.monkey}`}>
                <Image src={monkey} alt="Monkey" fill />
              </div>

              <div className={`${styles.card} ${styles.diya}`}>
                <Image src={diya} alt="Diya" fill />
              </div>

              <div className={`${styles.card} ${styles.boat}`}>
                <Image src={boat} alt="Boat" fill />
              </div>

              <div className={`${styles.card} ${styles.twochild}`}>
                <Image src={twochild} alt="Two Children" fill />
              </div>

              <div className={`${styles.card} ${styles.smilechild}`}>
                <Image src={smilechild} alt="Smile Child" fill />
              </div>
            </div>
            <div className={styles.expFooter}>
              <button>
                See Full Experience <span>↗</span>
              </button>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};
export default About; 