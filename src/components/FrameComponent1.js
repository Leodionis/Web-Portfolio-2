import { useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const onFrameButton1Click = useCallback(() => {
    window.location.href = "https://wa.me/6285926925727";
  }, []);

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.aLittleBitAboutMeParent}>
            <h1 className={styles.aLittleBit}>A Little Bit About Me</h1>
            <div className={styles.aboutContent}>
              <div className={styles.iAmLeodionisContainer}>
                <p
                  className={styles.iAmLeodionis}
                >{`I am Leodionis from palmerah, Jakarta Barat. `}</p>
                <p className={styles.iAmWorking}>
                  I am working in an Indonesian Startup as a User Eperience
                  Designer for the past two years.
                </p>
              </div>
              <div className={styles.iGotFeaturedContainer}>
                <p className={styles.iGotFeatured}>
                  I got featured various times on many big and small
                  marketplaces, company profile websites. I also received some
                  awards and recognitions from some of the big and small award
                  companies.
                </p>
                <p className={styles.besidesWebDeveloper}>
                  Besides web developer, I like to watch doraemon, read books.
                </p>
              </div>
            </div>
          </div>
          <FrameComponent2 onFrameContainerClick={onFrameButton1Click} />
        </div>
        <img
          className={styles.group91}
          loading="lazy"
          alt=""
          src="/group-9-1@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
