import React, { useState } from "react";
import styles from "./EventTab.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import TabBlock from "./TabBlock";
import { DeskTab } from "./DeskTab";
const EventTab = ({ data }) => {
  const [viewAllData, setViewAllData] = useState(data);
  const [viewAll, setViewAll] = useState(false);
  const [dataScience, setDataScience] = useState(false);
  const [fullstack, setFullstack] = useState(true);
  const today = new Date();
  let dataScienceDetails;
  let FullStackDetails;
  let viewAllDetails;

  dataScienceDetails = viewAllData.filter(
    (post) => post.tag === "DataScience" && new Date(post.eventEnd) < today
  );
  FullStackDetails = viewAllData.filter(
    (post) => post.tag === "Fullstack" && new Date(post.eventEnd) < today
  );
  viewAllDetails = viewAllData.filter((post) => {
    new Date(post.eventEnd) > today;
  });

  return (
    <div className={styles.Course} id="course">
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setDataScience(false);
              setFullstack(true);
            }}
            className={fullstack ? styles.ActiveSpan : styles.span}
          >
            Full Stack ({FullStackDetails.length})
          </span>
          {fullstack ? (
            data === "" ? (
              ""
            ) : (
              <TabBlock Details={FullStackDetails} />
            )
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setDataScience(true);
              setFullstack(false);
            }}
            className={dataScience ? styles.ActiveSpan : styles.span}
          >
            Data Science ({dataScienceDetails.length + 2})
          </span>

          {dataScience ? (
            data === "" ? (
              ""
            ) : (
              <TabBlock Details={dataScienceDetails} />
            )
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(true);

              setDataScience(false);
              setFullstack(false);
            }}
            className={viewAll ? styles.ActiveSpan : styles.span}
          >
            View All ({data.length + 2})
          </span>
          {viewAll ? <TabBlock Details={viewAllDetails} /> : ""}
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? <DeskTab Details={viewAllData} extraDiv={true} /> : ""}
          {fullstack ? (
            <>
              <DeskTab Details={FullStackDetails} extraDiv={false} />
            </>
          ) : (
            ""
          )}
          {dataScience ? (
            <DeskTab Details={dataScienceDetails} extraDiv={true} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTab;
