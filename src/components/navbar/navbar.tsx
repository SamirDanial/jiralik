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
            <SingleDownArrowIcon width={10} height={10} />
          </div>
          <div className={styles.doubleLeft} onClick={() => setToggleSideBar(false)}>
            <DoubleLeftArrowIcon width={15} height={15} />
          </div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <DashboardIcon width={24} height={24} />
          <p>Dashboard</p>
        </div>
        <div className={styles.item}>
          <WorkflowIcon width={24} height={24} />
          <p>Workflow</p>
        </div>
        <div className={styles.item}>
          <CalendarIcon width={24} height={24} />
          <p>Calendar</p>
        </div>
        <div className={styles.item}>
          <SocialRMIcon width={24} height={24} />
          <p>SocialRM</p>
        </div>
        <div className={styles.item}>
          <MetricsIcon width={24} height={24} />
          <p>Metrics</p>
        </div>
        <div className={styles.item}>
          <LeadsIcon width={24} height={24} />
          <p>Leads</p>
        </div>
        <div className={styles.item}>
          <UsersIcon width={24} height={24} />
          <p>Users</p>
        </div>
        <div className={styles.item}>
          <NotificationIcon width={24} height={24} />
          <p>Notifications</p>
        </div>
        <div className={styles.item}>
          <DocumentIcon width={24} height={24} />
          <p>Documents</p>
        </div>
        <div className={styles.item}>
          <SegmentIcon width={24} height={24} />
          <p>Segments</p>
        </div>
      </div>
      <div className={styles.navbarFooter}>
        <div className={styles.navbarFooterItem}>
          <CompanyIcon width={24} height={24} />
          <p>Company</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
