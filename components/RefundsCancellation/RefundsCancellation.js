import React from "react";
import styles from "../../styles/common.module.css";
import Footer from "../Footer/Footer";

const RefundsCancellation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Terms and Conditions for Online Live Classes</h1>

        <h5>
          These terms and conditions ("Terms") govern your use of our online
          live classes ("Classes") provided by Skillslash, hereinafter referred
          to as "we," "us," or "our."
        </h5>
        <h5>
          By enrolling in our Classes, you agree to abide by these Terms. Please
          read them carefully.
        </h5>
        <div>
          <h3>1. Enrollment and Payment </h3>
          <p>
            1.1. To enrol in our Classes, you must complete the registration
            process, which may involve providing personal information, and make
            the required payment. The payment amount will be specified on our
            website or in any written agreement you receive.
          </p>
          <p>
            1.2. Payment for our Classes is typically non-refundable, meaning
            that once you've paid, you won't be entitled to a refund. However,
            exceptions are outlined in our cancellation and refund policy,
            detailed in the following section.
          </p>
        </div>
        <div>
          <h3>2. Cancellation and Refund Policy</h3>
          <p>
            2.1. We offer a{" "}
            <b>
              15-day cancellation and refund policy, which means that if you
              decide to cancel your enrollment within 30 days from the date of
              enrollment or 15 days from the start date of the course whichever
              comes first, you can request a full refund of the course fees you
              paid, minus any applicable processing fees
            </b>
            .
          </p>
          <p>
            2.2. To initiate a refund request, you need to submit a written
            request to{" "}
            {/* https://mail.google.com/mail/?view=cm&fs=1&to=support@skillslash.com */}
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              support@skillslash.com
            </a>{" "}
            within the specified period period. We will then process your
            refund, and you can expect to receive the refunded amount within
            15-20 working days after your request is received.
          </p>
          <p>
            2.3. It's important to note that{" "}
            <b>
              if you choose to cancel your enrollment after the policy period
              has elapsed, no refund will be issued and no cancellation is
              possible, and you will be responsible for any remaining payment
              obligations.
            </b>
          </p>
        </div>
        <div>
          <h3>3. Class Access</h3>
          <p>
            3.1. Upon successful enrollment and payment, you will be granted
            access to our Classes, as described on our website or in any written
            agreement you have with us.
          </p>
          <p>
            3.2. The access provided is intended solely for your personal use,
            and it is strictly prohibited to share, resell, or transfer your
            access credentials to any other individual or entity. Violation of
            this provision may result in the termination of your access without
            a refund.
          </p>
        </div>
        <div>
          <h3>4. Intellectual Property</h3>
          <p>
            4.1. All content provided during our Classes, such as videos, course
            materials, and documentation, is protected by copyright and other
            intellectual property laws. This means you may not reproduce,
            distribute, or share any of this content without obtaining our prior
            written consent. You are granted a limited, personal,
            non-transferable license to use the provided materials solely for
            educational purposes related to the Classes.
          </p>
        </div>
        <div>
          <h3>5. Code of Conduct</h3>
          <p>
            5.1. We expect all participants in our Classes to adhere to a high
            standard of conduct. This includes treating instructors and fellow
            participants with respect and professionalism. Disruptive behaviour,
            harassment, or any violations of our Code of Conduct may result in
            your removal from the Classes without any refund.
          </p>
        </div>
        <div>
          <h3>6. Termination</h3>
          <p>
            6.1. We retain the right to terminate your access to our Classes at
            any time and for any reason, including violation of these Terms and
            Conditions or our Code of Conduct.
          </p>
        </div>
        <div>
          <h3>7. Privacy Policy</h3>
          <p>
            7.1. Your use of our Classes is also governed by our Privacy Policy,
            which provides information on how we collect, use, and protect your
            data. You can find our Privacy Policy on our website [
            <a href="https://skillslash.com">https://skillslash.com]</a>.
          </p>
        </div>
        <div>
          <h3>8. Electronic Signature</h3>
          <p>
            8.1. When you enrol in our Classes, you acknowledge and agree that
            the electronic signature you provide during the registration process
            is legally binding and equivalent to your handwritten signature on a
            physical document. This ensures the enforceability of the agreement
            formed by these Terms and Conditions
          </p>
        </div>
        <div>
          <h3>9. Modifications</h3>
          <p>
            9.1. We reserve the right to modify these Terms and Conditions at
            any time. We will post any changes on our website, and it is your
            responsibility to review them periodically to stay informed of any
            updates.
          </p>
        </div>
        <div>
          <h3>10. Contact Information</h3>
          <p>
            10.1. If you have any questions, or concerns, or require assistance
            related to these Terms and Conditions or our Classes, please do not
            hesitate to contact us at{" "}
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              support@skillslash.com
            </a>{" "}
            . By enrolling in our Classes, you are confirming that you have
            read, understood, and agreed to these Terms and Conditions, and you
            acknowledge the legal significance of your electronic signature in
            forming a binding agreement with Skillslash.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundsCancellation;
