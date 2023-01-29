import { useState, Fragment } from "react";
import styles from "./card.module.css";
import { PlusCIcon, XMarkCIcon } from "@/components/icons/icons";
import ProjectNames from "../projectNamesComponent/projectNames";

const Card = () => {
  const [createMode, setCreateMode] = useState<boolean>(false);
  const [showTitles, setShowTitles] = useState<boolean>(false);
  return (
    <div>
      {createMode ? (
        <Fragment>
          <div className={styles.listSeparator}></div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <span>Card title</span>
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
        </Fragment>
      ) : (
        <div
          onClick={() => setCreateMode(true)}
          className={styles.addNewItemContainer}
        >
          <div className={styles.addNewItem}>
            <PlusCIcon width={18} height={18} />
            <span>Add Card</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
