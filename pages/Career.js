import React from "react";
import dynamic from "next/dynamic";
const CareerHeader = dynamic(() =>
  import("../components/Career/CareerHeader/CareerHeader")
);
const HowWeDo = dynamic(() => import("../components/Career/HowWeDo/HowWeDo"));
const JobOffer = dynamic(() => import("../components/Career/Job/JobOffer"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

const Career = () => {
  return (
    <div>
      <Head>
        <title>Skillslash- About Us</title>
        <meta
          name="description"
          content="Being the leading data science training provider, we give you the opportunity to work directly with industry experts on latest projects."
        />
      </Head>
      <Navbar course={false} />
      <CareerHeader />

      <HowWeDo />
      <JobOffer />
      <Footer />
    </div>
  );
};

export default Career;
