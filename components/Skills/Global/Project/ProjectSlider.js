import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./Project.module.css";

// import WebSwiper from "./WebSwiper";
// import DsSwiper from "./DsSwiper";
// import FsSwiper from "./FsSwiper";

const ProjectSwiper = dynamic(() => import("./ProjectSwiper"));
import { DsProject, FsProject, webProject, BaProject } from "./ProjectData";

const ProjectSlider = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectWeb,
  redirectDSA,
  seoPage,
  ProjectsPara,
  heading,
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
          <h2 className="text-4xl font-bold">{heading}</h2>
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
      <div className={styles.sliderWrap}>
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
              BFSI
            </span>

            <span
              className={domainName === "HR" ? styles.spanActive : styles.span}
              onClick={() => {
                setDomainName("HR");
              }}
            >
              HR
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
                domainName === "Sales" ? styles.spanActive : styles.span
              }
              onClick={() => {
                setDomainName("Sales");
              }}
            >
              Sales
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
              Manufacturing
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
          </div>
        </div>

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
