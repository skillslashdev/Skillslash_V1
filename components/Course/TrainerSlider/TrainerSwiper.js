import React, { useState, useEffect, memo } from "react";
import style from "./TrainSlider.module.css";
import Image from "next/image";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TrainerSwiper = memo(({ swiperData }) => {
  const [mobile, setMobile] = useState(false);
  // const [slidesPerView, setSlidesPerView] = useState(3);
  // const [spaceBetween, setSpaceBetween] = useState(60);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  useEffect(() => {
    let width = window.innerWidth;
    // if (width < 801) {
    //   setSlidesPerView(3);
    //   setSpaceBetween(20);
    // }
    if (width < 481) {
      setMobile(true);
    }
    // if (width < 961) {
    //   setSlidesPerView(2);
    //   setSpaceBetween(20);
    // }
    // if (width < 641) {
    //   setSlidesPerView(1.4);
    //   setSpaceBetween(20);
    // }
  });
  return mounted ? (
    <div>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 60 },
          801: { slidesPerView: 2, spaceBetween: 20 },
          641: { slidesPerView: 2, spaceBetween: 20 },
          100: { slidesPerView: 1.4, spaceBetween: 20 },
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        style={{ width: "100%" }}
        grabCursor={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperData.map((data) => {
          return (
            <SwiperSlide className={style.ReviewBox} key={data.id}>
              <div className={style.transition}>
                <h3>{data.name}</h3>
                <p>{data.position}</p>
                <Image
                  src={mobile ? data.mImg : data.cImg}
                  width={mobile ? data.mWidth : data.cWidth}
                  height={mobile ? data.mHeight : data.cHeight}
                  alt="trueblue"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
              <div className={style.profile}>
                <Image
                  src={data.pImg}
                  alt="Trainer Profile image"
                  title="Trainer image"
                  style={{ objectFit: "contain" }}
                  width={data.pWidth}
                  height={data.pHeight}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    ""
  );
});

export default TrainerSwiper;
