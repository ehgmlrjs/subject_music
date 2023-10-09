import Link from 'next/link'
import styles from './Home.module.css'

export default function HomePageUI() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerLogoBox}>
                    <img src="img/home/logo-white.png" alt='Logo' className={styles.headerLogo} />
                </div>

                <div className={styles.headerTextBox} >
                    <h1 className={styles.headingPrimary}>
                        <span className={styles.headingPrimaryMain}>Music</span>
                        <span className={styles.headingPrimarySub}>is my life</span>
                    </h1>    
            </div>
            </div>
            <div className={styles.sectionAbout}>
                <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
                    <h2 className={styles.headingSecondary}>
                        Exciting music for you
                    </h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.col_1_of_2}>
                        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>You're going to fall in love with music</h3>
                        <p className={styles.paragraph}>
                        Our page will provide you with a better music service. You can enjoy your own music on this page.There are various subscription services that you want. You can fully enjoy the music you want. We will do our best to satisfy you.
                        </p>
                        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>You can fall into the world of music with us</h3>
                        <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <Link href = "/register">
                            <button  className={styles.btnText}>Go Login &rarr;</button>
                        </Link>
                        
                    </div>
                    <div className={styles.col_1_of_2}>
                        <div className={styles.composition}>
                            <img src="https://img.tvreportcdn.de/cms-content/uploads/2022/08/30/e2a62322-f9c0-4ae3-9295-20e84392b7eb.jpg" alt="Photo1" className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`} />
                            <img src="https://wallpapercave.com/wp/wp4903905.jpg" alt="Photo2" className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`} />
                            <img src="https://image.chosun.com/sitedata/image/201710/10/2017101001079_1.jpg" alt="Photo3" className={`${styles.compositionPhoto} ${styles.compositionPhotoP3}`} />
                        </div>    
                    </div>
                </div>
            </div>
            <div className={styles.sectionFeatures}>
                <div className={styles.sectionRow}>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Johann Wolfgang von Goethe</h3>
                            <p className={styles.featureBoxText}>
                            Giving flowers is nature,Weaving flowers into bouquets is art.There is no better way to escape from the world than art.
                            </p>
                        </div>
                    </div>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Pablo Picasso</h3>
                            <p className={styles.featureBoxText}>
                            To know what you want to draw, you have to start drawing first.Every child is an artist.The question is how to remain an artist in adulthood.
                            </p>
                        </div>
                    </div>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>William Somerset Maugham</h3>
                            <p className={styles.featureBoxText}>
                            An artist is a lone wolf.It is good for him that a colleague will throw him out in the wilderness.Self-satisfaction is the destruction of an artist.
                            </p>
                        </div>
                    </div>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Auerbach, Erich</h3>
                            <p className={styles.featureBoxText}>
                            As it appeals from soul to soul, music alone does not have to be translated from world languages.Music washes away everyday dust from the soul.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionTours}>
                <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
                    <h2 className={styles.headingSecondary}>
                        subscription
                    </h2>
                </div>
                <div className={styles.toursRow}>
                    <div className={styles.card}>
                        <div className={`${styles.cardSideFront} ${styles.cardSide}`}>
                            <div className={`${styles.cardPicture} ${styles.cardPicture1}`}>
                                        &nbsp;
                            </div>
                            <h4 className={styles.cardHeading}>
                                <span className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan1}`}>
                                    light plan
                                </span>
                            </h4>
                            <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack1}`}>
                            <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$100</p>
                                </div>
                                <a href="/" className={`${styles.btn} ${styles.btnWhite}`}>Book now!</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.cardSideFront} ${styles.cardSide}`}>
                            <div className={`${styles.cardPicture} ${styles.cardPicture2}`}>
                                        &nbsp;
                            </div>
                            <h4 className={styles.cardHeading}>
                                <span className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan2}`}>
                                    normal plan
                                </span>
                            </h4>
                            <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack2}`}>
                            <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$150</p>
                                </div>
                                <a href="/" className={`${styles.btn} ${styles.btnWhite}`}>Book now!</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.cardSideFront} ${styles.cardSide}`}>
                            <div className={`${styles.cardPicture} ${styles.cardPicture3}`}>
                                        &nbsp;
                            </div>
                            <h4 className={styles.cardHeading}>
                                <span className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan3}`}>
                                    Premium Plan
                                </span>
                            </h4>
                            <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack3}`}>
                            <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$200</p>
                                </div>
                                <a href="/" className={`${styles.btn} ${styles.btnWhite}`}>Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionStories}>
                    <div className={styles.bgVideo}>
                        <video className={styles.bgVideoContent} autoPlay muted loop>
                            <source src="img/home/video.mp4" type="video/mp4" />
                            {/* <source src="img/home/video.webm" type="video/webm" /> */}
                            Your browser is not supported!
                        </video>
                    </div>
                    <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
                        <h2 className={styles.headingSecondary}>
                            We make people genuinely happy
                        </h2>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.story}>
                            <figure className={styles.storyShape}>
                                <img src="img/home/nat-9.jpg" alt="Person on a tour" className={styles.storyImg} />
                                <figcaption className={styles.storyCaption}>Jack Wilson</figcaption>
                            </figure>
                            <div className={styles.storyText}>
                                <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>wow! my life is completely different now</h3>
                                <p className={styles.storyInfo}>
                                This site perfectly reflects my music taste. Also, this site is completely customized for me who like music
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.story}>
                            <figure className={styles.storyShape}>
                                <img src="img/home/nat-8.jpg" alt="Person on a tour" className={styles.storyImg} />
                                <figcaption className={styles.storyCaption}>Jenny</figcaption>
                            </figure>
                            <div className={styles.storyText}>
                                <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>I came to love music even more</h3>
                                <p className={styles.storyInfo}>
                                I used to love music I got to enjoy music more on this site and now I love music Music has become an indispensable and precious thing to me
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.uCenterText} ${styles.uMarginTopHuge}`}>
                        <button  className={styles.btnText}>Discover all music &rarr;</button>
                    </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerLogoBox}>
                    <img src="img/home/logo-white.png" alt="logo" className={styles.footerLogo} />
                </div>
                <div className={styles.row}>
                    <div className={styles.col_1_of_2}>
                        <div className={styles.footerNavigation}>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><a href="/" className={styles.footerLink}>Company</a></li>
                                <li className={styles.footerItem}><a href="/" className={styles.footerLink}>Contact us</a></li>
                                <li className={styles.footerItem}><a href="/" className={styles.footerLink}>Carrers</a></li>
                                <li className={styles.footerItem}><a href="/" className={styles.footerLink}>Privacy policy</a></li>
                                <li className={styles.footerItem}><a href="/" className={styles.footerLink}>Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.col_1_of_2}>
                        <p className={styles.footerCopyright}>
                            Built my <a href="/" className={styles.footerLink}>leekc</a> misic service<a href="/" className={styles.footerLink}>enjoy your music</a>. Copyright &copy; by leekc. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the otiginal author, leekc, is of course highly appreciated! 
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    )
}