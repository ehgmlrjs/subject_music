import styles from './header.module.css'

export default function HeaderPageUI() {
    return(
        <div className={styles.containers}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <img src="img/home/logo-white.png" alt='Logo' className={styles.headerLogo} />
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.menuContent}>CHART</div>
                    <div className={styles.menuContent}>CERTIFICATION</div>
                    <div className={styles.menuContent}>NEWS</div>
                    <div className={styles.menuContent}>BOARD</div>
                </div>
                <div className={styles.loginContainer}>
                    <div className={styles.loginContent}>Login</div>
                    <div className={styles.loginContent}>MY</div>
                </div>
            </div>
            <div className={styles.wrapperBottom}>
                <div className={styles.bottomContent}>CHART</div>
                <div className={styles.bottomContent}>CERTIFICATION</div>
                <div className={styles.bottomContent}>NEWS</div>
                <div className={styles.bottomContent}>BOARD</div>
            </div>
        </div>
        
    )
}