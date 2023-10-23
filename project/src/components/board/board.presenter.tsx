import styles from './board.module.css'
import { Pagination } from 'antd';
import { IBoardPageUIProps } from './board.types';
import BoardDetailPage from './boardDetail/boardDetail.container';

export default function BoardPageUI(props: IBoardPageUIProps): JSX.Element {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.boardTopContainer}>
                    <input onChange={props.onChangeSearch} className={styles.boardSearchInput} placeholder='게시물을 검색하세요.' type='text' />
                    <button onClick={props.onClickSearch} className={styles.boardSearchButton}>검색하기</button>
                </div>
                <div className={styles.boardContentContainer}>
                    <div className={styles.boardContentInfo}>
                        <div className={styles.boardContentInfoText}>번호</div>
                        <div className={styles.boardContentInfoText}>제목</div>
                        <div className={styles.boardContentInfoText}>작성자</div>
                        <div className={styles.boardContentInfoText}>날짜</div>
                    </div>
                    {props.nowData.map((data) => {
                        return (
                            <BoardDetailPage
                                 key={data.id}
                                 data = {data} 
                            />
                        )
                    })}
                </div>
                <div className={styles.boardPageNationContainer}>
                    <Pagination
                        defaultCurrent={1}
                        total={50}
                        onChange={props.handlePageChange}
                    />
                </div>
                <div className={styles.boardSubmitContainer}>
                    <button onClick={props.onClickBoardWrite} className={styles.boardSubmitButton}>게시물 등록하기</button>
                </div>
            </div>
        </div>
    )
}