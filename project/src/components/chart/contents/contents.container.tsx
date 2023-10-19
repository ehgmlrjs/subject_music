import ContentsPageUI from "./contents.presenter";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { nickState } from "@/src/store/states";

export default function ContentsPage() {

    const [inputData, setInputData] = useState([]);
    const [comment, setComment] = useState('');
    const [boardData, setBoardData] = useState([]);
    const [tmp , setTmp] = useState(0);

    const [localNick, setLocalNick] = useRecoilState(nickState);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/contents/${parseInt(localStorage.getItem("index") || "")}`)
            setInputData(response.data)
            setTmp((prev) => prev + 1)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const fetchBoardData = async () => {
        try{
            const response =await axios.post(`http://localhost:8080/contents/${parseInt(localStorage.getItem("index") || "")}/board`)
            setBoardData(response.data)
        }catch(error){
            console.log('Error',error)
        }
    }

    const submitRecently = async () => {
        try{
            const token = localStorage.getItem('token')

            const response = await axios.post(`http://localhost:8080/mypage/update`, {
                nickname : localNick,
                Index : parseInt(localStorage.getItem("index") || "")
            },{
                headers: {
                    Authorization: `${token}`
                }
            })

            if(response.status === 200){
                console.log('전송성공')
            }
            if (response.status === 202){
                console.log(response.data.message)
                localStorage.setItem('token',response.data.token)
            }

        }catch (error){
            console.log('error', error)
        }
    }


    useEffect(() => {
        fetchData();
        fetchBoardData();
    }, [])
    
    useEffect(() => {
        if(tmp == 1){
            submitRecently();
        }
    },[inputData])

    const onChangeComment = (event: ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value)
        console.log(comment)
    }

    const onClickSubmit = async () => {
        if (!comment) {
            alert('댓글을 작성해주세요.')
            return;
        }

        /* 댓글을 보내는 api */
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            const response = await axios.post(`http://localhost:8080/contents/${parseInt(localStorage.getItem("index") || "")}/boardUpdate`, {
                nickname: localNick,
                comment: comment,

            }, {
                headers: {
                    Authorization: `${token}`
                }
            })
            if (response.status === 200){
                alert(response.data.message);
            }
            if (response.status === 202){
                alert(response.data.message);
                const newToken = response.data.token;
                localStorage.setItem('token',newToken);
            }
        } catch (error) {
            console.log('Error', error)
        }

    }

    return (
        <ContentsPageUI
            inputData={inputData.length > 0 ? inputData : []}
            onChangeComment={onChangeComment}
            onClickSubmit={onClickSubmit}
            boardData = {boardData}
        />
    )
}