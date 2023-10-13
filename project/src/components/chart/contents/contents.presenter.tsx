import styles from './contents.module.css'
import {HeartOutlined} from '@ant-design/icons'
import { IContentsPageUIProps } from './contents.types'

export default function ContentsPageUI(props:IContentsPageUIProps):JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                        <div className={styles.imgBox}>
                            <img className={styles.songImg} src={props.inputData[0]?.image} alt='songImg' />
                        </div>
                        <div className={styles.songInfoBox}>
                            <div className={styles.songTitle}>
                                {props.inputData[0]?.name}
                            </div>
                            <div className={styles.author}>
                                {props.inputData[0]?.singer}
                            </div>
                            <div className={styles.infoBox}>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        앨범
                                    </div>
                                    <div className={styles.info}>
                                        {props.inputData[0]?.album}
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        발매일
                                    </div>
                                    <div className={styles.info}>
                                        {props.inputData[0]?.day}
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        장르
                                    </div>
                                    <div className={styles.info}>
                                        {props.inputData[0]?.genre}
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        좋아요
                                    </div>
                                    <div className={styles.info}>
                                        <HeartOutlined className={styles.like} />
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                </div>
                <div className={styles.lyricsContainer}>
                    <div className={styles.lyricsTitle}>
                        가사
                    </div>
                    <div className = {styles.lyrics}>
                    {props.inputData[0]?.lyrics}
                    </div>
                </div>
                <div className={styles.boardContainer}>
                    <div className={styles.lyricsTitle}>
                        댓글
                    </div>
                    <div className ={styles.boardTopContainer}>
                        <input className={styles.boardInput} type='text' />
                        <button className={styles.boardSubmitButton}>등록</button>
                    </div>
                    <div className={styles.boardBottomContainer}>
                        <div className={styles.boardContentContainer}>
                            <div className={styles.boardAuthor}>
                                leekc3813
                            </div>
                            <div className={styles.boardContent}>
                                정말 좋은 곡이에요!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}