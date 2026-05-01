import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./project.module.scss";
import professional1 from "../../../public/images/comingsoon.png";
import gynger from "../../../public/images/L2Images/gynger/gynger.png";
import apnaklub from "../../../public/images/L2Images/apnaklub/apnaklub.png";
import mahindra from "../../../public/images/L2Images/mahindra/mahindra.png";

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
                  <Image src={gynger} alt="Professional Work" width={536} height={334} />
                </div>
                <h4 className={styles.workTitle}>
                  And how it became a money minting machine for O4S
                </h4>
                <div className={styles.workMeta}>
                  2020-2023
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
                  <Image src={apnaklub} alt="Professional Work" width={536} height={334} />
                </div>
                <h4 className={styles.workTitle}>
                  Driving Impact: Success Metrics That Redefined Growth
                </h4>
                <div className={styles.workMeta}>
                  2023–2024
                </div>
              </div>
            </a>
          </Col>
          <Col lg={6}>
            <a href="/mahindra" className={styles.viewDetails}>
              <div className={styles.professionalCard}>
                <div className={styles.cardTop}>
                  <span className={styles.workTag}>Professional Work</span>
                  <span className={styles.topArrow}>
                    <FiArrowUpRight />
                  </span>
                </div>
                <div className={styles.workImage}>
                  <Image src={mahindra} alt="Professional Work" width={536} height={334} />
                </div>
                <h4 className={styles.workTitle}>
                  Real HMI Screen Of Mahindra vehicle 9” & 10.25”
                </h4>
                <div className={styles.workMeta}>
                  2025-2026
                </div>
              </div>
            </a>
          </Col>
          <Col lg={6}>
            <div className={styles.professionalCard1}>           
                <Image src={professional1} alt="Professional Work" className={styles.imgcoming}/>          
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;