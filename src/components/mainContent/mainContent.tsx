import { useState } from "react";
import {
  BulletListIcon,
  CheckListIcon,
  FilterIcon,
  LeftAlignmentIcon,
  ListIcon,
  MoreIcon,
  PaidBillIcon,
  QueueIcon,
  SortIcon,
  UserIcon,
  XMarkCIcon,
} from "../icons/icons";
import styles from "./mainContent.module.css";
import Image from "next/image";
import Sort from "../actions/sortComponent/sort";
import MoreOption from "../actions/moreOptionComponent/more";
import ProjectNames from "../actions/projectNamesComponent/projectNames";
import Filter from "../actions/filterComponent/filter";
import Card from "../actions/cardComponent/card";

type MainContentProps = {
  toggleBackDropper?: any
}

const MainContent = ({ toggleBackDropper }: MainContentProps) => {
  const [showTitles, setShowTitles] = useState<boolean>(false);
  const [showActions, setShowActions] = useState<boolean>(false);
  const [showSortBy, setShowSortBy] = useState<boolean>(false);
  const [showFilterBy, setShowFilterBy] = useState<boolean>(false);
  return (
    
    <div className={styles.mainContent}>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageName}>Backlog</span>
          <span className={styles.stageItemNumber}>(2)</span>
          <div className={styles.filterIconContainer}>
            <FilterIcon width={13} height={13} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={15} height={15} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={15} height={15} />
          </div>
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>ContractRM</span>
              </div>
              <UserIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={20} height={20} />
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
                <span>AgentBank</span>
              </div>
              <PaidBillIcon width={20} height={20} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
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
        <div className={styles.listSeparator}></div>
        <Card />
      </div>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageName}>To Do</span>
          <span className={styles.stageItemNumber}>(5)</span>
          <div className={styles.filterIconContainer}>
            <FilterIcon onClick={() => setShowFilterBy(pre => !pre)} width={13} height={13} />
            {
              showFilterBy && <Filter onClick={() => setShowFilterBy(false)} />
            }
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon
              onClick={() => setShowSortBy((pre) => !pre)}
              width={15}
              height={15}
            />
            <div className={styles.sortBy}>
              {showSortBy && <Sort onClick={() => setShowSortBy(false)} />}
            </div>
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={15} height={15} />
          </div>
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
        <Card />
      </div>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageName}>In Progress</span>
          <span className={styles.stageItemNumber}>(35)</span>
          <div className={styles.filterIconContainer}>
            <FilterIcon width={13} height={13} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={15} height={15} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon
              onClick={() => setShowActions((pre) => !pre)}
              width={15}
              height={15}
            />
          </div>
          {showActions && <MoreOption onClick={() => setShowActions(false)} />}
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>AgentBook</span>
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
                <span>AgentBook</span>
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
                <span>AgentBook</span>
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
                <span>AgentBook</span>
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
        <Card />
      </div>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageName}>In Review</span>
          <span className={styles.stageItemNumber}>(5)</span>
          <div className={styles.filterIconContainer}>
            <FilterIcon width={13} height={13} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={15} height={15} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={15} height={15} />
          </div>
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
        <Card />
      </div>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageName}>Completed</span>
          <span className={styles.stageItemNumber}>(1)</span>
          <div className={styles.filterIconContainer}>
            <FilterIcon width={13} height={13} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={15} height={15} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={15} height={15} />
          </div>
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
        </div>
      </div>
      <div className={styles.todoList}>
        <ListIcon width={20} height={20} />
      </div>
      <div className={styles.taskList}>
        <QueueIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default MainContent;
