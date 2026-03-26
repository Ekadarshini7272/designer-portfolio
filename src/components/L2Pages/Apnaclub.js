'use client';

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./apnaclub.module.scss";

const Apnaclub = () => {
  const [current, setCurrent] = useState(0);

  const totalSlides = 3;

  const nextSlide = () => {
    if (current < totalSlides - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <section className={styles.homeSection}>
      <Container className={styles.sliderWrapper}>

        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >

          {/* ===== SLIDE 1 (Your first screen) ===== */}
          <div className={styles.slide}>
            <div className={styles.centerContent}>
              <h2>Driving Impact: Success Metrics That Redefined Growth</h2>
              <p>2023–2024</p>
              <span>Mobile, Survey, PRD, UI, UX</span>
            </div>
          </div>

          {/* ===== SLIDE 2 (Your second design - metrics card) ===== */}
          <div className={styles.slide}>
            <div className={styles.metricsWrapper}>
              
              <div className={styles.appLogo}>
                {/* replace with Image */}
                <div className={styles.logoBox}>Logo</div>
              </div>

              <div className={styles.statsRow}>
                <div>4.3★ Rating</div>
                <div>5L+ Downloads</div>
                <div>5.1K+ Reviews</div>
              </div>

              <div className={styles.grid}>
                <div>₹1.54Cr Revenue ↑</div>
                <div>18% Engagement ↑</div>
                <div>70% Retention</div>
                <div>27,000+ Users</div>

                <div>₹42Cr Burn capped</div>
                <div>2X Conversion</div>
                <div>9% GM ↑</div>
                <div>₹28,000 GMV</div>
              </div>

            </div>
          </div>

          {/* ===== SLIDE 3 (empty for now) ===== */}
          <div className={styles.slide}>
            <div className={styles.placeholder}>
              Slide 3 (Add later)
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

export default Apnaclub;