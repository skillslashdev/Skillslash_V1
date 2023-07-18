import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const ContactUsPage = dynamic(() =>
  import("../components/ContactUsPage/ContactUsPage")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));
const Navbar = dynamic(() => import("../components/Navbar/Navbar"));

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us - Skillslash</title>
      </Head>

      <Navbar course={false} />
      <ContactUsPage />
      <Footer />
    </>
  );
};

export default Contact;
