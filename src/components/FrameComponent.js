import { useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const onFrameButton1Click = useCallback(() => {
    window.open("https://wa.me/6285926925727");
  }, []);

  const onInstagramClick = useCallback(() => {
    window.open("https://instagram.com/leodioniss/");
  }, []);

  const onLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/leodionis/");
  }, []);

  return (
    <footer className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.letsWorkTogetherAndMakeEParent}>
          <h1 className={styles.letsWorkTogether}>
            Let’s work together and make everything super cute and super useful.
          </h1>
          <FrameComponent2 onFrameContainerClick={onFrameButton1Click} />
        </div>
        <div className={styles.social}>
          <button className={styles.instagram} onClick={onInstagramClick}>
            <img
              className={styles.instagramIcon}
              alt=""
              loading="lazy"
              src="/instagram.svg"
            />
          </button>
          <button className={styles.linkedin} onClick={onLinkedinClick}>
            <img
              className={styles.linkedinIcon}
              alt=""
              loading="lazy"
              src="/linkedin.svg"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
