import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <article className={styles.skills}>
      <div className={styles.t6}>
        <p>
          Freshers<span></span>
          <span className={styles.skills}></span>
        </p>
      </div>
      <div className={styles.t6}>
        <p>
          1 - 5 Years <span></span>
          <span className={styles.skills}></span>
        </p>
      </div>
      <div className={styles.t6}>
        <p className={styles.black}>
          5 - 9 Years<span></span>
          <span className={styles.skills}></span>
        </p>
      </div>

      <div className={styles.t6}>
        <p className={styles.black}>
          9+ Years<span></span>
          <span className={styles.skills}></span>
        </p>
      </div>
    </article>
  );
};

export default ProgressBar;
