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
    },[])

    return (
        <ContentsPageUI
            inputData={inputData.length > 0 ? inputData : []}
         />
    )
}