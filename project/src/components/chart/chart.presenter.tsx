import Link from 'next/link';
import { DUMMY_DATA, HOT_DATA, POP_DATA } from '../data/chart/chart';
import styles from './chart.module.css';
import { ICartPageUIProps } from './chart.types';
import ChartDetailPage from './detail/chartDetail.container';

export default function ChartPageUI(props:ICartPageUIProps) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.containers}>
                    <div className={styles.chartContainer}>
                        <div className={styles.chartContainerTitle}>
                            CHART
                        </div>
                        <div className={styles.chartContainerContent}>
                            {DUMMY_DATA.map((data) => {
                                return (
                                    <ChartDetailPage
                                        data = {data}
                                        key={data.index}
                                     />
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.hotContainer}>
                        <div className={styles.hotBox}>
                            <div className={styles.hotTitle}>
                                HOT
                            </div>
                            <div className={styles.hotContent}>
                                {HOT_DATA.map((data) => {
                                    return (
                                        <div className={styles.hotInner} key={data.index}>
                                            <div className={styles.hotImgBox}>
                                                <div className={styles.hotImgLine}>
                                                    <img className={styles.hotImg} src={data.img} />
                                                </div>
                                            </div>
                                            <div >
                                                {data.sing}
                                            </div>
                                            <div >
                                                {data.author}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Link href="/chart/hot" className={styles.hotPlus}>
                                더보기
                            </Link>
                        </div>
                        <div className={styles.hotBox}>
                            <div className={styles.hotTitle}>
                                POP
                            </div>
                            <div className={styles.hotContent}>
                                {POP_DATA.map((data) => {
                                    return (
                                        <div className={styles.hotInner} key={data.index}>
                                            <div className={styles.hotImgBox}>
                                                <div className={styles.hotImgLine}>
                                                    <img className={styles.hotImg} src={data.img} />
                                                </div>
                                            </div>
                                            <div >
                                                {data.sing}
                                            </div>
                                            <div >
                                                {data.author}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Link href="/chart/pop" className={styles.hotPlus}>
                                더보기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}