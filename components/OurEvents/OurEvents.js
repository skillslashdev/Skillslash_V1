import React from "react";
import style from "./OurEvents.module.css";
import Image from "next/legacy/image";

import Link from "next/link";

const OurEvents = () => {
  return (
    <div className={style.wrapper}>
      <div className="wrapperHeading">
        <hr />
        <h4>Our Events</h4>
        <hr />
      </div>

      <div className={style.wrapperBlock}>
        <div className={style.wrapperBlock1}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MAANG1pic.webp"
            alt="Skillslash"
            layout="intrinsic"
            quality={100}
            style={{ objectFit: "contain" }}
            width={464}
            height={464}
          />
          <div className={style.bottomBtn}>
            <Link href="/">
              <div className={style.LearnMore}>
                <p>Event Ended</p>
              </div>
            </Link>
            {/* <p>Register</p> */}
          </div>
        </div>
        <div className={style.wrapperBlock2}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/AcingInterview2pic.webp"
            alt="Skillslash"
            layout="intrinsic"
            quality={100}
            style={{ objectFit: "contain" }}
            width={492}
            height={492}
          />
          <div className={style.bottomBtn}>
            <div className={style.LearnMore}>
              <Link href="/">
                <p>Event Ended</p>
              </Link>
            </div>

            {/* <p>Register</p> */}
          </div>
        </div>
        <div className={style.wrapperBlock3}>
          <Image
            layout="intrinsic"
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/interview3pic.webp"
            alt="Skillslash"
            quality={100}
            style={{ objectFit: "contain" }}
            width={492}
            height={492}
          />
          <div className={style.bottomBtn}>
            <div className={style.LearnMore}>
              <Link href="/">
                <p>Event Ended</p>
              </Link>
            </div>

            {/* <p>Register</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
