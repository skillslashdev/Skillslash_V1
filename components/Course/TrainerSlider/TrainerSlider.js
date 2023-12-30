import React, { useState, useEffect } from "react";
import style from "./TrainSlider.module.css";
import dynamic from "next/dynamic";
import { BsDownload } from "react-icons/bs";
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = dynamic(() => import("../../Form/Form"));
import { fsTrainer, dsTrainer } from "./TrainerData";
const TrainerSwiper = dynamic(() => import("./TrainerSwiper"));

const TrainerSlider = ({
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectDSA,
  redirectWeb,
  redirectAI,
  seoPage,
  heading,
  trainerSlider,
}) => {
  const [swiperData, setSwiperData] = useState(dsTrainer);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    redirectDs || redirectDe || redirectBa ? setSwiperData(dsTrainer) : "";
    redirectDSA || redirectFs || redirectWeb ? setSwiperData(fsTrainer) : "";
  }, []);
  return (
    <div className={style.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Complete trainers background and experience</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            downloadBrochure={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectDe={redirectDe}
            redirectDSA={redirectDSA}
            redirectWeb={redirectWeb}
            redirectAI={redirectAI}
            trainer={true}
          />
        </div>
      </Popup>
      <h2 className={style.heading}>{heading}</h2>
      {seoPage ? (
        <div
          dangerouslySetInnerHTML={{ __html: trainerSlider }}
          className={style.seoPara}
        ></div>
      ) : (
        ""
      )}

      <div className={style.innerWrap}>
        <div className={style.slider}>
          <TrainerSwiper swiperData={swiperData} />
        </div>
        {/* <div className={style.button}>
          <button onClick={popupShow}>
            <BsDownload className={style.icon} />
            More Trainer Details
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TrainerSlider;
