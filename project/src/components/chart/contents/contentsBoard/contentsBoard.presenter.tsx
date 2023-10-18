import styles from './contents.module.css'
import { IContentsBoardPageUIProps } from './contents.types'

export default function ContentsBoardsPageUI(props:IContentsBoardPageUIProps):JSX.Element {
    return(
        <div className={styles.boardContentContainer}>
            <div className={styles.boardAuthor}>
                {props.nick}
            </div>
            <div className={styles.boardContent}>
                정말 좋은 곡이에요!sdas
            </div>
            {/* localNick(현재 로그인한 닉네임정보와 게시물의 닉네임 정보가 같으면 삭제 버튼이 나와서 삭제를 할 수 있다.) */}
            {props.localNick === props.nick &&
            <button className={styles.boardButton}>삭제</button>}
        </div>
    )
}