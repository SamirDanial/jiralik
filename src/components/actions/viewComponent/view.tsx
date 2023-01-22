import { FloppyIcon, TrashBinIcon, XMarkCIcon } from "@/components/icons/icons";
import styles from "./view.module.css";

type ViewProps = {
    onClick: any;
    toggleBackDropper?: any;
    top?: number;
    left?: number;
    right?: number;
  };

const View = ({ onClick, toggleBackDropper, top, left, right }: ViewProps) => {
  return (
    <div className={styles.mainView} style={{top, left, right}}>
      <div className={styles.viewHeader}>
        <div className={styles.viewTitle}>
          <FloppyIcon width={30} height={30} />
          <span>Views</span>
        </div>
        <span onClick={onClick}><XMarkCIcon width={24} height={24} /></span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.viewContent}>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <div className={styles.status}></div>
            <span>My first filter</span>
          </div>
          <div className={styles.filter}>
            <div className={styles.status}></div>
            <span>Available for me</span>
          </div>
          <div className={styles.filter}>
            <div className={styles.status}></div>
            <span>Current tasks</span>
            <div className={styles.trashIconContainer}> <TrashBinIcon onClick={toggleBackDropper} width={15} height={15} /> </div>
          </div>
          <div className={styles.filter}>
            <div className={styles.status}></div>
            <span>Top Project</span>
          </div>
          <div className={styles.filter}>
            <div className={styles.status}></div>
            <span>Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
