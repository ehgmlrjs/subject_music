import styles from './archive.module.css'
import { CIRCLEWEEK_DATA1, CIRCLEWEEK_DATA2, INTERVIEW_DATA, REPORT_DATA1, REPORT_DATA2 } from '../data/archive/archive';
import { Carousel } from 'antd';

export default function ArchivePageUI():JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.subjectTitle}>
                    WEEK
                </div>
                <Carousel>
                    <div>
                        <div className={styles.archiveContainer}>
                            {CIRCLEWEEK_DATA1.map((data) => {
                                return (
                                         <div key={data.index} className={styles.archiveBox}>
                                            <div className={styles.archiveImgContainer}>
                                                <div className={styles.archiveImgBox}>
                                                <img className={styles.archiveImg} src = {data.image} alt='archiveImg' />
                                                </div>
                                            </div>
                                            <div className={styles.archiveContentContainer}>
                                                <div className={styles.archiveTitle}>
                                                    {data.title}
                                                </div>
                                                <div className={styles.archiveDate}>
                                                    {data.date}
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.archiveContainer}>
                            {CIRCLEWEEK_DATA2.map((data) => {
                                    return (
                                             <div key={data.index} className={styles.archiveBox}>
                                                <div className={styles.archiveImgContainer}>
                                                    <div className={styles.archiveImgBox}>
                                                    <img className={styles.archiveImg} src = {data.image} alt='archiveImg' />
                                                    </div>
                                                </div>
                                                <div className={styles.archiveContentContainer}>
                                                    <div className={styles.archiveTitle}>
                                                        {data.title}
                                                    </div>
                                                    <div className={styles.archiveDate}>
                                                        {data.date}
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })}
                        </div>    
                    </div>
                </Carousel>
                <div className={styles.subjectTitle}>
                    INTERVIEW
                </div>
                <Carousel>
                    {INTERVIEW_DATA.map((data) => {
                            return(
                                <div key={data.index}>
                                    <div className={styles.contentStyle}>
                                        <div className={styles.interviewContentBox}>
                                            <div className={styles.interviewTitle}>
                                                {data.title}
                                            </div>
                                            <div className={styles.interviewContent}>
                                                {data.content}
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            )
                        })}
                </Carousel>
                <div className={styles.subjectTitle}>
                    REPORT
                </div>
                <Carousel>
                    <div>
                        <div className={styles.archiveContainer}>
                            {REPORT_DATA1.map((data) => {
                                return (
                                         <div key={data.index} className={styles.archiveBox}>
                                            <div className={styles.archiveImgContainer}>
                                                <div className={styles.archiveImgBox}>
                                                <img className={styles.archiveImg} src = {data.image} alt='archiveImg' />
                                                </div>
                                            </div>
                                            <div className={styles.archiveContentContainer}>
                                                <div className={styles.archiveTitle}>
                                                    {data.title}
                                                </div>
                                                <div className={styles.archiveDate}>
                                                    {data.date}
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.archiveContainer}>
                            {REPORT_DATA2.map((data) => {
                                    return (
                                             <div key={data.index} className={styles.archiveBox}>
                                                <div className={styles.archiveImgContainer}>
                                                    <div className={styles.archiveImgBox}>
                                                    <img className={styles.archiveImg} src = {data.image} alt='archiveImg' />
                                                    </div>
                                                </div>
                                                <div className={styles.archiveContentContainer}>
                                                    <div className={styles.archiveTitle}>
                                                        {data.title}
                                                    </div>
                                                    <div className={styles.archiveDate}>
                                                        {data.date}
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })}
                        </div>    
                    </div>
                </Carousel>
            </div>
        </div>
    )
}