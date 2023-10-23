import { BoardIdPageUIProps } from './board.types';
import styles from './boardId.module.css'
import { Rate, Input } from 'antd';
import BoardIdDetailPage from './boardIdDetail/boardIdDetail.container';

export function BoardIdPageUI(props:BoardIdPageUIProps):JSX.Element {
    const { TextArea } = Input;

    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                    <div className={styles.author}>
                        {props.data[0]?.nickname}
                    </div>
                    <div className={styles.date}>
                        Date: {props.data[0]?.board_date}
                    </div>
                    <div className={styles.address}>
                        Address: {props.data[0]?.address1} {props.data[0]?.address2} {props.data[0]?.address3}
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentTitle}>
                        {props.data[0]?.title}
                    </div>
                    <div className={styles.contentText}>
                        {props.data[0]?.content}
                    </div>
                </div>
                <div className={styles.imgcontainer}>
                    <img className={styles.greetImg} src='/img/boardId/greet.jpg' alt='greetImg'/>
                </div>
            </div>
            <div className={styles.moveButtonContainer}>
                <button onClick={props.onClickList}  className={styles.moveButton}>
                    목록으로
                </button>
                <button className={styles.moveButton}>
                    수정하기
                </button>
            </div>
            <div className={styles.boardContainer}>
                <div className={styles.author}>
                    댓글
                </div>
                <Rate style={{marginBottom : '30px'}} defaultValue={0} onChange={props.onChangeRate}/>
                <TextArea value={props.content} onChange={props.onChangeContent} rows={5} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' maxLength={100} />
                <div className={styles.submitButtonContainer}>
                    <button onClick={props.onClickSubmitContent} className={styles.submitButton}>등록하기</button>
                </div>
            </div>
            {props.chatData.map((chatData) => {
                return(
                    <BoardIdDetailPage
                        key={chatData.chat_date}
                        chatData = {chatData}
                     />
                )
            })}
        </div>
    )
}