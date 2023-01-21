import styles from "./more.module.css";

type MoreOptionProps = {
  onClick: any;
  top?: number;
  left?: number;
  right?: number;
};

const MoreOption = ({ onClick, top, left, right }: MoreOptionProps) => {
  return (
    <div className={styles.actions}>
      <div className={styles.actionHeader}>
        <span>List Actions</span>
        <span onClick={onClick}>X</span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.actionList}>
        <div className={styles.action}>
          <span>Move all cards in this list</span>
        </div>
        <div className={styles.action}>
          <span>Archive all cards in this list</span>
        </div>
      </div>
    </div>
  );
};

export default MoreOption;
