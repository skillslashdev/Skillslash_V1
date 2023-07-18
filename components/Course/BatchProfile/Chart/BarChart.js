import React from "react";
import styles from "./BarChart.module.css";

const BarChart = () => {
  return (
    <div className={styles.graph}>
      <div id={styles.barChart}>
        <div className={styles.graph}>
          <ul className={styles.xAxis}>
            <li>
              <span>Retail</span>
            </li>
            <li>
              <span>BFSI</span>
            </li>
            <li>
              <span>Healthcare</span>
            </li>
            <li>
              <span>Other</span>
            </li>
          </ul>
          <ul className={styles.yAxis}>{/*add y-axis content */}</ul>
          <div className={styles.bars}>
            <div className={styles.barGroup}>
              <div
                className={`${styles.bar} ${styles.bar1} ${styles.stat1}`}
                style={{ height: "20%" }}
              >
                <p>20%</p>
                <span>4080</span>
              </div>
            </div>
            <div className={styles.barGroup}>
              <div
                className={`${styles.bar} ${styles.bar2} ${styles.stat2}`}
                style={{ height: "47%" }}
              >
                <p>47%</p>
                <span>5680</span>
              </div>
            </div>
            <div className={styles.barGroup}>
              <div
                className={`${styles.bar} ${styles.bar3} ${styles.stat3}`}
                style={{ height: "16%" }}
              >
                <p>16%</p>
                <span>1040</span>
              </div>
            </div>
            <div className={styles.barGroup}>
              <div
                className={`${styles.bar} ${styles.bar4} ${styles.stat4}`}
                style={{ height: "19%" }}
              >
                <p>19%</p>
                <span>2345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
