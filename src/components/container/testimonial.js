import { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import testimonial1 from "../../../public/images/testimonial/testimonial1.png";
import testimonial2 from "../../../public/images/testimonial/testimonial2.png";
import testimonial3 from "../../../public/images/testimonial/testimonial3.png";
import testimonial4 from "../../../public/images/testimonial/testimonial4.png";
import testimonial5 from "../../../public/images/testimonial/testimonial5.png";
import testimonial6 from "../../../public/images/testimonial/testimonial6.png";
import testimonial7 from "../../../public/images/testimonial/testimonial7.png";
import testimonial8 from "../../../public/images/testimonial/testimonial8.png";
import testimonial9 from "../../../public/images/testimonial/testimonial9.png";
import testimonial10 from "../../../public/images/testimonial/testimonial10.png";
import testimonial11 from "../../../public/images/testimonial/testimonial11.png";
import testimonial12 from "../../../public/images/testimonial/testimonial12.png";
import kindimg1 from '../../../public/images/kindimg1.png';
import kindimg2 from '../../../public/images/kindimg2.png';
import styles from './testimonial.module.scss';
const data = [
  {
    text: `Prabhu excelled in translating complex business needs into intuitive user experiences at ApnaKlub, boosting product quality and engagement. He balanced rapid iterations with thoughtful design, driving key features impacting thousands of users. Prabhu also mentored juniors, built cross-functional relationships, and shaped design culture. His design expertise, business acumen, and leadership make him invaluable.`,
    name: "Gourav Das",
    role: "Co-Founder & CPTO at ApnaKlub",
    img: testimonial12,
    layout: "bottom"
  },
  {
    text: `Prabhu is an exceptionally talented designer with a deep understanding of Figma. His ability to create intuitive, visually appealing designs and collaborate seamlessly with teams is outstanding. I highly recommend Prabhu for any project requiring creative and user-focused design expertise.`,
    name: "Chetan Pawar",
    role: "Senior SDE at ApnaKlub",
    img: testimonial11,
    layout: "top"
  },
  {
    text: `Prabhu has an exceptional eye for design and consistently produces creative and visually stunning work. He is artistically accurate with any design he put out yet has the humility to accept feedback & transform his work into a collective vision for the team. His workmanship with design tools is great and comes handy when you want to churn out stuff faster!`,
    name: "Ritika Gupta",
    role: "Product @ BCG",
    img: testimonial10,
    layout: "bottom"
  },
  {
    text: `Prabhu played a key role at O4S in launching our web and mobile app SaaS. He excels at turning complex ideas into intuitive, user-friendly designs. His creativity, attention to detail, and UX expertise greatly impacted our product's success. Passionate about design and delivering quality solutions, Prabhu is a valuable asset to any team.`,
    name: "Mayank Mrinal",
    role: "Product Manager – O4S",
    img: testimonial9,
    layout: "top"
  },
  {
    text: `Prabhu worked as a Product designer with O4S. He is a super dependable guy a with a keen eye for aesthetics. He did a great job here. He also assisted the marketing team, churning out some wonderful designs. He is definitely an asset to any team he works for. I'd recommend him any day!`,
    name: "Advait Parnaik",
    role: "CRO @ O4S",
    img: testimonial5,
    layout: "bottom"
  },
  {
    text: `I worked with Prabhu for 3 years as a product designer and witnessed his ability to create user-focused, beautiful interfaces. He's a true team player, delivering projects ahead of schedule with exceptional attention to detail and high-quality designs. I highly recommend Prabhu, confident he will excel and make a positive impact in any product designer role.`,
    name: "Fluck Alwa",
    role: "Senior Product Designer at SmartQ",
    img: testimonial5,
    layout: "top"
  },
  {
    text: `Prabhu worked as a Product designer with O4S. He is a super dependable guy a with a keen eye for aesthetics. He did a great job here. He also assisted the marketing team, churning out some wonderful designs. He is definitely an asset to any team he works for. I'd recommend him any day!`,
    name: "Advait Parnaik",
    role: "CRO @ O4S",
    img: testimonial7,
    layout: "bottom"
  },
  {
    text: `Prabhu is a fantastic colleague and a great designer. His knowledge, skills, and humility have been his stand out traits. 
We worked together on creating a new 0-1 product for which he created brilliant designs and had important inputs. 

He is someone who is always available, hard working, and will teach you something along the way. It has been a pleasure working with him!`,
    name: "Arnav Parimoo",
    role: "Associate Product Manager @ 3SC",
    img: testimonial7,
    layout: "top"
  },
  {
    text: `I highly recommend Prabhu for any UI/UX design role. Over three years at O4S, he excelled in designing visually stunning, functional, and user-friendly mobile apps for iOS and Android, significantly enhancing user experiences. A collaborative team player, he consistently offered valuable feedback to improve outcomes. Prabhu will undoubtedly make impactful contributions to any organization.`,
    name: "Pulkit Mehdiratta",
    role: "Product Manager at O4S",
    img: testimonial2,
    layout: "bottom"
  },
  {
    text: `Prabhu was an integral part of the design team at O4S Company. He consistently delivered high-quality work and was always willing to go above and beyond to ensure that our projects were completed on time and to the highest standard. He has a great eye for detail and is an excellent communicator. He is also a great team player and always willing to lend a hand when needed. I would highly recommend Prabhu for any UI/UX role.`,
    name: "Mudit Kumar Jain",
    role: "Executive – Project Management",
    img: testimonial1,
    layout: "top"
  },
  {
    text: `Prabhu is a talented designer with exceptional UI/UX skills, handling wireframes and multiple applications independently. He stays updated with the latest design trends, delivering outstanding results. His attention to detail, creativity, positive attitude, and problem-solving mindset make him a valuable asset. Prabhu is a reliable team player any organization would be lucky to have.`,
    name: "Subhra Jyoti Baroi",
    role: "Frontend Enthusiast – Hiver",
    img: testimonial8,
    layout: "bottom"
  },
  {
    text: `Prabhu is an exceptional Product Designer with impressive attention to detail in UX prototypes, enhancing timelines significantly. A supportive team player, he's quick to assist and responsive to queries. His work on key features has impacted thousands of users, showcasing his tangible value. Highly recommend Prabhu for product design roles—he's an asset to any team!`,
    name: "Sparsh Verma",
    role: "Program Manager @ApnaKlub",
    img: testimonial3,
    layout: "top"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(data.length / itemsPerSlide);
  const next = () => {
    if (index < totalSlides - 1) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.kindHeader}>
          <Image src={kindimg1} alt="icon" width={173} height={140} />
          <h2>Kind Words From <br />Collaborators</h2>
          <Image src={kindimg2} alt="icon" width={173} height={140} />
        </div>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${index * 85}%)`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slice = data.slice(
                slideIndex * itemsPerSlide,
                slideIndex * itemsPerSlide + itemsPerSlide
              );

              return (
                <div className={styles.slide} key={slideIndex}>
                  {slice.map((item, i) => (
                    <div className={styles.card} key={i}>

                      {item.layout === "top" && (
                        <div className={styles.profile}>
                          <Image src={item.img} alt="" width={60} height={60} />
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.role}</p>
                          </div>
                        </div>
                      )}

                      <p className={styles.text}>{item.text}</p>

                      {item.layout === "bottom" && (
                        <div className={styles.profile}>
                          <Image src={item.img} alt="" width={60} height={60} />
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.role}</p>
                          </div>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

<div className={styles.controls}>
  <button
    onClick={prev}
    className={index === 0 ? styles.disabled : styles.active}
  >
    <FiArrowLeft />
  </button>

  <button
    onClick={next}
    className={index === totalSlides - 1 ? styles.disabled : styles.active}
  >
    <FiArrowRight />
  </button>
</div>

      </Container>
    </section>
  );
};

export default Testimonial;
