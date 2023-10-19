import { ChangeEvent, useState } from "react";
import BoardNewPageUI from "./boardNew.presenter";
import { IBOardNewPageProps } from "./boardNew.types";
import axios from "axios";
import {useRecoilState} from 'recoil'
import { nickState } from "@/src/store/states";
import { useRouter } from "next/router";

export default function BoardNewPage(props:IBOardNewPageProps):JSX.Element{
    const router = useRouter();
    
    const [isOpen, setIsOpen] = useState(false)
    const [q1, setQ1] = useState('')
    const [q3, setQ3] = useState('')
    const [detailadress, setDetailadress] = useState('')
    const [title,setTitle] =useState('')
    const [content, setContent] = useState('')

    const [localNick, setLocalNick] = useRecoilState(nickState)

    // true : 수정 , false : 등록
    const [isEdit, setisEdit] = useState(props.isEdit)

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

    const onChangecontent = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    const onChangeTitle = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.target.value)
    }

    const onClickSubmit = async () => {
        try{
            const response = await axios.post('http://localhost:8080/board/update',{
                title ,
                nickname : localNick,
                content,
                address1 : q1,
                address2 : q3,
                address3 : detailadress,
            })

            if (response.status === 200) {
                console.log(response.data.message)
                router.push('/board')
            }
            

        }catch(error){
            console.log('error',error)
        }
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
            onChangeTitle = {onChangeTitle}
            onChangecontent = {onChangecontent}
            onClickSubmit = {onClickSubmit}
         />
    )
}