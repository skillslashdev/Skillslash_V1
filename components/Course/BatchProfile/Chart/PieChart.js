import React from "react";
import styles from "./PieChart.module.css";

const PieChart = () => {
  return (
    <div className={`${styles.multiGraph} ${styles.margin}`}>
      <div
        className={styles.graph}
        data-name="Graduation"
        style={{ "--percentage": 100, "--fill": "#f18350" }}
      ></div>
      <div
        className={styles.graph}
        data-name="Intermediate"
        style={{ "--percentage": 80, "--fill": "#042567" }}
      ></div>
      <div
        className={styles.graph}
        data-name="Post-graduation"
        style={{ "--percentage": 60, "--fill": "#4f419a" }}
      ></div>
      <div
        className={styles.graph}
        data-name="Others"
        style={{ "--percentage": 10, "--fill": "#04d9ab" }}
      ></div>
    </div>
  );
};

export default PieChart;
