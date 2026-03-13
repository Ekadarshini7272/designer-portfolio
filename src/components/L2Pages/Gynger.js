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
            <Image src={gridrow1} alt="Grid Row 1" height={93} width={93}/>
            <Image src={gridrow2} alt="Grid Row 2" height={93} width={125}/>
            <Image src={gridrow3} alt="Grid Row 3" height={93} width={125}/>
            <Image src={gridrow4} alt="Grid Row 4" height={93} width={188}/>       
            <Image src={gridrow5} alt="Grid Row 5" height={93} width={188}/>
            <Image src={gridrow6} alt="Grid Row 6" height={93} width={188}/>
           </div>
            <div className={styles.imgflexdiv}>
            <Image src={gridbrow1} alt="Grid Row 1" height={93} width={93}/>
            <Image src={gridbrow2} alt="Grid Row 2" height={93} width={125}/>
            <Image src={gridbrow3} alt="Grid Row 3" height={93} width={125}/>
            <Image src={gridbrow4} alt="Grid Row 4" height={93} width={125}/>       
            <Image src={gridbrow5} alt="Grid Row 5" height={93} width={188}/>
            <Image src={gridbrow6} alt="Grid Row 6" height={93} width={188}/>
           </div>
            <div className={styles.imgflexdiv}>
            <Image src={gridcrow1} alt="Grid Row 1" height={93} width={93}/>
            <Image src={gridbrow2} alt="Grid Row 2" height={93} width={125}/>
            <Image src={gridbrow3} alt="Grid Row 3" height={93} width={125}/>
            <Image src={gridbrow4} alt="Grid Row 4" height={93} width={125}/>       
            <Image src={gridbrow5} alt="Grid Row 5" height={93} width={188}/>
            <Image src={gridbrow6} alt="Grid Row 6" height={93} width={188}/>
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
      </Container>
    </section>

  );
}
export default Gynger;