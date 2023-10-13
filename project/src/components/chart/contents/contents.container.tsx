import ContentsPageUI from "./contents.presenter";
import {useRouter} from 'next/router';
import axios from "axios";
import { useEffect, useState } from "react";

export default function ContentsPage() {
    const router = useRouter();

    const [inputData, setInputData] = useState([]);

    const fetchData = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/contents/${router.asPath.replace('/contents/','')}`)
            setInputData(response.data)
        }catch(error){
            console.log('Error', error)
        }
    }

    useEffect(() => {
        fetchData();
        console.log(inputData)
    },[])

    useEffect(() => {
        console.log(inputData); // 데이터가 업데이트될 때 실행
    }, [inputData]);

    return (
        <ContentsPageUI
            inputData={inputData.length > 0 ? inputData : []}
         />
    )
}