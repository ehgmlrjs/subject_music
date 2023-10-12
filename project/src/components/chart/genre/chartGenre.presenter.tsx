import styles from './chartGenre.module.css'
import { IChartGenrePageProps } from './chartGenre.types'
import {UnorderedListOutlined} from '@ant-design/icons';
import { Pagination } from 'antd';

export default function ChartGenrePageUI(props:IChartGenrePageProps) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.titleBox}>
                    {props.genre}
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInfo}>
                        <div className={styles.infoText}>
                            순위
                        </div>
                        <div className={styles.infoText}>
                            곡정보
                        </div>
                        <div className={styles.infoText} >
                            앨범
                        </div>
                    </div>
                    <div className={styles.contentList}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.rankContainer}>
                                <div className={styles.rank}>
                                    1
                                </div>
                                <div className={styles.singImgBox}>
                                    <img className={styles.singImg} src='https://cdnimg.melon.co.kr/cm2/album/images/111/06/209/11106209_20221120120732_500.jpg?0833292075e8039ac7d88a529d0a535e/melon/resize/282/quality/80/optimize' alt='singImg'/>
                                </div>
                            </div>
                            <div className={styles.singContainer}>
                                <div className={styles.singBox}>
                                    Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack] (Feat. FIFA Sound)
                                </div>
                                <div className={styles.authorBox}>
                                    정국
                                </div>
                            </div>
                            <div className={styles.albumContainer}>
                                <div className={styles.album}>
                                    Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack]
                                </div>
                                <div className={styles.playIconBox}>
                                    <UnorderedListOutlined className={styles.playIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pagenationContainer}>
                    <Pagination 
                        defaultCurrent={1} 
                        total={50}
                        onChange={props.handlePageChange} 
                    />
                </div>
            </div>
            <div className={styles.footer}>
                asdas
            </div>
        </div>
    )
}