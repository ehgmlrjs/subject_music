import { useRouter } from 'next/router'
import ChartGenrePageUI from "./chartGenre.presenter";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil'
import { genreState } from '@/src/store/states';

export default function ChartGenrePage() {
    const router = useRouter()

    const [genre, setGenre] = useState('')
    const [songData, setSongData] = useState([])
    const [nowData, setNowData] = useState([])
    const [pagenation, setPagenation] = useState(1)

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/song/${localStorage.getItem("genre") || ""}`, {})
            setSongData(response.data)
            setNowData(response.data.slice(0, 9))
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        setGenre(localStorage.getItem("genre") || "")
        fetchData();
    }, [])

    useEffect(() => {
        const tmp = songData.slice(pagenation * 10 - 10, pagenation * 10 - 1);
        setNowData(tmp);
    }, [pagenation]);

    const handlePageChange = (page: number) => {
        setPagenation(page)
    }

    return (
        <ChartGenrePageUI
            genre={genre}
            handlePageChange={handlePageChange}
            nowData={nowData}
        />
    )
}