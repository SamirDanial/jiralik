import { useState } from 'react';

import {
  CalendarIcon,
  CompanyIcon,
  DashboardIcon,
  DocumentIcon,
  DoubleLeftArrowIcon,
  LeadsIcon,
  MetricsIcon,
  NotificationIcon,
  SegmentIcon,
  SingleDownArrowIcon,
  SocialRMIcon,
  UsersIcon,
  WorkflowIcon,
} from "../icons/icons";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [toggleSideBar, setToggleSideBar] = useState<boolean>(true)
  return (
    <div className={toggleSideBar ? styles.navbar : styles.navbar2}>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.status} onClick={() => setToggleSideBar(true)}></div>
          <div className={styles.companyName}>
            <p>Zaan Corp</p>
          </div>
          <div>
            <SingleDownArrowIcon width={15} height={15} />
          </div>
          <div className={styles.doubleLeft} onClick={() => setToggleSideBar(false)}>
            <DoubleLeftArrowIcon width={20} height={20} />
          </div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <DashboardIcon width={22} height={22} />
          <p>Dashboard</p>
        </div>
        <div className={styles.item}>
          <WorkflowIcon width={22} height={22} />
          <p>Workflow</p>
        </div>
        <div className={styles.item}>
          <CalendarIcon width={22} height={22} />
          <p>Calendar</p>
        </div>
        <div className={styles.item}>
          <SocialRMIcon width={22} height={22} />
          <p>SocialRM</p>
        </div>
        <div className={styles.item}>
          <MetricsIcon width={22} height={22} />
          <p>Metrics</p>
        </div>
        <div className={styles.item}>
          <LeadsIcon width={22} height={22} />
          <p>Leads</p>
        </div>
        <div className={styles.item}>
          <UsersIcon width={22} height={22} />
          <p>Users</p>
        </div>
        <div className={styles.item}>
          <NotificationIcon width={22} height={22} />
          <p>Notifications</p>
          <div className={styles.notify}></div>
        </div>
        <div className={styles.item}>
          <DocumentIcon width={22} height={22} />
          <p>Documents</p>
        </div>
        <div className={styles.item}>
          <SegmentIcon width={22} height={22} />
          <p>Segments</p>
        </div>
      </div>
      <div className={styles.navbarFooter}>
        <div className={styles.navbarFooterItem}>
          <CompanyIcon width={22} height={22} />
          <p>Company</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
