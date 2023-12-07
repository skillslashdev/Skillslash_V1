import React from "react";
import { useRouter } from "next/router";

const unsubscribeMail = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  // console.log(currentPath, "current path");
  let uri = currentPath;
  let parts = uri.split("email=");
  // let path = parts[0];
  let email = parts[1];
  console.log(email, " emailFrontend");

  // const unsubscribe = async () => {
  //   console.log("called");
  //   try {
  //     const unsubscribeResult = await fetch("api/v1/deleteNewsletter", {
  //       method: "POST",
  //       body: JSON.stringify({ email }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((t) => t.json());

  //     if (unsubscribeResult.status === 200) {
  //       setShowMsg(unsubscribeResult.msg);
  //     } else {
  //       console.error("Failed to unsubscribe:", unsubscribeResult.msg);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // unsubscribe();

  return (
    <>
      {/* <p onClick={unsubscribe()}></p> */}
      <div style={{ margin: "200px 540px" }}>
        <b>You are successfully unsubscribed. </b>
        <p>
          <a href="https://skillslash.com/">Back</a>
        </p>
      </div>
    </>
  );
};

export default unsubscribeMail;
