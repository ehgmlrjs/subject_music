import styles from './contents.module.css'
import {HeartOutlined} from '@ant-design/icons'

export default function ContentsPageUI() {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                        <div className={styles.imgBox}>
                            <img className={styles.songImg} src='https://cdnimg.melon.co.kr/cm2/album/images/111/06/209/11106209_20221120120732_500.jpg?0833292075e8039ac7d88a529d0a535e/melon/resize/282/quality/80/optimize' alt='songImg' />
                        </div>
                        <div className={styles.songInfoBox}>
                            <div className={styles.songTitle}>
                                Dream
                            </div>
                            <div className={styles.author}>
                                정국
                            </div>
                            <div className={styles.infoBox}>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        앨범
                                    </div>
                                    <div className={styles.info}>
                                    Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack]
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        발매일
                                    </div>
                                    <div className={styles.info}>
                                        2022-11-20
                                    </div>
                                </div>
                                <div className={styles.infoRow}>
                                    <div className={styles.info}>
                                        장르
                                    </div>
                                    <div className={styles.info}>
                                        POP
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
                        الأ هو لا دان
                        الأ هو لا دان
                        (Oh RedOne)
                        الأ هو لا دان
                        الأ هو لا دان
                        Look who we are we are the dreamers
                        We make it happen 'cause we believe it
                        Look who we are we are the dreamers
                        We make it happen 'cause we can see it
                        Here's to the ones that keep the passion
                        Respect oh yeah
                        Here's to the ones that can imagine
                        Respect oh yeah
                        الأ هو لا دان
                        الأ هو لا دان
                        الأ هو لا دان
                        الأ هو لا دان
                        Gather 'round now look at me (هاييا هاييا)
                        Respect the love the only way (هاييا هاييا)
                        If you wanna come come with me (هاييا هاييا)
                        The door is open now every day (هاييا هاييا)
                        This one plus two rendezvous all invited
                        This what we do how we do
                        Look who we are we are the dreamers
                        We make it happen 'cause we believe it
                        Look who we are we are the dreamers
                        We make it happen 'cause we can see it
                        Here's to the ones that keep the passion
                        Respect oh yeah
                        Here's to the ones that can imagine
                        Respect oh yeah
                        الأ هو لا دان
                        الأ هو لا دان
                        الأ هو لا دان
                        الأ هو لا دان
                        Look who we are we are the dreamers
                        We make it happen 'cause we believe it
                        Look who we are we are the dreamers
                        We make it happen 'cause we can see it
                        Here's to the ones that keep the passion
                        Respect oh yeah
                        Here's to the ones that can imagine
                        Respect oh yeah
                        الأ هو لا دان
                        الأ هو لا دان
                        الأ هو لا دان
                        الأ هو لا دان
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