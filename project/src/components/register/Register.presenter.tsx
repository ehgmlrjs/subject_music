import styles from './Register.module.css'
import { FacebookFilled, GoogleCircleFilled  } from '@ant-design/icons'
import { IRegisterUIProps } from './Register.types'

export default function RegisterPageUI(props: IRegisterUIProps) {
    return (
        <div className={styles.wrapper}>
                <div className={styles.container}>
                  <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                    <div className={styles.form} >
                      {props.isLogin ? <h1>Sign in</h1>:<h1>Sign Up</h1>}
                      <div className={styles.socialContainer}>
                        {/* <a href="/" className={`${styles.social} ${styles.a}`}><FacebookFilled className= {`${styles.fab}  ${styles.i}`} /></a>
                        <a href="/" className={`${styles.social} ${styles.a}`}><GoogleCircleFilled className= {`${styles.fab}  ${styles.i}`} /></a> */}
                      </div>
                      <span className={styles.span}>or use your account</span>
                      {!props.isLogin && <input value={props.nickName} onChange={props.onChangeNickName} className={styles.input} type="text" placeholder="NickName" />}
                      <input value={props.email} onChange={props.onChangeEmail} className={styles.input} type="email" placeholder="Email" />
                      <input value= {props.password} onChange={props.onChangePassword} className={styles.input} type="password" placeholder="Password" />
                      {props.isLogin? <button onClick={props.onClickSignIn} className={styles.button}>Sign In</button> : <button onClick={props.onClickSignUp} className={styles.button}>Sign Up</button>}
                    </div>
                  </div>
                  <div className={styles.overlayContainer}>
                    <div className={styles.overlay}>
                      <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                        <h1 className={styles.h1}>Hello, Friend!</h1>
                        <p className={styles.p}>Enter your personal details and start journey with us</p>
                        {props.isLogin ? <button onClick={props.onClickLoginState} className={styles.buttonWhite} >Sign Up</button>
                        :<button onClick={props.onClickLoginState} className={styles.buttonWhite} >Sign In</button>
                        }                       
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    )
}