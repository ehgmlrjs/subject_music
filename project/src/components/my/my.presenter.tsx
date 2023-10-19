import styles from './my.module.css'
import { IMyPageUIProps } from './my.types'

export default function MyPageUI(props:IMyPageUIProps) {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.author}>
                    {props.localNick}님이 최근 감상한 음악.
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
                   
                        {props.data.map((data) => {
                            return(
                                <div key={data.Index} className={styles.contentBox}>
                                    <div className={styles.contentInner}>
                                        <img src={data.image} className={styles.contentImg} alt='contentImg' />
                                    </div>
                                    <div className={styles.contentInner}>
                                        {data.name} {data.singer}
                                    </div>
                                    <div className={styles.contentInner}>
                                        {data.album}
                                    </div>
                                </div>   
                            )
                        })}
                </div>
            </div>
        </div>
    )
}