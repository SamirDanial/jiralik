import { useState } from "react";
import {
  ArchiveIcon,
  CheckListIcon,
  LeftAlignmentIcon,
  PaidBillIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons/icons";
import styles from "./archive.module.css";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";

type ArchiveProps = {
  onClick: any;
  top?: number;
  left?: number;
  right?: number;
};

const Archive = ({ onClick, top, left, right }: ArchiveProps) => {
  const [archiveMode, setArchiveMode] = useState<boolean>(true);
  return (
    <div className={styles.mainView} style={{ top, left, right }}>
      <div className={styles.viewHeader}>
        <div className={styles.viewTitle}>
          <div
            onClick={() => setArchiveMode(true)}
            className={
              archiveMode ? styles.archiveHolder : styles.archiveHolder2
            }
          >
            <div className={styles.archiveIcon}>
              <ArchiveIcon width={15} height={15} />
            </div>
            <span>Archive</span>
          </div>
          <div
            onClick={() => setArchiveMode(false)}
            className={archiveMode ? styles.snoozeHolder : styles.snoozeHolder2}
          >
            <div className={styles.snoozeIcon}>
              <ClockIcon width={15} height={15} />
            </div>
            <span>Snooze</span>
          </div>
        </div>
        <span onClick={onClick}>X</span>
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
            {archiveMode ? (
              <div className={styles.archiveMessage}>
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
                <span>
                  Archive in <b>Completed</b> 3 days ago
                </span>
              </div>
            ) : (
              <div className={styles.snoozeMessage}>
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
                <span>
                  Snoozed until <b>Oct 24 at 10:00 PM</b>
                </span>
              </div>
            )}
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
            {archiveMode ? (
              <div className={styles.archiveMessage}>
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
                <span>
                  Archive in <b>Completed</b> 3 days ago
                </span>
              </div>
            ) : (
              <div className={styles.snoozeMessage}>
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
                <span>
                  Snoozed until <b>Oct 24 at 10:00 PM</b>
                </span>
              </div>
            )}
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
            {archiveMode ? (
              <div className={styles.archiveMessage}>
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
                <span>
                  Archive in <b>Completed</b> 3 days ago
                </span>
              </div>
            ) : (
              <div className={styles.snoozeMessage}>
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
                <span>
                  Snoozed until <b>Oct 24 at 10:00 PM</b>
                </span>
              </div>
            )}
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
            {archiveMode ? (
              <div className={styles.archiveMessage}>
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
                <span>
                  Archive in <b>Completed</b> 3 days ago
                </span>
              </div>
            ) : (
              <div className={styles.snoozeMessage}>
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
                <span>
                  Snoozed until <b>Oct 24 at 10:00 PM</b>
                </span>
              </div>
            )}
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
            {archiveMode ? (
              <div className={styles.archiveMessage}>
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
                <span>
                  Archive in <b>Completed</b> 3 days ago
                </span>
              </div>
            ) : (
              <div className={styles.snoozeMessage}>
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
                <span>
                  Snoozed until <b>Oct 24 at 10:00 PM</b>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
