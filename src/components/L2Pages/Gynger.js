import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./gynger.module.scss";
import gridrow1 from "../../../public/images/L2Images/gynger/gridrow1.png";
import gridrow2 from "../../../public/images/L2Images/gynger/gridrow2.png";
import gridrow3 from "../../../public/images/L2Images/gynger/gridrow3.png";
import gridrow4 from "../../../public/images/L2Images/gynger/gridrow4.png";
import gridrow5 from "../../../public/images/L2Images/gynger/gridrow5.png";
import gridrow6 from "../../../public/images/L2Images/gynger/gridrow6.png";
import gridbrow1 from "../../../public/images/L2Images/gynger/gridbrow1.png";
import gridbrow2 from "../../../public/images/L2Images/gynger/gridbrow2.png";
import gridbrow3 from "../../../public/images/L2Images/gynger/gridbrow3.png";
import gridbrow4 from "../../../public/images/L2Images/gynger/gridbrow4.png";
import gridbrow5 from "../../../public/images/L2Images/gynger/gridbrow5.png";
import gridbrow6 from "../../../public/images/L2Images/gynger/gridbrow6.png";
import gridcrow1 from "../../../public/images/L2Images/gynger/gridcrow1.png";
import challengeimg from "../../../public/images/L2Images/gynger/challengeimg.png";
import solutionimg from "../../../public/images/L2Images/gynger/sollution.png";
import casestudyImg from "../../../public/images/L2Images/gynger/casestudyImg.png";
import userPersonaImg from "../../../public/images/L2Images/gynger/distributor.png";
import featureList from "../../../public/images/L2Images/gynger/featureList.png";
import flowDesign from "../../../public/images/L2Images/gynger/flowDesign.png";
import framerowcola from "../../../public/images/L2Images/gynger/row1a.png";
import framerowcolb from "../../../public/images/L2Images/gynger/row1b.png";
import framerowcolc from "../../../public/images/L2Images/gynger/row1c.png";
import frameb from "../../../public/images/L2Images/gynger/row2.png";
import framec from "../../../public/images/L2Images/gynger/row3.png";
import fewfeatureList from "../../../public/images/L2Images/gynger/fewfeatureimg.png";
import featuregrid1 from "../../../public/images/L2Images/gynger/featuregrid1.png";
import featuregrid2 from "../../../public/images/L2Images/gynger/featuregrid2.png";
import featuregrid3 from "../../../public/images/L2Images/gynger/featuregrid3.png";
import featuregrid4 from "../../../public/images/L2Images/gynger/featuregrid4.png";
import archivementImg from "../../../public/images/L2Images/gynger/archievement.png";
const Gynger = () => {
  return (
    <section className={styles.homeSection}>
      <Container>
        <Row className={styles.topCard}>
          <h2 className={styles.cardhead}>And how it became a money minting machine for O4S</h2>
          <div className={styles.cardpara}>2020-2023</div>
          <div className={styles.cardtext}>Mobile, User Persona, Flow</div>
        </Row>
        {/* Rating product section */}
        <Row className="mt-5">
          <div className={styles.topCard}>
            <div className={styles.imgflexdiv}>
              <Image src={gridrow1} alt="Grid Row 1" height={93} width={93} />
              <Image src={gridrow2} alt="Grid Row 2" height={93} width={125} />
              <Image src={gridrow3} alt="Grid Row 3" height={93} width={125} />
              <Image src={gridrow4} alt="Grid Row 4" height={93} width={188} />
              <Image src={gridrow5} alt="Grid Row 5" height={93} width={188} />
              <Image src={gridrow6} alt="Grid Row 6" height={93} width={188} />
            </div>
            <div className={styles.imgflexdiv}>
              <Image src={gridbrow1} alt="Grid Row 1" height={93} width={93} />
              <Image src={gridbrow2} alt="Grid Row 2" height={93} width={125} />
              <Image src={gridbrow3} alt="Grid Row 3" height={93} width={125} />
              <Image src={gridbrow4} alt="Grid Row 4" height={93} width={125} />
              <Image src={gridbrow5} alt="Grid Row 5" height={93} width={188} />
              <Image src={gridbrow6} alt="Grid Row 6" height={93} width={188} />
            </div>
            <div className={styles.imgflexdiv}>
              <Image src={gridcrow1} alt="Grid Row 1" height={93} width={93} />
              <Image src={gridbrow2} alt="Grid Row 2" height={93} width={125} />
              <Image src={gridbrow3} alt="Grid Row 3" height={93} width={125} />
              <Image src={gridbrow4} alt="Grid Row 4" height={93} width={125} />
              <Image src={gridbrow5} alt="Grid Row 5" height={93} width={188} />
              <Image src={gridbrow6} alt="Grid Row 6" height={93} width={188} />
            </div>
          </div>
        </Row>
        {/* challengeand solution section */}
        <Row className="mt-5">
          <div className={styles.challengesSection}>
            <div className={styles.imageBox}>
              <Image
                src={challengeimg}
                alt="Challenges Illustration"
                height={315} width={220}
              />
            </div>
            <div className={styles.contentBox}>
              <h3 className={styles.title}>Challenges:</h3>
              <ul className={styles.challengeList}>
                <li>Retailers select competitive brands to enhance profits and gain incentives.</li>
                <li>Brands find it challenging to monitor retailer performance, as they typically only track supply to distributors.</li>
                <li>Distributors may manipulate information for their own advantage, resulting in poor communication.</li>
                <li>Engaging retailers and motivating them to prioritize specificproducts is difficult.</li>
                <li>There is a lack of a reliable system to identify which retailers are effectively promoting their products.</li>
              </ul>
            </div>
          </div>
        </Row>
        {/*solution section */}
        <Row className="mt-5">
          <div className={styles.challengesSection}>
            <div className={styles.contentBox}>
              <h3 className={styles.title}>Solutions:</h3>
              <ul className={styles.challengeList}>
                <li>Retailers select competitive brands to enhance profits and gain incentives.</li>
                <li>Brands find it challenging to monitor retailer performance, as they typically only track supply to distributors.</li>
                <li>Distributors may manipulate information for their own advantage, resulting in poor communication.</li>
                <li>Engaging retailers and motivating them to prioritize specificproducts is difficult.</li>
                <li>There is a lack of a reliable system to identify which retailers are effectively promoting their products.</li>
              </ul>
            </div>
            <div className={styles.imageBox}>
              <Image
                src={solutionimg}
                alt="Challenges Illustration"
                height={315} width={220}
              />
            </div>
          </div>
        </Row>
        {/* Case study section */}
        <Row className="mt-5">
          <div className={styles.caseStudySection}>
            <div className={styles.imageWrapper}>
              <Image
                src={casestudyImg}
                alt="case study"
                fill
                className={styles.image}
              />
            </div>
            <h3 className={styles.title}>Case study & then??:</h3>
            <ul className={styles.challengeList}>
              <li>Increase brand awareness and enable direct engagement between brands and retailers.</li>
              <li>Retailers, consumers, and brands benefit from trade promotions and loyalty programs.</li>
              <li>Users can earn and redeem reward points anytime, without third-party intervention.</li>
              <li>O4S introduces 100% traceability with unique QR codes on product labels.</li>
              <li>Retailers scan QR codes via Gynger to earn points.</li>
              <li>Points can be redeemed as cash, vouchers, or gifts, making the process rewarding and convenient.</li>
            </ul>
            <h3 className={styles.title}>Then ??? After Few Years:</h3>
            <ul className={styles.challengeList}>
              <li>Despite a strong user base, uninstalls increased when no schemes were active.</li>
              <li>To address this, we began researching ways to enhance the app’s experience.</li>
              <li>Focused on adding new features to boost user engagement.</li>
            </ul>
          </div>
        </Row>
        {/* User persona section */}
        <Row className="mt-5">
          <div className={styles.userpersonaSection}>
            <h3 className={styles.title}>User Persona :</h3>
            <div className={styles.casestudyImgSec}>
              <Image src={userPersonaImg} height={950} width={910} />
            </div>
            <h5 className={styles.personaTitle}>We talked to over 50 retailers.<br />
              Tried to figure out what they found easy or hard to use in the App. The main points I tried to focus on were:</h5>
            <ul className={styles.challengeList}>
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
        </Row>
        {/* Feature section */}
        <Row className="mt-5">
          <div className={styles.featureList}>
            <h3 className={styles.title}>Proposed feature list :</h3>
            <div className={styles.imageWrapperfeature}>
            <Image src={featureList} className={styles.imagefeature} fill/>
            </div>
            <div className={styles.featurecondiv}>
              <h5>User Onboarding</h5>
              <li className={styles.featureLi}>Video tutorial at the beginning of the app to guide users through its features.</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>User Personas</h5>
              <li className={styles.featureLi}>Secondary user personas to assist the primary user in scanning products, managed through their profile page.</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>Notifications</h5>
              <li className={styles.featureLi}>Real-time alerts for promotions, orders, and other updates.</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>Profile Management</h5>
              <li className={styles.featureLi}>User profile containing :</li>
              <li className={styles.featureLipara}>Contacts</li>
              <li className={styles.featureLipara}>Payment information</li>
              <li className={styles.featureLipara}>Address book</li>
              <li className={styles.featureLipara}>Analytics</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>Brand Zone</h5>
              <li className={styles.featureLi}>A dedicated section for brands to upload and manage content, including :</li>
              <li className={styles.featureLipara}>Brand stories</li>
              <li className={styles.featureLipara}>Promotional cards</li>
              <li className={styles.featureLipara}>Community</li>
              <li className={styles.featureLipara}>Leaderboards</li>
              <li className={styles.featureLipara}>Brand catalog (users can order products from distributors)</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>Transaction Management</h5>
              <li className={styles.featureLi}>Detailed transaction page for tracking earnings and burning of points.</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>Gamification</h5>
              <li className={styles.featureLi}>Features designed to enhance user engagement through game-like elements.</li>
            </div>
            <div className={styles.featurecondiv}>
              <h5>Gynger Mart</h5>
              <li className={styles.featureLi}>A virtual shop through which retailers can place orders.</li>
            </div>
          </div>
        </Row>
        {/* Flow section */}
        <Row className="mt-5">
          <div className={styles.flowSection}>
            <h3 className={styles.title}>The Flow</h3>
            <div className={styles.imageWrapperflow}>
            <Image src={flowDesign} fill className={styles.imageflow} />
            </div>
          </div>
        </Row>
        {/* Wire framing section */}
        <Row className="mt-5">
          <div className={styles.wireFramingSection}>
            <h3 className={styles.title}>Wire-framing & ideation</h3>
            <div className={styles.framingdiv}>
              <Image src={framerowcola} height={327} width={244} />
              <Image src={framerowcolb} height={327} width={244} />
              <Image src={framerowcolc} height={327} width={383} />
            </div>
            <div className="mt-5 mb-5">
             <div className={styles.imageWrapperframeb}>
            <Image src={frameb} fill className={styles.imageframeb} />
            </div>
            </div>
            <div className={styles.imageWrapperframeb}>
            <Image src={framec} fill className={styles.imageframeb} />
            </div>
          </div>
        </Row>
        {/* Few feature section */}
        <Row className="mt-5">
          <div className={styles.fewfeatureSection}>
            <h3 className={styles.title}>Few feature list</h3>
            <h5 className={styles.fewfeaturecontent}>We filtered out some features by validating them with tech, business and other stakeholders and decided to list down the MVP version of what we want in the App. Some of the major changes we made were -</h5>
            {/* <Row className="mt-4">
              <Col md={6} className={styles.fewimgcol1}>
                <div className={styles.fewimgflex}>
                  <Image src={featuregrid1} height={268} width={224} />
                  <Image src={featuregrid2} height={229} width={224} />
                </div>
                <h6 className={styles.flextext1}>**Focusing more on the banner image and the scheme card</h6>
              </Col>
              <Col md={6} className={styles.fewimgcol2}>
                <div className={styles.fewimgflex}>
                  <Image src={featuregrid3} height={243} width={224} />
                  <Image src={featuregrid4} height={347} width={225} />
                </div>
                <h6 className={styles.flextext2}>**Making the points to money conversion more interactive</h6>
              </Col>
            </Row> */}
             <div className={styles.imageWrapperfewfeature}>
            <Image src={fewfeatureList} className={styles.imagefewfeature} fill/>
            </div>
          </div>
        </Row>
        {/* Archievement section */}
        <Row className="mt-5">
          <div className={styles.archivementsection}>
            <h3 className={styles.title}>Achievements</h3>
            <div className={styles.imageWrapperarchivement}>
            <Image src={archivementImg} fill className={styles.imagearchievement} />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
export default Gynger;