import { Row, Col, Button } from "react-bootstrap";
import styles from "./selfphotogrid.module.scss";
import Image from "next/image";
import Link from 'next/link';
import { FiArrowUpRight} from 'react-icons/fi';
import image1 from "../../../public/images/selfimage/image1.png";
import image2 from "../../../public/images/selfimage/image2.png";
import image3 from "../../../public/images/selfimage/image3.png";
import image4 from "../../../public/images/selfimage/image4.png";
import image5 from "../../../public/images/selfimage/image5.png";
import image6 from "../../../public/images/selfimage/image6.png";
import image7 from "../../../public/images/selfimage/image7.png";
import image8 from "../../../public/images/selfimage/image8.png";
import image9 from "../../../public/images/selfimage/image9.png";
import image10 from "../../../public/images/selfimage/image10.png";
import image11 from "../../../public/images/selfimage/image11.png";
import image12 from "../../../public/images/selfimage/image12.png";
import image13 from "../../../public/images/selfimage/image13.png";
import image14 from "../../../public/images/selfimage/image14.png";
import image15 from "../../../public/images/selfimage/image15.png";
import image16 from "../../../public/images/selfimage/image16.png";
import image17 from "../../../public/images/selfimage/image17.png";
import image18 from "../../../public/images/selfimage/image18.png";
import image19 from "../../../public/images/selfimage/image19.png";
import image20 from "../../../public/images/selfimage/image20.png";
import image21 from "../../../public/images/selfimage/image21.png";
import image22 from "../../../public/images/selfimage/image22.png";
import click1 from "../../../public/images/selfimage/click1.png";
import click2 from "../../../public/images/selfimage/click2.png";
import click3 from "../../../public/images/selfimage/click3.png";
import click4 from "../../../public/images/selfimage/click4.png";
import click5 from "../../../public/images/selfimage/click5.png";
import click6 from "../../../public/images/selfimage/click6.png";
import click7 from "../../../public/images/selfimage/click7.png";
import click8 from "../../../public/images/selfimage/click8.png";
import click9 from "../../../public/images/selfimage/click9.png";
import { FiLink } from "react-icons/fi";

const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10, image11
];

const imagesecond = [
    image12, image13, image14, image15, image16,
    image17, image18, image19, image20, image21, image22
]

const photographyimg = [
    click1, click2, click3, click4, click5, click6, click7, click8, click9
]
const SelfPhotoGrid = () => {
    return (
        <>
            <Row className="mt-5">
                <Col>
                    <div className={styles.photoWrapper}>
                        <div className={styles.title}>📸 Check out what my camera captures when I'm off duty!</div>
                        <Row>
                            <div className={styles.slider}>
                                <div className={styles.track}>
                                    {images.map((img, index) => (
                                        <div key={index}>
                                            <Image src={img} alt="photo" height={395} width={261} />
                                        </div>
                                    ))}
                                    {images.map((img, index) => (
                                        <div key={`dup-${index}`}>
                                            <Image src={img} alt="photo" height={395} width={261} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Row>
                        <Row className="mt-4">
                            <div className={styles.slider}>
                                <div className={styles.trackReverse}>
                                    {imagesecond.map((img, index) => (
                                        <div key={index}>
                                            <Image src={img} alt="photo" height={395} width={261} />
                                        </div>
                                    ))}
                                    {imagesecond.map((img, index) => (
                                        <div key={`dup-${index}`}>
                                            <Image src={img} alt="photo" height={395} width={261} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Row>
                        <div className={styles.expFooter}>
                            <Link className={styles.footerCta} href="https://www.linkedin.com/in/19design97/" target="_blank" rel="noopener noreferrer">
                                See Full Experience <span><FiArrowUpRight /></span>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <div className={styles.photoWrapper}>
                        <div className={styles.title}>📸 Check out what my camera sees!</div>
                        <Row>
                            <div className={styles.slider}>
                                <div className={styles.track}>
                                    {photographyimg.map((img, index) => (
                                        <div key={index}>
                                            <Image src={img} alt="photo" height={395} width={261} />
                                        </div>
                                    ))}
                                    {photographyimg.map((img, index) => (
                                        <div key={`dup-${index}`}>
                                            <Image src={img} alt="photo" height={395} width={261} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Row>
                        <div className={styles.expFooter}>
                            <Link className={styles.footerCta} href="https://www.instagram.com/19photography97/" target="_blank" rel="noopener noreferrer">
                                See Full Experience <span><FiArrowUpRight /></span>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default SelfPhotoGrid;