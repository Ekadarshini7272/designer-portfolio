import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./gynger.module.scss";
import { FiArrowLeft, FiArrowRight, FiChevronUp } from "react-icons/fi";
import gynsec1a from "../../../public/images/L2Images/gynger/gynsec1a.png";
import gynsec1b from "../../../public/images/L2Images/gynger/gynsec1b.png";
import gynsec1c from "../../../public/images/L2Images/gynger/gynsec1c.png";
import gynsec5 from "../../../public/images/L2Images/gynger/casestudyImg.png";
import gynsec8 from "../../../public/images/L2Images/gynger/gyn9thsecimg.png";
import tenthsec1 from "../../../public/images/L2Images/gynger/tenthsec1.png";
import tenthsec2 from "../../../public/images/L2Images/gynger/tenthsec2.png";
// import gyn11a from "../../../public/images/L2Images/gynger/gyn11a.png";
// import gyn11b from "../../../public/images/L2Images/gynger/gyn11b.png";
// import gyn11c from "../../../public/images/L2Images/gynger/gyn11c.png";
// import gyn11d from "../../../public/images/L2Images/gynger/gyn11d.png";
// import gyn11e from "../../../public/images/L2Images/gynger/gyn11e.png";
import gyn11sec from "../../../public/images/L2Images/gynger/gyn11sec.png";
import gynsec12a from "../../../public/images/L2Images/gynger/gynsec12a.png";
import gynsec12b from "../../../public/images/L2Images/gynger/gynsec12b.png";
import gynsec13a from "../../../public/images/L2Images/gynger/gyn13a.png";
import gynsec13b from "../../../public/images/L2Images/gynger/gyn13b.png";
import gynsec13c from "../../../public/images/L2Images/gynger/gyn13c.png"; 
import gyn14sec from "../../../public/images/L2Images/gynger/gyn14sec.png";

const Demo = () => {
  const [current, setCurrent] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const totalSlides = 15;
  const nextSlide = () => {
    if (current < totalSlides - 1) setCurrent(current + 1);
  };
  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };
  return (
    <section className={styles.homeSection}>
      <Container className={styles.sliderWrapper}>
        <div className={styles.sliderTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
          {/* ===== SLIDE 1 (Your first screen) ===== */}
          <div className={styles.slide}>
            <div className={styles.centerContent}>
              <h2>And how it became a money minting machine for O4S</h2>
              <p>2020-2023</p>
              <span>Mobile, User Persona, Flow</span>
            </div>
          </div>
          {/* ===== SLIDE 2 ===== */}
          <div className={`${styles.slide} ${styles.slidesecond}`}>
            <div className={styles.secondSlideWrapper}>
              <div className={styles.card}>
                <Image src={gynsec1a} alt="card1" className={styles.img} />
              </div>
              <div className={styles.card}>
                <Image src={gynsec1b} alt="card2" className={styles.img} />
              </div>
              <div className={styles.card}>
                <Image src={gynsec1c} alt="card3" className={styles.img} />
              </div>
            </div>
          </div>
          {/* ===== SLIDE 3 ===== */}
          <div className={`${styles.slide} ${styles.slideThird}`}>
            <div className={styles.challengeWrapper}>
              <h3>What are the Challenges:</h3>
              <ul>
                <li>Retailers pick top brands to boost profits and earn perks.</li>
                <li>Brands struggle to track retailer performance beyond distributor supply.</li>
                <li>Distributors may distort info, causing communication gaps.</li>
                <li>Hard to engage retailers to focus on key products.</li>
                <li>No reliable system to spot retailers promoting products well.</li>
              </ul>
            </div>
          </div>
          {/* ===== SLIDE 4 ===== */}
          <div className={`${styles.slide} ${styles.slideThird}`}>
            <div className={styles.challengeWrapper}>
              <h3>We got some Solution: </h3>
              <ul>
                <li>Connects brands with retailers for better communication</li>
                <li>Enables trade promotions to boost visibility</li>
                <li>Rewards retailers to increase loyalty</li>
                <li>Provides insights on retailer activities and sales</li>
                <li>Tracks product pushes for smarter decisions</li>
              </ul>
            </div>
          </div>
          {/* ===== SLIDE 5 ===== */}
          <div className={`${styles.slide} ${styles.slideFifth}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={gynsec5}
                alt="case study"
                fill
                className={styles.fullImage}
                priority
              />
            </div>
          </div>
          {/* ===== SLIDE 6 ===== */}
          <div className={`${styles.slide} ${styles.slideThird}`}>
            <div className={styles.challengeWrapper}>
              <h3>Some study & then??</h3>
              <ul>
                <li>Increase brand awareness and enable direct engagement between brands and retailers.</li>
                <li>Retailers, consumers, and brands benefit from trade promotions and loyalty programs.</li>
                <li>Users can earn and redeem reward points anytime, without third-party intervention.</li>
                <li>O4S introduces 100% traceability with unique QR codes on product labels.</li>
                <li>Retailers scan QR codes via Gynger to earn points.</li>
                <li>Points can be redeemed as cash, vouchers, or gifts, making the process rewarding and convenient.</li>
              </ul>
            </div>
          </div>
          {/* ===== SLIDE 7 ===== */}
          <div className={`${styles.slide} ${styles.slideThird}`}>
            <div className={styles.challengeWrapper}>
              <h3>Something went wrong after few years:</h3>
              <ul>
                <li>Despite a strong user base, uninstalls increased when no schemes were active.</li>
                <li>To address this, we began researching ways to enhance the app’s experience.</li>
                <li>Focused on adding new features to boost user engagement.</li>
              </ul>
            </div>
          </div>
          {/* ===== SLIDE 8 ===== */}
          <div className={`${styles.slide} ${styles.slideEight}`}>
            <div className={styles.eightWrapper}>
              <div className={styles.leftImg}>
                <Image src={gynsec8} alt="user study" className={styles.eigthimg} />
              </div>
              <div className={styles.rightContent}>
                <h3>We talked to over 50 retailers. Tried to figure out what they found easy or hard to use in the App. The main points I tried to focus on were:</h3>
                <div
                  className={styles.toggleBtn}
                  onClick={() => setShowQuestions(!showQuestions)}
                >
                  <span>View Few “Q”</span>
                  <span className={`${styles.arrow} ${showQuestions ? styles.down : ""}`}>
                    <FiChevronUp />
                  </span>
                </div>
                <div className={`${styles.accordion} ${showQuestions ? styles.open : ""}`}>
                  <ul className={styles.questionList}>
                    <li>Their age & education</li>
                    <li>Readability of the scheme banner image</li>
                    <li>Usability of scanner</li>
                    <li>Reason for uninstalling the Apps</li>
                    <li>Points usage & expiration</li>
                    <li>Their industry type</li>
                    <li>What type of Apps do they usually use?</li>
                    <li>How many people did they work with in the shop?</li>
                    <li>What type of information did they wish they knew about the brand?</li>
                    <li>How did they get to know about what brands to tie up with?</li>
                    <li>How did they get to know about new offers and schemes by the brand?</li>
                    <li>How did they record their sales? Was their current system full-proof?</li>
                    <li>Did they need help understanding Gynger?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ===== SLIDE 9 ===== */}
          <div className={`${styles.slide} ${styles.slideNine}`}>
            <div className={styles.nineWrapper}>
              <h2 className={styles.title}>Proposed feature list</h2>
              <div className={styles.grid}>
                <div className={styles.col}>
                  <div className={styles.featureCard}>
                    <h4>User Onboarding</h4>
                    <p>Video tutorial at the beginning of the app to guide users through its features.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Notifications</h4>
                    <p>Real-time alerts for promotions, orders, and other updates.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Brand Zone</h4>
                    <ul>
                      <li>Brand stories</li>
                      <li>Promotional cards</li>
                      <li>Community</li>
                      <li>Leaderboards</li>
                      <li>Brand catalog</li>
                    </ul>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Gamification</h4>
                    <p>Features designed to enhance user engagement through game-like elements.</p>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.featureCard}>
                    <h4>User Personas</h4>
                    <p>Secondary user personas to assist the primary user in scanning products.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Profile Management</h4>
                    <ul>
                      <li>Contacts</li>
                      <li>Payment information</li>
                      <li>Address book</li>
                      <li>Analytics</li>
                    </ul>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Transaction Management</h4>
                    <p>Detailed transaction page for tracking earnings and burning of points.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Gynger Mart</h4>
                    <p>A virtual shop through which retailers can place orders.</p>
                  </div>
                  <h6>More...</h6>
                </div>
              </div>
            </div>
          </div>
          {/* ===== SLIDE 10 ===== */}
          <div className={`${styles.slide} ${styles.slideTen}`}>
            <div className={styles.tenWrapper}>
              <h2 className={styles.tenTitle}>The Flow</h2>
              <div className={styles.tenGrid}>
                <div className={styles.tenLeft}>
                  <Image
                    src={tenthsec1}
                    alt="flow diagram"
                    className={styles.tenImg}
                  />
                </div>
                <div className={styles.tenRight}>
                  <Image
                    src={tenthsec2}
                    alt="handwritten flow"
                    className={styles.tenImg}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ===== SLIDE 11: Wire-framing & ideation ===== */}
          <div className={`${styles.slide} ${styles.slideWireframe}`}>
            <div className={styles.wireframeWrapper}>
              <h2 className={styles.wireframeTitle}>
                Wire-framing & ideation
              </h2>
              <div className={styles.wireframeImageWrapper}>
                <Image
                  src={gyn11sec}
                  alt="Wireframing and ideation layout"
                  className={styles.wireframeImage}
                  priority
                />
              </div>
            </div>
          </div>
           {/* ===== SLIDE 12 ===== */}
          <div className={`${styles.slide} ${styles.slidetwelve}`}>
            <div className={styles.twelveWrapper}>
              <h2 className={styles.twelveTitle}>Few feature list</h2>    
              <ul>
                <li>Validated features with tech, business, and stakeholders</li>
                <li>Defined MVP for the app</li>
                <li>Implemented key changes based on feedback</li>
              </ul> 
               <div className={styles.twelveimggrid}>
                <div>
                  <Image src={gynsec12a} alt="Feature 1" className={styles.twelveImg} />
                </div>
                  <div>
                  <Image src={gynsec12b} alt="Feature 2" className={styles.twelveImgb} />
                </div>
                </div>       
            </div>
          </div>
           {/* ===== SLIDE 13 ===== */}
            <div className={`${styles.slide} ${styles.slidethirteen}`}>
              <div className={styles.thirteenWrapper}>
              <h2 className={styles.thirteenTitle}>Few feature list</h2> 
               <ul>
                <li>Developed feature list and dashboard for client use</li>
                <li>Supported 5 brands with white-label trade promotion platforms in 2022</li>
                <li>Enabled brand-retailer interactions and incentives</li>
                <li>Targeting 20 new clients by end of 2023</li>
              </ul>
              <div className={styles.thirteenimggrid}>
                <div>
                  <Image src={gynsec13a} alt="Feature 1" className={styles.thirteenImg} />
                </div>
                 <div>
                  <Image src={gynsec13b} alt="Feature 2" className={styles.thirteenImg} />
                </div>
                <div>
                  <Image src={gynsec13c} alt="Feature 3" className={styles.thirteenImg} />
                </div>
              </div>
              </div>
            </div>
            {/* ===== SLIDE 14 ===== */}
            <div className={`${styles.slide} ${styles.slidefourteen}`}>
              <div className={styles.fourteenWrapper}>
                <h2 className={styles.fourteenTitle}>Achievements</h2>
                <Image src={gyn14sec} alt="Achievements" className={styles.fourteenImg}/>
              </div>
            </div>
             {/* ===== SLIDE 15 ===== */}
               <div className={styles.slide}>
            <div className={styles.centerContent}>
              <h2>Thank You</h2>
            </div>
          </div>
        </div>
        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.page}>
            {String(current + 1).padStart(2, "0")}/
            {String(totalSlides).padStart(2, "0")}
          </div>
          <div className={styles.buttons}>
            <button onClick={prevSlide} disabled={current === 0}>
              <FiArrowLeft />
            </button>
            <button onClick={nextSlide} disabled={current === totalSlides - 1}>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Demo;