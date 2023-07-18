import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar/Navbar"));
const RefundsCancellation = dynamic(() =>
  import("../components/RefundsCancellation/RefundsCancellation")
);

const terms = () => {
  return (
    <>
      <Head>
        <title>Refund and Cancellation</title>
      </Head>
      <Navbar course={false} />
      <RefundsCancellation />
    </>
  );
};

export default terms;
