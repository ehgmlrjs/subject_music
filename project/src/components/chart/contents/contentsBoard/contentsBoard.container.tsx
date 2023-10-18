import ContentsBoardsPageUI from "./contentsBoard.presenter";
import { useState } from "react";
import {useRecoilState} from 'recoil';
import { nickState } from "@/src/store/states";

export default function ContentsBoardPage():JSX.Element {
    const [localNick, setLocalNick] = useRecoilState(nickState)

    // props.nick로 해당 댓글에대한 작성자를 불러온다(지금은 임시로).
    const [nick, setNick] = useState('1715leekc')

    return(
        <ContentsBoardsPageUI
            localNick={localNick}
            nick = {nick}
         />
    )
}