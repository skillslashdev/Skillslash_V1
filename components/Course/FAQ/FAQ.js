import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQ({ FaqData, desc }) {
  const [state, setState] = useState(FaqData);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section
      className={styles.FAQ}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className={styles.headWrap}>
        <h4 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h4>

        <p className={styles.pBot} style={{ marginBottom: "20px" }}>
          {desc}
        </p>
      </div>
      <div className={styles.quesWrap}>
        {state.map((data, index) => {
          const { id, ques, ans, open, link, linkText, ansAfter, linkURL } =
            data;

          return (
            <div
              key={id}
              className={styles.FaqWrapper}
              onClick={() => handleChange(index)}
              itemType="https://schema.org/Question"
              itemScope
              itemProp="mainEntity"
            >
              <div className={styles.quesO}>
                <h2 itemProp="name">{ques}</h2>

                <span>
                  {open ? (
                    <AiOutlineMinus className={styles.icon} />
                  ) : (
                    <AiOutlinePlus className={styles.icon} />
                  )}
                </span>
              </div>
              <div
                itemType="https://schema.org/Answer"
                itemScope
                itemProp="acceptedAnswer"
              >
                <div className={open ? styles.ans : styles.ansV}>
                  {link ? (
                    <div itemProp="text">
                      <p>
                        {ans}

                        <a href={linkURL} target="_blank">
                          {linkText}
                        </a>
                        {ansAfter}
                      </p>
                    </div>
                  ) : (
                    <div
                      itemProp="text"
                      className={open ? styles.ans : styles.ansV}
                    >
                      <p>{ans}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
