import {UnorderedListOutlined} from '@ant-design/icons';
import { genreContentPageUIProps } from './genreContent.types';
import styles from './genreContent.module.css'

export default function GenreContentPageUI (props:genreContentPageUIProps):JSX.Element {
    return (
        <div key={props.data.Index} className={styles.contentWrapper}>
            <div className={styles.rankContainer}>
                <div className={styles.singImgBox}>
                    <img className={styles.singImg} src = {props.data.image} alt='singImg' />
                </div>
            </div>
            <div className={styles.singContainer}>
                <div className={styles.singBox}>
                    {props.data.name}
                </div>
                <div className={styles.authorBox}>
                    {props.data.singer}
                </div>
            </div>
            <div className={styles.albumContainer}>
                <div className={styles.album}>
                    {props.data.album}
                </div>
                <div className={styles.playIconBox}>
                    <UnorderedListOutlined onClick={props.onClickIcon}  className={styles.playIcon} />
                </div>
            </div>
        </div>
    )
}