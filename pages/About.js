import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const GoalCta = dynamic(() =>
  import("../components/AboutUsPage/GoalCta/GoalCta")
);
const AboutValue = dynamic(() =>
  import("../components/AboutUsPage/AboutValue/AboutValue")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));
const Navbar = dynamic(() => import("../components/Navbar/Navbar"));

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Career at Skillslash</title>
        <meta
          name="description"
          content="Skillslash team has transformed the careers of many professionals around the world. Now it's your turn, join us and up-skill your career."
        />
      </Head>

      <Navbar course={false} />
      <AboutValue />
      <GoalCta />
      <Footer />
    </>
  );
};

export default AboutUs;
