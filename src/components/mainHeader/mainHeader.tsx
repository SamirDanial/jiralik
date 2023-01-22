import { QuestionIcon, SingleDownArrowIcon, SearchIcon, LoudSpeakerIcon, CalendarIcon, MessageIcon } from '../icons/icons';
import styles from './mainHeader.module.css'
import Image from 'next/image'

type MainHeaderType = {
  toggleBackDropper: any;
}

const MainHeader = ({ toggleBackDropper }: MainHeaderType) => {
    return(
        <div className={styles.mainHeaderContainer}>
            <div className={styles.mainHeader}>
              <div className={styles.colleagues}>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://avatarfiles.alphacoders.com/149/thumb-149117.jpg"
                    unoptimized
                    priority
                    alt="spider man"
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.batchContainer}>
                  <span>15</span>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201306/superman_660_060113025152.jpg?VersionId=er9sdK5_qUyteM64xhMJ4HqY8fHzIXwC"
                    unoptimized
                    priority
                    alt="super man"
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.batchContainer2}>
                  <span>11</span>
                </div>
                <div className={styles.downArrowButton}>
                  <div>
                    <SingleDownArrowIcon width={20} height={20} />
                  </div>
                </div>
              </div>
              <div className={styles.search}>
                <div className={styles.questionIconContainer}>
                  <QuestionIcon width={20} height={20} />
                </div>
                <div className={styles.plusContainer} onClick={toggleBackDropper}>
                  <span>+</span>
                </div>
                <div className={styles.searchInput}>
                  <div className={styles.searchContainer}>
                    <SearchIcon width={20} height={20} />
                  </div>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              <div className={styles.profile}>
                <div className={styles.loudspeakerContainer}>
                  <LoudSpeakerIcon width={20} height={20} />
                </div>
                <div className={styles.loudspeakerContainer}>
                  <CalendarIcon width={20} height={20} />
                </div>
                <div className={styles.loudspeakerContainer}>
                  <MessageIcon width={20} height={20} />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://avatarfiles.alphacoders.com/224/thumb-224842.png"
                    unoptimized
                    priority
                    alt="bat man"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
    )
}

export default MainHeader;