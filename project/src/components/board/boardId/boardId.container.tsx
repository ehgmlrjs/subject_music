import { BoardIdPageUI } from "./boardId.presenter";
import { useState, useEffect, ChangeEvent } from "react";
import {useRouter} from 'next/router';
import axios from "axios";
import { eventNames } from "process";

export default function BoardIdPage():JSX.Element {
    const router = useRouter()

    const [rate, setRate] = useState(0)
    const [data, setData] = useState([])
    const [chatData, setChatData] = useState([])
    const [content, setContent] = useState('')

    const fetchData = async () => {
        const token = localStorage.getItem('token')
        
        const response = await axios.post(`http://localhost:8080/board/content/${localStorage.getItem('boardIndex')}`, null,{
            headers: {
                Authorization: `${token}`
            }
        })

        const responseChat = await axios.post(`http://localhost:8080/board/chat/${localStorage.getItem('boardIndex')}`, null,{
            headers : {
                Authorization: `${token}`
            }
        })

        console.log(responseChat)

        setData(response.data)
        setChatData(responseChat.data)
    }

    useEffect(() => {
        fetchData();
    },[])

    const onChangeRate = (value : number) => {
        setRate(value)
    }
    
    const onChangeContent = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    const onClickList = () => {
        router.push('/board')
    }

    const onClickSubmitContent = async () => {
        if(!content) {
            alert('댓글을 등록해주세요')
        }
        try {
            const token = localStorage.getItem('token')
            const response = await axios.post(`http://localhost:8080/board/chat/${localStorage.getItem('boardIndex')}/update`,{
            nickname : localStorage.getItem('nick'),
            content : content,
            star : rate,
            },{
                headers : {
                    Authorization : `${token}`
                }
            })

            if (response.status === 200){
                console.log('등록성공')
                alert('댓글 등록이 완료되었습니다.')
                setContent('')
            }
        }catch(error){
            console.log('error',error)
        }
        
    }

    return(
        <BoardIdPageUI
            onChangeRate = {onChangeRate}
            onClickList = {onClickList}
            data = {data.length > 0 ? data : []}
            onChangeContent = {onChangeContent}
            onClickSubmitContent = {onClickSubmitContent}
            content = {content}
            chatData = {chatData}
         />
    )
}