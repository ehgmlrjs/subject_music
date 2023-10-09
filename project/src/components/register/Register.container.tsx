import { useState,ChangeEvent } from "react"
import axios from "axios"
import RegisterPageUI from "./Register.presenter"

export default function RegisterPage():JSX.Element {
    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true) /* 로그인창 true, 회원가입창 false (처음에는 로그인창 우측 signup 누르면 회원가입창)*/ 

    const onChangeNickName = (event:ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value)
    }

    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLoginState = () => {
        setIsLogin((prev) => !prev)
    }

    const onClickSignUp = async ()=> {

        try {
            const response = await axios.post('http://localhost:8080/user/signup', {
                nickName,
                email,
                password,
            });
            console.log(response)
            if (response.status === 200){
                setIsLogin((prev) => !prev)
                setNickName('')
                setEmail('')
                setPassword('')
                alert('회원가입이 성공적으로 완료되었습니다.')
            }

            if (response.status == 201) {
                alert('이미 존재하는 이메일입니다.')
            }

            if (response.status == 202) {
                alert('이미 존재하는 닉네임입니다.')
            }

            if (response.status == 203) {
                alert('잘못된 이메일 형식입니다.')
            }

            if (response.status == 204) {
                alert('잘못된 닉네임 형식입니다')
            }

            if (response.status == 205) {
                alert('잘못된 패스워드 형식입니다')
            }
        }catch (error){
            console.log('Error', error)
        }
    }

    return(
        <RegisterPageUI 
            onClickSignUp = {onClickSignUp}
            onChangeNickName = {onChangeNickName}
            onChangeEmail = {onChangeEmail}
            onChangePassword = {onChangePassword}
            isLogin = {isLogin}
            onClickLoginState = {onClickLoginState}
            nickName = {nickName}
            email = {email}
            password = {password}
        />
    )
}