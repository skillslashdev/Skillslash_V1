import React, { useState, useEffect } from "react";
import styles from "./MegaMenu.module.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineLocalFireDepartment,
  MdDataSaverOff,
  MdOutlineLiveTv,
} from "react-icons/md";
import { BsDot } from "react-icons/bs";

const MegaMenu = ({ handleIcon }) => {
  const [popular, setPopular] = useState(true);
  const [DataScience, setDataScience] = useState(false);
  const [software, setSoftware] = useState(false);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
  return (
    <div className={styles.MegaMenu}>
      <div className={styles.leftSideMenu}>
        <h6>Browse by Domain</h6>
        {mobile ? (
          <>
            <span
              className={popular ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(true);
                setDataScience(false);
                setSoftware(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
                Popular Courses
              </div>
              <IoIosArrowDown />
            </span>
            {popular ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/selfpaced/data-science-&-aI-bootcamp-professionals">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI Bootcamp - Professionals</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/selfpaced/data-science-&-aI-bootcamp-final-year">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI Bootcamp - Final Year Student</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/business-analytics-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Analytics- Non Tech Professionals</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
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
              setDataScience(false);
              setSoftware(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
              Popular Courses
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={DataScience ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setDataScience(true);
                setSoftware(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdDataSaverOff className={styles.MenuIcon} />
                <div>Self Paced</div>
              </div>
              <IoIosArrowDown />
            </span>
            {DataScience ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/selfpaced/data-science-&-aI-bootcamp-professionals">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI Bootcamp - Professionals</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/selfpaced/data-science-&-aI-bootcamp-final-year">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI Bootcamp - Final Year Student</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/selfpaced/data-analytics-non-tech-professionals">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Analytics- Non Tech Professionals</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/selfpaced/dsa-system-design.json">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>DSA + System Design (FAANG interviews)</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/selfpaced/dsa-system-design.json">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Python For Data Science</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>{" "}
                <a href="/selfpaced/dsa-system-design.json">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Machine Learning with Applied Statistics</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={DataScience ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setDataScience(true);
              setSoftware(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdDataSaverOff className={styles.MenuIcon} />
              <div>Self Paced</div>
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={software ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setDataScience(false);
                setSoftware(true);
              }}
            >
              <div className={styles.innerSpan}>
                <MdOutlineLiveTv className={styles.MenuIcon} />
                <div>Live classes</div>
              </div>
              <IoIosArrowDown />
            </span>
            {software ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/advanced-data-science-and-ai-course-with-real-work-experience">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Advance Data science and AI course</h5>
                      <span>
                        <div>9 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/full-stack-developer-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Full Stack Developer course with certification</h5>
                      <span>
                        <div>10 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/business-analytics-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Business Analytics course for professionals</h5>
                      <span>
                        <div>8 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={software ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setDataScience(false);
              setSoftware(true);
            }}
          >
            <div className={styles.innerSpan}>
              <MdOutlineLiveTv className={styles.MenuIcon} />
              <div>Live Classes</div>
            </div>
            <IoIosArrowForward />
          </span>
        )}
      </div>
      <div className={styles.MiddleMenu}>
        <h6>Learn from top experts</h6>
        {popular ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <a href="/selfpaced/data-science-&-aI-bootcamp-professionals">
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Bootcamp - Professionals</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </a>
            </div>
            <a href="/selfpaced/data-science-&-aI-bootcamp-final-year">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Bootcamp - Final Year Student</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/selfpaced/data-analytics-non-tech-professional">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Analytics- Non Tech Professionals</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        {DataScience ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <a href="/selfpaced/data-science-&-aI-bootcamp-professionals">
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Bootcamp - Professionals</h5>
                  <span>
                    <div>Live Project Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Doubt Sessions</div>
                  </span>
                </div>
              </a>
            </div>
            <a href="/selfpaced/data-science-&-aI-bootcamp-final-year">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Bootcamp - Final Year Student</h5>
                  <span>
                    <div>Live Project Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Doubt Sessions</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/selfpaced/data-analytics-non-tech-professionals">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Analytics- Non Tech Professionals</h5>
                  <span>
                    <div>Live Project Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Doubt Sessions</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/selfpaced/dsa-system-design.json">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>DSA + System Design (FAANG interviews)</h5>
                  <span>
                    <div>Live Project Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Doubt Sessions</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/selfpaced/dsa-system-design.json">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Python For Data Science</h5>
                  <span>
                    <div>Live Project Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Doubt Sessions</div>
                  </span>
                </div>
              </div>
            </a>{" "}
            <a href="/selfpaced/dsa-system-design.json">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Machine Learning with Applied Statistics</h5>
                  <span>
                    <div>Live Project Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Doubt Sessions</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        {software ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <a href="/advanced-data-science-and-ai-course-with-real-work-experience">
                <div className={styles.mInnerBoxDiv}>
                  <h5>Advance Data science and AI course</h5>
                  <span>
                    <div>9 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </a>
            </div>
            <a href="/full-stack-developer-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Full Stack Developer course with certification</h5>
                  <span>
                    <div>10 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/business-analytics-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Business Analytics course for professionals</h5>
                  <span>
                    <div>8 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
