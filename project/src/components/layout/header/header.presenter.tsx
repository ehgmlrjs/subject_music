import styles from './header.module.css'
import { IHeaderUIProps } from './header.types'

export default function HeaderPageUI(props:IHeaderUIProps):JSX.Element {
    return(
        <div className={styles.containers}>
            <div className={styles.wrapper}>
                <div onClick={props.onClickHome} className={styles.logoContainer}>
                    <img src="img/home/logo-white.png" alt='Logo' className={styles.headerLogo} />
                </div>
                <div className={styles.menuContainer}>
                    <div onClick = {props.onClickChart} className={styles.menuContent}>CHART</div>
                    <div onClick = {props.onClickArchive} className={styles.menuContent}>ARCHIVE</div>
                    <div onClick = {props.onClickNews} className={styles.menuContent}>NEWS</div>
                    <div onClick = {props.onClickBoard} className={styles.menuContent}>BOARD</div>
                </div>
                <div className={styles.loginContainer}>
                    <div onClick={props.onClickLog}  className={styles.loginContent}>Login</div>
                    <div className={styles.loginContent}>MY</div>
                </div>
            </div>
            <div className={styles.wrapperBottom}>
                <div onClick={props.onClickChart} className={styles.bottomContent}>CHART</div>
                <div onClick = {props.onClickArchive} className={styles.bottomContent}>ARCHIVE</div>
                <div onClick = {props.onClickNews} className={styles.bottomContent}>NEWS</div>
                <div onClick = {props.onClickBoard}  className={styles.bottomContent}>BOARD</div>
            </div>
        </div>
        
    )
}