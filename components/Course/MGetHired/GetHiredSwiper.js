import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./MGetHired.module.css";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const GetHiredSwiper = ({ swiperData }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  // const [mobile, setMobile] = useState(false);
  // const [slidesPerView, setSlidesPerView] = useState(3.2);
  // const [spaceBetween, setSpaceBetween] = useState(95);
  // useEffect(() => {
  //   let width = window.innerWidth;

  //   // if (width < 801) {
  //   //   setSlidesPerView(3);
  //   //   setSpaceBetween(20);
  //   // }
  //   if (width < 481) {
  //     setMobile(true);
  //   }
  //   // if (width < 961) {
  //   //   setSlidesPerView(3);
  //   //   setSpaceBetween(20);
  //   // }
  //   // if (width < 641) {
  //   //   setSlidesPerView(2);
  //   //   setSpaceBetween(20);
  //   // }
  // });
  return mounted ? (
    <div>
      <Swiper
        spaceBetween={3.2}
        slidesPerView={95}
        slidesPerGroup={2}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          961: { slidesPerView: 3, spaceBetween: 20 },
          801: { slidesPerView: 3, spaceBetween: 20 },
          641: { slidesPerView: 2, spaceBetween: 20 },
          481: { slidesPerView: 1.5, spaceBetween: 20 },
          100: { slidesPerView: 1.5, spaceBetween: 20 },
        }}
        style={{ width: "100%" }}
        grabCursor={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperData.map((data) => {
          return (
            <SwiperSlide className={style.ReviewBox} key={data.id} id={data.id}>
              <div className={style.profile}>
                <Image
                  src={data.pImg}
                  width={data.pWidth}
                  height={data.pHeight}
                  alt="Best Alumni of Skillslash"
                  loading="lazy"
                />
              </div>
              <div className={style.transition} style={{ marginTop: "50px" }}>
                <p
                  style={
                    data.position === "Credit Risk Analyst"
                      ? { marginBottom: "-7px" }
                      : { marginBottom: "5px" }
                  }
                >
                  {data.position}
                </p>

                <Image
                  src={data.cImg}
                  width={data.cWidth}
                  height={data.cHeight}
                  alt="logo of Skillslash alumni company"
                  style={{ objectFit: "contain" }}
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
};

export default GetHiredSwiper;
