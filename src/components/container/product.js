import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./product.module.scss";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.png";
const Product = () => {
  return (
    <section className={styles.homeSection}>
      <Container>
        <Row className="justify-content-center">
          <Link href="http://shop.akvioo.com" target="_blank" rel="noopener noreferrer" className={styles.shopnav}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              <span className={styles.productLabel}>Product 1</span>
              <span className={styles.shopbtn}>Shop Now <FiArrowUpRight /></span>
            </div>
            <div className={styles.cardBody}>
              <Image src={product1} alt="Product 1" className={styles.productImage} priority/>
            </div>
          </div>
          </Link>
           <Link href="http://shop.designdaddys.com" target="_blank" rel="noopener noreferrer" className={styles.shopnav}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              <span className={styles.productLabel}>Product 2</span>
              <span className={styles.shopbtn}>Shop Now <FiArrowUpRight /></span>
            </div>
            <div className={styles.cardBody}>
              <Image src={product2} alt="Product 2" className={styles.productImage}/>
            </div>
          </div>
           </Link>
        </Row>
      </Container>
    </section>
  );
};
export default Product;