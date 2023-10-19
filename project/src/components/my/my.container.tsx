import MyPageUI from "./my.presenter";
import { useRecoilState } from "recoil";
import { nickState } from "@/src/store/states";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MyPage() {
    const [localNick, setLocalNick] = useRecoilState(nickState)

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token')

            const response = await axios.post('http://localhost:8080/mypage/',{
            nickname : localNick
            },{
                headers: {
                    Authorization: `${token}`
                }
            })
            setData(response.data)
            console.log(response)
        }catch(error){
            console.log('error',error)
        }  
    }

    useEffect(() => {
        fetchData();
    }, [])


    return(
        <MyPageUI
            localNick = {localNick}
            data = {data}
         />
    )
}