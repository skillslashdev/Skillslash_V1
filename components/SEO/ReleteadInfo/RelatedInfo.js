import React from "react";
import styles from "./RelatedInfo.module.css";
import Link from "next/link";
import Image from "next/image";

const RelatedInfo = ({ pinCode, relatedArea, relatedBlog }) => {
  return (
    <div className={styles.relatedWrap}>
      <div className={styles.pinCode}>
        <h2>{pinCode.heading}</h2>
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
        <h2>Related Blog</h2>
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
                  <p>{data.desc}</p>
                  <span>{data.publishDate}</span>
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
