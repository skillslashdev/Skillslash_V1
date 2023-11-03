import React, { useState } from "react";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const VideoPopup = dynamic(() => import("../../VideoPopup/VideoPopup"));
import { BsPlayCircle } from "react-icons/bs";
import styles from "../../../styles/aboutUs.module.css";
const AboutValue = () => {
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <div>
      <VideoPopup triggers={video} setTriggers={setVideo} ids="9401Q9vFxOY" />
      <div className={styles.aboutUs}>
        <div className={styles.aboutHeader}>
          <div className={styles.circle1} />
          <div className={styles.circle2} />
          <div className={styles.circle3} />
          <div className={styles.circle4} />
          <div className={styles.circle5} />
          <div className={styles.leftAbout}>
            <p className={styles.pTop}>
              PROJECT BASED CERTIFICATION PLATFORM FOR PROFESSIONAL
            </p>
            <h1>
              Obtain certification as an <span>industry specialist</span>
            </h1>
            <p className="pBot">
              Old ways of learning, we feel, should be challenged. Besides, we
              intend to debunk myths about the importance of academic
              certifications.
            </p>
            <div className={styles.btn}>
              <BsPlayCircle className={styles.Play} onClick={videoSHow} />{" "}
              <p onClick={videoSHow}>Intro Video</p>
            </div>
          </div>
          <div className={styles.rightAbout}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/about-us_header.webp"
              width="631"
              height="591"
            />
          </div>
        </div>
      </div>
      <div className={styles.values}>
        <div className={styles.leftValues}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/core_values.webp"
            width="707"
            height="404"
          />
        </div>
        <div className={styles.rightValues}>
          <p className="pTop">Industry Experience Certificate</p>
          <h5>Core values of Skillslash</h5>
          <p className="pBot">
            Being the leading data science training provider, we give you the
            opportunity to work directly with industry experts on latest
            projects.
            <br />
            <br />
            Working on relevant industry projects is a necessary part of
            learning. Further, our training allows you to develop your abilities
            and get employed in top businesses. Moreover, we believe our data
            science training can help you upgrade your skillset and get first
            preference in the hiring process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutValue;
