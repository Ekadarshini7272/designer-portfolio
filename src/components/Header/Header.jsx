import Image from "next/image";
import Link from "next/link";
import { TbUser } from "react-icons/tb";
import headerlogooverhover from "../../../public/images/commonpageimg/headerlogooverhover.png";
import menuplaygroundgrey from "../../../public/images/commonpageimg/menuplaygroundgrey.png";
import menuplaygroundblack from "../../../public/images/commonpageimg/menuplaygroundblack.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.homeHeader}>
      <Link href="/" className={styles.brand} aria-label="Go to home page">
        <span className={styles.brandNameWrap}>
          <span className={styles.hoverMark}>
            <Image src={headerlogooverhover} alt="" fill sizes="200px" priority />
          </span>
          <span className={styles.brandName}>Prabhu Prasad Pradhan</span>
        </span>
        <span className={styles.brandRole}>Senior Product Designer</span>
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/about" className={styles.navItem} data-hover-label="the Human">
          <TbUser aria-hidden="true" />
          <span className={styles.label}>
            <span>About</span>
            <span>the Human</span>
          </span>
        </Link>
        <Link href="/projects" className={styles.navItem} data-hover-label="the Mess">
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
            <span>the Mess</span>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
