import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = dynamic(() => import("../../Form/Form"));
import TextAnimation from "../../Animation/TextAnimation";

const FirstSection = ({
  deskTopPara,
  title,
  homePage,
  spanTitleText,
  desc,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectDSA,
  redirectWeb,
  width,
  height,
  mainHeaderImg,
  mainAlt,
  backgroundImg,
  iconImg,
  usp1,
  usp2,
  usp3,
  usp4,
  usp1Span,
  usp2Span,
  usp3Span,
  usp4Span,
}) => {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [popups, setPopups] = useState(false);
  const [changeHeading, setChangeHeading] = useState(false);
  const [changeRedirect, setChangeRedirect] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setChangeHeading(demoClass);
    setChangeRedirect(changeText);

    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 642) {
      setTablet(false);
    }
    if (width < 642) {
      setTablet(true);
    }
    if (width < 481) {
      setMobile(true);
    }
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.bgImg}>
        <Image
          priority
          src={backgroundImg}
          fill={true}
          alt="background"
          sizes="(min-width: 1024px) 100vw, (max-width: 1024px) 100vw, (max-width: 641px) 0vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h5>
              Get a chance to experience our live-interactive class before
              enrolling
            </h5>
          )}
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectBl={redirectBl}
            redirectDe={redirectDe}
            redirectWeb={redirectWeb}
            redirectDSA={redirectDSA}
            changeRedirect={changeRedirect}
          />
        </div>
      </Popup>

      <div className={styles.left}>
        <div className={styles.paraWrap}>
          <p className={styles.pTop}>{deskTopPara}</p>
          <p className={styles.sidePara}>{spanTitleText}</p>
        </div>
        <h1>{title}</h1>
        <p className={styles.powered}>
          Powered by
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/microsoft-icon-logo-black.png"
            height={20}
            width={90}
            priority
            alt="Microsoft-certification"
          />
        </p>

        <TextAnimation
          homePage={homePage}
          redirectDSA={redirectDSA}
          redirectFs={redirectFs}
          redirectWeb={redirectWeb}
        />

        <div className={styles.btnWrapper}>
          <button
            onClick={() => popupShow(true, false)}
            className={styles.btn2}
          >
            <AiOutlineDownload className={styles.download} />
            Program Handbook
          </button>
          <button
            onClick={() => popupShow(false, true)}
            className={styles.btn1}
          >
            Demo Class
          </button>
        </div>
        <div className={styles.uspFeatures}>
          <div className={styles.left}>
            <div className={styles.uspFeatures1}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/liveTV.webp"
                  priority
                  alt="learn directly from live classes"
                  width={32}
                  height={34}
                />
              </div>
              <p>
                {usp1} <span>{usp1Span}</span>
              </p>
            </div>
            <div className={styles.uspFeatures2}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/certificate-icon-first.png"
                  priority
                  alt=" Direct Company experience certificate"
                  width={34}
                  height={36}
                />
              </div>
              <p>
                {usp2} <span>{usp2Span}</span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.uspFeatures3}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/emi-icon.webp"
                  alt="get Program with low cost EMI"
                  priority
                  width="32"
                  height="32"
                />
              </div>
              <p>
                {usp3} <span>{usp3Span}</span>
              </p>
            </div>
            <div className={styles.uspFeatures4}>
              <div>
                <Image
                  src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/like.webp"
                  alt="100% Interview Guarantee"
                  width="32"
                  priority
                  height="36"
                />
              </div>
              <p>
                {usp4} <span>{usp4Span}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imgWrapper}>
          <Image
            src={mainHeaderImg}
            alt={mainAlt}
            style={{ objectFit: "contain" }}
            width={width}
            priority
            height={height}
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
