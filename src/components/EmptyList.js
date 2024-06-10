import { useCallback, useEffect } from "react";
import Empty from "./Empty";
import PropTypes from "prop-types";
import styles from "./EmptyList.module.css";

const EmptyList = ({ className = "" }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='myRecentWork']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className={[styles.emptyList, className].join(" ")}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <Empty />
          <div className={styles.workWrapper}>
            <b className={styles.work}>Work</b>
          </div>
          <div className={styles.testimonialsWrapper}>
            <b className={styles.testimonials}>Testimonials</b>
          </div>
          <div className={styles.aboutWrapper}>
            <b className={styles.about}>About</b>
          </div>
          <img
            className={styles.menu1Icon}
            loading="lazy"
            alt=""
            src="/menu-1@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.emiratesLivingWrapper}>
            <div className={styles.emiratesLiving}>
              <div className={styles.frameGroup}>
                <button className={styles.helloAllWrapper}>
                  <div className={styles.helloAll}>👋 Hello All</div>
                </button>
                <h1
                  className={styles.imLeoDionisContainer}
                  data-animate-on-scroll
                >
                  <p className={styles.imLeoDionis}>I’m Leo Dionis,</p>
                  <p className={styles.aFrontendEngineer}>
                    A Frontend Engineer
                  </p>
                </h1>
              </div>
              <div className={styles.frameContainer}>
                <button
                  className={styles.frameWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.viewMyWorkParent}>
                    <div className={styles.viewMyWork}>View My Work</div>
                    <img
                      className={styles.chevronRightSquareIcon}
                      alt=""
                      src="/chevronrightsquare@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameButton}>
                  <div className={styles.contactMeWrapper}>
                    <b className={styles.contactMe}>Contact Me</b>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            className={styles.maskGroup1}
            loading="lazy"
            alt=""
            src="/mask-group-1@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
    </div>
  );
};

EmptyList.propTypes = {
  className: PropTypes.string,
};

export default EmptyList;
