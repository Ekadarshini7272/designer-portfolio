import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import gallerygrey from "../../../public/images/about/gallerygrey.png";
import galleryblack from "../../../public/images/about/galleryblack.png";
import myphotogrey from "../../../public/images/gallery/myphotogrey.png";
import myphotoblack from "../../../public/images/gallery/myphotoblack.png";
import photographygrey from "../../../public/images/gallery/photographygrey.png";
import photographyblack from "../../../public/images/gallery/photographyblack.png";
import profile1 from "../../../public/images/gallery/profile1.png";
import profile2 from "../../../public/images/gallery/profile2.png";
import profile3 from "../../../public/images/gallery/profile3.png";
import profile4 from "../../../public/images/gallery/profile4.png";
import profile5 from "../../../public/images/gallery/profile5.png";
import profile6 from "../../../public/images/gallery/profile6.png";
import profile7 from "../../../public/images/gallery/profile7.png";
import profile8 from "../../../public/images/gallery/profile8.png";
import profile9 from "../../../public/images/gallery/profile9.png";
import profile10 from "../../../public/images/gallery/profile10.png";
import profile11 from "../../../public/images/gallery/profile11.png";
import profile12 from "../../../public/images/gallery/profile12.png";
import profile13 from "../../../public/images/gallery/profile13.png";
import profile14 from "../../../public/images/gallery/profile14.png";
import profile15 from "../../../public/images/gallery/profile15.png";
import profile16 from "../../../public/images/gallery/profile16.png";
import profile17 from "../../../public/images/gallery/profile17.png";
import photography1 from "../../../public/images/gallery/photography1.png";
import photography2 from "../../../public/images/gallery/photography2.png";
import photography3 from "../../../public/images/gallery/photography3.png";
import photography4 from "../../../public/images/gallery/photography4.png";
import photography5 from "../../../public/images/gallery/photography5.png";
import photography6 from "../../../public/images/gallery/photography6.png";
import photography7 from "../../../public/images/gallery/photography7.png";
import photography8 from "../../../public/images/gallery/photography8.png";
import photography9 from "../../../public/images/gallery/photography9.png";
import photography10 from "../../../public/images/gallery/photography10.png";
import photography11 from "../../../public/images/gallery/photography11.png";
import styles from "./gallery.module.scss";

const profileImages = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  profile11,
  profile12,
  profile13,
  profile14,
  profile15,
  profile16,
  profile17,
];

const photographyImages = [
  photography1,
  photography2,
  photography3,
  photography4,
  photography5,
  photography6,
  photography7,
  photography8,
  photography9,
  photography10,
  photography11,
];

const modes = [
  {
    key: "myphoto",
    label: "My Photo",
    greyIcon: myphotogrey,
    blackIcon: myphotoblack,
  },
  {
    key: "photography",
    label: "Photography",
    greyIcon: photographygrey,
    blackIcon: photographyblack,
  },
];

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

const Gallery = () => {
  const [activeMode, setActiveMode] = useState("myphoto");
  const [currentTime, setCurrentTime] = useState(formatIstTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  const activeImages = activeMode === "myphoto" ? profileImages : photographyImages;
  const loopImages = useMemo(() => [...activeImages, ...activeImages], [activeImages]);

  return (
    <main className={styles.galleryPage} style={{ "--page-grid": `url(${allbgimg.src})` }}>
      <Container fluid className={styles.pageShell}>
        <section className={styles.galleryCard} aria-label="My Photo Gallery">
          <header className={styles.galleryHeader}>
            <Link href="/about" className={styles.backLink} aria-label="Back to about">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <Link href="/gallery" className={styles.galleryTitle}>
              <span className={styles.titleIcon}>
                <Image src={gallerygrey} alt="" className={styles.greyTitleIcon} sizes="18px" />
                <Image src={galleryblack} alt="" className={styles.blackTitleIcon} sizes="18px" />
              </span>
              <span>My Photo Gallery</span>
            </Link>
          </header>

          <div className={styles.modeToggle} aria-label="Gallery mode">
            {modes.map((mode) => {
              const isActive = activeMode === mode.key;

              return (
                <button
                  type="button"
                  className={`${styles.modeButton} ${isActive ? styles.activeMode : ""}`}
                  onClick={() => setActiveMode(mode.key)}
                  key={mode.key}
                  aria-pressed={isActive}
                >
                  <span className={styles.modeIcon}>
                    <Image
                      src={mode.greyIcon}
                      alt=""
                      className={styles.modeGreyIcon}
                      sizes="40px"
                    />
                    <Image
                      src={mode.blackIcon}
                      alt=""
                      className={styles.modeBlackIcon}
                      sizes="40px"
                    />
                  </span>
                  <span className={styles.modeLabel}>{mode.label}</span>
                </button>
              );
            })}
          </div>

          <section className={styles.sliderWrap} aria-label={activeMode === "myphoto" ? "My photos" : "Photography"}>
            <div className={styles.sliderViewport}>
              <div className={styles.sliderTrack} key={activeMode}>
                {loopImages.map((photo, index) => (
                  <div className={styles.photoCard} key={`${activeMode}-${index}`}>
                    <Image
                      src={photo}
                      alt=""
                      className={styles.photo}
                      sizes="82px"
                      priority={index < 4}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className={styles.galleryFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default Gallery;
