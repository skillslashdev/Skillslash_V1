import React, { useState } from "react";
import styles from "./SeoAbout.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdCall } from "react-icons/md";

import Form from "../Form/Form";

import { BiCheck } from "react-icons/bi";

import Popup from "../Popup/Popup";

function Syllabus({
  syllabus,
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
  const [state, setState] = useState(syllabus);

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
            <h4>About Data science course in Pune</h4>
          </div>
        </div>
        <p>
          Skillslash’s best Data Science course comes with a Guaranteed job
          referral. Besides, the Data Science and AI courses are curated by
          leading faculties and industry leaders. Especially, with the aim to
          provide practical data science learning experience with live
          interactive classes and projects.
        </p>

        {state.map((syllabusData, i) => {
          const { Module0 } = syllabusData;

          return (
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = i;
                handleChange(id);
              }}
              key={Module0.title}
            >
              {Module0.open ? (
                <div className={styles.ques} style={{ borderBottom: "0" }}>
                  <div className={styles.headWrap}>
                    <h2
                      style={{
                        paddingBottom: "25px",
                        paddingTop: "25px",
                        borderBottom: "4px solid #4f419a",
                      }}
                    >
                      {Module0.title}
                    </h2>
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
                  <span>
                    {Module0.open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
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
                  <span>
                    {Module0.open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}
              {Module0.content.length === 0 ? (
                ""
              ) : (
                <>
                  {Module0.open ? (
                    <div className={styles.ans}>
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
                </>
              )}
            </div>
          );
        })}
      </div>
      {/* Right-side Form Part */}
      <div className={styles.syllabusRight}>
        <div className={styles.syllabusRight}>
          <div className={styles.PProgrammain}>
            <div className={styles.PProgram}>
              <div>
                <div className={styles.tollNo}>
                  <p>Contact Us</p>
                  <div className={styles.contactNo}>
                    <h4>
                      <a href="tel:+918391911911">+918391911911</a>{" "}
                    </h4>
                    <a href="tel:+918391911911">
                      <MdCall className={styles.callIcon} />
                    </a>
                  </div>
                  <p>( Toll Free )</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.PProgrammain} style={{ marginTop: "20px" }}>
            <div className={styles.PProgram}>
              <p>Request More Information</p>
            </div>
            <div className={styles.PProgramInner}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
