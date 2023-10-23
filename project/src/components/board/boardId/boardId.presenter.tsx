import { BoardIdPageUIProps } from './board.types';
import styles from './boardId.module.css'
import { Rate, Input } from 'antd';
import {CloseOutlined, EditOutlined} from '@ant-design/icons'

export function BoardIdPageUI(props:BoardIdPageUIProps):JSX.Element {
    const { TextArea } = Input;

    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.infoContainer}>
                    <div className={styles.author}>
                        이경찬
                    </div>
                    <div className={styles.date}>
                        Date: 2023-10-19
                    </div>
                    <div className={styles.address}>
                        Address: 광주 광산구 풍영로330번길 34 신안실크벨리아파트 101동 1701호
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentTitle}>
                        안녕하세요 신입회원입니다.
                    </div>
                    <div className={styles.contentText}>
                        안녕하세요 반갑습니다 신입회원입니다. 저는 광주에 살고요 잘 부탁드립니다.
                    </div>
                </div>
                <div className={styles.imgcontainer}>
                    <img className={styles.greetImg} src='/img/boardId/greet.jpg' alt='greetImg'/>
                </div>
            </div>
            <div className={styles.moveButtonContainer}>
                <button className={styles.moveButton}>
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
                <TextArea rows={5} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' maxLength={100} />
                <div className={styles.submitButtonContainer}>
                    <button className={styles.submitButton}>등록하기</button>
                </div>
            </div>
            <div className={styles.boardContentContainer}>
                <div className={styles.boardContentTop}>
                    <div className={styles.boardContentId}>
                        1715leekc
                    </div>
                    <Rate disabled defaultValue={2} />
                    <div className={styles.boardIconContainer}>
                        <CloseOutlined className={styles.boardIcon} />
                        <EditOutlined className={styles.boardIcon} />
                    </div>
                </div>
                <div className={styles.boardContentBox}>
                    정말 환영합니다 잘지내봐요
                </div>
            </div>
        </div>
    )
}