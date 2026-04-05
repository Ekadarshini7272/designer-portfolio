import React, { useEffect, useState } from "react";
import styles from "./loader.module.scss";
import Image from "next/image";
import logo from "../../public/images/headerlogo.png"; // replace later

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 900); // text appears after logo animation starts

    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 2200); // loader disappears

    return () => {
      clearTimeout(textTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loaderWrapper}>
          <div className={styles.logoBox}>
            <Image
              src={logo}
              alt="logo"
              className={styles.logo}
              priority
            />
{/* 
            {showText && (
              <h6 className={styles.tagline}>
                The fastest designer
              </h6>
            )} */}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;