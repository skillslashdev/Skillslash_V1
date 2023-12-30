import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
const SecondPart = dynamic(() => import("../components/Homepage/SecondPart"));
import FirstPart from "../components/Homepage/FirstPart";
import CustomPopup from "../components/Course/OfferPopup/CustomPopup";
// import MiddlePageCta from "../components/MiddlePageCta/MiddlePageCta";
const OfferPopup = dynamic(() =>
  import("../components/Course/OfferPopup/OfferPopup")
);

export default function Home() {
  const [popupData, setPopupData] = useState([]);
  const [popupDate, setPopupDate] = useState({
    startDate: "",
    endDate: "",
  });

  const today = new Date();
  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch("/api/v1/fetchPopup", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();

        if (!popData.length) {
          setPopupData({ endDate: "", startDate: "" });
          setPopupData([]);
        } else {
          setPopupDate({
            endDate: new Date(popData[0].endDate),
            startDate: new Date(popData[0].startDate),
          });

          setPopupData(popData[0]);
        }
      }
    };
    fetchPopup();
  }, []);

  return (
    <>
      <Navbar course={false} link="https://courses.skillslash.com/learn" />
      <div className={styles.container}>
        <Head>
          <title>Skillslash - Project Based Learning Platform.</title>
          <meta
            name="description"
            content="Learn latest blogs about Artificial Intelligence (AI), Python, Machine Learning, Data Science, NLP, Business Analysis, Data Science"
          />
        </Head>

        {popupData != [] ? (
          today >= popupDate.startDate && today <= popupDate.endDate ? (
            <OfferPopup popupData={popupData} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <FirstPart homePage={true} />
        <SecondPart homePage={true} />
        <CustomPopup />
      </div>
    </>
  );
}
