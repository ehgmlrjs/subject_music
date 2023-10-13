import styles from './chartGenre.module.css'
import { IChartGenrePageProps } from './chartGenre.types'
import { Pagination } from 'antd';
import GenreContentPage from './genreContent/genreContent.container';

export default function ChartGenrePageUI(props:IChartGenrePageProps):JSX.Element {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.titleBox}>
                    {props.genre}
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInfo}>
                        <div className={styles.infoText}>
                            표지
                        </div>
                        <div className={styles.infoText}>
                            곡정보
                        </div>
                        <div className={styles.infoText} >
                            앨범
                        </div>
                    </div>
                    <div className={styles.contentList}>
                        {props.nowData.map((data) => {
                            return(
                                <GenreContentPage
                                    data = {data}
                                    key={data.Index}
                                 />
                            )
                        })}
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
        </div>
    )
}