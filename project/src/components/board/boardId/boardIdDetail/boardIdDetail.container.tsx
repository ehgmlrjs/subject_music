import BoardIdDetailPageUI from "./boardIdDetail.presenter";
import { IBoardIdDetailPageProps } from "./boardIdDetail.types";
import axios from "axios";

export default function BoardIdDetailPage(props:IBoardIdDetailPageProps):JSX.Element {
    const onClickDelete = async ()=> {
        try{
            const token = localStorage.getItem('token')
            const response = await axios.post(`http://localhost:8080/board/chat/${props.chatData.id}/delete`,{
                nickname : props.chatData.nickname,
                content : props.chatData.content,
            },{
                headers : {
                    Authorization : `${token}`
                }
            })

            if (response.status === 200){
                console.log('삭제성공')
            }
        }catch(error){
            console.log('error',error)
        }
    }

    return(
        <BoardIdDetailPageUI
            chatData = {props.chatData}
            onClickDelete = {onClickDelete}
         />
    )
}