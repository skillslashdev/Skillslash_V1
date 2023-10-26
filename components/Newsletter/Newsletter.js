import React, { useState } from "react";
import styles from "./Newsletter.module.css";
import { MdOutlineMail } from "react-icons/md";

const Newsletter = ({ id }) => {
  const [showMsg, setShowMsg] = useState();

  const [query, setQuery] = useState({
    email: "",
  });
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(query, "query");
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    // console.log("form submit");
    try {
      const newsLetter = await fetch("api/v1/getNewsletter", {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((t) => t.json());
      console.log(newsLetter.status, "hii else");
      if (newsLetter.status === 200) {
        setQuery({
          email: "",
        });
        setShowMsg(newsLetter.msg);
        alert(newsLetter.msg);
      }
      if (newsLetter.status === 401) {
        setQuery({
          email: "",
        });
        setShowMsg(newsLetter.msg);
        alert(newsLetter.msg);
        // console.log(newsLetter, "hii 401");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContain}>
        <h2>Subscribe for new content</h2>
        <span>
          <p style={{ marginTop: "5px", fontSize: "17px", color: "white" }}>
            By Becoming A Member, You Have Access Of Our Newsletter, Articles
          </p>
        </span>
      </div>

      {/* <div id="message">{showMsg}</div> */}
      <form onSubmit={formSubmit} className={styles.form}>
        <div className={styles.Inputs}>
          <MdOutlineMail />
          <input
            type="email"
            required
            name="email"
            value={query.name}
            onChange={handleParam()}
            placeholder="xyz@gmail.com"
          />
        </div>
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
