import ContentsBoardsPageUI from "./contentsBoard.presenter";
import { useState } from "react";
import {useRecoilState} from 'recoil';
import { nickState } from "@/src/store/states";
import { IContentsBoardPageProps } from "./contents.types";
import axios from "axios";

export default function ContentsBoardPage(props:IContentsBoardPageProps):JSX.Element {
    const [localNick, setLocalNick] = useRecoilState(nickState)

    const onClickBoardDelete = async () => {
        try{
            const token = localStorage.getItem('token')

            const response = await axios.post(`http://localhost:8080/contents/${parseInt(localStorage.getItem("index") || "")}/boardDelete`,{
            nickname : localNick,
            comment : props.data.comment
            },{
                headers: {
                    Authorization: `${token}`
                }
            })
            if (response.status === 200){
                alert(response.data.message)
            }
            if (response.status === 202){
                console.log('asd')
                localStorage.setItem('token',response.data.token)
            }
        }catch(error){
            console.log('error', error)
        }
        
    }

    return(
        <ContentsBoardsPageUI
            localNick={localNick}
            data = {props.data}
            onClickBoardDelete = {onClickBoardDelete}
         />
    )
}