import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar/Navbar"));
const PrivacyStatement = dynamic(() =>
  import("../components/PrivacyStatement/PrivacyStatement")
);

const terms = () => {
  return (
    <>
      <Head>
        <title>Privacy statement</title>
      </Head>
      <Navbar course={false} />
      <PrivacyStatement />
    </>
  );
};

export default terms;
