import React from "react";
import style from "./Intro.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Intro = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  });
  return (
    <div className={style.wrapper}>
      {mobile ? (
        ""
      ) : (
        <div className={style.imageWrapper}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/demo-page-video-header.webp"
            priority={true}
            alt="Skillslash Build your Demo Header Image"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className={style.contentWrapper}>
        <div>
          <h2>Demo Session And Sample Class Recordings</h2>
          <div className={style.paraWrap}>
            <p>
              Our mission is to make our learners achieve their desired
              outcomes.Skillslash has impacted 1 million+ registered learners in
              50+ countries across the world.
            </p>
          </div>
          <button>Explore Demo Videos</button>
        </div>
        <div className={style.imgWrap}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/demo-page-video-back-img.webp"
            width={427}
            height={318}
            alt="Video-header-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
