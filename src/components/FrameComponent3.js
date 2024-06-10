import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.oneInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.someGenerousWordsParent}>
          <h1 className={styles.someGenerousWords}>Some Generous Words</h1>
          <div className={styles.someOfMy}>
            Some of my favorite testimonials from my clients
          </div>
        </div>
        <div className={styles.testimonialNavigation}>
          <img
          />
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialQuotes}>
              <div className={styles.aVisualGuide}>
                I had grown a little bit disappointed when I realized that my
                work would not be taking me in any new, creative design
                directions. Thankfully, I found Leodionis and his creativity
                that goes above and beyond, proving to be exactly what I needed
                to take.
              </div>
              <b className={styles.chaJiHun}>Aika Chan</b>
            </div>
            <div className={styles.testimonialQuotes1}>
              <div className={styles.aVisualGuide1}>
                Leodionis is the best designer that I have ever worked with. He
                is seriously what you would call 'creative': he innovatively
                solves all sorts of problems and always delivers both prompt and
                high quality work. I can't recommend him enough!
              </div>
              <b className={styles.chaJiHun1}>Riston</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
