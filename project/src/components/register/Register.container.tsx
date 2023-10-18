import { useState, ChangeEvent } from "react"
import axios from "axios"
import { useRouter } from "next/dist/client/router"
import RegisterPageUI from "./Register.presenter"

export default function RegisterPage(): JSX.Element {
    const router = useRouter();

    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true) /* 로그인창 true, 회원가입창 false (처음에는 로그인창 우측 signup 누르면 회원가입창)*/

    /* 닉네임,이메일,패스워드 변경 */
    const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value)
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    /* 로그인, 회원가입 상태창 변경 prev이전 상태 반대로변경*/
    const onClickLoginState = () => {
        setIsLogin((prev) => !prev)
    }

    /* 회원가입 api요청함수*/
    const onClickSignUp = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/signup', {
                nickName,
                email,
                password,
            });
            console.log(response)
            switch (response.status){
                case (200):
                    setIsLogin((prev) => !prev)
                    setNickName('')
                    setEmail('')
                    setPassword('')
                    alert('회원가입이 성공적으로 완료되었습니다.')
                    break;
                case (201):
                    alert('이미 존재하는 이메일입니다.')
                    break;
                case (202):
                    alert('이미 존재하는 닉네임입니다.')
                    break;
                case (203):
                    alert('잘못된 이메일 형식입니다.')
                    break;
                case (204):
                    alert('잘못된 닉네임 형식입니다.')
                    break;
                case (205):
                    alert('잘못된 패스워드 형식입니다')
                    break;
            }
            
        } catch (error) {
            console.log('Error', error)
        }
    }

    const onClickSignIn = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                email,
                password,
            });
            
            switch (response.status){
                case (200):
                    console.log(response)
                    alert('로그인 성공')
                    localStorage.setItem('token',response.data.token);
                    router.push('/')
                    break;
                case (201):
                    console.log('존재하지 않은 로그인 정보입니다.')
                    alert('존재하지 않은 로그인 정보입니다.')
                    break;
                default:
                    console.log('server error')

            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <RegisterPageUI
            onClickSignUp={onClickSignUp}
            onClickSignIn={onClickSignIn}
            onChangeNickName={onChangeNickName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            isLogin={isLogin}
            onClickLoginState={onClickLoginState}
            nickName={nickName}
            email={email}
            password={password}
        />
    )
}