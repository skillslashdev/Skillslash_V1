import dynamic from "next/dynamic";
import React from "react";
import styles from "../../../styles/aboutUs.module.css";
const CTA = dynamic(() => import("../../CTA/CTA"));
const Image = dynamic(() => import("next/image"));
const GoalCta = () => {
  return (
    <div>
      <div className={styles.goal}>
        <h5>Our goal is to offer a top-notch education</h5>
        <p className="pBot" style={{ marginBottom: "50px" }}>
          We are committed to make education accessible to all people by keeping
          our courses affordable and transparent. In addition, we provide
          opportunities for students to test out courses for free before
          committing to the complete program.
          <br /> <br />
          Besides, we have tied up with some of India’s most promising AI and
          machine learning businesses to bring domain expertise to our students.
          Also, this prepares them to flourish in their careers. Further, we aim
          that Skillslash will disrupt the e-learning arena for professionals
          with our well-designed curriculum and a strong focus on practical data
          science training.
        </p>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Goal_of_skillslash.webp"
          width="1000"
          height="304"
        />
      </div>
      <div className={styles.Cta}>
        <CTA />
      </div>
    </div>
  );
};

export default GoalCta;
