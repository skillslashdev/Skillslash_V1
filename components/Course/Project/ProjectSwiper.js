import React, { useState, useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./Project.module.css";
import { Pagination, Navigation } from "swiper";
import { FaReact, FaDatabase } from "react-icons/fa";

import { AiOutlineRobot, AiOutlineFileExcel } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

const ProjectSwiper = memo(({ swiperData, redirectFs }) => {
  // const [mobile, setMobile] = useState(false);
  // const [slidesPerView, setSlidesPerView] = useState(3.2);
  // const [spaceBetween, setSpaceBetween] = useState(20);
  // useEffect(() => {
  //   let width = window.innerWidth;

  //   if (width < 1281) {
  //     setSlidesPerView(4);
  //     setSpaceBetween(20);
  //   }
  //   if (width < 801) {
  //     setSlidesPerView(2);
  //     setSpaceBetween(20);
  //   }
  //   if (width < 641) {
  //     setSlidesPerView(1.3);
  //     setSpaceBetween(20);
  //   }
  //   if (width < 481) {
  //     setSlidesPerView(1.1);
  //     setSpaceBetween(10);
  //     setMobile(true);
  //   }
  // });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  return mounted ? (
    <Swiper
      spaceBetween={20}
      slidesPerView={3.2}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        1024: { slidesPerView: 3.4, spaceBetween: 20 },
        801: { slidesPerView: 2, spaceBetween: 20 },
        641: { slidesPerView: 1.3, spaceBetween: 20 },
        481: { slidesPerView: 1.1, spaceBetween: 10 },
        200: { slidesPerView: 1.1, spaceBetween: 10 },
      }}
      loopFillGroupWithBlank={true}
      style={{ width: "100%" }}
      grabCursor={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {swiperData.map((data) => {
        return (
          <SwiperSlide className={styles.ReviewBox} key={data.id}>
            <div className={styles.header}>
              <h5>{data.title}</h5>
            </div>
            <div className={styles.body}>
              <div className={styles.desc}>
                <p>{data.desc}</p>
              </div>
              <p className={styles.tools}>
                Tools:
                {redirectFs ? (
                  <>
                    <FaReact className={styles.react} />
                    <FaDatabase className={styles.mongo} />
                    <FaDatabase className={styles.database} />
                    <FaNodeJs className={styles.node} />
                  </>
                ) : (
                  <>
                    <FaReact className={styles.react} />
                    <FaDatabase className={styles.mongo} />
                    <AiOutlineFileExcel className={styles.database} />
                    <AiOutlineRobot className={styles.node} />
                  </>
                )}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : (
    ""
  );
});

export default ProjectSwiper;
