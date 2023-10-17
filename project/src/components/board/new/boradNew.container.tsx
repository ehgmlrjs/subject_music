import { ChangeEvent, useState } from "react";
import BoardNewPageUI from "./boardNew.presenter";
import { IBOardNewPageProps } from "./boardNew.types";


export default function BoardNewPage(props:IBOardNewPageProps):JSX.Element{
    const [isOpen, setIsOpen] = useState(false)
    const [q1, setQ1] = useState('')
    const [q3, setQ3] = useState('')
    const [detailadress, setDetailadress] = useState('')

    const onToggleModal = () => {
        console.log('sss')
        console.log(isOpen)
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data:any) => {
        // 주소번호 저장
        setQ1(data.zonecode)
        // 주소저장
        setQ3(data.address)
        onToggleModal(); // 주소창은 자동으로 사라지므로 모달만 꺼주면
    }

    const onChangeDetailadress = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setDetailadress(event.target.value)
    }

    return(
        <BoardNewPageUI
            isOpen = {isOpen}
            handleComplete = {handleComplete}
            onToggleModal = {onToggleModal}
            q1 = {q1}
            q3 = {q3}
            isEdit = {props.isEdit}
            onChangeDetailadress = {onChangeDetailadress}
         />
    )
}