import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import recomendationgrey from "../../../public/images/about/recomendationgrey.png";
import recomendationblack from "../../../public/images/about/recomendationblack.png";
import reccomend1 from "../../../public/images/recomendation/recommend1.svg";
import reccomend2 from "../../../public/images/recomendation/reccomend2.svg";
import reccomend3 from "../../../public/images/recomendation/reccomend3.svg";
import reccomend4 from "../../../public/images/recomendation/reccomend4.svg";
import reccomend5 from "../../../public/images/recomendation/reccomend5.svg";
import reccomend6 from "../../../public/images/recomendation/reccomend6.svg";
import reccomend7 from "../../../public/images/recomendation/reccomend7.svg";
import reccomend8 from "../../../public/images/recomendation/reccomend8.svg";
import reccomend9 from "../../../public/images/recomendation/reccomend9.svg";
import reccomend10 from "../../../public/images/recomendation/reccomend10.svg";
import reccomend11 from "../../../public/images/recomendation/reccomend11.svg";
import reccomend12 from "../../../public/images/recomendation/reccomend12.svg";
import reccomend13 from "../../../public/images/recomendation/reccomend13.svg";
import reccomend14 from "../../../public/images/recomendation/reccomend14.svg";
import reccomenddowngrey from "../../../public/images/recomendation/reccomendshiftbtngrey.svg";
import reccomenddownblack from "../../../public/images/recomendation/reccomendshiftbtnblack.svg";
import styles from "./recommendations.module.scss";

const recommendationCards = [
  reccomend1,
  reccomend2,
  reccomend3,
  reccomend4,
  reccomend5,
  reccomend6,
  reccomend7,
  reccomend8,
  reccomend9,
  reccomend10,
  reccomend11,
  reccomend12,
  reccomend13,
  reccomend14,
];

const cardRotations = [-8, 5, -3, 7, -6, 4, -5, 6, -4, 3, -7, 5, -2, 6];

const formatIstTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  })
    .format(new Date())
    .replace(".", "")
    .toUpperCase();

const playFlipSound = () => {
  if (typeof window === "undefined") return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(340, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(620, audioContext.currentTime + 0.06);

  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.13);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.14);
  window.setTimeout(() => audioContext.close(), 180);
};

const Recommendations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(formatIstTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  const showNextCard = () => {
    playFlipSound();
    setActiveIndex((current) => (current + 1) % recommendationCards.length);
  };

  return (
    <main
      className={styles.recommendationsPage}
      style={{ "--page-grid": `url(${allbgimg.src})` }}
    >
      <Container fluid className={styles.pageShell}>
        <section className={styles.recommendationsCard} aria-label="Recommendations">
          <header className={styles.recommendationsHeader}>
            <Link href="/about" className={styles.backLink} aria-label="Back to about">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <Link href="/recommendations" className={styles.recommendationsTitle}>
              <span className={styles.titleIcon}>
                <Image
                  src={recomendationgrey}
                  alt=""
                  className={styles.greyTitleIcon}
                  sizes="18px"
                />
                <Image
                  src={recomendationblack}
                  alt=""
                  className={styles.blackTitleIcon}
                  sizes="18px"
                />
              </span>
              <span>Recommendations</span>
            </Link>
          </header>

          <section className={styles.cardStage} aria-label="Recommendation cards">
            <div className={styles.cardAura} aria-hidden="true" />
            <div
              className={styles.recommendationStack}
              style={{ "--stamp-rotation": `${cardRotations[activeIndex]}deg` }}
              key={activeIndex}
            >
              <Image
                src={recommendationCards[activeIndex]}
                alt={`Recommendation ${activeIndex + 1} of ${recommendationCards.length}`}
                className={styles.recommendationImage}
                sizes="190px"
                priority
              />
            </div>
            <button
              type="button"
              className={styles.nextButton}
              onClick={showNextCard}
              aria-label="Show next recommendation"
            >
              <Image
                src={reccomenddowngrey}
                alt=""
                className={styles.nextButtonGrey}
                sizes="24px"
              />
              <Image
                src={reccomenddownblack}
                alt=""
                className={styles.nextButtonBlack}
                sizes="24px"
              />
            </button>
          </section>

          <footer className={styles.recommendationsFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default Recommendations;
