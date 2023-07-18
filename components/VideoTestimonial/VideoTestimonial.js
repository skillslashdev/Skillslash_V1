import dynamic from "next/dynamic";
import styles from "./VideoTestimonial.module.css";
import { dsReview } from "./VideoTestimonialData";
import Image from "next/image";
import { useState } from "react";
const VideoTestimonialSwiper = dynamic(() =>
  import("./VideoTestimonialSwiper")
);
import { ratingData } from "./ratingData";

const VideoTestimonial = ({ event }) => {
  const [review, setReview] = useState(dsReview);

  // const [video, setVideo] = useState(false);
  // const videoSHow = () => {
  //   setVideo(true);
  // };
  return (
    <>
      {/* <VideoPopup triggers={video} setTriggers={setVideo} ids="iT54dOHPQpU" /> */}

      <div className={styles.ReviewSlider}>
        <div className={styles.headings}>
          <p>What Our Learners has to say</p>
          <h4>
            Learners <span>Reviews</span>
          </h4>
        </div>
        <VideoTestimonialSwiper review={review} />
        <div className={styles.siteReview}>
          <div className={styles.imgWrap}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/review-line-back.webp"
              fill={true}
              style={{ objectFit: "contain" }}
              alt="rating background"
            />
          </div>
          <div className={styles.ratingText}>
            <h5>Top Sites That Ranked Us</h5>
          </div>
          <div className={styles.rightImg}>
            {ratingData.map((imgData) => {
              return (
                <Image
                  key={imgData.src}
                  src={imgData.src}
                  width={imgData.width}
                  height={imgData.height}
                  alt="rating background"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTestimonial;
