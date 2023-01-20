import Image from 'next/image'
import styles from './subHeader.module.css';
import { CloseTagIcon, FilterIcon, FloppyIcon, FolderIcon, LoudSpeaker2Icon, PenIcon, PinIcon, SortIcon, Workflow2Icon } from '../icons/icons';

const SubMenu = () => {
    return (
        <div className={styles.subHeaderContainer}>
            <div className={styles.subHeader}>
              <div className={styles.actionAndHuman}>
                <div className={styles.workFlow}>
                  <h2>Workflow</h2>
                </div>
                <div className={styles.actions}>
                  <div className={styles.actionsContainer}>
                    <div className={styles.actionContainer}>
                      <Workflow2Icon width={40} height={40} />
                    </div>
                    <div className={styles.actionContainer}>
                      <PenIcon width={40} height={40} />
                    </div>
                    <div className={styles.actionContainer}>
                      <CloseTagIcon width={40} height={40} />
                    </div>
                    <div className={styles.actionContainer}>
                      <LoudSpeaker2Icon width={40} height={40} />
                    </div>
                  </div>
                  <div className={styles.separator}></div>
                  <div className={styles.humansContainer}>
                    <div className={styles.humanContainer}>
                      <div className={styles.human}>
                        <Image
                          alt="Person 1"
                          priority
                          unoptimized
                          src="https://t4.ftcdn.net/jpg/02/36/98/33/360_F_236983312_4AhvzYIX63BowwYj7ZW2NiCQsszylFcg.jpg"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className={styles.batchNumber}>
                        <span>2</span>
                      </div>
                    </div>
                    <div className={styles.humanContainer}>
                      <div className={styles.human}>
                        <Image
                          alt="Person 2"
                          priority
                          unoptimized
                          src="https://thumbs.dreamstime.com/b/portrait-man-hoodie-sweater-color-background-space-design-portrait-man-hoodie-sweater-color-background-space-127822235.jpg"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className={styles.batchNumber}>
                        <span>5</span>
                      </div>
                    </div>
                    <div className={styles.humanContainer}>
                      <div className={styles.human}>
                        <Image
                          alt="Person 1"
                          priority
                          unoptimized
                          src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className={styles.batchNumber}>
                        <span>1</span>
                      </div>
                    </div>
                    <div className={styles.humanContainer}>
                      <div className={styles.human}>
                        <Image
                          alt="Person 1"
                          priority
                          unoptimized
                          src="https://thumbs.dreamstime.com/b/fashion-portrait-black-man-yellow-clothes-color-background-african-american-male-model-stylish-hoodie-sweatshirt-showing-157508002.jpg"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className={styles.batchNumber}>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.filters}>
                <div className={styles.filterItem}>
                  <PinIcon width={20} height={20} />
                </div>
                <div className={styles.filterItem}>
                  <FolderIcon width={20} height={20} />
                </div>
                <div className={styles.filterItem}>
                  <FloppyIcon width={30} height={30} />
                  <span>Views</span>
                </div>
                <div className={styles.filterItem}>
                  <FilterIcon width={15} height={15} />
                  <span>Filter</span>
                </div>
                <div className={styles.filterItem}>
                  <SortIcon width={20} height={20} />
                  <span>Sort by</span>
                </div>
              </div>
            </div>
          </div>
    )
}

export default SubMenu;