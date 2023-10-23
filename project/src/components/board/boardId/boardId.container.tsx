import { BoardIdPageUI } from "./boardId.presenter";
import { ChangeEvent, useState } from "react";

export default function BoardIdPage():JSX.Element {
    const [rate, setRate] = useState(0)

    const onChangeRate = (value : number) => {
        setRate(value)
    }
    
    return(
        <BoardIdPageUI
            onChangeRate = {onChangeRate}
         />
    )
}