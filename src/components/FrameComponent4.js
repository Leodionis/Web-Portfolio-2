import CaseStudyDetails from "./CaseStudyDetails";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.greetingInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.myRecentWorkWrapper}>
          <h1 className={styles.myRecentWork} data-scroll-to="myRecentWork">
            My Recent Work
          </h1>
        </div>
        <div className={styles.caseStudyDetailsParent}>
          <CaseStudyDetails />
          <div className={styles.caseStudyDetails}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.webEduBelajarBekerjaParent}>
                  <b className={styles.webEduBelajar}>
                    Web Edu Belajar Bekerja
                  </b>
                  <div className={styles.thisIsMy}>
                    this is my project internship at Luar Sekolah, Web is a
                    personal project aimed at creating an educational web
                    platform designed to help users learn and develop
                    professional skills using PHP.
                  </div>
                </div>
                <div className={styles.viewCaseStudy}>View Case Study</div>
              </div>
              <div className={styles.wrapperHome1}>
                <img
                  className={styles.home1Icon}
                  loading="lazy"
                  alt=""
                  src="/home-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
