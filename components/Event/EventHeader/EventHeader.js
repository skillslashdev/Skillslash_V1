import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./EventHeader.module.css";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const EventHeader = ({
  title,
  titleSpan,
  desc,
  titleText,
  eventDate,
  eventTime,
  imgSrc,
  profileImg,
  dark,
  spanStyle,
  lightNew,
  tag,
  reverseImg,
  profileImgH,
  profileImgW,
  imgSrc1,
  desc1,
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.left}>
        <h1 className={dark ? styles.darkH1 : styles.head}>
          {title}
          <span style={spanStyle}>
            {titleSpan}{" "}
            {eventDate === "23 Feb 2023, Tue" ? (
              <span className={styles.linkedin}>
                Linked<span>in</span>
              </span>
            ) : (
              ""
            )}
          </span>
          {titleText === "" ? "" : titleText}
        </h1>

        {desc === "" ? (
          ""
        ) : tag ? (
          <p className={styles.skewP}>{desc}</p>
        ) : (
          <p className={dark ? styles.darkP : styles.p}>{desc}</p>
        )}

        {dark || lightNew ? (
          <div className={styles.profile}>
            <Image
              src={profileImg}
              width={profileImgW}
              height={profileImgH}
              alt="header"
            />
          </div>
        ) : (
          ""
        )}

        {/* {tag ? (
          ""
        ) : (
          <div className={dark ? styles.EventInfos : styles.EventInfo}>
            <div className={styles.lefts}>
              <BsCalendarCheck className={styles.eIcon} />
              <p>{eventDate}</p>
            </div>
            <div className={styles.line} />

            <div className={styles.rights}>
              <AiOutlineClockCircle className={styles.eIcon} />
              <p>{eventTime}</p>
            </div>
          </div>
        )} */}

        <div className={dark ? styles.EventInfos : styles.EventInfo}>
          <div className={styles.lefts}>
            <BsCalendarCheck className={styles.eIcon} />
            <p style={{ margin: "0" }}>{eventDate}</p>
          </div>
          <div className={styles.line} />

          <div className={styles.rights}>
            <AiOutlineClockCircle className={styles.eIcon} />
            <p style={{ margin: "0" }}>{eventTime}</p>
          </div>
        </div>

        {desc1 === "" ? (
          ""
        ) : (
          <p className={dark ? styles.darkP : styles.p}>
            <Image src={imgSrc1} width="28" height="28" alt="announcement" />
            {desc1.part1}
            <span className={styles.surprise}> {desc1.desc1Bold} </span>
            {desc1.desc1h}{" "}
            <span className={styles.surprise}>{desc1.desc1Bold2} </span>{" "}
          </p>
        )}
        {dark || lightNew ? (
          ""
        ) : (
          <div className={styles.img}>
            {mobile ? <Image src={imgSrc} width="90" height="42" /> : ""}
          </div>
        )}
      </div>

      <div className={styles.middle}></div>
    </div>
  );
};
export default EventHeader;
