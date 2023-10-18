import { useRouter} from 'next/router';
import HeaderPage from "./header/header.container"
import {useRecoilState} from 'recoil'
import { tokenState } from '@/src/store/states';
import { useEffect } from 'react';

interface ILayoutProps {
    children: JSX.Element
}

const HIDDEN_HEADERS = [
    "/register"
]

export default function Layout(props: ILayoutProps): JSX.Element {
    const router = useRouter();


    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
    
      // Recoil 상태를 초기화하고 토큰을 가져옵니다.
    const [token, setToken] = useRecoilState(tokenState);

    useEffect(() => {
      // localStorage에서 토큰 가져와 Recoil 상태에 설정
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token") || "");
      }
    }, []);
    return(
        <>
            {!isHiddenHeader && <HeaderPage />}
            {props.children}
        </>
    )
}