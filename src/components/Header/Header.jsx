import Image from "next/image";
import Link from "next/link";
import headerlogooverhover from "../../../public/images/commonpageimg/headerlogooverhover.png";
import namelogo from "../../../public/images/commonpageimg/namelogo.svg";
import hovernamelogo from "../../../public/images/commonpageimg/hovernamelogo.svg";
import headerlogogrey from "../../../public/images/commonpageimg/headerlogogrey.svg";
import headerlogoblack from "../../../public/images/commonpageimg/headerlogoblack.svg";
// import menuplaygroundgrey from "../../../public/images/commonpageimg/menuplaygroundgrey.png";
// import menuplaygroundblack from "../../../public/images/commonpageimg/menuplaygroundblack.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.homeHeader}>
      <Link href="/" className={styles.brand} aria-label="Go to home page">
        <span className={styles.brandNameWrap}>
          <Image src={headerlogooverhover} alt="" aria-hidden="true" className={styles.hoverMark} priority />
          <Image src={namelogo} alt="Prabhu Prasad Pradhan" className={styles.brandLogo} priority />
          <Image src={hovernamelogo} alt="" aria-hidden="true" className={styles.brandLogoHover} priority />
        </span>
        <span className={styles.brandRole}>Lead Designer</span>
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {/* <Link href="/projects" className={styles.navItem} data-hover-label="the Mess">
          <span className={styles.playgroundIcon} aria-hidden="true">
            <Image
              src={menuplaygroundgrey}
              alt=""
              className={styles.iconGrey}
              width={16}
              height={16}
            />
            <Image
              src={menuplaygroundblack}
              alt=""
              className={styles.iconBlack}
              width={16}
              height={16}
            />
          </span>
          <span className={styles.label}>
            <span>Playground</span>
            <span className={styles.hoverLabel}>the Mess</span>
          </span>
        </Link> */}
        <Link href="/about" className={styles.navItem} aria-label="About">
          <span className={styles.label} aria-hidden="true">
            <span className={styles.navLabel}>
              <Image src={headerlogogrey} alt="" width={18} height={18} />
              About
            </span>
            <span className={styles.navLabel}>
              <Image src={headerlogoblack} alt="" width={18} height={18} />
              <span className={styles.hoverLabel}>the Human</span>
            </span>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
