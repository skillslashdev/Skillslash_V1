import React, { useState } from "react";
import Intro from "../components/DemoPage/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
const AutoPopUp = dynamic(() => import("../components/AutoPopUp/AutoPopUp"));
const VideoTabs = dynamic(() =>
  import("../components/DemoPage/VideoSlider/VideoTab")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));

const demoVideos = () => {
  return (
    <div>
      <Head>
        <title>Demo Videos - Watch Demo Live Classes by Skillslash</title>
        <meta
          name="description"
          content="Watch Live demo session of the classes and projects. Get Trained from industry led Mentors and get certification."
        />
      </Head>
      <Navbar course={false} />
      <Intro />
      <VideoTabs />
      <Footer />
      <AutoPopUp />
    </div>
  );
};

export default demoVideos;
