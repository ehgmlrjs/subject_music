import styles from './contents.module.css'
import { IContentsBoardPageUIProps } from './contents.types'

export default function ContentsBoardsPageUI(props:IContentsBoardPageUIProps):JSX.Element {
    return(
        <div className={styles.boardContentContainer}>
            <div className={styles.boardAuthor}>
                {props.data.nickname}
            </div>
            <div className={styles.boardContent}>
                {props.data.comment}
            </div>
            {props.localNick === props.data.nickname ? 
                <button onClick={props.onClickBoardDelete} className={styles.boardButton}>삭제</button>
                :
                ''
            }       
            
        </div>
    )
}