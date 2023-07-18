import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ToolsCovered.module.css";

function ToolsCovered() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  return (
    <section className={styles.ToolsCovered}>
      <h4>Tools Covered</h4>
      <div>
        {mobile ? (
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tools_Covered_ Mobile.webp"
            alt="tools you will read in our online flagship program"
            quality={100}
            style={{ objectFit: "contain" }}
            width={480}
            height={120}
            loading="lazy"
          />
        ) : (
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/Tools_Covered.webp"
            alt="tools you will read in our online flagship program"
            quality={100}
            style={{ objectFit: "contain" }}
            width={1400}
            height={60}
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
}

export default ToolsCovered;
