import { XMarkCIcon } from "@/components/icons/icons";
import styles from "./filter.module.css";
import Image from "next/image";

type FilterProps = {
  onClick: any;
  top?: number;
  left?: number;
  right?: number;
};

const Filter = ({ onClick, top, left, right }: FilterProps) => {
  return (
    <div className={styles.filters} style={{top, left, right}}>
      <div className={styles.filterHeader}>
        <div>
          <span>Filter By</span>
        </div>
        <span onClick={onClick}><XMarkCIcon width={24} height={24} /></span>
      </div>
      <div className={styles.content}>
        <div className={styles.projects}>
          <div className={styles.projectsHeader}>
            <span>Project</span>
          </div>
          <div className={styles.projectList}>
            <div className={styles.project}>
              <input type="checkbox" />
              <div></div>
              <span>ContractRM</span>
            </div>
            <div className={styles.project}>
              <input type="checkbox" />
              <div></div>
              <span>AgentBook</span>
            </div>
            <div className={styles.project}>
              <input type="checkbox" />
              <div></div>
              <span>W4RTeam</span>
            </div>
            <div className={styles.project}>
              <input type="checkbox" />
              <div></div>
              <span>LeadBank</span>
            </div>
          </div>
          <div className={styles.showAll}>
            <span>Show all...</span>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tagsHeader}>
            <span>Tag</span>
          </div>
          <div className={styles.tagList}>
            <div className={styles.tag}>
              <input type="checkbox" />
              <span>api.contactrm.com</span>
            </div>
            <div className={styles.tag}>
              <input type="checkbox" />
              <span>api.contactrm</span>
            </div>
            <div className={styles.tag}>
              <input type="checkbox" />
              <span>Restrictive APIs</span>
            </div>
            <div className={styles.tag}>
              <input type="checkbox" />
              <span>api.agentbook.com</span>
            </div>
          </div>
          <div className={styles.showAll}>
            <span>Show all...</span>
          </div>
        </div>
        <div className={styles.developers}>
          <div className={styles.developersHeader}>
            <span>Assigned To</span>
          </div>
          <div className={styles.developerList}>
            <div className={styles.developer}>
              <input type="checkbox" />
              <div>
                <Image
                  alt="Person 1"
                  priority
                  unoptimized
                  src="https://t4.ftcdn.net/jpg/02/36/98/33/360_F_236983312_4AhvzYIX63BowwYj7ZW2NiCQsszylFcg.jpg"
                  width={20}
                  height={20}
                />
              </div>
              <span>Savannah Nguyen</span>
            </div>
            <div className={styles.developer}>
              <input type="checkbox" />
              <div>
                <Image
                  alt="Person 2"
                  priority
                  unoptimized
                  src="https://thumbs.dreamstime.com/b/portrait-man-hoodie-sweater-color-background-space-design-portrait-man-hoodie-sweater-color-background-space-127822235.jpg"
                  width={20}
                  height={20}
                />
              </div>
              <span>Wade Warren</span>
            </div>
            <div className={styles.developer}>
              <input type="checkbox" />
              <div>
                <Image
                  alt="Person 1"
                  priority
                  unoptimized
                  src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                  width={20}
                  height={20}
                />
              </div>
              <span>Wade Warren</span>
            </div>
            <div className={styles.developer}>
              <input type="checkbox" />
              <div>
                <Image
                  alt="Person 1"
                  priority
                  unoptimized
                  src="https://thumbs.dreamstime.com/b/fashion-portrait-black-man-yellow-clothes-color-background-african-american-male-model-stylish-hoodie-sweatshirt-showing-157508002.jpg"
                  width={20}
                  height={20}
                />
              </div>
              <span>Jane Cooper</span>
            </div>
          </div>
          <div className={styles.showAll}>
            <span>Show all...</span>
          </div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.actions}>
        <div className={styles.clear}>
          <span>Clear</span>
        </div>
        <div className={styles.apply}>
          <span>Apply</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
