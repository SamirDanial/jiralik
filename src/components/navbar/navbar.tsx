import { CalendarIcon, CompanyIcon, DashboardIcon, DocumentIcon, DoubleLeftArrowIcon, LeadsIcon, MetricsIcon, NotificationIcon, SegmentIcon, SingleDownArrowIcon, SocialRMIcon, UsersIcon, WorkflowIcon } from '../icons/icons'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
          <div className={styles.header}>
            <div className={styles.content}>
              <div className={styles.status}></div>
              <div className={styles.companyName}>
                <p>Zaan Corp</p>
              </div>
              <div>
                <SingleDownArrowIcon width={10} height={10} />
              </div>
              <div className={styles.doubleLeft}>
                <DoubleLeftArrowIcon width={15} height={15} />
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <DashboardIcon width={20} height={20} />
              <p>Dashboard</p>
            </div>
            <div className={styles.item}>
              <WorkflowIcon width={20} height={20} />
              <p>Workflow</p>
            </div>
            <div className={styles.item}>
              <CalendarIcon width={20} height={20} />
              <p>Calendar</p>
            </div>
            <div className={styles.item}>
              <SocialRMIcon width={20} height={20} />
              <p>SocialRM</p>
            </div>
            <div className={styles.item}>
              <MetricsIcon width={20} height={20} />
              <p>Metrics</p>
            </div>
            <div className={styles.item}>
              <LeadsIcon width={20} height={20} />
              <p>Leads</p>
            </div>
            <div className={styles.item}>
              <UsersIcon width={20} height={20} />
              <p>Users</p>
            </div>
            <div className={styles.item}>
              <NotificationIcon width={20} height={20} />
              <p>Notifications</p>
            </div>
            <div className={styles.item}>
              <DocumentIcon width={20} height={20} />
              <p>Documents</p>
            </div>
            <div className={styles.item}>
              <SegmentIcon width={20} height={20} />
              <p>Segments</p>
            </div>
          </div>
          <div className={styles.navbarFooter}>
            <div className={styles.navbarFooterItem}>
              <CompanyIcon width={20} height={20} />
              <p>Company</p>
            </div>
          </div>
        </div>
    )
}

export default Navbar;