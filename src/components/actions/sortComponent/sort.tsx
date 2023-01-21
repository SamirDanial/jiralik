import { SortIcon } from '@/components/icons/icons';
import styles from './sort.module.css'
type SortProp = {
    onClick: any;
    top?: number;
    left?: number;
    right?: number;
}
const Sort = ({onClick, top, left, right} : SortProp) => {
    return (
        <div className={styles.sorts} style={{top: top, left: left, right: right}}>
                  <div className={styles.sortHeader}>
                    <div>
                      <SortIcon width={20} height={20} />
                      <span>Sort By</span>
                    </div>
                    <span onClick={onClick}>X</span>
                  </div>
                  <div className={styles.separator}></div>
                  <div className={styles.sortList}>
                    <div className={styles.sort}>
                      <span>Order</span>
                    </div>
                    <div className={styles.sort}>
                      <span>Created date</span>
                    </div>
                    <div className={styles.sort}>
                      <span>Due date</span>
                    </div>
                    <div className={styles.sort}>
                      <span>Sitting count</span>
                    </div>
                    <div className={styles.sort}>
                      <span>Move count</span>
                    </div>
                  </div>
                </div>
    )
}

export default Sort;