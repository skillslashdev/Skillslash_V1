import React, { useState } from "react";
import styles from "../Course/FirstSection/FirstSection.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
const VideoPopup = dynamic(() => import("../VideoPopup/VideoPopup"));
import TextAnimation from "../Animation/TextAnimation";
import { BsArrowRightShort } from "react-icons/bs";

const HomeFirstSection = ({
  deskTopPara,
  homePage,
  width,
  height,
  mainHeaderImg,
  mainAlt,
  backgroundImg,
  usp1,
  usp2,
  usp3,
  usp4,
  usp1Span,
  usp2Span,
  usp3Span,
  usp4Span,
}) => {
  const [video, setVideo] = useState(false);

  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <section className={styles.wrapper}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids="76M0jhQ8Svo" />

      <div className={styles.bgImg}>
        <Image
          priority={true}
          src={backgroundImg}
          fill={true}
          alt="background"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.left}>
        <div className={styles.paraWrap}>
          <p className={styles.pTop}>{deskTopPara}</p>
        </div>
        <h1 className={styles.homeH1}>
          Self-peaced Live Project-Based
          <br /> Learning Platform
        </h1>
        <p className={styles.pBotM}>
          Access comprehensive lessons with live doubt-clearing classes. Work on
          Live Projects & acquire Project and Internship certifications.
        </p>
        <TextAnimation homePage={true} />
        <div className={styles.btnWrapper}>
          <a href="#explore">
            <button>
              Explore Courses
              <BsArrowRightShort className="bIconS" />
            </button>
          </a>
        </div>

        <div className={styles.uspFeatures}>
          <div className={styles.left}>
            <div className={styles.uspFeatures1}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/liveTV.webp"
                  priority={true}
                  alt="learn directly from live classes"
                  width={30}
                  height={32}
                />
              </div>
              <p>
                {usp1} <span>{usp1Span}</span>
              </p>
            </div>
            <div className={styles.uspFeatures2}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/certificate-icon-first.png"
                  priority={true}
                  alt=" Direct Company experience certificate"
                  width={32}
                  height={34}
                />
              </div>
              <p>
                {usp2} <span>{usp2Span}</span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.uspFeatures4}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/like.webp"
                  alt="100% Interview Guarantee"
                  width={30}
                  priority={true}
                  height={34}
                />
              </div>
              <p>
                {usp4} <span>{usp4Span}</span>
              </p>
            </div>
            <div className={styles.uspFeatures3}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/certificate-icon-first.png"
                  priority={true}
                  alt=" Direct Company experience certificate"
                  width={32}
                  height={34}
                />
              </div>
              <p>
                {usp3} <span>{usp3Span}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imgWrapper}></div>
      </div>
    </section>
  );
};

export default HomeFirstSection;
