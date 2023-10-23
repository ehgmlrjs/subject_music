import BoardDetailPageUI from "./boardDetail.presenter";
import {useRouter} from 'next/router';
import { IBoardDetailPageProps } from "./boardDetail.types";

export default function BoardDetailPage(props:IBoardDetailPageProps):JSX.Element {
    const router = useRouter()

    const onClickMoveId = () => {
        localStorage.setItem('boardIndex',`${props.data.id}`)
        router.push(`/board/${props.data.id}`)
    }

    return(
        <BoardDetailPageUI
            data = {props.data}
            onClickMoveId = {onClickMoveId}
         />
    )
}