import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import styles from "../styles/ytOffer.module.css";
import ContactForm from "../components/ContactusForm/ContactusForm";
import Footer from "../components/Footer/Footer";

const ytOffer = () => {
  return (
    <div>
      <Navbar course={false} />
      <div className={styles.divWrap}>
        <div className={styles.formWrapDiv}>
          <h1 className={styles.heading}>Fill the form to Register</h1>
          <ContactForm coupon={true} />
        </div>
        <div className={styles.rightWrap}>
          <div className="bgWrap">
            <Image
              fill
              style={{ objectFit: "contain" }}
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/yt-offfer-page.png"
              alt="yt-offer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ytOffer;
