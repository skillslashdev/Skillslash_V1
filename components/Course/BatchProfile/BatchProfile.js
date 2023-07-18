import React from "react";
import styles from "./BatchProfile.module.css";
import dynamic from "next/dynamic";
const CityGraph = dynamic(() => import("./Chart/CityGraph"));
const ProgressBar = dynamic(() => import("./Chart/ProgressBar"));
const PieChart = dynamic(() => import("./Chart/PieChart"));
const BarChart = dynamic(() => import("./Chart/BarChart"));

const BatchProfile = () => {
  return (
    <div className={styles.batchProfileWrapper}>
      <h4>
        Batch <span>Profile</span>
      </h4>
      <p className={styles.pBot}>
        The program is designed for people from various sectors. The variety of
        participants enriches discussion and interaction.
      </p>
      <div className={styles.chartWrap}>
        <div className={styles.first}>
          <h5>By Industry</h5>
          <BarChart />
        </div>
        <div className={styles.secondWrap}>
          <div className={styles.second}>
            <h5>By Qualification</h5>
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
            <h5>By Cities</h5>
            <CityGraph />
          </div>
        </div>
        <div className={styles.third}>
          <h5>By Work Experience</h5>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default BatchProfile;
