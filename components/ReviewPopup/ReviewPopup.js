import React, { useEffect, useState } from "react";
import styles from "./ReviewPopup.module.scss";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ReviewPopup = (props) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
          <AiOutlineCloseCircle
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <AiOutlineCloseCircle
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )}

        <div className={styles.InnerGrid}>
          <div className={styles.ReviewBox}>
            <div className={styles.nameWrap}>
              <h5>{props.title}</h5>
            </div>

            <p>{props.desc}</p>
            <div className={styles.profileWrapper}>
              <Image
                src={props.imgSrc}
                width="70"
                height="70"
                alt="Prarthana-Thokal-web-development-review"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ReviewPopup;
