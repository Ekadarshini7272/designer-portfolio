import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { TbArrowLeft } from "react-icons/tb";
import allbgimg from "../../../public/images/commonpageimg/allbgimg.png";
import collaborationgrey from "../../../public/images/about/collaborationgrey.png";
import collaborationblack from "../../../public/images/about/collaborationblack.png";
import workbrand1 from "../../../public/images/workingbrands/brandwork1.png";
import workbrand2 from "../../../public/images/workingbrands/brandwork2.png";
import workbrand3 from "../../../public/images/workingbrands/brandwork3.png";
import workbrand4 from "../../../public/images/workingbrands/brandwork4.png";
import workbrand5 from "../../../public/images/workingbrands/brandwork5.png";
import workbrand6 from "../../../public/images/workingbrands/brandwork6.png";
import workbrand7 from "../../../public/images/workingbrands/brandwork7.png";
import workbrand8 from "../../../public/images/workingbrands/brandwork8.png";
import workbrand9 from "../../../public/images/workingbrands/brandwork9.png";
import workbrand10 from "../../../public/images/workingbrands/brandwork10.png";
import workbrand11 from "../../../public/images/workingbrands/brandwork11.png";
import workbrand12 from "../../../public/images/workingbrands/brandwork12.png";
import workbrand13 from "../../../public/images/workingbrands/brandwork13.png";
import workbrand14 from "../../../public/images/workingbrands/brandwork14.png";
import workbrand15 from "../../../public/images/workingbrands/brandwork15.png";
import workbrand16 from "../../../public/images/workingbrands/brandwork16.png";
import workbrand17 from "../../../public/images/workingbrands/brandwork17.png";
import workbrand18 from "../../../public/images/workingbrands/brandwork18.png";
import workbrand19 from "../../../public/images/workingbrands/brandwork19.png";
import workbrand20 from "../../../public/images/workingbrands/brandwork20.png";
import workbrand21 from "../../../public/images/workingbrands/brandwork21.png";
import workbrand22 from "../../../public/images/workingbrands/brandwork22.png";
import workbrand23 from "../../../public/images/workingbrands/brandwork23.png";
import workbrand24 from "../../../public/images/workingbrands/brandwork24.png";
import styles from "./collaboration.module.scss";

const brandImages = [
  workbrand1,
  workbrand2,
  workbrand3,
  workbrand4,
  workbrand5,
  workbrand6,
  workbrand7,
  workbrand8,
  workbrand9,
  workbrand10,
  workbrand11,
  workbrand12,
  workbrand13,
  workbrand14,
  workbrand15,
  workbrand16,
  workbrand17,
  workbrand18,
  workbrand19,
  workbrand20,
  workbrand21,
  workbrand22,
  workbrand23,
  workbrand24,
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

const Collaboration = () => {
  const [currentTime, setCurrentTime] = useState(formatIstTime);
  const loopBrands = useMemo(() => [...brandImages, ...brandImages], []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatIstTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main
      className={styles.collaborationPage}
      style={{ "--page-grid": `url(${allbgimg.src})` }}
    >
      <Container fluid className={styles.pageShell}>
        <section className={styles.collaborationCard} aria-label="Collaboration">
          <header className={styles.collaborationHeader}>
            <Link href="/about" className={styles.backLink} aria-label="Back to about">
              <TbArrowLeft aria-hidden="true" />
            </Link>
            <Link href="/collaboration" className={styles.collaborationTitle}>
              <span className={styles.titleIcon}>
                <Image
                  src={collaborationgrey}
                  alt=""
                  className={styles.greyTitleIcon}
                  sizes="18px"
                />
                <Image
                  src={collaborationblack}
                  alt=""
                  className={styles.blackTitleIcon}
                  sizes="18px"
                />
              </span>
              <span>Collaboration</span>
            </Link>
          </header>

          <section className={styles.sliderWrap} aria-label="Brand collaborations">
            <div className={styles.sliderViewport}>
              <div className={styles.sliderTrack}>
                {loopBrands.map((brand, index) => (
                  <div className={styles.brandCard} key={`brand-${index}`}>
                    <Image
                      src={brand}
                      alt=""
                      className={styles.brandLogo}
                      sizes="68px"
                      priority={index < 6}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className={styles.collaborationFooter}>
            <p>&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
            <time suppressHydrationWarning>{currentTime} IST</time>
          </footer>
        </section>
      </Container>
    </main>
  );
};

export default Collaboration;
