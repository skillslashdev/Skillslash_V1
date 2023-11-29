import React from "react";
import styles from "./BatchProfile.module.css";
import dynamic from "next/dynamic";
const CityGraph = dynamic(() => import("./Chart/CityGraph"));
const ProgressBar = dynamic(() => import("./Chart/ProgressBar"));
const PieChart = dynamic(() => import("./Chart/PieChart"));
const BarChart = dynamic(() => import("./Chart/BarChart"));

const BatchProfile = ({ seoPage, BatchProfilePara }) => {
  return (
    <div className={styles.batchProfileWrapper}>
      <h2>
        Batch <span>Profile</span>
      </h2>
      {/* {seoPage ? (
        <div dangerouslySetInnerHTML={{ __html: BatchProfilePara }}></div>
      ) : ( */}
      <p className={styles.pBot}>
        The program is designed for people from various sectors. The variety of
        participants enriches discussion and interaction.
      </p>
      {/* )} */}

      <div className={styles.chartWrap}>
        <div className={styles.first}>
          <h3>By Industry</h3>
          <BarChart />
        </div>
        <div className={styles.secondWrap}>
          <div className={styles.second}>
            <h3>By Qualification</h3>
            <div className={styles.noteBox}>
              <div className={styles.other}>
                <span></span> Others
              </div>
              <div className={styles.PG}>
                <span></span> Post Graduation
              </div>
              <div className={styles.inter}>
                <span></span> Intermediate
              </div>
              <div className={styles.grad}>
                <span></span> Graduation
              </div>
            </div>
            <PieChart />
          </div>
          <div className={styles.second2}>
            <h3>By Cities</h3>
            <CityGraph />
          </div>
        </div>
        <div className={styles.third}>
          <h3>By Work Experience</h3>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default BatchProfile;
