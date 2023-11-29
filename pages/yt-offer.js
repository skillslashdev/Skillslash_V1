import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import styles from "../styles/ytOffer.module.css";
import ContactForm from "../components/ContactusForm/ContactusForm";
import Footer from "../components/Footer/Footer";

const ytOffer = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  useEffect(() => {
    function generateCouponCode(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let couponCode = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        couponCode += characters.charAt(randomIndex);
      }

      return couponCode;
    }
    setCoupon(generateCouponCode(8));
  }, []);

  // Example: Generate a coupon code with a length of 8 characters

  const copyCouponCode = () => {
    const tempInput = document.createElement("input");
    tempInput.value = coupon;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Coupon code copied to clipboard!");
  };
  return (
    <div>
      <Navbar course={false} />
      <div className={styles.divWrap}>
        <div className={styles.formWrapDiv}>
          {showCoupon ? (
            <div className={styles.couponDiv}>
              <p>copy your coupon code :</p>
              <div>
                <p>
                  <b>
                    {coupon}
                    <span className={styles.copyIcon} onClick={copyCouponCode}>
                      📋
                    </span>
                  </b>
                </p>
              </div>
            </div>
          ) : (
            <>
              <h1 className={styles.heading}>
                Fill the form to get Your Coupon code
              </h1>
              <ContactForm coupon={true} setShowCoupon={setShowCoupon} />
            </>
          )}
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
