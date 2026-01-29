import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./project.module.scss";
import professional1 from "../../../public/images/professionalimg.png";

/* =======================
   JSON DATA (single source)
======================= */
const projectData = [
  {
    id: 1,
    tag: "Professional Work",
    title: "Success Metrics That Redefined Growth",
    author: "By: Me & PLM & Dev Team",
    image: professional1,
  },
  {
    id: 2,
    tag: "Professional Work",
    title: "Reduce stress of OPS team : How?",
    author: "By: Me & PLM & Dev Team",
    image: professional1,
  },
  {
    id: 3,
    tag: "Professional Work",
    title: "And how it became a money minting machine for O4S",
    author: "By: Me & PLM & Dev Team",
    image: professional1,
  },
  {
    id: 4,
    tag: "Professional Work",
    title: "Empowering Brands with Authenticity, Insights, and Engagement",
    author: "By: Me & PLM & Dev Team",
    image: professional1,
  },
  {
    id: 5,
    tag: "Professional Work",
    title: "How it became a money minting machine for O4S",
    author: "By: Me & PLM & Dev Team",
    image: professional1,
  },
  {
    id: 6,
    tag: "Professional Work",
    title: "Reduce stress of OPS team : How?",
    author: "By: Me & PLM & Dev Team",
    image: professional1,
  },
];

const Project = () => {
  return (
    <section className={styles.homeSection}>
      <Container>
        <Row className="g-4">
          {projectData.map((item) => (
            <Col key={item.id} md={6}>
              <div className={styles.projectCard}>
                <span className={styles.arrowIcon}>
                  <FiArrowUpRight />
                </span>
                <p className={styles.tag}>{item.tag}</p>
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.title} className={styles.image} width={536} height={334}/>
                </div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.author}>{item.author}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
