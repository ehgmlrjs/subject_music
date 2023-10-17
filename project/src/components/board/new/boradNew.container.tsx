import { useState } from "react";
import BoardNewPageUI from "./boardNew.presenter";
import { IBOardNewPageProps } from "./boardNew.types";

export default function BoardNewPage(props:IBOardNewPageProps):JSX.Element{
    const [isOpen, setIsOpen] = useState(false)
    const [q1, setQ1] = useState('')
    const [q3, setQ3] = useState('')
    const [detailaddress, setDetailaddress] = useState('')

    const onToggleModal = () => {
        console.log('sss')
        console.log(isOpen)
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data:any) => {
        
        // 상세주소 앞 2단어 제외하고 저장 ('서울 강남구' 제외하고 저장)
        let splitAddress = data.address.split(" ").splice(2).join(" ");
        setDetailaddress(splitAddress);
        // 주소번호 저장
        setQ1(data.zonecode)
        // 주소저장
        setQ3(data.address)
        console.log(data.address)
        console.log(data.zonecode)
        onToggleModal(); // 주소창은 자동으로 사라지므로 모달만 꺼주면
    }

    return(
        <BoardNewPageUI
            isOpen = {isOpen}
            handleComplete = {handleComplete}
            onToggleModal = {onToggleModal}
            q1 = {q1}
            q3 = {q3}
         />
    )
}