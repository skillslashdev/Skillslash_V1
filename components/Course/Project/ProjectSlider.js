import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Project.module.css";
// import WebSwiper from "./WebSwiper";
// import DsSwiper from "./DsSwiper";
// import FsSwiper from "./FsSwiper";

const ProjectSwiper = dynamic(() => import("./ProjectSwiper"));
import { DsProject, FsProject, webProject } from "./ProjectData";

const ProjectSlider = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectWeb,
  redirectBl,
  redirectDSA,
}) => {
  const [swiperData, setSwiperData] = useState(DsProject);
  useEffect(() => {
    redirectDs || redirectDe || redirectBa ? setSwiperData(DsProject) : "";
    redirectDSA || redirectFs ? setSwiperData(FsProject) : "";
    redirectWeb ? setSwiperData(webProject) : "";
  }, []);
  return (
    <div className={styles.projectWrap}>
      <div className={styles.projectHeader}>
        <div className={styles.leftWrap}>
          <p>Industry – partnered capstone projects</p>
          <h4>Hands-on Projects</h4>
        </div>
        <div className={styles.rightWrap}>
          <div className={styles.iconBox}>
            <div className={styles.left}>
              <p>10+</p>
            </div>
            <div className={styles.right}>
              <span>Projects</span>
            </div>
          </div>
          <div className={styles.iconBox}>
            <div className={styles.left}>
              <p>6+</p>
            </div>
            <div className={styles.right}>
              <span>Domains</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.left}>
          <p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/toolsProject.webp"
              width={33}
              height={33}
              alt="learn 20+ data science tools"
              loading="lazy"
            />
            Practice with 20+ tools
          </p>
        </div>
        <div className={styles.middle}>
          <p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/industry-expert-project.webp"
              alt="work on industry projects"
              width={39}
              height={39}
              loading="lazy"
            />
            Designed by Industry Experts
          </p>
        </div>
        <div className={styles.right}>
          <p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/chat-project.webp"
              alt="get real-work Experience"
              width={31}
              height={31}
              loading="lazy"
            />
            Get Real-world Experience
          </p>
        </div>
      </div>
      <div className={styles.sliderWrap}>
        <div className={styles.categoryBar}>
          <div className={styles.categoryWrap}>
            <span className={styles.spanActive}>Banking</span>
            <span className={styles.span}>Automobile</span>
            <span className={styles.span}>Healthcare</span>
            <span className={styles.span}>Technical</span>
            <span className={styles.span}>Telecom</span>
            <span className={styles.span}>E-commerce</span>
            <span className={styles.span}>Other</span>
          </div>
        </div>
        <ProjectSwiper swiperData={swiperData} redirectFs={redirectFs} />
        {/* {redirectWeb ? <WebSwiper /> : ""} */}
        {/* {redirectBa || redirectDs || redirectDe ? <DsSwiper /> : ""} */}
        {/* {redirectFs || redirectDSA ? <FsSwiper /> : ""} */}
      </div>
    </div>
  );
};

export default ProjectSlider;
