import styles from './news.module.css'
import { ARTICLE_DATA } from '../data/news/news';
import { Carousel } from 'antd';
import { ALBUM_DATA1, ALBUM_DATA2 } from '../data/news/news';

export default function NewsPageUI():JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.subjectTitle}>
                    OPINION
                </div>
                <Carousel autoplay>
                    {ARTICLE_DATA.map((data) => {
                        return(
                            <div key={data.index}>
                                <div className={styles.contentStyle}>
                                    <div className={styles.leftContentBox}>{data.leftTitle}</div>
                                    <div className={styles.rightContentBox}>
                                        <div className={styles.rightTitle}>
                                            {data.rightTitle}
                                        </div>
                                        <div className={styles.rightContent}>
                                            {data.rightContent}
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        )
                    })}
                </Carousel>
                <div className={styles.subjectTitle}>
                    ALBUM
                </div>
                <Carousel>
                    <div>
                        <div className={styles.albumContainer}>
                            {ALBUM_DATA1.map((data) => {
                                return (
                                         <div key={data.index} className={styles.albumBox}>
                                            <div className={styles.albumImgContainer}>
                                                <div className={styles.albumImgBox}>
                                                <img className={styles.albumImg} src = {data.albumImg} alt='albumImg' />
                                                </div>
                                            </div>
                                            <div className={styles.albumContentContainer}>
                                                <div className={styles.albumTitle}>
                                                    {data.albumTitle}
                                                </div>
                                                <div className={styles.albumDate}>
                                                    {data.albumDate}
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.albumContainer}>
                            {ALBUM_DATA2.map((data) => {
                                    return (
                                             <div key={data.index} className={styles.albumBox}>
                                                <div className={styles.albumImgContainer}>
                                                    <div className={styles.albumImgBox}>
                                                    <img className={styles.albumImg} src = {data.albumImg} alt='albumImg' />
                                                    </div>
                                                </div>
                                                <div className={styles.albumContentContainer}>
                                                    <div className={styles.albumTitle}>
                                                        {data.albumTitle}
                                                    </div>
                                                    <div className={styles.albumDate}>
                                                        {data.albumDate}
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })}
                        </div>    
                    </div>
                </Carousel>
                <div className={styles.newsContainer}>
                    <div className={styles.newsPart}>
                        <div className={styles.neswLeft}>
                            <div className={styles.newsTitle}>
                                K-POP NOW
                            </div>
                            <div className={styles.newsLeftImgContainer}>
                                <div className={styles.newsLeftImgBox}>
                                    <img className={styles.newsLeftImg} src='https://circlechart.kr/upload_images/article/202310/6DA696C33656D9D9A399DDD8A74B2254.jpg' alt='newsLeftImg' />
                                </div>
                            </div>
                            <div className={styles.newsLeftContentContainer}>
                                <div className={styles.newsLeftContentTitle}>아일리원(ILY:1), 내 남자친구에게(To My BoyFriend)</div>
                                <div className={styles.newsLeftContent}>걸그룹 아일리원(ILY:1)이 독보적인 사랑스러움을 뽐냈다.아일리원(아라, 리리카, 하나, 로나, 나유, 엘바)은 지난 15일 공식 SNS 및 유튜브 계정을 통해 디지털 싱글 ‘내..</div>
                                <div className={styles.newsLeftDate}>2023-10-16</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.newsPart}>
                        <div className={styles.newsRight1}>
                            <div className={styles.newsTitle}>
                                Perform
                            </div>
                            <div className={styles.newsRight1Container}>
                                <div className={styles.newsRight1Box}>
                                    <div className={styles.newsRight1ImgContainer}>
                                        <div className={styles.newsRight1ImgBox}>
                                            <img className={styles.newsRight1Img} src='	https://circlechart.kr/upload_images/article/202310/D68ED914A384A312CD381ADCB27587AA.jpg' alt='newsRight1Img' />
                                        </div>
                                    </div>
                                    <div className={styles.newsRight1Content}>
                                            포레스텔라, 야외 단독 페스티벌 성료! 미발매 신곡 '..
                                    </div>
                                    <div className={styles.newsLeftDate}>2023-10-16</div>
                                </div>
                                <div className={styles.newsRight1Box}>
                                    <div className={styles.newsRight1ImgContainer}>
                                        <div className={styles.newsRight1ImgBox}>
                                            <img className={styles.newsRight1Img} src='https://circlechart.kr/upload_images/article/202310/0762D08F0DA7928D8738DA8B813D22B2.jpg' alt='newsRight1Img' />
                                        </div>
                                    </div>
                                    <div className={styles.newsRight1Content}>
                                            DeVita(드비타), 데뷔 3년 만 첫 단독 콘서트 ..
                                    </div>
                                    <div className={styles.newsLeftDate}>2023-10-16</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.newsRight2}>
                            <div className={styles.newsTitle}>
                                    Issue
                            </div>
                            <div className={styles.newsRightContent}>
                                크리샤, 뉴웨이컴퍼니와 전속계약... '배우 김남희와 ..
                            </div>
                            <div className={styles.newsRightContent}>
                                에이프릴 출신 이진솔, 220엔터와 전속계약 체결.....
                            </div>
                            <div className={styles.newsRightContent}>
                                마이네임 출신 강준규, YY엔터테인먼트와 손잡았다…방용..
                            </div>
                            <div className={styles.newsRightContent}>
                                글로벌 라이징 아티스트 리오(LEO), 131레이블 전..
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>
        </div>
    )
}