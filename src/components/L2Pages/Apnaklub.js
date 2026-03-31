import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./apnaklub.module.scss";
import secondsec from "../../../public/images/L2Images/apnaklub/secondsec.png";
import thirdsec from "../../../public/images/L2Images/apnaklub/thirdsec.png";
import fourthsec1 from "../../../public/images/L2Images/apnaklub/forthsec1.png";
import fourthsec2 from "../../../public/images/L2Images/apnaklub/forthsec2.png";
import fifthsec1 from "../../../public/images/L2Images/apnaklub/fifthsec1.png";
import fifthsec2 from "../../../public/images/L2Images/apnaklub/fifthsec2.png";
import sixthsec1 from "../../../public/images/L2Images/apnaklub/sixthsec1.jpg";
// import sixthsec2 from "../../../public/images/L2Images/apnaklub/sixthsec2.png";
import seventhsec1 from "../../../public/images/L2Images/apnaklub/seventhsec1.png";
import seventhsec2 from "../../../public/images/L2Images/apnaklub/seventhsec2.png";
import eighthsec from "../../../public/images/L2Images/apnaklub/eighthsec.gif";
import ninthsec from "../../../public/images/L2Images/apnaklub/ninthsec.gif";
import tenthsec from "../../../public/images/L2Images/apnaklub/tenthsec.png";
import elevensec1 from "../../../public/images/L2Images/apnaklub/elevensec1.png";
import elevensec2 from "../../../public/images/L2Images/apnaklub/elevensec2.png";
import twelevesec1 from "../../../public/images/L2Images/apnaklub/twelevesec1.png";
import twelevesec2 from "../../../public/images/L2Images/apnaklub/twelevesec2.png";
import thirtinthsec from "../../../public/images/L2Images/apnaklub/thirtinthsec.png";
import fourteenthsec from "../../../public/images/L2Images/apnaklub/fourteenthsec.png";
import fifteenthsec from "../../../public/images/L2Images/apnaklub/fourteenthsec.png";


const Apnaclub = () => {
    const [current, setCurrent] = useState(0);
    const totalSlides = 16;
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
                    {/* ===== SLIDE 2 ===== */}
                    <div className={styles.slide}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={secondsec}
                                alt="ApnaClub Metrics"
                                className={styles.slideImage}
                                priority
                            />
                        </div>
                    </div>
                    {/* ===== SLIDE 3 ===== */}
                    <div className={`${styles.slide} ${styles.slideThree}`}>
                        <div className={styles.thirdpage}>
                            <h3>Real Survey:</h3>
                            <div className={styles.thirdImageWrapper}>
                                <Image
                                    src={thirdsec}
                                    alt="Survey Data"
                                    className={styles.thirdImage}
                                />
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 4 ===== */}
                    <div className={`${styles.slide} ${styles.slideFour}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Big Card Design</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={fourthsec1}
                                            alt="Before Design"
                                            className={styles.mobileImage}
                                        />
                                    </div>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={fourthsec2}
                                            alt="After Design"
                                            className={styles.mobileImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightContent}>
                                <div className={styles.infoCard}>
                                    <h4>Challenges:</h4>
                                    <ul>
                                        <li>Navigation is confusing due to unclear categories and hierarchy.</li>
                                        <li>Poor product visibility lowers retailer engagement and sales.</li>
                                        <li>App doesn’t highlight key brands effectively.</li>
                                        <li>Too much text reduces engagement; needs more visual, intuitive design.</li>
                                    </ul>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Solution:</h4>
                                    <ul>
                                        <li>Designed Big Box layout with cards for easier retailer navigation.</li>
                                        <li>Prioritized top 5 sections using Metabase data and feedback.</li>
                                        <li>Added visuals like shop photos and brand icons.</li>
                                        <li>Improved usability, boosting sales and satisfaction.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 5 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Category Section</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={fifthsec1}
                                            alt="Before Design"
                                            className={styles.mobileImagefifth}
                                        />
                                    </div>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={fifthsec2}
                                            alt="After Design"
                                            className={styles.mobileImagefifth}
                                        />
                                    </div>
                                </div>
                                <div className={styles.imgspan}>Before</div>
                            </div>
                            <div className={styles.rightContentfifth}>
                                <div className={styles.infoCard}>
                                    <h4>Challenges:</h4>
                                    <ul>
                                        <li>The categorisation structure with multiple levels (L1, L2, L3, L4)</li>
                                        <li>So it creates a fragmented navigation experience, making it difficult for users to return to their starting point.</li>
                                        <li>Irrelevant and misaligned images, combined with inconsistent background colours, undermine the visual coherence, negatively impacting the overall user experience.</li>
                                    </ul>
                                </div>
                                <div className={styles.navbtn}>View Solution
                                    <div><FiArrowRight className={styles.arrowbtn} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 6 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <div className={styles.mobileWrappersixth}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={sixthsec1}
                                            alt="Before Design"
                                            className={styles.mobileImagesixth}
                                        />
                                    </div>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={sixthsec1}
                                            alt="After Design"
                                            className={styles.mobileImagesixth}
                                        />
                                    </div>
                                </div>
                                <div className={styles.imgspan}>After</div>
                            </div>
                            <div className={styles.rightContentsixth}>
                                <div className={styles.navbtn}>
                                    <div><FiArrowLeft className={styles.arrowbtn} /></div>View Solution
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Challenges:</h4>
                                    <ul>
                                        <li>Simplify navigation by introducing a clear L1 and L2 category structure, eliminating excessive subcategories for a more intuitive user journey.</li>
                                        <li>Avoid repetitive page-to-page loops by streamlining the flow, ensuring quick access to key sections.</li>
                                        <li>Use text-aligned images with transparent backgrounds to maintain a uniform, clean UI and enhance product relatability.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 7 ===== */}
                    <div className={`${styles.slide} ${styles.slideFour}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Account Section</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={seventhsec1}
                                            alt="Before Design"
                                            className={styles.mobileImage}
                                        />
                                    </div>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={seventhsec2}
                                            alt="After Design"
                                            className={styles.mobileImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightContentseventh}>
                                <div className={styles.infoCard}>
                                    <h4>Challenges:</h4>
                                    <ul>
                                        <li>The app overwhelms users with too much information, causing confusion.</li>
                                        <li>Disabled features look clickable, making users unsure of their status.</li>
                                        <li>Key sections like "My Wallet," "Offer Klub," "Vouchers," & "Rewards" are hard to find.</li>
                                        <li>Users struggle to find support and end up calling sales officers for help.</li>
                                    </ul>
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Solution:</h4>
                                    <ul>
                                        <li>Displayed the user's name at the top for a personalized experience with profile image and text.</li>
                                        <li>Highlighted priority tabs like "My Wallet," "Offer Klub," "Vouchers," and "Rewards" for easy access.</li>
                                        <li>Positioned the support button as the second priority for quick access.</li>
                                        <li>Standardized icons across the app for consistency.</li>
                                        <li>Grouped related features together to simplify navigation for retailers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 8 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Gamification Cricket</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <img
                                            src={eighthsec.src}
                                            alt="Gamification Cricket"
                                            className={styles.gifImage}
                                        />
                                    </div>
                                    <div className={styles.rightContenteighth}>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Challenges:</h4>
                                            <ul>
                                                <li>Retailers may lose interest due to repetitive tasks and limited interactive features.</li>
                                                <li>Traditional rewards lack excitement, reducing user participation and retention.</li>
                                                <li>A fun and competitive approach is needed to engage and educate retailers effectively.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Solution:</h4>
                                            <ul>
                                                <li>Cricket Quiz adds a fun and interactive way for retailers to engage with the app.</li>
                                                <li>Leaderboards and rewards boost motivation and participation.</li>
                                                <li>The quiz makes learning about products and promotions enjoyable.</li>
                                                <li>The cricket theme connects with Indian retailers, increasing app engagement.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 9 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Gamification Spin The Wheel</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <img
                                            src={ninthsec.src}
                                            alt="Gamification Cricket"
                                            className={styles.gifImageninth}
                                        />
                                    </div>
                                    <div className={styles.rightContentninth}>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>How, What, Why:</h4>
                                            <ul>
                                                <li>Explain how Spin the Wheel works with clear visuals and simple instructions.</li>
                                                <li>Show how to claim rewards with easy-to-follow steps.</li>
                                                <li>Offer attractive rewards that match retailer needs and add real value.</li>
                                                <li>Highlight Spin the Wheel with bold colors and engaging animations.</li>
                                                <li>Make the reward claim process quick with clear call-to-action buttons.</li>
                                                <li>Ensure the feature works smoothly and looks great on all devices.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 10 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Gamification Spin The Wheel</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={tenthsec}
                                            alt="Gamification Cricket"
                                            className={styles.gifImagetenth}
                                        />
                                    </div>
                                    <div className={styles.rightContentninth}>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>How, What, Why:</h4>
                                            <ul>
                                                <li>Enabled 3-step discount visibility, helping users & SKUs for better benefits and a seamless shopping experience.</li>
                                                <li>Introduced last-minute add-ons with personalized recommendations to boost retailer purchases and sales.</li>
                                                <li>Added a "Speed Offer" near the "Place Order" button for quick access to extra brand-specific benefits.</li>
                                                <li>Improved the coupons section by displaying only coupon names, activating offers once eligible products are added to the cart.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 11 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>High Margin Brands</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={elevensec1}
                                            alt="Before Design"
                                            className={styles.mobileImagefifth}
                                        />
                                    </div>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={elevensec2}
                                            alt="After Design"
                                            className={styles.mobileImagefifth}
                                        />
                                    </div>
                                </div>
                                <div className={styles.imgspan}>Before</div>
                            </div>
                            <div className={styles.rightContentfifth}>
                                <div className={styles.infoCard}>
                                    <h4>Challenges:</h4>
                                    <ul>
                                        <li>Cluttered Top: Data widgets at the top distracted users from actually shopping.</li>
                                        <li>Wasted Space: Giant brand banners pushed products out of view, forcing users to scroll too much.</li>
                                        <li>Hard to Read: Prices, discounts, and product details blended together on the cards.</li>
                                        <li>No Urgency: Lacked promotional tags (like "bestseller" or "sale") to motivate buyers.</li>
                                        <li>Heavy Buttons: The "Add to Cart" buttons were bulky and took up too much space.</li>
                                    </ul>
                                </div>
                                <div className={styles.navbtn}>View Solution
                                    <div><FiArrowRight className={styles.arrowbtn} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 12 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <div className={styles.mobileWrappersixth}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={twelevesec1}
                                            alt="Before Design"
                                            className={styles.mobileImagesixth}
                                        />
                                    </div>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={twelevesec2}
                                            alt="After Design"
                                            className={styles.mobileImagesixth}
                                        />
                                    </div>
                                </div>
                                <div className={styles.imgspan}>After</div>
                            </div>
                            <div className={styles.rightContentsixth}>
                                <div className={styles.navbtn}>
                                    <div><FiArrowLeft className={styles.arrowbtn} /></div>View Solution
                                </div>
                                <div className={styles.infoCard}>
                                    <h4>Challenges:</h4>
                                    <ul>
                                        <li>Focus on Products: Removed the top clutter so users immediately see items to buy.</li>
                                        <li>Smarter Layout: Used horizontal scrolling (carousels) to show way more products in less space.</li>
                                        <li>Clear Scanning: Made final prices bold and discounts bright green so they pop.</li>
                                        <li>Engaging Tags: Added bright "Hot Deal" and "Top Choice" badges to grab attention and drive sales.</li>
                                        <li>Cleaner Action: Simplified the button to a clean, easy-to-tap "ADD" button.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 13 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Loading Home page</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={thirtinthsec}
                                            alt="Gamification Cricket"
                                            className={styles.gifImage}
                                        />
                                    </div>
                                    <div className={styles.rightContenteighth}>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Challenges:</h4>
                                            <ul>
                                                <li>Retailers currently see only a loading circle while the homepage loads, leading to a dull and unengaging experience.</li>
                                                <li>The lack of visual or contextual feedback during the loading process might make the wait feel longer and reduce user satisfaction.</li>
                                                <li>Retailers may lose interest or feel frustrated if the app's initial impression lacks appeal or interactivity.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Solution:</h4>
                                            <ul>
                                                <li>Used brand-aligned animations to boost user engagement and recall.</li>
                                                <li>Replaced the plain loading circle with animated product images for a dynamic experience.</li>
                                                <li>Added brief messages with tips, offers, or fun facts to entertain users during loading.</li>
                                                <li>Optimized app performance for smooth transitions and minimal wait times.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 14 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Pay now Delivery app</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <Image
                                            src={fourteenthsec}
                                            alt="Gamification Cricket"
                                            className={styles.gifImage}
                                        />
                                    </div>
                                    <div className={styles.rightContenteighth}>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Challenges:</h4>
                                            <ul>
                                                <li>Cash payments to delivery agents make tracking and managing cash flow difficult, increasing errors and inefficiencies.</li>
                                                <li>Verbal commitments for deferred payments can lead to disputes and lack of accountability.</li>
                                                <li>Retailers’ mixed payment preferences (cash vs. online) complicate standardizing payment processes.</li>
                                                <li>Limited real-time visibility into payments impacts Apnaklub's operational efficiency.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Solution:</h4>
                                            <ul>
                                                <li>Track cash transactions and payment commitments for better accountability.</li>
                                                <li>Add a hybrid payment option for cash and online payments.</li>
                                                <li>Automate payment reminders and schedules to reduce verbal follow-ups.</li>
                                                <li>Offer retailers a simple interface to manage and reconcile payments easily.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 15 ===== */}
                    <div className={`${styles.slide} ${styles.slideFifth}`}>
                        <div className={styles.fourthWrapper}>
                            <div className={styles.leftContent}>
                                <h3 className={styles.fourthTitle}>Pay now Delivery app</h3>
                                <div className={styles.mobileWrapper}>
                                    <div className={styles.mobileBox}>
                                        <img
                                            src={fifteenthsec.src}
                                            alt="Gamification Cricket"
                                            className={styles.gifImage}
                                        />
                                    </div>
                                    <div className={styles.rightContenteighth}>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Challenges:</h4>
                                            <ul>
                                                <li>Planned ads to align with both brand and retailer interests.</li>
                                                <li>Designed a seamless ad experience without disrupting app usage.</li>
                                                <li>Differentiated promotional ads from regular product content.</li>
                                                <li>Ensured ads add value without being intrusive.</li>
                                                <li>Created a monetization process benefiting Apnaklub and brands.</li>
                                            </ul>
                                        </div>
                                        <div className={styles.infoCardeighthsec}>
                                            <h4>Solution:</h4>
                                            <ul>
                                                <li>Launched ads balancing retailer, brand, and business needs.</li>
                                                <li>Designed ads with subtle cues for clarity and better user experience.</li>
                                                <li>Allocated dedicated spaces for brand logos and promotions.</li>
                                                <li>Introduced creative banner ads for seamless product showcasing.</li>
                                                <li>Developed a monetization model to boost engagement and sales.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== SLIDE 16 ===== */}
                    <div className={styles.slide}>
                        <div className={styles.centerContent}>
                            <h2>Thank you</h2>
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