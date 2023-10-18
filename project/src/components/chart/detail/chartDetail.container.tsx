import { useRouter } from "next/router";
import ChartDetailPageUI from "./chartDetail.presenter";
import { IChartDetailProps } from "./chartDetail.types";
import {useRecoilState} from 'recoil'
import { genreState } from "@/src/store/states";

export default function ChartDetailPage(props:IChartDetailProps) {
    const router = useRouter();

    const [localGenre, setLocalGenre] = useRecoilState(genreState)

    /* 클릭했을때 로컬장르를 여기서 저장! */
    const handleImageClick = () => {
        setLocalGenre(props.data.title)
        localStorage.setItem('genre',props.data.title)
        router.push(`/chart/${props.data.title}`);
    }

    return (
        <ChartDetailPageUI
           data = {props.data}
           handleImageClick = {handleImageClick}
         />
    )
}