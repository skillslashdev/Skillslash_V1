import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Project.module.css";
import { IoIosArrowForward } from "react-icons/io";
// import WebSwiper from "./WebSwiper";
// import DsSwiper from "./DsSwiper";
// import FsSwiper from "./FsSwiper";

const ProjectSwiper = dynamic(() => import("./ProjectSwiper"));
import {
  DsProject,
  FsProject,
  webProject,
  BaProject,
  ProjectPara,
  seoPage,
} from "./ProjectData";

const ProjectSlider = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectWeb,
  redirectDSA,
  seoPage,
  ProjectsPara,
}) => {
  const [swiperData, setSwiperData] = useState(
    DsProject.filter((DsProject) => {
      return DsProject.domainName === "BFSI";
    })
  );
  const [domainName, setDomainName] = useState("BFSI");

  useEffect(() => {
    redirectDs || redirectDe || redirectBa
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "BFSI";
          })
        )
      : "";
    redirectDs && domainName === "BFSI"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "BFSI";
          })
        )
      : "";
    redirectDs && domainName === "HR"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "HR";
          })
        )
      : "";
    redirectDs && domainName === "Manufacturing and Supply Chain"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Manufacturing and Supply Chain";
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
    redirectDs && domainName === "Sales"
      ? setSwiperData(
          DsProject.filter((DsProject) => {
            return DsProject.domainName === "Sales";
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

    /**/

    redirectBa && domainName === "BFSI"
      ? setSwiperData(
          BaProject.filter((BaProject) => {
            return BaProject.domainName === "BFSI";
          })
        )
      : "";
    redirectBa && domainName === "HR"
      ? setSwiperData(
          BaProject.filter((BaProject) => {
            return BaProject.domainName === "HR";
          })
        )
      : "";
    redirectBa && domainName === "Manufacturing and Supply Chain"
      ? setSwiperData(
          BaProject.filter((BaProject) => {
            return BaProject.domainName === "Manufacturing and Supply Chain";
          })
        )
      : "";
    redirectBa && domainName === "HealthCare"
      ? setSwiperData(
          BaProject.filter((BaProject) => {
            return BaProject.domainName === "HealthCare";
          })
        )
      : "";
    redirectBa && domainName === "Sales"
      ? setSwiperData(
          BaProject.filter((BaProject) => {
            return BaProject.domainName === "Sales";
          })
        )
      : "";

    redirectBa && domainName === "Retail"
      ? setSwiperData(
          BaProject.filter((BaProject) => {
            return BaProject.domainName === "Retail";
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
          <h2>Hands-on Projects</h2>
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
      {seoPage ? (
        <div
          dangerouslySetInnerHTML={{ __html: ProjectsPara }}
          className={styles.seoPara}
        ></div>
      ) : (
        ""
      )}
      {/* <div className={styles.line}>
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
      </div> */}
      <div
        className={
          redirectDs || redirectBa ? styles.sliderWrap : styles.sliderWraps
        }
      >
        {redirectDs || redirectBa ? (
          <div className={styles.categoryBar}>
            <div className={styles.categoryWrap}>
              <span
                className={
                  domainName === "BFSI" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("BFSI");
                }}
              >
                BFSI <IoIosArrowForward />
              </span>

              <span
                className={
                  domainName === "HR" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("HR");
                }}
              >
                HR <IoIosArrowForward />
              </span>
              <span
                className={
                  domainName === "HealthCare" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("HealthCare");
                }}
              >
                Healthcare <IoIosArrowForward />
              </span>
              <span
                className={
                  domainName === "Sales" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Sales");
                }}
              >
                Sales <IoIosArrowForward />
              </span>
              <span
                className={
                  domainName === "Manufacturing and Supply Chain"
                    ? styles.spanActive
                    : styles.span
                }
                onClick={() => {
                  setDomainName("Manufacturing and Supply Chain");
                }}
              >
                Manufacturing <IoIosArrowForward />
              </span>
              <span
                className={
                  domainName === "Retail" ? styles.spanActive : styles.span
                }
                onClick={() => {
                  setDomainName("Retail");
                }}
              >
                Retail <IoIosArrowForward />
              </span>
            </div>
          </div>
        ) : (
          ""
        )}

        <ProjectSwiper
          swiperData={swiperData}
          redirectFs={redirectFs}
          redirectDs={redirectDs}
          redirectBa={redirectBa}
        />
        {/* {redirectWeb ? <WebSwiper /> : ""} */}
        {/* {redirectBa || redirectDs || redirectDe ? <DsSwiper /> : ""} */}
        {/* {redirectFs || redirectDSA ? <FsSwiper /> : ""} */}
      </div>
    </div>
  );
};

export default ProjectSlider;
