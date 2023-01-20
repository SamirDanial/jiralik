import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/mainHeader/mainHeader";
import {
  CloseTagIcon,
  FilterIcon,
  FloppyIcon,
  FolderIcon,
  LoudSpeaker2Icon,
  PenIcon,
  PinIcon,
  SortIcon,
  Workflow2Icon,
  MoreIcon,
  UsersIcon,
  UserIcon,
  LeftAlignmentIcon,
  PaidBillIcon,
  CheckListIcon,
} from "@/components/icons/icons";
import SubMenu from "@/components/subHeader/subHeader";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={inter.className}>
      <div className={styles.mainLayout}>
        <Navbar />
        <div className={styles.content}>
          <MainHeader />
          <SubMenu />
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
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  <span>Card Title</span>
                  <span>X</span>
                </div>
                <div className={styles.inputContainer}>
                  <textarea placeholder="Enter card name" />
                </div>
                <div className={styles.projectAndAction}>
                  <select>
                    <option value="0">Select Project</option>
                  </select>
                  <button>Add</button>
                </div>
              </div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageHeader}>
                <span className={styles.stageName}>To Do</span>
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
              <div className={styles.addNewItemContainer}>
                <div className={styles.addNewItem}>
                  <span>+</span>
                  <span>Add Card</span>
                </div>
              </div>
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
                  <MoreIcon width={15} height={15} />
                </div>
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
              <div className={styles.addNewItemContainer}>
                <div className={styles.addNewItem}>
                  <span>+</span>
                  <span>Add Card</span>
                </div>
              </div>
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
              <div className={styles.addNewItemContainer}>
                <div className={styles.addNewItem}>
                  <span>+</span>
                  <span>Add Card</span>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
