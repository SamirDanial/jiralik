import { useRef, useState } from "react";
import Image from "next/image";
import { FloppyIcon, SingleDownArrowIcon, XMarkCIcon } from "@/components/icons/icons";
import styles from "./setView.module.css";

type SetViewProps = {
  toggleBackDropper: any;
};

const SetView = ({ toggleBackDropper }: SetViewProps) => {
  const [showDevelopers, setShowDevelopers] = useState<boolean>(false);
  const colorRef = useRef<any>();

  const openColorPicker = () => {
    colorRef.current && colorRef.current.click();
  };

  return (
    <div className={styles.mainView}>
      <div className={styles.viewHeader}>
        <div className={styles.viewTitle}>
          <FloppyIcon width={40} height={40} />
          <span>Saved as View</span>
        </div>
        <span onClick={toggleBackDropper}><XMarkCIcon width={24} height={24} /></span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.viewContent}>
        <div className={styles.viewName}>
          <span>View Name</span>
          <div className={styles.viewNameInput}>
            <input type="text" placeholder="Enter name" />
            <div className={styles.colorPicker} onClick={openColorPicker}>
              <span></span>
              <input ref={colorRef} type="color" />
              <div className={styles.downArrowContainer}>
                <SingleDownArrowIcon width={12} height={12} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.viewOthers}>
          <span>Share with others</span>
          <div className={styles.viewOthersInput}>
            <input
              type="text"
              onFocus={() => setShowDevelopers(true)}
              onBlur={() => setShowDevelopers(false)}
              placeholder="Enter or select name"
            />
            {showDevelopers && (
              <div className={styles.developers}>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                      priority
                      unoptimized
                      alt="bat man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 1 A</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                      priority
                      unoptimized
                      alt="bat man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 1 B</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                      priority
                      unoptimized
                      alt="bat man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 2 A</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                      priority
                      unoptimized
                      alt="bat man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 2 B</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://avatarfiles.alphacoders.com/149/thumb-149117.jpg"
                      unoptimized
                      priority
                      alt="spider man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 3 A</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201306/superman_660_060113025152.jpg?VersionId=er9sdK5_qUyteM64xhMJ4HqY8fHzIXwC"
                      unoptimized
                      priority
                      alt="super man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 3 B</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://avatarfiles.alphacoders.com/224/thumb-224842.png"
                      unoptimized
                      priority
                      alt="bat man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 4 A</span>
                </div>
                <div className={styles.developer}>
                  <input type="checkbox" />
                  <div className={styles.imageContainer}>
                    <Image
                      src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                      priority
                      unoptimized
                      alt="bat man"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>Developer 4 B</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.secondSeparator}></div>
        <div className={styles.actions}>
          <div className={styles.cancel}>
            <span onClick={toggleBackDropper}>Cancel</span>
          </div>
          <div className={styles.submit}>
            <span onClick={toggleBackDropper}>Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetView;
