import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import BoardPageUI from "./board.presenter";
import { ShoppingCartOutlined } from "@ant-design/icons";


export default function BoardPage() {
    const router = useRouter();

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [nowData, setNowData] = useState([]);
    const [pagenation, setPagenation] = useState(1)
    
    const onClickBoardWrite = ()=> {
        router.push('/board/new')
    }

    const onChangeSearch = (event:ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const onClickSearch = async () => {
        try{
            const token = localStorage.getItem('token')
            const response = await axios.post('http://localhost:8080/board/search',{
                search : search
            },{
                headers : {
                    Authorization : `${token}`
                }
            })

            setData(response.data)
        }catch(error){
            console.log('error', error)
        }
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

    useEffect(() => {
        const tmp = data.slice(pagenation * 10 - 10, pagenation * 10 - 1);
        setNowData(tmp);
    }, [pagenation])

    const handlePageChange = (page: number) => {
        setPagenation(page)
    }


    return(
        <BoardPageUI
            onClickBoardWrite = {onClickBoardWrite}
            onChangeSearch = {onChangeSearch}
            onClickSearch = {onClickSearch}
            data = {data}
            handlePageChange = {handlePageChange}
            nowData = {nowData}
         />
    )
}