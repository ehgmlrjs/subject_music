import {useRouter} from 'next/router'
import ChartGenrePageUI from "./chartGenre.presenter";
import { useEffect, useState } from 'react';

export default function ChartGenrePage() {
    const router = useRouter()

    const [genre, setGenre] = useState('')

    useEffect( () => {
        setGenre(router.asPath.replace('/chart/',''))
    }, [])

    return (
        <ChartGenrePageUI
            genre = {genre}
         />
    )
}