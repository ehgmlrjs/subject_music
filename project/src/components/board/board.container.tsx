import { useRouter } from "next/router"
import BoardPageUI from "./board.presenter";

export default function BoardPage() {
    const router = useRouter();
    
    const onClickBoardWrite = ()=> {
        router.push('/board/new')
    }

    return(
        <BoardPageUI
            onClickBoardWrite = {onClickBoardWrite}
         />
    )
}