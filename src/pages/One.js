import EmptyList from "../components/EmptyList";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./One.module.css";

const One = () => {
  return (
    <div className={styles.one}>
      <section className={styles.greeting}>
        <EmptyList />
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <section className={styles.frameParent}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default One;
