import dynamic from "next/dynamic";
import styles from "./VideoTestimonial.module.css";
import { dsReview } from "./VideoTestimonialData";
import Rating from "./Rating";
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
          <h2>
            Learners <span>Reviews</span>
          </h2>
        </div>
        <VideoTestimonialSwiper review={review} />
        <Rating ratingData={ratingData} />
      </div>
    </>
  );
};

export default VideoTestimonial;
