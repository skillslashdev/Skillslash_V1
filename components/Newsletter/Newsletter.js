import React, { useState } from "react";
import styles from "./Newsletter.module.css";

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
      <h5>Newsletter</h5>
      <div id="message">{showMsg}</div>
      <form onSubmit={formSubmit}>
        <input
          type="email"
          required
          name="email"
          value={query.name}
          className={styles.Inputs}
          onChange={handleParam()}
          placeholder="Enter email id to get newsletter"
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
