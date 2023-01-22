import { useRef, useState } from "react";
import Image from "next/image";
import { FloppyIcon, SingleDownArrowIcon, XMarkCIcon } from "@/components/icons/icons";
import styles from "./deleteView.module.css";

type DeleteViewProps = {
  toggleBackDropper: any;
};

const DeleteView = ({ toggleBackDropper }: DeleteViewProps) => {
  const [showDevelopers, setShowDevelopers] = useState<boolean>(false);
  const colorRef = useRef<any>();

  const openColorPicker = () => {
    colorRef.current && colorRef.current.click();
  };

  return (
    <div className={styles.mainView}>
      <div className={styles.viewHeader}>
        <div className={styles.viewTitle}>
          <span>Delete</span>
        </div>
        <span onClick={toggleBackDropper}><XMarkCIcon width={24} height={24} /></span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.viewContent}>
        <div className={styles.viewName}>
          <span>Are you sure you want to delete this Filter?</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.secondSeparator}></div>
        <div className={styles.actions}>
          <div className={styles.cancel}>
            <span onClick={toggleBackDropper}>Cancel</span>
          </div>
          <div className={styles.delete}>
            <span onClick={toggleBackDropper}>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteView;
