import { ChangeEvent } from "react"

export interface IRegisterUIProps {
    onClickSignUp: () => void;
    onClickSignIn: () => void;
    onChangeNickName : (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail : (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword : (event: ChangeEvent<HTMLInputElement>) => void;
    onClickLoginState : () => void;
    isLogin : boolean;
    nickName : string;
    email : string;
    password : string;
}