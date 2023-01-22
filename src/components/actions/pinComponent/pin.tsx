import { CheckListIcon, LeftAlignmentIcon, PaidBillIcon, PinIcon, SearchIcon, UserIcon, XMarkCIcon } from "@/components/icons/icons";
import styles from "./pin.module.css";
import Image from 'next/image';

type PinProps = {
  onClick: any;
  top?: number;
  left?: number;
  right?: number;
};

const Pin = ({ onClick, top, left, right }: PinProps) => {
  return (
    <div className={styles.mainView} style={{ top, left, right }}>
      <div className={styles.viewHeader}>
        <div className={styles.viewTitle}>
          <div className={styles.PinIconContainer}>
            <PinIcon width={20} height={20} />
          </div>
          <span>Pinned Card</span>
        </div>
        <span onClick={onClick}><XMarkCIcon width={24} height={24} /></span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.viewContent}>
        <div className={styles.search}>
            <div className={styles.searchTool}>
                <SearchIcon width={15} height={15} />
            </div>
            <input type="text" placeholder="Search" />
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>DW4RTeam</span>
              </div>
              <UserIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={20} height={20} />
              <CheckListIcon width={20} height={20} />
              <span>8/9</span>
            </div>
            <div className={styles.stageFooter}>
              <span>Created 3 days ago</span>
              <div className={styles.imageContainer}>
                <Image
                  src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                  priority
                  unoptimized
                  alt="bat man"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>Asteler.io</span>
              </div>
              <PaidBillIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={20} height={20} />
              <CheckListIcon width={20} height={20} />
              <span>8/9</span>
            </div>
            <div className={styles.stageFooter}>
              <span>Created 3 days ago</span>
              <div className={styles.imageContainer}>
                <Image
                  src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                  priority
                  unoptimized
                  alt="bat man"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>ContractRM</span>
              </div>
              <PaidBillIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={20} height={20} />
              <CheckListIcon width={20} height={20} />
              <span>8/9</span>
            </div>
            <div className={styles.stageFooter}>
              <span>Created 3 days ago</span>
              <div className={styles.imageContainer}>
                <Image
                  src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                  priority
                  unoptimized
                  alt="bat man"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>ContractRM</span>
              </div>
              <PaidBillIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={20} height={20} />
              <CheckListIcon width={20} height={20} />
              <span>8/9</span>
            </div>
            <div className={styles.stageFooter}>
              <span>Created 3 days ago</span>
              <div className={styles.imageContainer}>
                <Image
                  src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                  priority
                  unoptimized
                  alt="bat man"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>ContractRM</span>
              </div>
              <PaidBillIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={20} height={20} />
              <CheckListIcon width={20} height={20} />
              <span>8/9</span>
            </div>
            <div className={styles.stageFooter}>
              <span>Created 3 days ago</span>
              <div className={styles.imageContainer}>
                <Image
                  src="https://t3.ftcdn.net/jpg/03/16/72/46/360_F_316724643_wxdsyAe8bDlAtEqVrRSi8HhMXSiNdZXP.jpg"
                  priority
                  unoptimized
                  alt="bat man"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pin;
