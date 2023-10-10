import { useRouter } from "next/router"
import HeaderPageUI from "./header.presenter"

export default function HeaderPage():JSX.Element {
    const router = useRouter();

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

    const onClickLog = ()=> {
        router.push('/register')
    }

    return(
        <HeaderPageUI
            onClickHome = {onClickHome}
            onClickChart = {onClickChart}
            onClickArchive = {onClickArchive}
            onClickBoard = {onClickBoard}
            onClickNews = {onClickNews}
            onClickLog ={onClickLog}
         />
    )
}