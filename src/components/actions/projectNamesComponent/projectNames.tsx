import styles from "./projectNames.module.css";

const ProjectNames = () => {
  return (
    <div className={styles.titles}>
      <div className={styles.title}>
        <div className={styles.status}></div>
        <span className={styles.titleText}>ContractRM</span>
      </div>
      <div className={styles.title}>
        <div className={styles.status}></div>
        <span className={styles.titleText}>AgentBook</span>
      </div>
      <div className={styles.title}>
        <div className={styles.status}></div>
        <span className={styles.titleText}>W4RTeam</span>
      </div>
      <div className={styles.title}>
        <div className={styles.status}></div>
        <span className={styles.titleText}>LeadBank</span>
      </div>
    </div>
  );
};

export default ProjectNames;
