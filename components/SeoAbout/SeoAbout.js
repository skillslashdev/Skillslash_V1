import React, { useState } from "react";
import styles from "./SeoAbout.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdCall } from "react-icons/md";
import { FaLaptopCode, FaRegClock } from "react-icons/fa";
import Form from "../Form/Form";
import { BsFillCircleFill } from "react-icons/bs";

import { AiOutlineDownload } from "react-icons/ai";
import Popup from "../Popup/Popup";

function Syllabus({ dataScience }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState([
    {
      id: 0,
      open: true,
    },
    {
      id: 1,
      open: false,
    },
    {
      id: 2,
      open: false,
    },
    {
      id: 3,
      open: false,
    },
    {
      id: 4,
      open: false,
    },
    {
      id: 5,
      open: false,
    },
    {
      id: 6,
      open: false,
    },
  ]);
  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
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
          <h5>Download Data science course Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form
            setTrigger={setPopups}
            downloadBrochure
            dataScience={dataScience}
          />
        </div>
      </Popup>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h4>About</h4>
          </div>
        </div>
        {/* <p>
          Skillslash’s best Data Science course comes with a Guaranteed job
          referral. Besides, the Data Science and AI courses are curated by
          leading faculties and industry leaders. Especially, with the aim to
          provide practical data science learning experience with live
          interactive classes and projects.
        </p> */}

        <div className={styles.QInner}>
          <div
            className={styles.FaqWrapper}
            onClick={() => {
              let id = 0;
              handleChange(id);
            }}
          >
            {state[0].open ? (
              <div className={styles.quesO}>
                <h2>Module</h2>

                <span>
                  {state[0].open ? (
                    <MdKeyboardArrowUp className="icon" />
                  ) : (
                    <MdKeyboardArrowDown className="icon" />
                  )}
                </span>
              </div>
            ) : (
              <div className={styles.ques}>
                <h2>Module</h2>
                <span>
                  {state[0].open ? (
                    <MdKeyboardArrowUp className="icon" />
                  ) : (
                    <MdKeyboardArrowDown className="icon" />
                  )}
                </span>
              </div>
            )}

            {state[0].open ? (
              <div className={styles.ans}>
                <h5>Programming Fundamentals(2 week )</h5>
                <li>Programming Basics, Variables, Conditional statements</li>
                <li>Strings, Lists, Loops and Functions</li>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 1;
                handleChange(id);
              }}
            >
              {state[1].open ? (
                <div className={styles.quesO}>
                  <h2>Data Structures and Algorithms</h2>

                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Data Structures and Algorithms</h2>
                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[1].open ? (
                <div className={styles.ans}>
                  <p>
                    This module elps you to master the algorithms and data
                    structures interview in FAANG & top product based MNCs. You
                    will be solving 250+ coding challenges under guidance of
                    expert mentors working in Tier 1 companies like Microsoft,
                    Amazon, Adobe, Facebook, Google etc.
                  </p>

                  <li>Array basics, Problem solving techniques with example</li>
                  <li>Time Complexity & Bit manipulations</li>
                  <li>Sorting, Searching & String Algorithms</li>
                  <li>Linked list</li>
                  <li>Two pointer techniques</li>
                  <li>Stack & Queue - Implementation & Problems.</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 2;
                handleChange(id);
              }}
            >
              {state[2].open ? (
                <div className={styles.quesO}>
                  <h2> System Design in Depth</h2>

                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>System Design in Depth </h2>
                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[2].open ? (
                <div className={styles.ans}>
                  <h5>System Design fundamentals</h5>
                  <li>
                    OOD : Object-oriented analysis and design , Design patterns
                  </li>
                  <li>CAP Theorem in distributed Computer Systems</li>
                  <li>
                    Load balancing - Caching - Distributed And Global Cache
                  </li>
                  <li>CDN, Proxy, Web Socket, Polling</li>
                  <li>
                    Database Indexing, Sharding, Normalization, ACID, SQL vs
                    NoSQL
                  </li>
                  <li>Messaging Queue</li>
                  <li>Multithreading and Synchronization</li>

                  <h5>High Level Design With Projects</h5>
                  <li>Introduction to common MicroService design patterns</li>
                  <li>Microservices & System components in real world</li>
                  <li>
                    Event Driven, Domain Driven, Rest API driven Architectures
                  </li>

                  <p>
                    <b>Note:</b> For more end to end{" "}
                    <b> Real industry Projects </b> on system design & Full
                    stack , Refer Project Section.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 3;
                handleChange(id);
              }}
            >
              {state[3].open ? (
                <div className={styles.quesO}>
                  <h2>Advance Data Structures & Algorithms</h2>

                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Advance Data Structures & Algorithm</h2>
                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[3].open ? (
                <div className={styles.ans}>
                  <li>LRU cache Like Problems</li>
                  <li>
                    Advance Tree - Segment tree, Suffix tree, Red black tree,
                    K-D tree{" "}
                  </li>
                  <li>Advance Dynamic Programming</li>
                  <li>CDN, Proxy, Web Socket, Polling</li>

                  <li>
                    Solve 30+ hard level coding interview questions from FAANG
                    companies.
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 4;
                handleChange(id);
              }}
            >
              {state[4].open ? (
                <div className={styles.quesO}>
                  <h2>Coding Interview Prep </h2>

                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Coding Interview Prep</h2>
                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[4].open ? (
                <div className={styles.ans}>
                  <li>
                    Build Resume/Linkedin profile to get shortlisted in top tech
                    companies
                  </li>
                  <li>
                    Learn Strategy to defend every single skill in your CV
                  </li>
                  <li>
                    Understand Hiring process for FAANG and product based MNCs
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 5;
                handleChange(id);
              }}
            >
              {state[5].open ? (
                <div className={styles.quesO}>
                  <h2>Electives & Specialization </h2>

                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Electives & Specialization </h2>
                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[5].open ? (
                <div className={styles.ans}>
                  <p>
                    ( You can select any 2 electives based on your career goal &
                    work exp.)
                  </p>
                  <h5>
                    Module - A : Full Stack Specialization With Real Work
                    Experience (15 Weeks)
                  </h5>
                  <h6>Frontend Development </h6>
                  <li>Web development basics - HTML and CSS</li>
                  <li>Bootstrap Basics </li>
                  <li>Introduction to Javascript</li>
                  <li>Introduction to React Ecosystem</li>

                  <li>Docker & Kubernetes basics for node.js applications</li>
                  <li>Cloud Deployment using AWS.</li>
                  <h5>Data Engineering Specialization</h5>
                  <li> Overview of Data Engineering</li>
                  <li>Advance SQL, NOSQL Database using Mongodb</li>
                  <li>Hadoop Basics</li>
                  <li>Design Data pipeline</li>
                  <li>Data warehousing</li>
                  <li>Apache Spark Fundamentals </li>
                  <li>
                    Core data engineering - Staging, Profiling, cleansing, and
                    migrating data.
                  </li>
                  <li>2 capstone Projects</li>

                  <h5>Advance AI & ML Specialization</h5>

                  <li>Probability theory</li>
                  <li>Statistics foundation</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Intro to Machine learning</li>
                  <li>Supervised Learning</li>
                  <li>Unsupervised Learning</li>
                  <li>Deep Learning Basics</li>
                  <li>NLP and Chatbots</li>
                  <li>Basics of Computer Vision</li>
                  <li>2 Capstone Projects</li>

                  <h5>Technical Engineering Manager</h5>

                  <li>
                    Real time use cases of blockchain in : Fintech, Supply
                    chain, Healthcare etc.
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 6;
                handleChange(id);
              }}
            >
              {state[6].open ? (
                <div className={styles.quesO}>
                  <h2>
                    Work on End to End Projects in Partnership With Startups{" "}
                  </h2>

                  <span>
                    {state[6].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    Work on End to End Projects in Partnership With Startups{" "}
                  </h2>
                  <span>
                    {state[6].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[6].open ? (
                <div className={styles.ans}>
                  We help you to work on projects directly with startups so that
                  you get real work experience. You will be building scalable
                  tech products from scratch using full stack technologies and
                  advanced system design concepts. You are recommended to work
                  on minimum 3-4 projects end to end and build a project
                  portfolio to crack coding interviews in top MNCs with
                  confidence.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.white} />
      </div>

      {/* Right-side Form Part */}
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
                  <MdCall className={styles.callIcon} />
                </div>
                <p>( Toll Free )</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className={styles.PProgrammain} style={{ marginTop: "20px" }}>
          <div className={styles.PProgram}>
            <p>Request More Information</p>
          </div>
          <div className={styles.PProgramInner}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
