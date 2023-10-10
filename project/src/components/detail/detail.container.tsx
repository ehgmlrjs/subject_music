import { useRouter } from "next/dist/client/router"
import DetailPageUI from "./detail.presenter"

export default function DetailPage():JSX.Element {
    const router = useRouter();

    const onClickRouter = ()=> {
        console.log('gggg')
        router.push('/')
    }

    return (
        <DetailPageUI
        onClickRouter = {onClickRouter}
         />
    )
}