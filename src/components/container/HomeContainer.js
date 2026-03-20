import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from './homecontainer.module.scss';
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import logoimg from '../../../public/images/iconlogoimg.png';
import profileimg from '../../../public/images/icardimg.png';
import linkedinimg from '../../../public/images/socialicon/lniconimg.png';
import resumeimg from '../../../public/images/socialicon/resumeiconimg.png';
import gridframeimg from '../../../public/images/gridframeimg.png';
import workbrand1 from '../../../public/images/workingbrands/brandwork1.png'
import workbrand2 from '../../../public/images/workingbrands/brandwork2.png';
import workbrand3 from '../../../public/images/workingbrands/brandwork3.png';
import workbrand4 from '../../../public/images/workingbrands/brandwork4.png';
import workbrand5 from '../../../public/images/workingbrands/brandwork5.png';
import workbrand6 from '../../../public/images/workingbrands/brandwork6.png';
import workbrand7 from '../../../public/images/workingbrands/brandwork7.png';
import workbrand8 from '../../../public/images/workingbrands/brandwork8.png';
import workbrand9 from '../../../public/images/workingbrands/brandwork9.png';
import workbrand10 from '../../../public/images/workingbrands/brandwork10.png';
import workbrand11 from '../../../public/images/workingbrands/brandwork11.png';
import workbrand12 from '../../../public/images/workingbrands/brandwork12.png';
import workbrand13 from '../../../public/images/workingbrands/brandwork13.png';
import workbrand14 from '../../../public/images/workingbrands/brandwork14.png';
import workbrand15 from '../../../public/images/workingbrands/brandwork15.png';
import workbrand16 from '../../../public/images/workingbrands/brandwork16.png';
import workbrand17 from '../../../public/images/workingbrands/brandwork17.png';
import workbrand18 from '../../../public/images/workingbrands/brandwork18.png';
import workbrand19 from '../../../public/images/workingbrands/brandwork19.png';
import workbrand20 from '../../../public/images/workingbrands/brandwork20.png';
import workbrand21 from '../../../public/images/workingbrands/brandwork21.png';
import workbrand22 from '../../../public/images/workingbrands/brandwork22.png';
import workbrand23 from '../../../public/images/workingbrands/brandwork23.png';
import workbrand24 from '../../../public/images/workingbrands/brandwork24.png';
import professional1 from '../../../public/images/professionalimg.png';
import Testimonial from '../container/testimonial';
const HomeContainer = () => {
  const profileRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const brandListRef = useRef(null);
  const autoScrollRef = useRef(null);
  //funnctionality for profile icard mousemovement parallax effect
  const handleMouseMove = (e) => {
    const card = profileRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x - rect.width / 2) / 8;
    const moveY = (y - rect.height / 2) / 8;
    const img = card.querySelector("img");
    const cursor = card.querySelector(`.${styles.cursor}`);
    img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  };
  const handleMouseLeave = () => {
    const card = profileRef.current;
    const img = card.querySelector("img");
    const cursor = card.querySelector(`.${styles.cursor}`);

    img.style.transform = "translate(0px,0px) scale(1)";
    cursor.style.opacity = "0";
  };
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

  const workingbrands = [workbrand1, workbrand2, workbrand3, workbrand4, workbrand5, workbrand6, workbrand7, workbrand8,
    workbrand9, workbrand10, workbrand11, workbrand12, workbrand13, workbrand14, workbrand15, workbrand16,
    workbrand17, workbrand18, workbrand19, workbrand20, workbrand21, workbrand22, workbrand23, workbrand24
  ];
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
                  <button onClick={prevSlide}><FiArrowLeft /></button>
                  <button onClick={nextSlide}><FiArrowRight /></button>
                </div>
                <div className={styles.gridImgWrap}>
                  <Image src={gridframeimg} alt="grid" />
                </div>
              </div>
            </div>
          </Col>
          {/* RIGHT COLUMN */}
          <Col lg={6}>
            <div
              className={styles.profileCard}
              ref={profileRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => {
                const cursor = profileRef.current.querySelector(`.${styles.cursor}`);
                cursor.style.opacity = "1";
              }}
            >
              <div className={styles.cursor}></div>
              <Image
                src={profileimg}
                alt="profile"
                className={styles.profileImg}
                width={269}
                height={500}
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
              <div className={styles.brandSlider}>
                <div className={styles.brandList} ref={brandListRef}>
                  {workingbrands.map((brand, index) => (
                    <div className={styles.brandItem} key={index}>
                      <Image src={brand} alt={`Brand ${index + 1}`} height={99} width={99} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* PROFESSIONAL WORK SECTION */}
        <Row className="mt-5">
          <Col>
            <Row className="g-4">
              <Col lg={6}>
              <Link href="/gynger" className={styles.viewDetails}>
                <div className={styles.professionalCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.workTag}>Professional Work</span>
                      <span className={styles.topArrow}>
                        <FiArrowUpRight />
                      </span>
                  </div>
                  <div className={styles.workImage}>
                    <Image src={professional1} alt="Professional Work" width={536} height={334} />
                  </div>
                  <h4 className={styles.workTitle}>
                    How it became a money minting machine for O4S
                  </h4>
                  <div className={styles.workMeta}>
                    By: Me & PLM & Dev Team
                  </div>
                </div>
                </Link>
              </Col>
              <Col lg={6}>
                <div className={`${styles.professionalCard} ${styles.inactiveCard}`}>
                  <div className={styles.cardTop}>
                    <span className={styles.workTag}>Professional Work</span>
                    <span className={styles.topArrow}>
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <div className={styles.workImage}>
                    <Image src={professional1} alt="Professional Work" width={536} height={334} />
                  </div>

                  <h4 className={styles.workTitle}>
                    Success Metrics That Redefined Growth
                  </h4>

                  <div className={styles.workMeta}>
                    By: Me & PLM & Dev Team
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Testimonial />
      </Container>
    </section>
  );
};

export default HomeContainer;
