import styles from './boardNew.module.css'
import { Input, Modal} from 'antd';
import DaumPostcode from 'react-daum-postcode';
import { IBoardNewPageUIProps } from './boardNew.types';

export default function BoardNewPageUI(props:IBoardNewPageUIProps):JSX.Element{

    const { TextArea } = Input;

    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.boardTitleContainer}>
                    {props.isEdit ? '게시물 수정': '게시물 등록'}
                </div>
                <div className={styles.boardContentContainer}>
                    <div className={styles.boardContentTitle}>
                        제목
                    </div>
                    <TextArea rows={1} placeholder='제목을 작성해주세요.' />
                </div>
                <div className={styles.boardContentContainer}>
                    <div className={styles.boardContentTitle}>
                        내용
                    </div>
                    <TextArea rows={18} placeholder='내용을 작성해주세요.' />
                </div>
                <div className={styles.boardContentContainer}>
                    <div className={styles.boardContentTitle}>
                        주소
                    </div>
                    <div className={styles.boardAddressContainer}>
                        <TextArea style={{width: '70px',height: '30px'}} value={props.q1}  rows={1} />
                        <button className={styles.adressButton} onClick={props.onToggleModal}>우편번호검색</button>
                    </div>
                
                    {
                        props.isOpen && (
                        <Modal
                            open={props.isOpen}
                            onOk={props.onToggleModal}
                            onCancel={props.onToggleModal}
                          >
                         <DaumPostcode onComplete={props.handleComplete} />
                       </Modal> 
                        )
                    }
                    <TextArea value={props.q3}  rows={1} />
                    <TextArea onChange={props.onChangeDetailadress} placeholder='상세주소를 입력해주세요.' rows={1} maxLength={70}/>
                </div>
                <div className={styles.boardSubmitContainer}>
                    <button className={styles.boardSubmitButton}>
                        {props.isEdit ? '수정하기' : '등록하기' }
                    </button>
                </div> 
            </div>
        </div>
    )
}