import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import TabData from "./VideoData";
import styles from "./VideoTab.module.css";
import { MdOutlineLocalFireDepartment, MdDataSaverOff } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import {
  FaPython,
  FaPhabricator,
  FaConnectdevelop,
  FaUncharted,
} from "react-icons/fa";

const VideoTabs = () => {
  const [python, setPython] = useState(true);
  const [dataScience, setDataScience] = useState(false);
  const [nlp, setNlp] = useState(false);
  const [ml, setMl] = useState(false);
  const [stat, setStat] = useState(false);
  const [deepLearning, setDeepLearning] = useState(false);
  const [projects, setProjects] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setMobile(true);
    }
    if (width > 801) {
      setMobile(false);
    }
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          <>
            {mobile ? (
              <span
                key={TabData[0].id}
                id="0"
                onClick={() => {
                  setPython(true);
                  setDataScience(false);
                  setMl(false);
                  setNlp(false);
                  setStat(false);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={python ? styles.spanActive : styles.span}
              >
                <span>
                  <FaPython
                    className={python ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[0].title}
                </span>

                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[0].id}
                id="0"
                onClick={() => {
                  setPython(true);
                  setDataScience(false);
                  setMl(false);
                  setNlp(false);
                  setStat(false);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={python ? styles.spanActive : styles.span}
              >
                <span>
                  <FaPython
                    className={python ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[0].title}
                </span>
                <IoIosArrowForward />
              </span>
            )}

            {python ? (
              <div className={styles.gridWrap}>
                {TabData[0].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[5].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(false);
                  setStat(true);
                  setNlp(false);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={stat ? styles.spanActive : styles.span}
              >
                <span>
                  <AiOutlineLineChart
                    className={stat ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[5].title}
                </span>

                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[5].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(false);
                  setNlp(false);
                  setStat(true);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={stat ? styles.spanActive : styles.span}
              >
                <span>
                  <AiOutlineLineChart
                    className={stat ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[5].title}
                </span>
                <IoIosArrowForward />
              </span>
            )}
            {stat ? (
              <div className={styles.gridWrap}>
                {TabData[5].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {mobile ? (
              <span
                key={TabData[4].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(true);
                  setNlp(false);
                  setStat(false);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={ml ? styles.spanActive : styles.span}
              >
                <span>
                  <FaConnectdevelop
                    className={ml ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[4].title}
                </span>

                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[4].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(true);
                  setNlp(false);
                  setStat(false);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={ml ? styles.spanActive : styles.span}
              >
                <span>
                  <FaConnectdevelop
                    className={ml ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[4].title}
                </span>
                <IoIosArrowForward />
              </span>
            )}

            {ml ? (
              <div className={styles.gridWrap}>
                {TabData[4].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {mobile ? (
              <span
                key={TabData[3].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setStat(false);
                  setDataScience(false);
                  setMl(false);
                  setNlp(false);
                  setDeepLearning(true);
                  setProjects(false);
                }}
                className={deepLearning ? styles.spanActive : styles.span}
              >
                <span>
                  <FaPhabricator
                    className={
                      deepLearning ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[3].title}
                </span>

                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[3].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(false);
                  setStat(false);
                  setNlp(false);
                  setDeepLearning(true);
                  setProjects(false);
                }}
                className={deepLearning ? styles.spanActive : styles.span}
              >
                <span>
                  <FaPhabricator
                    className={
                      deepLearning ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[3].title}
                </span>
                <IoIosArrowForward />
              </span>
            )}
            {deepLearning ? (
              <div className={styles.gridWrap}>
                {TabData[3].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {mobile ? (
              <span
                key={TabData[2].id}
                id="2"
                onClick={() => {
                  setDataScience(false);
                  setPython(false);
                  setMl(false);
                  setStat(false);
                  setNlp(true);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={nlp ? styles.spanActive : styles.span}
              >
                <span>
                  <BsLaptop
                    className={nlp ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[2].title}
                </span>
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[2].id}
                id="2"
                onClick={() => {
                  setDataScience(false);
                  setPython(false);
                  setMl(false);
                  setStat(false);
                  setNlp(true);
                  setDeepLearning(false);
                  setProjects(false);
                }}
                className={nlp ? styles.spanActive : styles.span}
              >
                <span>
                  <BsLaptop
                    className={nlp ? styles.ActiveSpanIcon : styles.spanIcon}
                  />
                  {TabData[2].title}
                </span>

                <IoIosArrowForward />
              </span>
            )}

            {nlp ? (
              <div className={styles.gridWrap}>
                {TabData[2].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <div className={styles.gridImg}></div>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                      <div className={styles.gridInnerBox}>
                        <h4>{data.name}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {mobile ? (
              <span
                key={TabData[6].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(false);
                  setStat(false);
                  setNlp(false);
                  setDeepLearning(false);
                  setProjects(true);
                }}
                className={projects ? styles.spanActive : styles.span}
              >
                <span>
                  <FaUncharted
                    className={
                      projects ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[6].title}
                </span>

                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[6].id}
                id="0"
                onClick={() => {
                  setPython(false);
                  setDataScience(false);
                  setMl(false);
                  setNlp(false);
                  setStat(false);
                  setDeepLearning(false);
                  setProjects(true);
                }}
                className={projects ? styles.spanActive : styles.span}
              >
                <span>
                  <FaUncharted
                    className={
                      projects ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[6].title}
                </span>
                <IoIosArrowForward />
              </span>
            )}
            {projects ? (
              <div className={styles.gridWrap}>
                {TabData[6].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </>
        </div>
        {mobile ? (
          ""
        ) : (
          <div className={styles.middlePanel}>
            {python ? (
              <div className={styles.gridWrap}>
                {TabData[0].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {nlp ? (
              <div className={styles.gridWrap}>
                {TabData[2].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {ml ? (
              <div className={styles.gridWrap}>
                {TabData[4].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {deepLearning ? (
              <div className={styles.gridWrap}>
                {TabData[3].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {stat ? (
              <div className={styles.gridWrap}>
                {TabData[5].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {projects ? (
              <div className={styles.gridWrap}>
                {TabData[6].desc.map((data) => {
                  const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
                  return (
                    <div className={styles.gridBox} key={data.id}>
                      <iframe
                        src={src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "4px solid white",
                          borderRadius: "4px",
                        }}
                      ></iframe>
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
    </div>
  );
};

export default VideoTabs;
