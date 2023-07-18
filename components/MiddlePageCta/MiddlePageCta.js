import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("../Form/Form"));
const Image = dynamic(() => import("next/image"));
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ContactForm = dynamic(() => import("../ContactusForm/ContactusForm"));
const Popup = dynamic(() => import("../Popup/Popup"));
import styles from "../../styles/Home.module.css";

const MiddlePageCta = ({
  homePage,
  redirectFs,
  redirectDSA,
  redirectDe,
  redirectWeb,
  redirectDs,
  redirectBa,
}) => {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);

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
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.ctaWrap}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          {homePage ? (
            <ContactForm setTrigger={setPopups} popup={true} />
          ) : (
            <Form
              popup={true}
              dataScience={false}
              setTrigger={setPopups}
              redirectDs={redirectDs}
              redirectFs={redirectFs}
              redirectDe={redirectDe}
              redirectWeb={redirectWeb}
              redirectBa={redirectBa}
              redirectDSA={redirectDSA}
            />
          )}
        </div>
      </Popup>
      {mobile ? (
        ""
      ) : (
        <div className="bgWrap">
          <Image
            alt="Get counsellor advice for course"
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/New-cta-background-section.webp"
            fill={true}
          />
        </div>
      )}

      <div className={styles.cta}>
        <div></div>
        <div className={styles.left}>
          <Image
            alt="counsellor of skillslash"
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/CTAimg.webp"
            width={410}
            height={333}
            style={mobile ? { objectFit: "contain" } : { objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div className={styles.right}>
          <h5>
            Having Doubts? <br />
            Talk with our Experts
          </h5>
          <p>
            Elevate your career with our courses - gain the skills and knowledge
            that will set you apart and propel you toward success. Check your
            eligibility now and enroll today. Let's make your career dreams a
            reality.
          </p>
          <button onClick={popupShow}>
            Enquire Now <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddlePageCta;
