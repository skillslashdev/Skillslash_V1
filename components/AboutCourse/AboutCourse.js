import styles from "./AboutCourse.module.css";
import { React, useState } from "react";

const AboutCourses = ({ content, AboutCourseHeading }) => {
  const [read, setRead] = useState(false);
  const handler = () => {
    setRead(!read);
  };
  var headingLevel = 3;
  return (
    <div className={styles.contentWrapper}>
      <h2>{AboutCourseHeading.heading}</h2>
      <p>{AboutCourseHeading.para}</p>

      {content.map((data, i) => {
        const HeadingComponent = `h${headingLevel}`;

        if (headingLevel === 6) {
          headingLevel = 2; // Reset to h2
        } else {
          headingLevel++; // Increment for the next iteration
        }
        return (
          <div key={i} className={read ? styles.view : styles.viewN}>
            <HeadingComponent>{data.data.heading}</HeadingComponent>
            <p>{data.data.para}</p>
            {data.data.listActive
              ? data.data.list.map((list, i) => {
                  return (
                    <div key={i}>
                      {list.title === undefined ? (
                        <ul>
                          <li>{list}</li>
                        </ul>
                      ) : (
                        <>
                          {/* <h3>{list.title}</h3> */}
                          <ul>
                            <li>{list.desc}</li>
                          </ul>
                        </>
                      )}
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
