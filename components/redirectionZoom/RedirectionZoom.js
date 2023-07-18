import React, { useEffect, useState } from "react";
import styles from "./redirection.module.css";
import { useRouter } from "next/router";

const RedirectionZoom = ({ link }) => {
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(4);
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push(link);
      return;
    }

    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.innerDiv}>
        <span className={styles.loader}></span>
        <h3>
          Half way there Complete the registration in next page to confirm your
          seat
        </h3>

        <p>please wait</p>
        <p>
          redirecting <span className={styles.dotStretching}></span>
        </p>
      </div>
    </div>
  );
};

export default RedirectionZoom;
