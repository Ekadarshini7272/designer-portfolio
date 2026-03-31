import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./mahindra.module.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import firstsec from "../../../public/images/L2Images/mahindra/firstsec.png";
import thirdsec from "../../../public/images/L2Images/mahindra/thirdsec.png";
import fourthsec from "../../../public/images/L2Images/mahindra/fourthsec.png";
const Mahindra = () => {
    const [current, setCurrent] = useState(0);
    const totalSlides = 4;
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
                            <h2>Real HMI Screen Of Mahindra vehicle 9” & 10.25”</h2>
                            <p>2025-2026</p>
                            <span>HMI, Hardware, Design System</span>
                        </div>
                    </div>
                    {/* ===== SLIDE 2 ===== */}
                    <div className={`${styles.slide} ${styles.slidesecond}`}>
                        <div className={styles.secondpage}>
                            <div className={styles.secondImageWrapper}>
                                {/* <Image src={firstsec} alt="Mahindra HMI Screens"
                                    className={styles.secondImage} priority
                                /> */}
                                <Image
                                    src={firstsec}
                                    alt="Mahindra HMI Screens"
                                    className={styles.secondImage}
                                    fill
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 3 ===== */}
                    <div className={`${styles.slide} ${styles.slidethird}`}>
                        <div className={styles.thirdImageWrapper}>
                            <Image
                                src={thirdsec}
                                alt="Design Components Highlight"
                                className={styles.thirdImage}
                                priority
                            />
                            <div className={styles.thirdText}>
                                Created 1100+ Design Components
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 4 ===== */}
                    <div className={`${styles.slide} ${styles.slidefourth}`}>
                        <div className={styles.fourthImageWrapper}>
                            <Image
                                src={fourthsec}
                                alt="Mahindra Design System Components"
                                className={styles.fourthImage}
                                priority
                            />
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
    )
};
export default Mahindra;