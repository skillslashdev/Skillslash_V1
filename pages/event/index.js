import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/DataScienceEvent.module.css";
import { getSortedPostsData } from "../../lib/event";
import { sortByDateEvent } from "../../utils";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const EventTab = dynamic(() =>
  import("../../components/Event/EventTab/EventTab")
);

export default function index({ eventData }) {
  const today = new Date();
  const [viewAllData, setViewAllData] = useState(eventData);

  useEffect(() => {
    setViewAllData(
      viewAllData.map((post) => {
        if (new Date(post.eventEnd) < today) {
          return post;
        }
      })
    );
  }, []);

  return (
    <div>
      <Head>
        <title>
          Register for Free webinars, workshop, Masterclass -Skillslash
        </title>
        <meta
          name="description"
          content="Enroll in Full stack and and data science masterclass for free and learn from industry experts."
        />
      </Head>
      <Navbar course={false} />

      <div className={styles.event}>
        <h1>Events on Skillslash</h1>
        <div className={styles.eventTab}>
          <EventTab data={viewAllData} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const eventData = getSortedPostsData();
  return {
    props: {
      eventData: eventData.sort(sortByDateEvent),
    },
  };
}
