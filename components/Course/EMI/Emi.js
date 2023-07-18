import React, { useState, useEffect } from "react";

import styles from "./Emi.module.css";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = dynamic(() => import("../../Form/Form"));

const Emi = ({
  price,
  web,
  emi,
  redirectWeb,
  redirectDSA,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
}) => {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  // const [slidesPerView, setSlidesPerView] = useState(5);
  // const [spaceBetween, setSpaceBetween] = useState(70);

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;

    // if (width < 801) {
    //   setSlidesPerView(9);
    //   setSpaceBetween(20);
    // }
    // if (width < 641) {
    //   setSlidesPerView(5);
    //   setSpaceBetween(20);
    // }
    if (width < 481) {
      // setSlidesPerView(3);
      // setSpaceBetween(10);
      setMobile(true);
    }
  });
  return (
    <div className={styles.EmiWrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScience={false}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectDe={redirectDe}
            redirectWeb={redirectWeb}
            redirectDSA={redirectDSA}
          />
        </div>
      </Popup>
      <div className={styles.leftEmi}>
        <h6>Why choose us?</h6>
        <div className={styles.list}>
          <span>
            <TiTick className={styles.tick} />
            250+ Hours of Live class
          </span>
          <span>
            <TiTick className={styles.tick} />
            15+ Industry Project
          </span>
          <span>
            <TiTick className={styles.tick} />
            Guaranteed job referral
          </span>
          <span>
            <TiTick className={styles.tick} />
            Real Work Experience
          </span>
          <span>
            <TiTick className={styles.tick} />
            Learn From Industry Experts
          </span>
          <span>
            <TiTick className={styles.tick} />
            Life Time Accessability
          </span>
        </div>
      </div>
      <div className={styles.rightEmi}>
        <h5 className={styles.EmiHeading}>
          Prog<span>ram Fees</span>
        </h5>
        <p className={styles.pBot}>
          We are driven by the idea of program affordability. So, we give you
          several financial options to manage and budget the expenses of your
          course.
        </p>
        <div className={styles.top}>
          <div className={styles.topEmiLeft}>
            <h6>Starting at {price} </h6>
            <p>EMI starting from: {emi}</p>
          </div>
          <div className={styles.topEmiRight}>
            <button onClick={popupShow}>Apply Now</button>
          </div>
        </div>

        <div className={styles.emiLeftMiddle}>
          <h5>Payment Partner</h5>
          <div className={styles.bottom}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/liquiloans.webp"
              alt="liqiLoans"
              width="90"
              height="40"
            />

            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/propelld.webp"
              alt="propelld"
              width="90"
              height="40"
            />

            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/zest-logo.webp"
              alt="Zest"
              width="80"
              height="24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emi;
