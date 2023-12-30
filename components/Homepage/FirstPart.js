import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";
import HomeFirstSection from "../FirstSection/HomeFirstSection";
const Tabs = dynamic(() => import("../Tabs/Tabs"));
const ProgramInfo = dynamic(() => import("../Course/ProgramInfo/ProgramInfo"));
const BoxAnimation = dynamic(() => import("../BoxAnimation/BoxAnimation"));

const FirstPart = ({ homePage }) => {
  return (
    <>
      <HomeFirstSection
        deskTopPara="India’s 1st"
        mTopPara="India’s 1st"
        title="Project Based Experiential Learning Platform"
        spanTitleText=""
        homePage={homePage}
        desc="Get real work experience and certifications. Learn from industry experts and get placed in top product companies!"
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/new-home-page-header.webp"
        iconImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/HomepageDataCollection.webp"
        usp1=" Live Interactive "
        usp2=" Company "
        usp3=" Microsoft"
        usp4=" 100% Interview"
        usp1Span="Classroom"
        usp2Span="Exp Certifications"
        usp3Span="Certification"
        usp4Span="Guarantee"
        width="405"
        height="404"
      />
      <ProgramInfo homePage={homePage} />

      <Tabs />

      <BoxAnimation />
    </>
  );
};

export default FirstPart;
