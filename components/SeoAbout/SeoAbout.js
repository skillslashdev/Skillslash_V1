import React, { useState } from "react";
import styles from "./SeoAbout.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdCall } from "react-icons/md";
import { FaLaptopCode, FaRegClock } from "react-icons/fa";
import Form from "../Form/Form";
import { BsFillCircleFill } from "react-icons/bs";

import { AiOutlineDownload } from "react-icons/ai";
import Popup from "../Popup/Popup";

function Syllabus({ dataScience }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState([
    {
      id: 0,
      open: true,
    },
    {
      id: 1,
      open: false,
    },
    {
      id: 2,
      open: false,
    },
    {
      id: 3,
      open: false,
    },
    {
      id: 4,
      open: false,
    },
    {
      id: 5,
      open: false,
    },
    {
      id: 6,
      open: false,
    },
    {
      id: 7,
      open: false,
    },
    {
      id: 8,
      open: false,
    },
    {
      id: 9,
      open: false,
    },
  ]);
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
    <section className={styles.Syllabus}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Data science course Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form
            setTrigger={setPopups}
            downloadBrochure
            dataScience={dataScience}
          />
        </div>
      </Popup>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h4>About Course</h4>
          </div>
        </div>
        {/* <p>
          Skillslash’s best Data Science course comes with a Guaranteed job
          referral. Besides, the Data Science and AI courses are curated by
          leading faculties and industry leaders. Especially, with the aim to
          provide practical data science learning experience with live
          interactive classes and projects.
        </p> */}

        <div className={styles.QInner}>
          <div
            className={styles.FaqWrapper}
            onClick={() => {
              let id = 0;
              handleChange(id);
            }}
          >
            {state[0].open ? (
              <div className={styles.quesO}>
                <h2>
                  {" "}
                  <b>
                    About Skillslash’s Data Science Course powered by Microsoft{" "}
                  </b>
                </h2>

                <span>
                  {state[0].open ? (
                    <MdKeyboardArrowUp className="icon" />
                  ) : (
                    <MdKeyboardArrowDown className="icon" />
                  )}
                </span>
              </div>
            ) : (
              <div className={styles.ques}>
                <h2>
                  <b>
                    About Skillslash’s Data Science Course powered by Microsoft{" "}
                  </b>
                </h2>
                <span>
                  {state[0].open ? (
                    <MdKeyboardArrowUp className="icon" />
                  ) : (
                    <MdKeyboardArrowDown className="icon" />
                  )}
                </span>
              </div>
            )}

            {state[0].open ? (
              <div className={styles.ans}>
                <p>
                  The Microsoft Corporation is a global technology renowned for
                  its software products such as Windows operating systems and
                  Office productivity suite, Microsoft has evolved into a
                  diverse technology mixture that includes cloud computing via
                  Azure, gaming via Xbox, and hardware such as the Surface
                  lineup. With a mission to empower individuals and
                  organizations to achieve more, Microsoft plays a pivotal role
                  in the tech industry, driving innovation and providing a wide
                  array of software services and hardware solutions to users
                  worldwide. We at Skillslash have successfully developed a data
                  science course that is powered by the technology giant of
                  Microsoft. Our courses and resources are aimed at equipping
                  individuals with the skills and knowledge needed to excel in
                  the field of data science. The data science course covers a
                  wide arena of topics including data analysis, machine
                  learning, and data visualization, and more and tools and
                  platforms like Power BI, SQL, and Python. Furthermore, our
                  data science course provides an opportunity to enhance one's
                  resume with a valuable Microsoft Certification and Real-Time
                  Work Certification (from leading multinational corporations/
                  startups) upon successful completion of the course.
                  Additionally, our data science training offers placement
                  assistance through our Guaranteed Job Referral Program.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 1;
                handleChange(id);
              }}
            >
              {state[1].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>
                      What are the job opportunities available after completion
                      of this data science course?
                    </b>
                  </h2>

                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>
                      What are the job opportunities available after completion
                      of this data science course?
                    </b>
                  </h2>
                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[1].open ? (
                <div className={styles.ans}>
                  <p>
                    Completing this data science course can open up a wide range
                    of job opportunities in various domains and industries for
                    you. Here are some of the job opportunities you can explore
                    after completing this data science course:
                  </p>

                  <li>Data Scientist</li>
                  <li>Machine Learning Engineer</li>
                  <li>Data Analyst</li>
                  <li>Business Intelligence Analyst</li>
                  <li>Data Engineer</li>
                  <li>
                    Data Scientist in Healthcare, Finance, E-commerce,
                    Marketing, Retail, Education, Government, and more
                  </li>
                  <li>Statistician</li>
                  <li>Data Architect</li>
                  <li>Database Administrator</li>
                  <p>
                    The specific roles and industries you can pursue will vary
                    depending on your interests, skills and the specialization
                    you choose within the field of data science. Further, the
                    demand for data scientists continues to grow as
                    organizations recognize the value of data-driven
                    decision-making.{" "}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 2;
                handleChange(id);
              }}
            >
              {state[2].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>
                      What are the projects offered under this Data Science
                      Course?{" "}
                    </b>
                  </h2>

                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>
                      What are the projects offered under this Data Science
                      Course?{" "}
                    </b>{" "}
                  </h2>
                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[2].open ? (
                <div className={styles.ans}>
                  <p>
                    This data science course offers you an opportunity to work
                    on 10+ industry-partnered capstone projects in over 6+
                    domains, while practicing with 20+ tools.{" "}
                  </p>
                  <p>
                    Our Industry-partnered capstone projects, hands-on projects
                    with the aim of providing real world experience include the
                    following domains and projects :{" "}
                  </p>
                  <p>
                    <b>BFSI Domain</b>
                  </p>

                  <li>
                    <b>Predicting credit default: </b>Analyze a customer’s
                    financial records, such as credit line number, age, payment
                    history, and past 6 months’ delinquency history to forecast
                    the likelihood of the customer’s default on future payments.
                  </li>
                  <li>
                    <b>Foreign currency exchange rate prediction: </b>Develop a
                    reliable machine learning model for predicting foreign
                    currency exchange rates while performing tasks of
                    forecasting and time series analysis to make informed
                    decisions in international financial transactions.
                  </li>
                  <li>
                    <b>Predicting dynamic interest rates on loans: </b>Create a
                    predictive model that allows financial institutions to
                    optimize lending strategies, manage risk effectively and
                    offer transparent and competitive interest rates.
                  </li>
                  <li>
                    <b>Designing an effective marketing strategy for banks: </b>
                    You will work to design an effective marketing strategy for
                    banks that enhances customer acquisition, maximizes
                    cross-selling opportunities, to drive sustainable growth and
                    profitability for the institution.
                  </li>

                  <li>
                    <b>Fraud detection for online/mobile banking services: </b>
                    You will implement advanced machine learning algorithms and
                    anomaly detection techniques to identify and prevent
                    fraudulent activities that ensure the trust of customer’s
                    financial transactions.
                  </li>
                  <p>
                    <b>Healthcare </b>
                  </p>

                  <li>
                    <b>Heart disease prediction: </b>
                    You will build a reliable machine learning model for
                    predicting the risks of heart diseases on the basis of
                    patient’s data, to aid early diagnosis and timely medical
                    treatments.
                  </li>
                  <li>
                    <b> Google Mobility data prediction: </b>You will use
                    historial Google mobility data, leveraging machine learning
                    algorithms and statistical models to analyze future mobility
                    patterns for insights into disease trends and behaviors.
                  </li>
                  <li>
                    <b>
                      Statistical Trials for diabetes treatment efficacy
                      prediction:{" "}
                    </b>
                    Here, you will use in-depth experiments and statistical
                    analysis to assess the effectiveness and safety of diabetes
                    treatments to predict their effectiveness, manage and
                    improve patient outcomes.
                  </li>
                  <p>
                    <b>Retail & Ecommerce </b>
                  </p>

                  <li>
                    <b>Recommender Systems: </b>
                    Enhance user experience and increase engagement in various
                    domains of e-commerce, content and online platforms. Learn
                    and use data mining, collaborative filtering and machine
                    learning techniques to predict user preferences.
                  </li>

                  <li>
                    <b>Customer Basket Analysis for Marketing campaigns:</b>
                    Using algorithms and data-mining techniques to analyze
                    frequently recurring customer purchases to discover product
                    associations and patterns that help initiate marketing
                    initiatives, upselling strategies and enhance revenue.
                  </li>
                  <li>
                    <b>Amazon reviews for sentiment analysis: </b>
                    You will analyze and categorize amazon reviews as positive,
                    negative, or neutral by using natural language processing
                    techniques to gauge customer satisfaction and sentiment
                    towards products.
                  </li>
                  <li>
                    <b>Retail Sales Prediction: </b>
                    Using historical sales data and machine learning algorithms
                    forecast future sales that enables retailers to optimize
                    inventory and make informed business decisions for increased
                    profitability.
                  </li>
                  <li>
                    <b>
                      Marketing analytics for Website conversion analysis and
                      tracking:{" "}
                    </b>
                    Identify key performance indicators through data analysis
                    and tracking tools to measure website traffic, user
                    engagement in order to create data-driven decisions and
                    targeted marketing strategies.
                  </li>
                  <p>
                    <b>HR </b>
                  </p>

                  <li>
                    <b>Attrition Modeling to predict employee churn: </b>
                    You will build predictive models to anticipate potential
                    attrition risks by analyzing historical data and enable
                    measures to improve employee retention and organizational
                    stability.
                  </li>
                  <li>
                    <b>Workforce management and planning: </b>
                    Utilizing historical data, forecasting future workforce
                    needs through affecting scheduling, resource allocating and
                    alignment with business goals to reach maximum operational
                    efficiency.
                  </li>
                  <li>
                    <b>Resume parsing using NLP: </b>
                    Identifying and using Natural Language Processing techniques
                    to analyze and interpret the textual content of resumes to
                    create structured and actionable insights.
                  </li>
                  <li>
                    <b>
                      Predicting and improving the mental health and
                      satisfaction index of employee:{" "}
                    </b>
                    Predict and improve the mental health and satisfaction of
                    employees by using data analysis and implementing target
                    support systems to create a positive work environment.
                  </li>
                  <li>
                    <b>
                      Predicting the Impact of HR Strategies through
                      Prescriptive Analytics:{" "}
                    </b>
                    Using prescriptive analysis, which involves analysis of
                    historical data, identifying patterns and recommending
                    optimal HR actions to improve employee performance and
                    engagement.
                  </li>
                  <p>
                    <b>Sales and Marketing</b>
                  </p>

                  <li>
                    <b>
                      {" "}
                      Analyzing Google Analytics to track customer interactions:{" "}
                    </b>
                    Optimizing user experience by integrating Google analytics
                    with the website and collecting and interpreting user data
                    to understand user preferences, patterns and engagements
                    with the site’s content and features
                  </li>
                  <li>
                    <b>
                      {" "}
                      Market mix Models to gauge the efficiency of campaigns:{" "}
                    </b>
                    You will employ statistical techniques to analyze historical
                    data and outcomes to build and apply Market Mix Models in
                    order to measure the performance efficiency of campaigns, to
                    optimize resource allocation.
                  </li>
                  <li>
                    <b> Sales Forecasting and Planning: </b>
                    The goal is to develop and improve market performance and
                    efforts by analyzing market trends, customer behavior,
                    external factors and historical data to help meet demands
                    effectively.
                  </li>
                  <li>
                    <b> Dashboarding for Sales Enablement : </b>
                    The dashboarding process involves the process of data
                    collection, integration and visualization using business
                    intelligence tools to drive sales and revenue growth.
                  </li>
                  <li>
                    <b>
                      {" "}
                      Promotion modeling to quantify the impact of
                      discounts/promotions:{" "}
                    </b>
                    Utilizing multiple machine learning and statistical
                    techniques to analyze the past promotional data and predict
                    the outcome and impact of future promotions.
                  </li>
                  <p>
                    <b>Manufacturing and Supply Chain</b>
                  </p>

                  <li>
                    <b> Material management and Planning for Factories: </b>
                    Here, you will implement various advanced inventory
                    management techniques, demand forecasting models,
                    just-in-time practices and effective communication channels
                    to aid coordination between the factory departments and
                    minimize costs.
                  </li>

                  <li>
                    <b> Predictive maintenance of machines: </b>
                    By analyzing real-time sensor data you will predict
                    potential machine failures and perform maintenance actions.
                    The goal being to reduce machine downtime and improve
                    machine maintenance.
                  </li>

                  <li>
                    <b> Hazard/Fire detection in warehouses and factories: </b>
                    You will be introduced to a combination of state-of-the-art
                    sensors, computer vision and machine learning algorithms to
                    identify and alert potential fire risks to ensure timely
                    response.
                  </li>

                  <li>
                    <b>
                      {" "}
                      Inventory management in warehouses through Object
                      detection methods :{" "}
                    </b>
                    Implement and develop object detection methods to
                    automatically identify and track items. Streamlining the
                    inventory process and minimizing errors and manual effort.
                  </li>
                  <li>
                    <b>
                      Route optimization and Loading strategies to reduce costs
                      :
                    </b>
                    The goal of this project is to implement efficient and
                    effective routes and loading techniques using data analysis
                    and algorithms to minimize transportation costs, travel
                    distances and enhance logistical efficiency.
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 3;
                handleChange(id);
              }}
            >
              {state[3].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>
                      {" "}
                      What are the learning outcomes of this Data Science Course
                      ?{" "}
                    </b>
                  </h2>

                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>
                      {" "}
                      What are the learning outcomes of this Data Science Course
                      ?{" "}
                    </b>
                  </h2>
                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[3].open ? (
                <div className={styles.ans}>
                  <p>
                    We at Skillslash, offer a comprehensive course program in
                    Data Science that covers everything you need to know about
                    data science. From the basics to the advanced levels, our
                    course curriculum covers all the essential topics one needs
                    to know to master data science. Our all inclusive data
                    science training program will train you in multiple data
                    science projects from Python, advanced machine learning,
                    deep learning, applied statistics to practicing 20+ data
                    science tools (including Excel, SQL Database, etc).{" "}
                  </p>
                  <p>
                    Our ultimate goal is to provide our students with the best
                    combination of theory and practical experience when it comes
                    to data science. In addition , you will have the opportunity
                    to work within your specialized domains and learn about
                    Google mobility data, Understand Youtube analytics and much
                    more.
                  </p>
                  <p>
                    We do all this by providing you with a rich learning
                    management system with 350+ Live sessions, 15+ industry
                    projects and stimulated live interviews. Through our live
                    sessions, tailored course curricula and stimulating
                    interviews, you will gain quality applicable skills in
                    real-time. With Skillslash, you will be equipped with the
                    necessary skills to become a successful data scientist.
                  </p>
                  <p>
                    Earn a Microsoft certification in data science, Upon
                    completion of our{" "}
                    <a href="https://skillslash.com/data-science-course">
                      data science course
                    </a>
                    , you will walk away with a Microsoft certification. In
                    addition, you will also earn a Real-time Work Experience
                    certification from leading MNCs/Startups that will give you
                    a competitive edge in real life.
                  </p>
                  <p>
                    Learn at Your Own Speed, With our hybrid model that combines
                    350+ live sessions with recorded videos, you can choose to
                    learn data science on your own terms at your own pace.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 4;
                handleChange(id);
              }}
            >
              {state[4].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>What is the demand for data science courses in India?</b>{" "}
                  </h2>

                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>What is the demand for data science courses in India?</b>
                  </h2>
                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[4].open ? (
                <div className={styles.ans}>
                  <p>
                    An analysis conducted by Analytics India Magazine has
                    revealed that data science professionals employed in large
                    companies with over 10,000 employees are salaried on an
                    average of INR 16,8 lakhs per year (US$ 22,800).{" "}
                  </p>
                  <p>
                    Conversely, those employed in medium-sized enterprises with
                    between 1,000 and 10,000 employees receive an average of US$
                    15,600 per year.{" "}
                  </p>
                  <p>
                    Professionals employed in small companies with less than one
                    thousand employees receive an average salary of US$ 11,800
                    per year.
                  </p>
                  <p>
                    As India's tech sector continues to grow and develop, data
                    science experts will be the driving force behind growth and
                    innovation across industries. Whether you are new to the
                    world of data science or have been working in the field for
                    several years, keeping up with industry trends and
                    constantly improving your skills will be essential for
                    success in this fast-paced and rewarding field.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 5;
                handleChange(id);
              }}
            >
              {state[5].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>
                      What are the skills one will take away from this data
                      science course?{" "}
                    </b>
                  </h2>

                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>
                      What are the skills one will take away from this data
                      science course?{" "}
                    </b>
                  </h2>
                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[5].open ? (
                <div className={styles.ans}>
                  <p>
                    If you are looking to learn data science, our data science
                    course is the way to go as our inclusive and comprehensive
                    course curriculum covers a lot of different topics and
                    tools, to make sure you learn everything important there is
                    to know about data science without leaving anything behind.
                    Our general course syllabus covers all the points in data
                    science from teaching the languages of Python, C/C++,
                    statistics basics and probability, applied statistics,
                    advanced machine learning, deep learning, Data structures
                    and Algorithms.
                  </p>
                  <p>
                    Our professional data science course is designed with the
                    aim of providing a hands-on experience and real-time
                    experience to our students. We do this through our
                    professionally designed 15+ Industry projects in 6+ domains.
                    Our course curriculum includes training in the target areas
                    of, programming introduction, conditional and loops, Python
                    programming concepts along with data science projects in
                    Python, Probability theory, Hypothesis Testing and its
                    Applications, regression, time-series analysis, neural
                    networks.{" "}
                  </p>

                  <p>
                    The course also covers 20+ target data science tools such as
                    the Excel interface, Excel menus and toolbars, excel
                    formulae and functions, working with charts and graphs,
                    macros, SQL databases and more.{" "}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 6;
                handleChange(id);
              }}
            >
              {state[6].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>
                      {" "}
                      What are the advantages of taking this data science course
                      ?
                    </b>{" "}
                  </h2>

                  <span>
                    {state[6].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>
                      {" "}
                      What are the advantages of taking this data science course
                      ?
                    </b>{" "}
                  </h2>
                  <span>
                    {state[6].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[6].open ? (
                <div className={styles.ans}>
                  <p>
                    Check out our Data science course, with its multiple
                    advantages and benefits,{" "}
                  </p>
                  <li>
                    We've got a great syllabus that's inclusive and
                    high-quality, plus we can create a personalized curriculum
                    with industry experts.{" "}
                  </li>
                  <li>
                    Plus, we've got real-life project experience from over 15+
                    industry projects in 6 different domains.{" "}
                  </li>
                  <li>
                    We've got live interactive sessions and recorded videos that
                    you can watch at your own speed{" "}
                  </li>
                  <li>
                    We've got live interview sessions so you can get ready for
                    real-world work.
                  </li>
                  <li>
                    We also have dual certifications, Microsoft certifications,
                    and real-time job experience certification from some of the
                    biggest MNCs/startups{" "}
                  </li>
                  <li>Guaranteed job referrals.</li>
                  <li>
                    And we've got a hybrid course model that you can take online
                    or offline, and it's only about 8-12 months with lifetime
                    accessibility.
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 7;
                handleChange(id);
              }}
            >
              {state[7].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b> What are the challenges around data science courses?</b>{" "}
                  </h2>

                  <span>
                    {state[7].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b> What are the challenges around data science courses?</b>{" "}
                  </h2>
                  <span>
                    {state[7].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[7].open ? (
                <div className={styles.ans}>
                  <p>
                    Learning about data science can be an exciting experience,
                    but it comes with its own set of challenges:{" "}
                  </p>
                  <li>
                    One of the biggest challenges is the long learning curve.{" "}
                  </li>
                  <li>
                    Data science is a multidisciplinary field that requires
                    knowledge of statistics, programming and machine learning as
                    well as data visualization, domain knowledge, etc.{" "}
                  </li>
                  <li>
                    If you don’t have a background in math or programming, it
                    can be difficult to grasp all these different concepts and
                    skills.{" "}
                  </li>
                  <li>
                    The pace of change in the field also makes it difficult to
                    keep up with the latest techniques and tools.
                  </li>
                  <li>
                    Finding the right datasets, managing the data and dealing
                    with the messy, real world problems can be overwhelming for
                    students.
                  </li>
                  <li>
                    Ethical considerations around data collection and use are
                    also becoming more and more important, which adds to the
                    complexity of the field.{" "}
                  </li>
                  <li>
                    Bridging the gap between theoretical and application is a
                    crucial part of data science courses.
                  </li>
                  <li>
                    It’s important to have a good theoretical foundation, but
                    it’s also important to have real world experience.{" "}
                  </li>
                  <p>
                    It is essential to bridge the gap between theory and
                    application and prepare students for the challenges they
                    will face in their careers. And this is exactly what we at
                    Skillslash aim to do, to prepare students to face all these
                    challenges and prepare them for their real-world data
                    science career experiences.{" "}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 8;
                handleChange(id);
              }}
            >
              {state[8].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b> What is the average pay range of a Data Scientist?</b>{" "}
                  </h2>

                  <span>
                    {state[8].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b> What is the average pay range of a Data Scientist?</b>{" "}
                  </h2>
                  <span>
                    {state[8].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[8].open ? (
                <div className={styles.ans}>
                  <p>
                    The average salary of a data scientist in India is between
                    Rs. 3.6 lakhs to Rs. 25.9 lakhs with an annual remuneration
                    of Rs. 100 lakhs. Globally, the average remuneration of a
                    data scientist is about Rs. 130 lakh to Rs. 195 lakhs for
                    mid-level data scientists.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 9;
                handleChange(id);
              }}
            >
              {state[9].open ? (
                <div className={styles.quesO}>
                  <h2>
                    <b>
                      What can you expect from this Microsoft Powered data
                      science course ?{" "}
                    </b>{" "}
                  </h2>

                  <span>
                    {state[9].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    <b>
                      What can you expect from this Microsoft Powered data
                      science course ?{" "}
                    </b>{" "}
                  </h2>
                  <span>
                    {state[8].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[9].open ? (
                <div className={styles.ans}>
                  <p>
                    Skillslash’s Data Science Powered by Microsoft course is an
                    all-in-one Data Science Training & Education course
                    delivered at an affordable Data Science Course Fees
                    Structure. We don’t leave any stone unturned to equip you
                    with the skills you need to be a top data scientist. With
                    our Data Science course, you will have the chance to boost
                    your resume with a Microsoft Certification and real-time
                    work certification (from top multinational companies/
                    startups) once you complete the course.
                  </p>
                  <p>
                    In addition to this, our Data Science training also provides
                    you with the opportunity to get help with placement through
                    our guaranteed job referral program.With Skillslash’s unique
                    Data Science Course, you will have access to a
                    professionally curated syllabus that provides you with deep
                    learning and real life training experiences.
                  </p>
                  <p>
                    The course curriculum is designed to teach you the
                    fundamentals of Python, Applied Statistics, SQL for
                    Business, Excel for Business and Machine Learning.
                  </p>
                  <p>
                    So if you want to stay up-to-date with the latest data
                    science trends, then this is the course for you.
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.white} />
      </div>

      {/* Right-side Form Part */}
      <div className={styles.syllabusRight}>
        <div className={styles.PProgrammain}>
          <div className={styles.PProgram}>
            <div>
              <div className={styles.tollNo}>
                <p>Contact Us</p>
                <div className={styles.contactNo}>
                  <h4>
                    <a href="tel:+918391911911">+918391911911</a>{" "}
                  </h4>
                  <MdCall className={styles.callIcon} />
                </div>
                <p>( Toll Free )</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className={styles.PProgrammain} style={{ marginTop: "20px" }}>
          <div className={styles.PProgram}>
            <p>Request More Information</p>
          </div>
          <div className={styles.PProgramInner}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
