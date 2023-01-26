import { useState } from "react";
import {
  ChainIcon,
  CheckListIcon,
  FilterIcon,
  LeftAlignmentIcon,
  ListIcon,
  MoreIcon,
  PaidBillIcon,
  QueueIcon,
  SmsIcon,
  SortIcon,
  UserIcon,
  UserSearchIcon,
} from "../icons/icons";
import styles from "./mainContent.module.css";
import Image from "next/image";
import Sort from "../actions/sortComponent/sort";
import MoreOption from "../actions/moreOptionComponent/more";
import Filter from "../actions/filterComponent/filter";
import Card from "../actions/cardComponent/card";

type MainContentProps = {
  toggleBackDropper?: any;
};

const MainContent = ({ toggleBackDropper }: MainContentProps) => {
  const [showTitles, setShowTitles] = useState<boolean>(false);
  const [showActions, setShowActions] = useState<boolean>(false);
  const [showSortBy, setShowSortBy] = useState<boolean>(false);
  const [showFilterBy, setShowFilterBy] = useState<boolean>(false);
  return (
    <div className={styles.mainContent}>
      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <p className={styles.stageName}>Backlog</p>
          <p className={styles.stageItemNumber}>(2)</p>
          <div className={styles.filterIconContainer}>
            <FilterIcon width={14} height={14} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={14} height={14} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={18} height={18} />
          </div>
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>ContractRM</span>
              </div>
              <UserIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
          <span className={styles.stageName}>To Do</span>
          <span className={styles.stageItemNumber}>(5)</span>
          <div className={styles.filterIconContainer}>
            <FilterIcon
              onClick={() => setShowFilterBy((pre) => !pre)}
              width={14}
              height={14}
            />
            {showFilterBy && <Filter onClick={() => setShowFilterBy(false)} />}
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon
              onClick={() => setShowSortBy((pre) => !pre)}
              width={14}
              height={14}
            />
            <div className={styles.sortBy}>
              {showSortBy && <Sort onClick={() => setShowSortBy(false)} />}
            </div>
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={18} height={18} />
          </div>
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>DW4RTeam</span>
              </div>
              <UserSearchIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <UserIcon width={24} height={24} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
            <FilterIcon width={14} height={14} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={14} height={14} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon
              onClick={() => setShowActions((pre) => !pre)}
              width={14}
              height={14}
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <UserSearchIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}></div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
              <SmsIcon width={14} height={14} />
              <span className={styles.number}>12</span>
              <CheckListIcon width={14} height={14} />
              <span className={styles.number}>8/9</span>
              <ChainIcon width={14} height={14} />
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
            <FilterIcon width={14} height={14} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={14} height={14} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={14} height={14} />
          </div>
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>AgentBook</span>
              </div>
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
                <span>ContactRM</span>
              </div>
              <UserSearchIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <UserIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
            <FilterIcon width={14} height={14} />
          </div>
          <div className={styles.sortIconContainer}>
            <SortIcon width={14} height={14} />
          </div>
          <div className={styles.moreIconContainer}>
            <MoreIcon width={14} height={14} />
          </div>
        </div>
        <div className={styles.stageMembersContainer}>
          <div className={styles.stageMember}>
            <div className={styles.memberType}>
              <div className={styles.memberTypeNameContainer}>
                <div className={styles.memberTypeNameStatus}></div>
                <span>ContractRM</span>
              </div>
              <PaidBillIcon width={14} height={14} />
            </div>
            <div className={styles.memberTitle}>
              <span>Design a website</span>
            </div>
            <div className={styles.labels}>
              <span>api.contactrm.com</span>
              <span>api.contactrm</span>
            </div>
            <div className={styles.leftAlignmentContainer}>
              <LeftAlignmentIcon width={14} height={14} />
            </div>
            <div className={styles.stageFooter}>
              <div>
                <span>Created 3 days ago</span>
              </div>
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
