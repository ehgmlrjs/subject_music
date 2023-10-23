import { Rate } from 'antd';
import {CloseOutlined} from '@ant-design/icons'
import styles from './boardIdDetail.module.css'
import { IBoardIdDetailPageUIProps } from './boardIdDetail.types';

export default function BoardIdDetailPageUI(props:IBoardIdDetailPageUIProps):JSX.Element {
    return(
        <div className={styles.boardContentContainer}>
            <div className={styles.boardContentTop}>
                <div className={styles.boardContentId}>
                    {props.chatData.nickname}
                </div>
                <Rate disabled defaultValue={props.chatData.star} />
                {localStorage.getItem('nick') === props.chatData?.nickname ?
                    <div className={styles.boardIconContainer}>
                        <CloseOutlined onClick={props.onClickDelete} className={styles.boardIcon} />
                    </div>
                    :
                    ''
                }
            </div>
            <div className={styles.boardContentBox}>
                {props.chatData.content}
            </div>
        </div>
    )
}