import styles from './backDropper.module.css'

type BackDropperProps = {
    toggleBackDropper: any;
}

const BackDropper = ({ toggleBackDropper }: BackDropperProps) => {
    return (
        <div onClick={toggleBackDropper} className={styles.backDropper}></div>
    )
}

export default BackDropper