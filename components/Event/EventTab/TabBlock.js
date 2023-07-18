import React from "react";
import styles from "./EventTab.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

const TabBlock = ({ Details }) => {
  return (
    <div className={styles.mPanel}>
      <div className={styles.gridPanel}>
        {Details.map((data) => {
          const {
            id,
            title,
            eventDate,
            eventTime,
            Duration,
            eventEnd,
            register,
            img,
          } = data;
          let today = new Date();
          let eventDateInfo = new Date(eventEnd);

          const compare = today > eventDateInfo;

          const url = `/event/${id}`;
          return title === "" ? (
            ""
          ) : (
            <div className={styles.leftSide} key={id}>
              <Link href={url} passHref>
                <div className={styles.contentBox}>
                  <div className={styles.headImg}>
                    <Image alt={title} src={img} width="641" height="190" />
                  </div>
                  <div className={styles.contentI}>
                    <h6>{title}</h6>
                    <p>
                      {" "}
                      <BiTime className={styles.eIcon} />
                      <strong>Start time:</strong> {eventTime}
                    </p>
                    <p>
                      <MdEvent className={styles.eIcon} />
                      <strong>Start date:</strong> {eventDate}
                    </p>
                    <p>
                      <AiOutlineFieldTime className={styles.eIcon} />
                      <strong>Duration:</strong> {Duration}
                    </p>
                    <div className={styles.line} />
                    <div className={styles.footer}>
                      <p>
                        <strong>{register}</strong> people have registered
                      </p>

                      {compare ? (
                        <span
                          className={styles.expire}
                          style={{ marginTop: "10px" }}
                        >
                          Event Ended
                        </span>
                      ) : (
                        <button>
                          <Link href={url} passHref>
                            Register Now
                          </Link>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBlock;
