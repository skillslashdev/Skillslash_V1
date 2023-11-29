import React from "react";
import styles from "./RelatedInfo.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";

const RelatedInfo = ({ pinCode, relatedArea, relatedBlog, aboutCity }) => {
  return (
    <div className={styles.relatedWrap}>
      <div className={styles.pinCode}>
        <h3>{aboutCity.title}</h3>
        <p>{aboutCity.desc}</p>
        <div className={styles.viewPoint}>
          {aboutCity.pointView
            ? aboutCity.point.map((data, i) => {
                return (
                  <li key={i} style={{ color: "#646464" }}>
                    {" "}
                    {data}
                  </li>
                );
              })
            : ""}
        </div>
      </div>
      <div className={styles.pinCode}>
        <h3>{pinCode.heading}</h3>
        {pinCode.area.map((data, i) => {
          return <span key={i}>{data},</span>;
        })}
      </div>
      <div className={styles.location}>
        <h2>{relatedArea.heading}</h2>
        {relatedArea.area.map((data, i) => {
          return <span key={i}>{data},</span>;
        })}
      </div>
      <div className={styles.rBlog}>
        <h3>Related Blog</h3>
        <div className={styles.blogWrap}>
          {relatedBlog.map((data, i) => {
            return (
              <Link href={data.link} key={i}>
                <div className={styles.blog}>
                  <div className={styles.blogImg}>
                    <div className="bgWrap">
                      <Image src={data.img} fill={true} alt={data.title} />
                    </div>
                  </div>
                  <h4>{data.title}</h4>
                  <span>
                    <BsCalendarCheck />
                    {data.publishDate}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedInfo;
