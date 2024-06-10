import PropTypes from "prop-types";
import styles from "./CaseStudyDetails.module.css";

const CaseStudyDetails = ({ className = "" }) => {
  return (
    <div className={[styles.caseStudyDetails, className].join(" ")}>
      <div className={styles.caseStudyDetails1}>
        <div className={styles.caseStudyDetails2}>
          <div className={styles.caseStudyDetails3}>
            <b className={styles.instagramCloneUi}>Instagram Clone UI</b>
            <div className={styles.instacloneDesktopIs}>
              InstaClone Desktop is a personal project that replicates the user
              interface (UI) of Instagram for desktop environments using the
              React.js framework.
            </div>
          </div>
          <a className={styles.viewCaseStudy}>View Case Study</a>
        </div>
        <img className={styles.macbook011} alt="" src="/macbook-01-1@2x.png" />
      </div>
    </div>
  );
};

CaseStudyDetails.propTypes = {
  className: PropTypes.string,
};

export default CaseStudyDetails;
