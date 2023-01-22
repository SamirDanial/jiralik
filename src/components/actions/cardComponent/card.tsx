import { useState } from "react";
import styles from "./card.module.css";
import { XMarkCIcon } from "@/components/icons/icons";
import ProjectNames from "../projectNamesComponent/projectNames";

const Card = () => {
  const [createMode, setCreateMode] = useState<boolean>(false);
  const [showTitles, setShowTitles] = useState<boolean>(false);
  return (
    <div>
      {createMode ? (
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <span>Card Title</span>
            <span onClick={() => setCreateMode(false)}>
              <XMarkCIcon width={24} height={24} />
            </span>
          </div>
          <div className={styles.inputContainer}>
            <textarea
              onFocus={() => setShowTitles(true)}
              onBlur={() => setShowTitles(false)}
              placeholder="Enter card name"
            />
            {showTitles && <ProjectNames />}
          </div>
          <div className={styles.projectAndAction}>
            <select>
              <option value="0">Select Project</option>
            </select>
            <button>Add</button>
          </div>
        </div>
      ) : (
        <div onClick={() => setCreateMode(true)} className={styles.addNewItemContainer}>
          <div className={styles.addNewItem}>
            <span>+</span>
            <span>Add Card</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
