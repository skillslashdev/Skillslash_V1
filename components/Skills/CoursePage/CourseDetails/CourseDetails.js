import React, { useState, useEffect } from "react";
import styles from "./CourseDetails.module.css";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosPlayCircle,
} from "react-icons/io";
import {
  PiCertificate,
  PiChalkboardTeacher,
  PiGraduationCapFill,
} from "react-icons/pi";
import { TbListCheck } from "react-icons/tb";

import { IoBook } from "react-icons/io5";
import {
  MdOutlineLocalFireDepartment,
  MdDataSaverOff,
  MdOutlineAssignment,
} from "react-icons/md";
import { BsLaptop, BsDot, BsPersonVideo3 } from "react-icons/bs";
import { FaUserTie, FaNetworkWired } from "react-icons/fa";

const CourseDetails = ({ handleIcon, hour }) => {
  const [popular, setPopular] = useState(true);
  const [Live, setLive] = useState(false);
  const [MockTest, setMockTest] = useState(false);
  const [LiveProject, setLiveProject] = useState(false);
  const [FinalA, setFinalA] = useState(false);
  const [TCertificate, setTCertificate] = useState(false);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);
  return (
    <div className={styles.MegaMenu}>
      <div className={styles.leftSideMenu}>
        {mobile ? (
          <>
            <span
              className={popular ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(true);
                setLive(false);
                setMockTest(false);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
                Recorded Sessions
              </div>
              <IoIosArrowDown />
            </span>
            {popular ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <IoIosPlayCircle className="text-4xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>{hour} hours of Live class recorded sessions</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <IoBook className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Get advanced-level knowledge of all the concepts</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <FaUserTie className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Learn all the modules from industry-experts</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={popular ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(true);
              setLive(false);
              setMockTest(false);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
              Recorded Sessions
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={Live ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(true);
                setMockTest(false);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdDataSaverOff className={styles.MenuIcon} />
                <div>Live Doubt Clearing Session</div>
              </div>
              <IoIosArrowDown />
            </span>
            {Live ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <BsPersonVideo3 className="text-4xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>
                      Live doubt-clearing session with the trainer (weekly)
                    </h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <PiChalkboardTeacher className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>1:1 doubt clearance all-day</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={Live ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(true);
              setMockTest(false);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdDataSaverOff className={styles.MenuIcon} />
              <div>Live Doubt Clearing Session</div>
            </div>
            <IoIosArrowForward />
          </span>
        )}

        {mobile ? (
          <>
            <span
              className={LiveProject ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(false);
                setLiveProject(true);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <BsPersonVideo3 className={styles.MenuIcon} />
                Live Project Session
              </div>
              <IoIosArrowDown />
            </span>
            {LiveProject ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <IoIosPlayCircle className="text-4xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Instructor-led live project session</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <IoBook className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Work on Industry- led live project</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <FaUserTie className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>
                      Project certification from Analytics Consulting Firm
                    </h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={LiveProject ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(false);
              setLiveProject(true);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <BsPersonVideo3 className={styles.MenuIcon} />
              Live Project Session
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={FinalA ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(false);
                setLiveProject(false);
                setFinalA(true);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <PiGraduationCapFill className={styles.MenuIcon} />
                Internship Certification
              </div>
              <IoIosArrowDown />
            </span>
            {FinalA ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <IoIosPlayCircle className="text-4xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Complete the video session and tests</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <FaNetworkWired className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Complete 2 Live projects</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <FaUserTie className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Earn an Internship Certification</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={FinalA ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(false);
              setLiveProject(false);
              setFinalA(true);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <PiGraduationCapFill className="text-[20px]" />
              Internship Certification
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={TCertificate ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(false);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(true);
              }}
            >
              <div className={styles.innerSpan}>
                <TbListCheck className={styles.MenuIcon} />
                Triple Certification
              </div>
              <IoIosArrowDown />
            </span>
            {TCertificate ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <PiCertificate className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>
                      Internship certification from Analytics Consulting Firm
                    </h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <PiCertificate className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>
                      Project experience certifications from Analytics
                      Consulting Firm
                    </h5>
                  </div>
                </div>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <TbListCheck className="text-4xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Course Completion certification</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={TCertificate ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(false);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(true);
            }}
          >
            <div className={styles.innerSpan}>
              <TbListCheck className="text-[20px]" />
              Triple Certification
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={MockTest ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(true);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <BsLaptop className={styles.MenuIcon} />
                Self-Assessment Tests
              </div>
              <IoIosArrowDown />
            </span>
            {MockTest ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <IoBook className="text-4xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Attend the objective test after each module</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <PiChalkboardTeacher className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Clear tests to be eligible for the Project session</h5>
                  </div>
                </div>

                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <div>
                    <MdOutlineAssignment className="text-3xl text-[#f18350]" />
                  </div>
                  <div className={styles.mInnerBoxDiv}>
                    <h5>Self-assessment assignments for practice</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={MockTest ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(true);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <BsLaptop className={styles.MenuIcon} />
              Self-Assessment Tests
            </div>
            <IoIosArrowForward />
          </span>
        )}
      </div>
      <div className={styles.MiddleMenu}>
        {popular ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <IoIosPlayCircle className="text-4xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>{hour} hours of Live class recorded sessions</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <IoBook className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Get advanced-level knowledge of all the concepts</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <FaUserTie className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Learn all the modules from industry-experts</h5>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {Live ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <BsPersonVideo3 className="text-4xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Live doubt-clearing session with the trainer (weekly)</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <PiChalkboardTeacher className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>1:1 doubt clearance all-day</h5>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {MockTest ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <IoBook className="text-4xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Attend the objective test after each module</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <PiChalkboardTeacher className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Clear tests to be eligible for the Project session</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <MdOutlineAssignment className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Self-assessment assignments for practice</h5>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {LiveProject ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <IoIosPlayCircle className="text-4xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Instructor-led live project session</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <IoBook className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Work on Industry- led live project</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <FaUserTie className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Project certification from Analytics Consulting Firm</h5>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {FinalA ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <IoIosPlayCircle className="text-4xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Complete the video session and tests</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <FaNetworkWired className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Complete 3 Live projects</h5>
              </div>
            </div>

            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <FaUserTie className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Earn an Internship Certification</h5>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {TCertificate ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <PiCertificate className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Internship certification from Analytics Consulting Firm</h5>
              </div>
            </div>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <PiCertificate className="text-3xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>
                  Project experience certifications from Analytics Consulting
                  Firm
                </h5>
              </div>
            </div>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <div>
                <TbListCheck className="text-4xl text-[#f18350]" />
              </div>
              <div className={styles.mInnerBoxDiv}>
                <h5>Course Completion certification</h5>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
