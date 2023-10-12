import styles from './chartDetail.module.css'
import { IChartDetailUIProps } from './chartDetail.types'

export default function ChartDetailPageUI (props:IChartDetailUIProps) {
    return (
        <div className={styles.chartContent} key={props.data.index}>
            <div className={styles.chartTitle}>
                {props.data.title}
            </div>
            <div className={styles.chartImgContainer}>
                <div  className={styles.chartImgBox}>
                    <img 
                        className={styles.chartImg} 
                        src={props.data.img}
                        onClick={props.handleImageClick} 
                    />
                </div>
            </div>
        </div>
    )
}