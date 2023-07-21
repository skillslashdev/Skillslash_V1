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
  redirectDSA,
}) => {
  const [swiperData, setSwiperData] = useState(
    DsProject.filter((DsProject) => {
      return DsProject.domainName === "Banking";
    })
  );
  const [domainName, setDomainName] = useState("Banking");

  useEffect(() => {
    redirectDs || redirectDe || redirectBa
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Banking";
          })
        )
      : "";
    redirectDs && domainName === "Banking"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Banking";
          })
        )
      : "";
    redirectDs && domainName === "Automobile"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Automobile";
          })
        )
      : "";
    redirectDs && domainName === "HealthCare"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "HealthCare";
          })
        )
      : "";
    redirectDs && domainName === "Technical"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Technical";
          })
        )
      : "";
    redirectDs && domainName === "Telecom"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Telecom";
          })
        )
      : "";
    redirectDs && domainName === "Retail"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Retail";
          })
        )
      : "";
    redirectDs && domainName === "Other"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Other";
          })
        )
      : "";
    redirectDSA || redirectFs ? setSwiperData(FsProject) : "";
    redirectWeb ? setSwiperData(webProject) : "";
  }, [domainName]);

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
        {redirectDs || redirectBa ? (
          <div className={styles.categoryBar}>
            <div className={styles.categoryWrap}>
              <span
                className={
                  domainName === "Banking" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Banking");
                }}
              >
                Banking
              </span>
              <span
                className={
                  domainName === "Automobile" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Automobile");
                }}
              >
                Automobile
              </span>
              <span
                className={
                  domainName === "HealthCare" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("HealthCare");
                }}
              >
                Healthcare
              </span>
              <span
                className={
                  domainName === "Technical" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Technical");
                }}
              >
                Technical
              </span>
              <span
                className={
                  domainName === "Telecom" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Telecom");
                }}
              >
                Telecom
              </span>
              <span
                className={
                  domainName === "Retail" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Retail");
                }}
              >
                Retail
              </span>
              <span
                className={
                  domainName === "Other" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Other");
                }}
              >
                Other
              </span>
            </div>
          </div>
        ) : (
          ""
        )}

        <ProjectSwiper swiperData={swiperData} redirectFs={redirectFs} />
        {/* {redirectWeb ? <WebSwiper /> : ""} */}
        {/* {redirectBa || redirectDs || redirectDe ? <DsSwiper /> : ""} */}
        {/* {redirectFs || redirectDSA ? <FsSwiper /> : ""} */}
      </div>
    </div>
  );
};

export default ProjectSlider;
