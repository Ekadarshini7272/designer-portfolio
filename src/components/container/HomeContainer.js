import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from './homecontainer.module.scss';
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import logoimg from '../../../public/images/logoimg.png';
import profileimg from '../../../public/images/profileimg.png';
import linkedinimg from '../../../public/images/linkedinimg.png';
import resumeimg from '../../../public/images/resumeimg.png';
import gridframeimg from '../../../public/images/gridframeimg.png';
import gbrand1 from '../../../public/images/gbrand1.png';
import gbrand2 from '../../../public/images/gbrand2.png';
import gbrand3 from '../../../public/images/gbrand3.png';
import gbrand4 from '../../../public/images/gbrand4.png';
import gbrand5 from '../../../public/images/gbrand5.png';
import gbrand6 from '../../../public/images/gbrand6.png';
import gbrand7 from '../../../public/images/gbrand7.png';
import gbrand8 from '../../../public/images/gbrand8.png';
import gbrand9 from '../../../public/images/gbrand9.png';
import gbrand10 from '../../../public/images/gbrand10.png';
import gbrand11 from '../../../public/images/gbrand11.png';
import gbrand12 from '../../../public/images/gbrand12.png';
import gbrand13 from '../../../public/images/gbrand13.png';
import gbrand14 from '../../../public/images/gbrand14.png';
import gbrand15 from '../../../public/images/gbrand15.png';
import gbrand16 from '../../../public/images/gbrand16.png';
import gbrand17 from '../../../public/images/gbrand17.png';
import gbrand18 from '../../../public/images/gbrand18.png';
import gbrand19 from '../../../public/images/gbrand19.png';
import gbrand20 from '../../../public/images/gbrand20.png';
import gbrand21 from '../../../public/images/gbrand21.png';
import gbrand22 from '../../../public/images/gbrand22.png';
import gbrand23 from '../../../public/images/gbrand23.png';
import gbrand24 from '../../../public/images/gbrand24.png';
import professional1 from '../../../public/images/professionalimg.png';
import Testimonial from '../container/testimonial';
const HomeContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const brandListRef = useRef(null);
  const autoScrollRef = useRef(null);
  // slider JSON content
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
  //Functionality for auto-scrolling for global brand logos
  useEffect(() => {
    const container = brandListRef.current;
    if (!container) return;
    let speed = 0.7;
    let isHovered = false;
    const autoScroll = () => {
      if (!isHovered) {
        container.scrollLeft += speed;
        // reset when reaching end
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };
    autoScrollRef.current = requestAnimationFrame(autoScroll);
    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      cancelAnimationFrame(autoScrollRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  // const cards = [
  //   user1, user2, user3, user4, user5, user6,
  //   user7, user8, user9, user10, user11, user12,
  // ];
  // const totalPages = 2;
  // const handlePrev = () => {
  //   if (page > 0) setPage(page - 1);
  // };
  // const handleNext = () => {
  //   if (page < totalPages - 1) setPage(page + 1);
  // };
  return (
    <section className={styles.homeSection}>
      <Container>
        <Row className="g-4 align-items-stretch">
          {/* LEFT COLUMN */}
          <Col lg={6}>
            <div className={styles.introCard}>
              <Image src={logoimg} alt="icon" width={94} height={94} />
              <h2> Hi, I’m Prabhu 👋 <br /> A Fastest Product designer <br />currently designing at VVDN.</h2>
            </div>
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
          </Col>
          {/* RIGHT COLUMN */}
          <Col lg={6}>
            <div className={styles.profileCard}>
              <Image
                src={profileimg}
                alt="profile"
                className={styles.profileImg}
                width={269}
                height={416}
              />
            </div>
            <Row className="g-4 mt-1">
              <Col md={6}>
                <a href="https://www.linkedin.com/in/19design97/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  <div className={styles.smallCard}>
                    <span className={styles.arrow}><FiArrowUpRight /></span>
                    <Image src={linkedinimg} alt="LinkedIn" width={80} height={80} />
                  </div>
                </a>
              </Col>
              <Col md={6}>
                <a href="https://drive.google.com/file/d/1iIKZjKxWkVUjfbABwKkcLb5uQu3my3xg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  <div className={styles.smallCard}>
                    <span className={styles.arrow}><FiArrowUpRight /></span>
                    <Image src={resumeimg} alt="Resume" width={150} height={200} />
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* GLOBAL BRAND SECTION */}
        <Row className="mt-5">
          <Col>
            <div className={styles.globalBrandSection}>
              <div className={styles.question}>
                🌐 See My Collaborators (Global Brand)
              </div>
              {/* Brand logos */}
              <div className={styles.brandList} ref={brandListRef}>
                <div className={styles.brandItem}>
                  <Image src={gbrand1} alt="Brand 1" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand2} alt="Brand 2" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand3} alt="Brand 3" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand4} alt="Brand 4" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand5} alt="Brand 5" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand6} alt="Brand 6" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand7} alt="Brand 7" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand8} alt="Brand 8" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand9} alt="Brand 9" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand10} alt="Brand 10" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand11} alt="Brand 11" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand12} alt="Brand 12" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand13} alt="Brand 13" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand14} alt="Brand 14" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand15} alt="Brand 15" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand16} alt="Brand 16" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand17} alt="Brand 17" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand18} alt="Brand 18" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand19} alt="Brand 19" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand20} alt="Brand 20" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand21} alt="Brand 21" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand22} alt="Brand 22" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand23} alt="Brand 23" />
                </div>
                <div className={styles.brandItem}>
                  <Image src={gbrand24} alt="Brand 24" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* PROFESSIONAL WORK SECTION */}
        <Row className="mt-2">
          <Col>
            <Row className="g-4 mt-2">
              {[1, 2, 3, 4].map((_, index) => (
                <Col lg={6} key={index}>
                  <div className={styles.professionalCard}>
                    {/* Top bar */}
                    <div className={styles.cardTop}>
                      <span className={styles.workTag}>Professional Work</span>
                      <span className={styles.topArrow}>
                        <FiArrowUpRight />
                      </span>
                    </div>
                    {/* Image */}
                    <div className={styles.workImage}>
                      <Image
                        src={professional1}
                        alt="Professional Work"
                        width={536} height={334}
                      />
                    </div>
                    {/* Title */}
                    <h4 className={styles.workTitle}>
                      {index === 0 && "Success Metrics That Redefined Growth"}
                      {index === 1 && "Reduce stress of OPS team ! How?"}
                      {index === 2 && "And how it became a money minting machine for O4S"}
                      {index === 3 && "Empowering Brands with Authenticity, Insights, and Engagement"}
                    </h4>
                    {/* Bottom right meta */}
                    <p className={styles.workMeta}>
                      By: Me & PLM & Dev Team
                    </p>

                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Testimonial/>
      </Container>
    </section>
  );
};

export default HomeContainer;
