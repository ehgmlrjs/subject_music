import { useRouter } from "next/router"
import axios from "axios"
import HeaderPageUI from "./header.presenter"
import {useRecoilState} from 'recoil'
import { tokenState, nickState } from "@/src/store/states"

export default function HeaderPage(): JSX.Element {
    const router = useRouter();

    const [token, setTokenState] = useRecoilState(tokenState)
    const [localNick, setLocalNick] = useRecoilState(nickState)

    const onClickHome = () => {
        router.push('/')
    }

    const onClickChart = () => {
        router.push('/chart')
    }

    const onClickArchive = () => {
        router.push('/archive')
    }

    const onClickNews = () => {
        router.push('/news')
    }

    const onClickBoard = () => {
        router.push('/board')
    }

    const onClickLog = () => {
        router.push('/register')
    }

    const onClickMy = () => {
        router.push('/my')
    }


    const onClickLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/user/logout', null, {
                headers: {
                    Authorization: `${token}`
                }
            });
            switch (response.status) {
                case (200):
                    alert('로그아웃 성공')
                    localStorage.removeItem('token');
                    setTokenState('')
                    localStorage.removeItem('nick');
                    setLocalNick('')
                    router.push('/')
                    break;
                case (201):
                    alert(response.data.message)
                    break;
                case (202):
                    alert(response.data.message)
                    localStorage.removeItem('token');
                    setTokenState('')
                    break;
                case (203):
                    alert(response.data.message)
                    break;
            }
        } catch (error) {
            console.log('Error', error)
        }
    }


    return (
        <HeaderPageUI
            onClickHome={onClickHome}
            onClickChart={onClickChart}
            onClickArchive={onClickArchive}
            onClickBoard={onClickBoard}
            onClickNews={onClickNews}
            onClickLog={onClickLog}
            onClickLogout={onClickLogout}
            onClickMy = {onClickMy}
            token = {token}
        />
    )
}