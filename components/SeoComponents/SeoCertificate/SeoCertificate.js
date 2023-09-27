import React, { useState, useEffect } from "react";
import styles from "./SeoCertificate.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";

const Certificate = ({
  title,
  altR,
  altM,
  src,
  subheading,
  redirectFs,
  redirectDSA,
  redirectBa,
  redirectWeb,
  seoPage,
  MicrosoftPara,
  RealWorkPara,
  CertificationPara,
}) => {
  const [showCert, setShowCert] = useState({
    microsoft: true,
    realWork: false,
  });
  return (
    <section className={styles.Certifcate}>
      {redirectFs || redirectWeb || redirectDSA ? (
        <div className={styles.bottom}>
          <div className={styles.desc}>
            <h4>Real Work Experience Certificate</h4>
            {seoPage ? (
              <div
                dangerouslySetInnerHTML={{ __html: RealWorkPara }}
                className={styles.seoPara}
              ></div>
            ) : (
              <p className={styles.descPara}>
                Real work experience gives you the Real edge
              </p>
            )}
            <div className={styles.sections}>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} /> Project
                certification from top MNCs to gain that edge
              </p>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} />
                Practical experience to tackle real-world problems
              </p>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} />
                Edge over all those with just course certifications
              </p>
              <p className={styles.point}>
                <BsCheck2Circle className={styles.check} /> Lorem ipsum lorem
                Lorem ipsum lorem ipsum
              </p>
            </div>
          </div>
          <div className={styles.btRight}>
            <div className={styles.imgWrap}>
              <Image
                className="shadow"
                src={src}
                alt={altR}
                quality={100}
                width={327}
                loading="lazy"
                height={451}
                title="Real Work Experience Certificate"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.DeskCert}>
          <div className={styles.topWrap}>
            <h4 className={styles.dualHead}>{subheading}</h4>
            {seoPage ? (
              <div
                dangerouslySetInnerHTML={{ __html: CertificationPara }}
                className={styles.seoPara}
              ></div>
            ) : (
              ""
            )}
            {/* <h5>{title}</h5> */}
          </div>

          <div className={styles.certWrap}>
            <div className={styles.left}>
              <span
                className={showCert.microsoft ? styles.activeSpan : styles.span}
                onClick={() =>
                  setShowCert({
                    microsoft: true,
                    realWork: false,
                  })
                }
              >
                Microsoft Certification
              </span>
              <span
                className={showCert.realWork ? styles.activeSpan : styles.span}
                onClick={() =>
                  setShowCert({
                    microsoft: false,
                    realWork: true,
                  })
                }
              >
                Real Work Certificate
              </span>
            </div>
            {showCert.microsoft ? (
              <div className={styles.top}>
                <div className={styles.imgWrapper}>
                  <Image
                    className="shadow"
                    src={
                      redirectBa
                        ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/data-sample-certificate.webp"
                        : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/MOVIDU_Sample%2BCertificate%2B-%2B1%2B(1).webp"
                    }
                    alt={altM}
                    quality={100}
                    width={450}
                    priority={true}
                    height={300}
                    title="Microsoft Certification"
                  />
                </div>
                <div className={styles.btRight}>
                  <div className={styles.desc}>
                    <div className={styles.headingImg}>
                      <h4>Microsoft Certification</h4>
                    </div>
                    {seoPage ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: MicrosoftPara }}
                        className={styles.seoPara}
                      ></div>
                    ) : (
                      <p>Be in demand with Microsoft certification</p>
                    )}

                    <div className={styles.sections}>
                      <p className={styles.point}>
                        <BsCheck2Circle className={styles.check} />
                        Be certified in Azure AI Fundamentals
                      </p>
                      <p className={styles.point}>
                        <BsCheck2Circle className={styles.check} />
                        Be ahead of those who don’t have one
                      </p>
                      <p className={styles.point}>
                        <BsCheck2Circle className={styles.check} /> Earn the
                        credibility of a true professional
                      </p>
                      <p className={styles.point}>
                        <BsCheck2Circle className={styles.check} /> Lorem ipsum
                        lorem ipsum Lorem ipsum lorem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {showCert.realWork ? (
              <div className={styles.top}>
                <div className={styles.btRight}>
                  <div className={styles.imgWrap}>
                    <Image
                      className="shadow"
                      src={src}
                      alt={altR}
                      quality={100}
                      width={327}
                      loading="lazy"
                      height={451}
                      title="Real Work Experience Certificate"
                    />
                  </div>
                </div>
                <div className={styles.desc}>
                  <h4>Real Work Experience Certificate</h4>
                  {seoPage ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: RealWorkPara }}
                      className={styles.seoPara}
                    ></div>
                  ) : (
                    <p className={styles.descPara}>
                      Real work experience gives you the Real edge
                    </p>
                  )}
                  <div className={styles.sections}>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} /> Project
                      certification from top MNCs to gain that edge
                    </p>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} />
                      Practical experience to tackle real-world problems
                    </p>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} />
                      Edge over all those with just course certifications
                    </p>
                    <p className={styles.point}>
                      <BsCheck2Circle className={styles.check} /> Lorem ipsum
                      lorem Lorem ipsum lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
