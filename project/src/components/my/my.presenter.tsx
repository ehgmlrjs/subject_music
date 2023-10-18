import styles from './my.module.css'

export default function MyPageUI() {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.author}>
                    희건님이 최근 감상한 음악.
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInfoConainer}>
                        <div className = {styles.contentInfoBox}>
                            표지
                        </div>
                        <div className = {styles.contentInfoBox}>
                            곡정보
                        </div>
                        <div className = {styles.contentInfoBox}>
                            앨범
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.contentInner}>
                            이미지
                        </div>
                        <div className={styles.contentInner}>
                            곡이름 가수
                        </div>
                        <div className={styles.contentInner}>
                            앨범이름
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}