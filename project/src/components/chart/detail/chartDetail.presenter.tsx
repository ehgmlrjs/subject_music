import styles from './chartDetail.module.css'
import { IChartDetailProps } from './chartDetail.types'

export default function ChartDetailPageUI (props:IChartDetailProps) {
    return (
        <div className={styles.chartContent} key={props.data.index}>
            <div className={styles.chartTitle}>
                {props.data.title}
            </div>
            <div className={styles.chartImgContainer}>
                <div className={styles.chartImgBox}>
                <img className={styles.chartImg} src={props.data.img} />
                </div>
            </div>
        </div>
    )
}