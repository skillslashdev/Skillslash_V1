import React from "react";
import styles from "./CityGraph.module.css";
import { BsArrowUp } from "react-icons/bs";

const CityGraph = () => {
  const cityArray = [
    { city: "Delhi", people: "15K+", hike: "+2.5%" },
    { city: "Bangalore", people: "7K+", hike: "+5.1%" },
    { city: "Pune", people: "9K+", hike: "+1.5%" },
  ];
  return (
    <div className={styles.cityWrap}>
      {cityArray.map((data) => {
        return (
          <div className={styles.cityBox} key={data.city}>
            <p className={styles.head}>{data.city}</p>
            <div className={styles.people}>
              <p className={styles.text}>
                {data.people}
                <span>Learners</span>
              </p>
              <p className={styles.hikeBtn}>
                {data.hike} <BsArrowUp />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CityGraph;
