import React, { useState, useEffect } from "react";
import style from "./MGetHired.module.css";
import dynamic from "next/dynamic";
import { BsDownload } from "react-icons/bs";
import { FsAlumni, dsAlumni, webAlumni } from "./AlumniData";
const GetHiredSwiper = dynamic(() => import("./GetHiredSwiper"));
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = dynamic(() => import("../../Form/Form"));

const MGetHired = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectDSA,
  redirectWeb,
  redirectAI,
  seoPage,
  alumniPara,
}) => {
  const [swiperData, setSwiperData] = useState(dsAlumni);

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    redirectDs || redirectDe || redirectBa ? setSwiperData(dsAlumni) : "";
    redirectDSA || redirectFs ? setSwiperData(FsAlumni) : "";
    redirectWeb ? setSwiperData(webAlumni) : "";
  }, []);
  // console.log(alumniPara, "getHired");

  return (
    <>
      <div className={style.wrapper}>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Detail placement report with students background</h5>
            <p>Fill the below Details to get started</p>
            <Form
              popup={true}
              placement={true}
              downloadBrochure={true}
              setTrigger={setPopups}
              redirectDs={redirectDs}
              redirectFs={redirectFs}
              redirectBa={redirectBa}
              redirectDe={redirectDe}
              redirectDSA={redirectDSA}
              redirectWeb={redirectWeb}
              redirectAI={redirectAI}
            />
          </div>
        </Popup>
        <h4>
          Our <span>Alumni Placed @</span>
        </h4>
        {seoPage ? (
          <div
            dangerouslySetInnerHTML={{ __html: alumniPara }}
            className={style.seoPara}
          ></div>
        ) : (
          ""
        )}
        <div className={style.innerWrap}>
          <div className={style.slider}>
            <GetHiredSwiper swiperData={swiperData} />
          </div>

          {/* <div className={style.bottom}>
          <p>Our Hiring Partners</p>
          <PartnerSlider swiperData={hPartner} getHired={true} />
        </div> */}
        </div>
      </div>
      <div className={style.button}>
        <button onClick={popupShow}>
          <BsDownload className={style.icon} />
          Placement Report
        </button>
      </div>
    </>
  );
};

export default MGetHired;
