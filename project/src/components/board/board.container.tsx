import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import BoardPageUI from "./board.presenter";


export default function BoardPage() {
    const router = useRouter();

    const [data, setData] = useState([]);
    
    const onClickBoardWrite = ()=> {
        router.push('/board/new')
    }

    const fetchData = async () => {
        try{
            const response = await axios.post('http://localhost:8080/board/')
            setData(response.data)
        }catch (error){
            console.log('error', error)
        }  
    }

    useEffect(() => {
        fetchData()
    },[])


    return(
        <BoardPageUI
            onClickBoardWrite = {onClickBoardWrite}
            data = {data}
         />
    )
}