import React from "react";
import styles from "./AnimateHeading.module.scss";

const AnimateHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>
          <span className={styles.block}></span>
          <hr /> <h4>Get Hired in 3 Simple Steps</h4> <hr />
        </div>
      </div>
    </div>
  );
};

export default AnimateHeading;
