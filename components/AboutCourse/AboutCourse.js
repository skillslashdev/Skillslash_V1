import styles from "./AboutCourse.module.css";
import { React, useState } from "react";

const AboutCourses = ({ content, AboutCourseHeading }) => {
  const [read, setRead] = useState(false);
  const handler = () => {
    setRead(!read);
  };
  return (
    <div className={styles.contentWrapper}>
      <h4>{AboutCourseHeading.heading}</h4>
      <p>{AboutCourseHeading.para}</p>

      {content.map((data, i) => {
        return (
          <div key={i} className={read ? styles.view : styles.viewN}>
            <h2>{data.data.heading}</h2>
            <p>{data.data.para}</p>
            {data.data.listActive
              ? data.data.list.map((list, i) => {
                  return (
                    <div key={i}>
                      {/* <h3>{list.title}</h3>
                      <ul>
                        <li>{list.desc}</li>
                      </ul> */}
                      <ul>
                        <li>{list}</li>
                      </ul>
                    </div>
                  );
                })
              : ""}
            {data.data.extraPara ? <p>{data.data.para1}</p> : ""}
          </div>
        );
      })}

      <p onClick={handler} className={styles.readP}>
        {read ? "Read Less..." : "Read More..."}
      </p>
    </div>
  );
};

export default AboutCourses;
