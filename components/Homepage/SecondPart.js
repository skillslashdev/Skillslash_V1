import React from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";
const MiddlePageCta = dynamic(() => import("../MiddlePageCta/MiddlePageCta"));
const Reviews = dynamic(() => import("../Review/Reviews"));
const Footer = dynamic(() => import("../Footer/Footer"));

const Hiring = dynamic(() => import("../Hiring/Hiring"));
const Newsletter = dynamic(() => import("../Newsletter/Newsletter"));
const OurEvents = dynamic(() => import("../OurEvents/OurEvents"));

const SecondPart = ({ homePage }) => {
  return (
    <>
      <div className={styles.advantage}>
        <Hiring />
      </div>

      <Reviews
        home={homePage}
        title="Our Mission Is To Provide World-Class Education"
        desc="Our courses are designed for both students and working professionals. Hear from our students to know more."
      />
      <OurEvents />
      <MiddlePageCta homePage={homePage} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default SecondPart;
