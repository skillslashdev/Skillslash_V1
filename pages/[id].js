/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import dynamic from "next/dynamic";
// const FirstSection = dynamic(() =>
//   import("../components/Course/FirstSection/FirstSection")
// );
import FirstSection from "../components/Course/FirstSection/FirstSection";
const ProgramInfo = dynamic(() =>
  import("../components/Course/ProgramInfo/ProgramInfo")
);
const Certificate = dynamic(() =>
  import("../components/Course/Certificate/Certificate")
);
const ToolsCovered = dynamic(() =>
  import("../components/Course/ToolsCovered/ToolsCovered")
);
const FAQ = dynamic(() => import("../components/Course/FAQ/FAQ"));
const Fee = dynamic(() => import("../components/Course/Fee/Fee"));
const BoxShape = dynamic(() =>
  import("../components/Course/Boxshape/BoxShape")
);
const MGetHired = dynamic(() =>
  import("../components/Course/MGetHired/MGetHired")
);
const TrainerSlider = dynamic(() =>
  import("../components/Course/TrainerSlider/TrainerSlider")
);
const Reviews = dynamic(() => import("../components/Review/Reviews"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const BottomBar = dynamic(() =>
  import("../components/Course/BottomBar/BottomBar")
);
const DataScienceSyllabus = dynamic(() =>
  import("../components/Course/Syllabus/DataScienceSyllabs")
);
// const Navbar = dynamic(() => import("../components/Navbar/Navbar"));
import Navbar from "../components/Navbar/Navbar";
const OfferPopup = dynamic(() =>
  import("../components/Course/OfferPopup/OfferPopup")
);
const Emi = dynamic(() => import("../components/Course/EMI/Emi"));
const BatchDates = dynamic(() => import("../components/Batch/BatchDates"));
const ProjectSlider = dynamic(() =>
  import("../components/Course/Project/ProjectSlider")
);
const CTA = dynamic(() => import("../components/CTA/CTA"));
const NewPricingTable = dynamic(() =>
  import("../components/Course/NewPricingTable/NewPricingTable")
);
import SeoAbout from "../components/SeoAbout/SeoAbout";
const AboutCourses = dynamic(() =>
  import("../components/AboutCourse/AboutCourse")
);
const CustomPopup = dynamic(() =>
  import("../components/Course/OfferPopup/CustomPopup")
);
const InternalLinking = dynamic(() =>
  import("../components/InternalLinking/InternalLinking")
);
const AutoPopUp = dynamic(() => import("../components/AutoPopUp/AutoPopUp"));
// const SecondNavbar = dynamic(() => import("../components/Navbar/SecondNavbar"));
const FloatIcon = dynamic(() => import("../components/Floticon/FloatIcon"));
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { getAllPostIds, getPostData } from "../lib/page";
import BatchProfile from "../components/Course/BatchProfile/BatchProfile";
import RelatedInfo from "../components/SEO/ReleteadInfo/RelatedInfo";
const VideoTestimonial = dynamic(() =>
  import("../components/VideoTestimonial/VideoTestimonial")
);
const MiddlePageCta = dynamic(() =>
  import("../components/MiddlePageCta/MiddlePageCta")
);

export default function Home({
  id,
  form,
  firstSection,
  programInfo,
  metaInfo,
  trainerSlider,
}) {
  const [DataScienceCourseData, setDataScienceCourseData] = useState("");
  // const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const redirectDs = form.dataScience;
  const redirectFs = form.FullStack;
  const redirectDSA = form.dsa;
  const redirectWeb = form.webDevelopment;
  const redirectBa = form.BusinessAnalytics;
  const redirectBl = form.blockchain;
  let pageName;
  const [popupData, setPopupData] = useState([]);
  const [batchDateData, setBatchDateData] = useState("");
  const [popupDate, setPopupDate] = useState({
    startDate: "",
    endDate: "",
  });

  // const getHired = useRef();
  // const trainer = useRef();
  // const benefits = useRef();
  // const certificate = useRef();
  // const syllabus = useRef();
  // const project = useRef();
  // const review = useRef();
  // const fee = useRef();
  // const batchDate = useRef();
  // const faq = useRef();
  // const cta = useRef();
  const today = new Date();

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width < 641) {
      setMobile(true);
      setTablet(true);
    }
    if (width > 641) {
      setMobile(false);
      setTablet(false);
    }
  }, []);
  //useEffect for fetch popup
  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch("/api/v1/fetchPopup", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        if (popData == []) {
          setPopupData({ endDate: "", startDate: "" });
          setPopupData([]);
        }

        popData.map((data, i) => {
          data.page.map((popupData, i) => {
            if (popupData === "Adv Data Science and AI" && redirectDs) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Blockchain program and certification" &&
              form.blockchain
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Full Stack Developer course with certification" &&
              redirectFs
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });

              setPopupData(data);
              return;
            }
            if (
              popupData === "Business Analytics Program For Professionals" &&
              form.BusinessAnalytics
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Data Structures and Algorithms + System Design" &&
              redirectDSA
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);

  //for batch date
  useEffect(() => {
    if (redirectDs) {
      pageName = "Adv Data Science and AI";
    }
    if (redirectFs) {
      pageName = "Full Stack Developer course with certification";
    }
    if (redirectBl) {
      pageName = "Full Stack Developer course with certification";
    }
    if (redirectBa) {
      pageName = "Business Analytics Program For Professionals";
    }
    if (redirectDSA) {
      pageName = "Data Structures and Algorithms + System Design";
    }
    if (redirectWeb) {
      pageName = "Web Development Course";
    }

    const fetchBatch = async () => {
      const data = await fetch("/api/v1/getBatchDate", {
        method: "POST",
        body: JSON.stringify(pageName),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status === 200) {
        const { batchDate } = await data.json();
        setBatchDateData(batchDate);
      }
    };
    fetchBatch();
  }, []);

  //for pageData
  useEffect(() => {
    const getPageData = async () => {
      try {
        const data = await fetch("/api/v1/sendPage", {
          method: "POST",
          body: JSON.stringify(id),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (data.status === 200) {
          const { DataScienceCourseData } = await data.json();
          setDataScienceCourseData(DataScienceCourseData);
          // console.log(DataScienceCourseData, "in forntend");
        }
      } catch (error) {}
    };
    getPageData();
  }, []);

  // console.log(DataScienceCourseData.data.seoSection, "id.js-trainer test");
  // console.log(
  //   DataScienceCourseData.data.ProjectsPara,
  //   "DataScienceCourseData.data.ProjectsPara11"
  // );
  return (
    <>
      <Head>
        <title>{metaInfo.title}</title>
        <meta name="description" content={metaInfo.desc} />
        <meta name="keywords" content={metaInfo.keyword} />
        <link rel="canonical" href={metaInfo.canonical} />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaInfo.ReviewSchema),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaInfo.ReviewSchema1),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaInfo.ReviewSchema2),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaInfo.ReviewSchema3),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaInfo.ReviewSchema4),
          }}
        />
      </Head>
      <Navbar
        course={true}
        dataScience={false}
        redirectDs={redirectDs}
        redirectFs={redirectFs}
        redirectDe={form.DataEngineering}
        redirectWeb={form.webDevelopment}
        redirectBa={form.BusinessAnalytics}
        redirectDSA={form.dsa}
        seoPage={form.seoPage}
      />
      {/* {tablet ? (
        ""
      ) : (
        <SecondNavbar
          getHired={getHired}
          trainer={trainer}
          dataScience={false}
          benefits={benefits}
          certificate={certificate}
          syllabus={syllabus}
          project={project}
          review={review}
          fee={fee}
          course={true}
          batchDate={batchDate}
          faq={faq}
          cta={cta}
          redirectBa={form.BusinessAnalytics}
          redirectDs={form.dataScience}
          redirectFs={form.FullStack}
          redirectDe={form.DataEngineering}
          redirectWeb={form.webDevelopment}
          redirectDSA={form.dsa}
        />
      )} */}

      {popupData != [] ? (
        today >= popupDate.startDate && today <= popupDate.endDate ? (
          <OfferPopup popupData={popupData} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {/* {redirectDs || redirectBa ? (
        <CustomPopup
          dataScience={false}
          redirectDs={form.dataScience}
          redirectFs={form.FullStack}
          redirectDe={form.DataEngineering}
          redirectBa={form.BusinessAnalytics}
          redirectDSA={form.dsa}
          redirectAI={form.ai}
          redirectWeb={form.webDevelopment}
        />
      ) : (
        ""
      )} */}
      <div className={styles.container}>
        <FirstSection
          redirectDs={form.dataScience}
          redirectFs={form.FullStack}
          redirectDe={form.DataEngineering}
          redirectBa={form.BusinessAnalytics}
          seoPage={form.seoPage}
          deskTopPara={firstSection.deskTopPara}
          mTopPara={firstSection.mTopPara}
          redirectDSA={form.dsa}
          redirectAI={form.ai}
          title={firstSection.title}
          spanTitleText={firstSection.spanTitleText}
          desc={firstSection.desc}
          seoPara={firstSection.FirstPara}
          mainHeaderImg={firstSection.mainHeaderImg}
          mainAlt={firstSection.mainAlt}
          backgroundImg={firstSection.backgroundImg}
          iconImg={firstSection.iconImg}
          width={firstSection.width}
          height={firstSection.height}
          redirectWeb={form.webDevelopment}
          usp1={firstSection.usp1}
          usp2={firstSection.usp2}
          usp3={firstSection.usp3}
          usp4={firstSection.usp4}
          usp1Span={firstSection.usp1Span}
          usp2Span={firstSection.usp2Span}
          usp3Span={firstSection.usp3Span}
          usp4Span={firstSection.usp4Span}
        />

        {/* <AutoPopUp /> */}

        <div className={styles.program}>
          <ProgramInfo
            BatchDate={programInfo.BatchDate}
            BatchDuration={programInfo.BatchDuration}
            redirectDSA={redirectDSA}
            redirectFs={redirectFs}
            Emi={FirstSection.usp3Span}
            redirectWeb={form.webDevelopment}
            Placement={programInfo.Placement}
          />
        </div>

        <div id="trainer">
          <TrainerSlider
            dataScience={false}
            redirectDs={form.dataScience}
            redirectFs={form.FullStack}
            redirectDe={form.DataEngineering}
            redirectBa={form.BusinessAnalytics}
            redirectDSA={form.dsa}
            redirectAI={form.ai}
            redirectWeb={form.webDevelopment}
            seoPage={form.seoPage}
            trainerSlider={trainerSlider}
          />
        </div>
        {form.seoPage ? (
          DataScienceCourseData === "" ? (
            ""
          ) : (
            <SeoAbout
              dataScience={false}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              seoAbout={DataScienceCourseData.data.seoAbout}
              // seoAboutDesc={DataScienceCourseData.data.seoAboutDesc}
              popupHead={DataScienceCourseData.data.popupHead}
            />
          )
        ) : (
          ""
        )}

        {DataScienceCourseData === "" ? (
          ""
        ) : (
          <div id="hired">
            <MGetHired
              heading1={DataScienceCourseData.data.GetHired.heading1}
              heading={DataScienceCourseData.data.GetHired.heading}
              dataScience={false}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              seoPage={form.seoPage}
              alumniPara={DataScienceCourseData.data.GetHired.alumniPara}
            />
          </div>
        )}
        {DataScienceCourseData === "" ? (
          ""
        ) : (
          <div className={styles.Feature} id="Feature">
            <BoxShape
              dataScience={false}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              title={DataScienceCourseData.data.BoxShape.title}
              Box1h5={DataScienceCourseData.data.BoxShape.Box1h5}
              box1desc={DataScienceCourseData.data.BoxShape.box1desc}
              Box2h5={DataScienceCourseData.data.BoxShape.Box2h5}
              box2desc={DataScienceCourseData.data.BoxShape.box2desc}
              Box3h5={DataScienceCourseData.data.BoxShape.Box3h5}
              box3desc={DataScienceCourseData.data.BoxShape.box3desc}
              Box4h5={DataScienceCourseData.data.BoxShape.Box4h5}
              box4desc={DataScienceCourseData.data.BoxShape.box4desc}
              alt1={DataScienceCourseData.data.BoxShape.alt1}
              alt2={DataScienceCourseData.data.BoxShape.alt2}
              alt3={DataScienceCourseData.data.BoxShape.alt3}
              alt4={DataScienceCourseData.data.BoxShape.alt4}
              seoPage={form.seoPage}
            />
          </div>
        )}

        <MiddlePageCta
          homePage={false}
          redirectBa={form.BusinessAnalytics}
          redirectDs={form.dataScience}
          redirectFs={form.FullStack}
          redirectDe={form.DataEngineering}
          redirectWeb={form.webDevelopment}
          redirectDSA={form.dsa}
        />
        {DataScienceCourseData === "" ? (
          ""
        ) : (
          <div id="certificate">
            {redirectFs ? (
              ""
            ) : (
              <Certificate
                dataScience={form.dataScience}
                redirectDs={form.dataScience}
                redirectFs={form.FullStack}
                redirectDe={form.DataEngineering}
                redirectBa={form.BusinessAnalytics}
                redirectDSA={form.dsa}
                redirectWeb={form.webDevelopment}
                popupHead={DataScienceCourseData.data.Certificate.popupHead}
                subheading={DataScienceCourseData.data.Certificate.subheading}
                title={DataScienceCourseData.data.Certificate.title}
                desc={DataScienceCourseData.data.Certificate.desc}
                src={DataScienceCourseData.data.Certificate.src}
                altM={DataScienceCourseData.data.Certificate.altM}
                altR={DataScienceCourseData.data.Certificate.altR}
                seoPage={form.seoPage}
                MicrosoftPara={
                  DataScienceCourseData.data.Certificate.MicrosoftPara
                }
                CertificationPara={
                  DataScienceCourseData.data.Certificate.CertificationPara
                }
                RealWorkPara={
                  DataScienceCourseData.data.Certificate.RealWorkPara
                }
              />
            )}
          </div>
        )}
        {DataScienceCourseData === "" ? (
          ""
        ) : (
          <div id="syllabus">
            <DataScienceSyllabus
              dataScience={false}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              syllabus={DataScienceCourseData.data.syllabus}
              syllabusDesc={DataScienceCourseData.data.syllabusDesc}
              popupHead={DataScienceCourseData.data.popupHead}
            />
          </div>
        )}

        {form.FullStack ? <ToolsCovered /> : ""}

        {DataScienceCourseData === "" ? (
          ""
        ) : (
          <div id="project">
            <ProjectSlider
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              seoPage={form.seoPage}
              ProjectsPara={DataScienceCourseData.data.seoSection.ProjectsPara}
            />
          </div>
        )}
        {redirectDs || redirectBa ? <VideoTestimonial /> : ""}
        <div className="review" id="review">
          <Reviews
            changeReview={true}
            redirectDs={form.dataScience}
            redirectFs={form.FullStack}
            redirectDe={form.DataEngineering}
            redirectBa={form.BusinessAnalytics}
            redirectDSA={form.dsa}
            redirectWeb={form.webDevelopment}
          />
        </div>
        {DataScienceCourseData === "" ? (
          ""
        ) : form.webDevelopment || redirectFs ? (
          <div id="fee">
            <Emi
              web={form.webDevelopment}
              price={DataScienceCourseData.data.Fee.ProPrice}
              emi={DataScienceCourseData.data.Fee.emi}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectWeb={form.webDevelopment}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
            />
          </div>
        ) : mobile ? (
          <div id="fee">
            <NewPricingTable
              dataScience={false}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              changeFee={DataScienceCourseData.data.Fee.FullStack}
              desc={DataScienceCourseData.data.Fee.desc}
              desc1={DataScienceCourseData.data.Fee.desc1}
              BasicPrice={DataScienceCourseData.data.Fee.BasicPrice}
              BasicDesc={DataScienceCourseData.data.Fee.BasicDesc}
              ProPrice={DataScienceCourseData.data.Fee.ProPrice}
              ProDesc={DataScienceCourseData.data.Fee.ProDesc}
              ProMaxPrice={DataScienceCourseData.data.Fee.ProMaxPrice}
              ProMaxDesc={DataScienceCourseData.data.Fee.ProMaxDesc}
              web={form.webDevelopment}
              price={DataScienceCourseData.data.Fee.ProPrice}
              emi={DataScienceCourseData.data.Fee.emi}
            />
          </div>
        ) : (
          <div id="fee">
            <Fee
              dataScience={false}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
              changeFee={DataScienceCourseData.data.Fee.FullStack}
              desc={DataScienceCourseData.data.Fee.desc}
              desc1={DataScienceCourseData.data.Fee.desc1}
              BasicPrice={DataScienceCourseData.data.Fee.BasicPrice}
              BasicDesc={DataScienceCourseData.data.Fee.BasicDesc}
              ProPrice={DataScienceCourseData.data.Fee.ProPrice}
              ProDesc={DataScienceCourseData.data.Fee.ProDesc}
              ProMaxPrice={DataScienceCourseData.data.Fee.ProMaxPrice}
              ProMaxDesc={DataScienceCourseData.data.Fee.ProMaxDesc}
              web={form.webDevelopment}
              price={DataScienceCourseData.data.Fee.ProPrice}
              emi={DataScienceCourseData.data.Fee.emi}
            />
          </div>
        )}

        <div id="date">
          {batchDateData === "" ? (
            ""
          ) : batchDateData === null ? (
            <BatchDates
              batchDetails=""
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
            />
          ) : (
            <BatchDates
              batchDetails={batchDateData.batchDetails}
              redirectDs={form.dataScience}
              redirectFs={form.FullStack}
              redirectDe={form.DataEngineering}
              redirectBa={form.BusinessAnalytics}
              redirectDSA={form.dsa}
              redirectWeb={form.webDevelopment}
            />
          )}
        </div>
        {redirectDs || redirectBa ? (
          <BatchProfile
          // seoPage={form.seoPage}
          // BatchProfilePara={
          //   DataScienceCourseData.data.seoSection.BatchProfilePara
          // }
          />
        ) : (
          ""
        )}
        {DataScienceCourseData === "" ? (
          ""
        ) : form.AboutCourse ? (
          <AboutCourses
            content={DataScienceCourseData.data.AboutCourse}
            AboutCourseHeading={DataScienceCourseData.data.AboutCourseHeading}
          />
        ) : (
          ""
        )}

        {DataScienceCourseData === "" ? (
          ""
        ) : (
          <div className="faq" id="faq">
            <FAQ
              FaqData={DataScienceCourseData.data.FaqDATA}
              desc={DataScienceCourseData.data.FAQ.desc}
            />
          </div>
        )}

        <BottomBar changeBottom={true} />
        {mobile ? (
          ""
        ) : (
          <div className="cta" id="cta">
            <CTA redirectDSA={form.dsa} />
          </div>
        )}

        {form.seoPage ? (
          DataScienceCourseData === "" ? (
            ""
          ) : (
            <RelatedInfo
              pinCode={DataScienceCourseData.data.seoSection.pinCode}
              relatedArea={DataScienceCourseData.data.seoSection.relatedArea}
              relatedBlog={DataScienceCourseData.data.seoSection.relatedBlog}
            />
          )
        ) : (
          ""
        )}

        <InternalLinking
          redirectDs={form.dataScience}
          redirectFs={form.FullStack}
          redirectBa={form.BusinessAnalytics}
          redirectDSA={form.dsa}
          redirectWeb={form.webDevelopment}
        />
        <FloatIcon />

        <Footer />
      </div>
    </>
  ); //9124848233
}
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const DataScienceCourseData = getPostData(params.id);
  return {
    props: {
      DataScienceCourseData,
      id: params.id,
      metaInfo: DataScienceCourseData.data.metaInfo,
      form: DataScienceCourseData.data.form,
      firstSection: DataScienceCourseData.data.FirstSection,
      programInfo: DataScienceCourseData.data.ProgramInfo,
      trainerSlider: DataScienceCourseData.data.seoSection.trainerMentor,
    },
  };
}
