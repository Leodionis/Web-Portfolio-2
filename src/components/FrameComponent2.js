import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "", onFrameContainerClick }) => {
  return (
    <button className={[styles.frameWrapper, className].join(" ")}>
      <button className={styles.frameContainer} onClick={onFrameContainerClick}>
        <div className={styles.contactMeWrapper}>
          <b className={styles.contactMe}>Contact Me</b>
        </div>
      </button>
    </button>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default FrameComponent2;
