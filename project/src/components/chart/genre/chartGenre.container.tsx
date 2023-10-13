import {useRouter} from 'next/router'
import ChartGenrePageUI from "./chartGenre.presenter";
import { useEffect, useState } from 'react';

export default function ChartGenrePage() {
    const router = useRouter()

    const [genre, setGenre] = useState('')

    useEffect( () => {
        setGenre(router.asPath.replace('/chart/',''))
    }, [])

    const handlePageChange = (page:number) => {
        console.log(page)
    }

    const onClickIcon = () => {
        router.push('/contents/tmp')
    }

    return (
        <ChartGenrePageUI
            genre = {genre}
            handlePageChange = {handlePageChange}
            onClickIcon = {onClickIcon}
         />
    )
}