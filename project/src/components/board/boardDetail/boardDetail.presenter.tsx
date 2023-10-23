import styles from './boardDetail.module.css'
import { IBoardDetailPageUIProps } from './boardDetail.types'

export default function BoardDetailPageUI(props:IBoardDetailPageUIProps):JSX.Element {
    return(
        <div onClick={props.onClickMoveId} className={styles.boardContentBox}>
            <div className={styles.boardContentText}>{props.data.id}</div>
            <div className={styles.boardContentText}>{props.data.title}</div>
            <div className={styles.boardContentText}>{props.data.nickname}</div>
            <div className={styles.boardContentText}>{props.data.board_date.slice(0, 10)}</div>
        </div>
    )
}