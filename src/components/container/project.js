import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./project.module.scss";
import professional1 from "../../../public/images/professionalimg.png";
const Project = () => {
  return (
    <section className={styles.homeSection}>
      <Container>
         <Row className="g-4">
              {[0, 1, 2, 3, 4, 5].map((_, index) => (
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
                      {index === 3 && "How it became a money minting machine for O4S"}
                      {index === 4 && "Empowering Brands with Authenticity, Insights, and Engagement"}
                      {index === 5 && "Reduce stress of OPS team : How?"}
                    </h4>
                    {/* Bottom right meta */}
                    <div className={styles.workMeta}>
                      By: Me & PLM & Dev Team
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
      </Container>
    </section>
  );
};

export default Project;
