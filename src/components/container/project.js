import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./project.module.scss";
import professional1 from "../../../public/images/professionalimg.png";

const Project = () => {
  return (
    <section className={styles.homeSection}>
      <Container>
        <Row className="g-4">
          <Col lg={6}>
             <a href="/gynger" className={styles.viewDetails}>
            <div className={styles.professionalCard}>
              <div className={styles.cardTop}>
                <span className={styles.workTag}>Professional Work</span>
                <span className={styles.topArrow}>
                  <FiArrowUpRight />
                </span>
              </div>
              <div className={styles.workImage}>
                <Image src={professional1} alt="Professional Work" width={536} height={334}/>
              </div>
              <h4 className={styles.workTitle}>
                How it became a money minting machine for O4S
              </h4>
              <div className={styles.workMeta}>
                By: Me & PLM & Dev Team
              </div>
            </div>
            </a>
          </Col>
          <Col lg={6}>
          <a href="/apnaklub" className={styles.viewDetails}>
          <div className={styles.professionalCard}>
              <div className={styles.cardTop}>
                <span className={styles.workTag}>Professional Work</span>
                <span className={styles.topArrow}>
                  <FiArrowUpRight />
                </span>
              </div>

              <div className={styles.workImage}>
                <Image src={professional1} alt="Professional Work" width={536} height={334}/>
              </div>

              <h4 className={styles.workTitle}>
                Success Metrics That Redefined Growth
              </h4>

              <div className={styles.workMeta}>
                By: Me & PLM & Dev Team
              </div>
            </div>
  </a>
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
                <Image src={professional1} alt="Professional Work" width={536} height={334}/>
              </div>

              <h4 className={styles.workTitle}>
                Reduce stress of OPS team ! How?
              </h4>

              <div className={styles.workMeta}>
                By: Me & PLM & Dev Team
              </div>
            </div>
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
                <Image src={professional1} alt="Professional Work" width={536} height={334}/>
              </div>

              <h4 className={styles.workTitle}>
                And how it became a money minting machine for O4S
              </h4>

              <div className={styles.workMeta}>
                By: Me & PLM & Dev Team
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;