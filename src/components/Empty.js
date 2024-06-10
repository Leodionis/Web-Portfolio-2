import PropTypes from "prop-types";
import styles from "./Empty.module.css";

const Empty = ({ className = "" }) => {
  return (
    <div className={[styles.empty, className].join(" ")}>
      <b className={styles.home}>Home</b>
    </div>
  );
};

Empty.propTypes = {
  className: PropTypes.string,
};

export default Empty;
