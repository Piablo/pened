import styles from './ResponsiveBackground.module.css';

function ResponsiveBackground(){
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/left.png" alt="Logo" className={styles.logoImage} />
            </div>
            <div></div>
            <div className={styles.image}>
                <img src="/right.png" alt="Logo" className={styles.logoImage} />
            </div>
        </div>
    )
}

export default ResponsiveBackground