import React, { useState, useRef, useEffect } from "react";
import styles from "./SeoSyllabus.module.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineLiveTv,
  MdOutlineLaptopMac,
} from "react-icons/md";
import Link from "next/link";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
} from "react-icons/ai";
import Form from "../../Form/Form";
import { BiCheck } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import Popup from "../../Popup/Popup";

function DataScienceSyllabus({
  seoSyllabus,
  syllabusDesc,
  popupHead,
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectWeb,
  redirectDSA,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState(seoSyllabus);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };
  console.log(seoSyllabus, "seoSyllabus");
  return (
    <section className={styles.Syllabus}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form
            setTrigger={setPopups}
            downloadBrochure
            dataScience={dataScience}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectBl={redirectBl}
            redirectDe={redirectDe}
            redirectWeb={redirectWeb}
            redirectDSA={redirectDSA}
          />
        </div>
      </Popup>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h4>Syllabus</h4>
          </div>
          <div>
            <button className={styles.buttonDownload} onClick={popupShow}>
              Download Brochure
            </button>
          </div>
        </div>
        <p>{syllabusDesc}</p>

        {state.map((syllabusData, i) => {
          const { Module0 } = syllabusData;

          return (
            <div className={styles.FaqWrapper} key={Module0.title}>
              {/* {Module0.open ? ( */}
              <BsDot className={styles.dot} />
              <span className={styles.line}></span>
              <div className={styles.ques} style={{ borderBottom: "0" }}>
                <div className={styles.headWrap}>
                  <h2>{Module0.title}</h2>

                  <p>
                    <b>{Module0.title1}</b>
                  </p>
                  <p>{Module0.descS}</p>

                  {Module0.project ? (
                    <div className={styles.logoImgWrap}>
                      {Module0.projectImgSrc.map((imgData) => {
                        return (
                          <div className={styles.imgWrap} key={imgData.id}>
                            <Image
                              src={imgData.src}
                              width={imgData.width}
                              height={imgData.height}
                              alt="Project by skillslash"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}

                  {/* {Module0.project
                      ? Module0.projectImgSrc.map((imgData) => {
                          return (
                            <div className={styles.imgWrap}>
                              <Image
                                key={imgData.id}
                                src={imgData.src}
                                width={imgData.width}
                                height={imgData.height}
                                alt="Project by skillslash"
                              />
                            </div>
                          );
                        })
                      : ""} */}
                </div>
              </div>
              {/* ) : (
                <div className={styles.ques}>
                  <div className={styles.headWrap}>
                    <h2>{Module0.title}</h2>
                    {Module0.project ? (
                      <div className={styles.logoImgWrap}>
                        {Module0.projectImgSrc.map((imgData) => {
                          return (
                            <div className={styles.imgWrap} key={imgData.id}>
                              <Image
                                src={imgData.src}
                                width={imgData.width}
                                height={imgData.height}
                                alt="Project by skillslash"
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )} */}
              {Module0.content.length === 0 ? (
                ""
              ) : (
                <div className={styles.ans}>
                  <div
                    className={styles.innerAns}
                    onClick={() => {
                      let id = i;
                      handleChange(id);
                    }}
                  >
                    <h2>Course Content</h2>
                    <span>
                      {Module0.open ? (
                        <MdKeyboardArrowUp className="icon" />
                      ) : (
                        <MdKeyboardArrowDown className="icon" />
                      )}
                    </span>
                  </div>
                  {Module0.open ? (
                    <div>
                      {Module0.project ? (
                        <div>
                          <h5 className={styles.projectHead}>
                            Project You Will Work On
                          </h5>
                          <div className={styles.projectView}>
                            {Module0.projectInfo.map((imgData) => {
                              return (
                                <div
                                  className={styles.projectSyllabus}
                                  key={imgData.id}
                                >
                                  <p>{imgData.title}</p>
                                  <Image
                                    src={imgData.src}
                                    width={imgData.width}
                                    height={imgData.height}
                                    alt="Project by skillslash"
                                  />
                                  <Link href="#project">
                                    <button>View Details</button>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <p>{Module0.desc}</p>

                      {Module0.content.map((content, i) => {
                        return (
                          <div key={content.chap.title}>
                            <h5>{content.chap.title}</h5>
                            {content.chap.desc.map((desc, i) => {
                              return (
                                <div key={desc}>
                                  {desc === "" ? (
                                    ""
                                  ) : (
                                    <p key={desc} className={styles.points}>
                                      {" "}
                                      <BiCheck className={styles.check} />{" "}
                                      {desc}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div>
        {/* <div className={styles.syllabusRight}>
          <div className={styles.PProgrammain}>
            <div className={styles.PProgram}>
              <p className={styles.highlight}>Program Highlights</p>
            </div>
            <div className={styles.PProgramInner}>
              <p>
                <MdOutlineLiveTv className={styles.PIcons} />
                {redirectDSA ? "250+ Live sessions" : "350+ Live sessions"}
              </p>
              <p>
                <AiOutlineFundProjectionScreen className={styles.PIcons} />
                15+ Industry Projects
              </p>
              <p>
                <AiOutlineFieldTime className={styles.PIcons} />
                Life time accessibility
              </p>
              {redirectDSA ? (
                ""
              ) : (
                <p>
                  <MdOutlineLaptopMac className={styles.PIcons} />
                  Live project experience
                </p>
              )}
            </div>
          </div>
          <div className={styles.PProgramMain} style={{ marginTop: "20px" }}>
            <div className={styles.PProgram}>
              <p>Request More Information</p>
            </div>
            <div className={styles.PProgramInnerS}>
              <Form
                syllabus={true}
                dataScience={dataScience}
                redirectDs={redirectDs}
                redirectFs={redirectFs}
                redirectBa={redirectBa}
                redirectBl={redirectBl}
                redirectDe={redirectDe}
                redirectDSA={redirectDSA}
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default DataScienceSyllabus;
