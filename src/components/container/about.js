import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link';
import { FiArrowUpRight} from 'react-icons/fi';
import Batchdigit1 from "../../../public/images/batchdigit1.png";
import Batchdigit2 from "../../../public/images/batchdigit2.png";
import Batchdigit3 from "../../../public/images/batchdigit3.png";
import Batchdigit4 from "../../../public/images/batchdigit4.png";
import resumeimg from '../../../public/images/socialicon/resumeiconimg.png';
import twitterimg from '../../../public/images/socialicon/twittericonimg.png';
import behanceimg from '../../../public/images/socialicon/behanceiconimg.png';
import dribbleimg from '../../../public/images/socialicon/dribleiconimg.png';
import mediumimg from '../../../public/images/socialicon/mediumiconimg.png';
import instaimg from '../../../public/images/socialicon/instaiconimg.png';
import linkedinimg from '../../../public/images/socialicon/lniconimg.png';
import youtubeimg from '../../../public/images/socialicon/youtubeiconimg.png';
import tool1 from '../../../public/images/softtools/softTool1.png';
import tool2 from '../../../public/images/softtools/softTool2.png';
import tool3 from '../../../public/images/softtools/softTool3.png';
import tool4 from '../../../public/images/softtools/softTool4.png';
import tool5 from '../../../public/images/softtools/softTool5.png';
import tool6 from '../../../public/images/softtools/softTool6.png';
import tool7 from '../../../public/images/softtools/softTool7.png';
import tool8 from '../../../public/images/softtools/softTool8.png';
import tool9 from '../../../public/images/softtools/softTool9.png';
import styles from './about.module.scss';
import SelfPhotoGrid from "./selfphotogrid";

const About = () => {
  const tools = [tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, tool9];
  return (
    <section className={styles.homeSection}>
      <Container>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.typohead}>I'm a Odia </div>
            <div className={styles.typohead}><span className={styles.typobold}>Sr. Designer,</span> Learner,</div>
            <div className={styles.typohead}>and Traveler, living in</div>
            <div className={styles.typobold}>Odisha, India.</div>
          </div>
        </section>
        {/* <h1 className={styles.typohead}>I'm a Odia <span className={styles.typobold}>Sr. Designer,</span> Learner, and <br />Traveler, living in <span className={styles.typobold}>Odisha, India.</span></h1> */}
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
        {/* Experience section */}
        <Row className="mt-5">
          <Col>
            <div className={styles.experienceCard}>
              <div className={styles.expHeader}>
                <span>🧳 Recent Experience</span>
              </div>
              <div className={styles.expItem}>
                <div>
                  <h4>Senior Designer</h4>
                  <p>VVDN</p>
                </div>
                <span className={styles.expDate}>Current</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.expItem}>
                <div>
                  <h4>Product Designer</h4>
                  <p>ApnaKlub</p>
                </div>
                <span className={styles.expDate}>July 2023 - Feb 2025</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.expItem}>
                <div>
                  <h4>Product Designer</h4>
                  <p>O4S</p>
                </div>
                <span className={styles.expDate}>May 2020 - April 2023</span>
              </div>
              <div className={styles.expFooter}>
                <Link className={styles.footerCta} href="https://www.linkedin.com/in/19design97/" target="_blank" rel="noopener noreferrer">
                  See Full Experience <span><FiArrowUpRight /></span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        {/* Social Card CTA section */}
        <Row className="mt-4 g-4">
          <Col md={3}>
            <a href="https://drive.google.com/file/d/1iIKZjKxWkVUjfbABwKkcLb5uQu3my3xg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={resumeimg} alt="LinkedIn" width={150} height={200} />
              </div>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://www.linkedin.com/in/19design97/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={linkedinimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://www.behance.net/19design97" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={behanceimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://www.youtube.com/@PPPDesigner" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={youtubeimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
        </Row>
        <Row className="mt-2 g-4">
          <Col md={3}>
            <a href="https://medium.com/@19design97" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={mediumimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://dribbble.com/19design97" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={dribbleimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://twitter.com/19design97" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={twitterimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://www.instagram.com/19design97/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.smallCard}>
                <span className={styles.arrow}><FiArrowUpRight /></span>
                <Image src={instaimg} alt="LinkedIn" width={80} height={80} />
              </div>
            </a>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className={styles.globalBrandSection}>
              <div className={styles.brandTitle}>⚙️ The Magical Tools</div>
              <div className={styles.brandSlider}>
                <div className={styles.brandTrack}>
                  {tools.map((tool, index) => (
                    <div className={styles.brandItem} key={index}>
                      <Image src={tool} alt="tool" height={99} width={99}/>
                    </div>
                  ))}
                  {/* Duplicate set for seamless scroll */}
                  {tools.map((tool, index) => (
                    <div className={styles.brandItem} key={`dup-${index}`}>
                      <Image src={tool} alt="tool" height={99} width={99}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <SelfPhotoGrid/>
        {/* <section className={styles.cameraSection}>
          <div className={styles.cameraCard}>
            <p className={styles.question}>📸 Check out what my camera sees!</p>
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
              <Button className={styles.footerCta}>
                See Full Experience <span>↗</span>
              </Button>
            </div>
          </div>
        </section> */}
      </Container>
    </section>
  );
};
export default About; 