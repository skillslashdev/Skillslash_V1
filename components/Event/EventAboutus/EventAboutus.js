import React from "react";
import styles from "../../../styles/DataScienceEvent.module.css";
import Image from "next/image";
const EventAboutus = ({ eventData }) => {
  return (
    <div className={styles.aboutUS}>
      <div className={styles.aLeft}>
        <Image
          src={eventData.data.aboutUs.imgSrc}
          width="320"
          height="320"
          className={styles.ABoutImg}
        />
      </div>
      <div className={styles.aRight}>
        <h6>{eventData.data.aboutUs.title}</h6>
        <p>
          {eventData.data.aboutUs.desc}
          <br />
          <br />
          {eventData.data.aboutUs.desc1} <b>{eventData.data.aboutUs.strong}</b>{" "}
          {eventData.data.aboutUs.desc2}
        </p>
      </div>
    </div>
  );
};

export default EventAboutus;
