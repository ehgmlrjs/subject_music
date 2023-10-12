import styles from './chartGenre.module.css'
import { IChartGenrePageProps } from './chartGenre.types'

export default function ChartGenrePageUI(props:IChartGenrePageProps) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                {props.genre}
            </div>
            <div className={styles.footer}>
                asd
            </div>
        </div>
    )
}